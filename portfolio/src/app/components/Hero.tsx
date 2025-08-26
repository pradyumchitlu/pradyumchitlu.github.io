import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header id="home" className="relative text-center text-white py-16 overflow-hidden bg-[var(--card-bg,#0f172a)]">
      <div className="absolute inset-0 opacity-30">
        <Image src="/purdue.jpg" alt="Backdrop" fill className="object-cover" priority />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-4">
        <Image
          src="/profile.jpg"
          alt="Profile Photo"
          width={150}
          height={150}
          className="rounded-full border-4 border-indigo-500 object-cover"
          priority
        />
        <h1 className="text-4xl font-semibold">Pradyum Chitlu</h1>
        <p className="text-sm sm:text-base text-slate-200">
          Backend & Data Tools | CS & Data Science @ Purdue (Double Major)
        </p>
        <div className="flex gap-3">
          <Link href="mailto:pchitlu@purdue.edu" aria-label="Email" className="social-btn">
            <i className="fa-solid fa-envelope" />
          </Link>
          <Link href="https://linkedin.com/in/pradyum-chitlu" target="_blank" rel="noopener" aria-label="LinkedIn" className="social-btn">
            <i className="fa-brands fa-linkedin" />
          </Link>
          <Link href="https://github.com/pradyumchitlu" target="_blank" rel="noopener" aria-label="GitHub" className="social-btn">
            <i className="fa-brands fa-github" />
          </Link>
        </div>
      </div>
    </header>
  );
}


