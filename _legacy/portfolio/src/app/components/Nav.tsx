import Link from "next/link";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Nav() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-slate-800/80 backdrop-blur border-b border-white/10">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-semibold text-slate-100">Pradyum Chitlu</span>
        <ul className="flex gap-4 items-center">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-slate-100/90 hover:underline underline-offset-4"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}


