import { spawn } from "node:child_process";

function run(cmd, args) {
  const child = spawn(cmd, args, {
    stdio: "inherit",
    env: process.env,
  });
  child.on("exit", (code) => {
    if (code && code !== 0) process.exitCode = code;
  });
  return child;
}

const api = run("npm", ["run", "dev:api"]);
const web = run("npm", ["run", "dev:web"]);

function shutdown(signal) {
  api.kill(signal);
  web.kill(signal);
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

