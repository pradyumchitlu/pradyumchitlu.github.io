import cors from "cors";
import express from "express";
import fs from "node:fs/promises";

const app = express();

const allowedOrigins = (process.env.CORS_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : true,
  }),
);
app.use(express.json({ limit: "64kb" }));

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "portfolio-api",
    time: new Date().toISOString(),
  });
});

app.get("/projects", async (_req, res) => {
  try {
    const projectsUrl = new URL("../../shared/projects.json", import.meta.url);
    const raw = await fs.readFile(projectsUrl, "utf8");
    res.json(JSON.parse(raw));
  } catch (error) {
    res.status(500).json({ ok: false, error: "failed_to_load_projects" });
  }
});

const CONTACT_WINDOW_MS = 60 * 60 * 1000;
const CONTACT_MAX_PER_WINDOW = 5;
const contactRate = new Map();

function getClientIp(req) {
  const xf = req.headers["x-forwarded-for"];
  if (typeof xf === "string" && xf.length > 0) return xf.split(",")[0]?.trim() ?? "unknown";
  return req.socket.remoteAddress ?? "unknown";
}

function validateContact(body) {
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || name.length > 100) return { ok: false, error: "invalid_name" };
  if (!email || email.length > 254 || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    return { ok: false, error: "invalid_email" };
  }
  if (!message || message.length > 4000) return { ok: false, error: "invalid_message" };

  return { ok: true, value: { name, email, message } };
}

async function deliverContactMessage(payload) {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const resp = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) throw new Error(`CONTACT_WEBHOOK_URL returned ${resp.status}`);
    return;
  }

  const dirUrl = new URL("../../.data/", import.meta.url);
  const fileUrl = new URL("../../.data/contact-messages.jsonl", import.meta.url);

  await fs.mkdir(dirUrl, { recursive: true });
  await fs.appendFile(fileUrl, `${JSON.stringify(payload)}\n`, "utf8");
}

app.post("/contact", async (req, res) => {
  const ip = getClientIp(req);
  const now = Date.now();
  const existing = contactRate.get(ip);

  if (existing && now < existing.resetAt && existing.count >= CONTACT_MAX_PER_WINDOW) {
    res.status(429).json({ ok: false, error: "rate_limited" });
    return;
  }

  const parsed = validateContact(req.body);
  if (!parsed.ok) {
    res.status(400).json(parsed);
    return;
  }

  const next = existing && now < existing.resetAt
    ? { count: existing.count + 1, resetAt: existing.resetAt }
    : { count: 1, resetAt: now + CONTACT_WINDOW_MS };
  contactRate.set(ip, next);

  const payload = {
    ...parsed.value,
    ip,
    userAgent: req.get("user-agent") ?? null,
    createdAt: new Date().toISOString(),
  };

  try {
    await deliverContactMessage(payload);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: "delivery_failed" });
  }
});

const port = Number(process.env.PORT ?? 4000);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[portfolio-api] listening on http://localhost:${port}`);
});
