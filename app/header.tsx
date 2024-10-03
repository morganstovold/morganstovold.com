import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed z-10 backdrop-blur-lg w-full font-[family-name:var(--font-geist-sans)] text-neutral-400 uppercase text-xl">
      <nav className="flex justify-center w-full py-10">
        <div className="flex items-center gap-4 sm:gap-6 tracking-wide">
          <Link
            className="transition-colors hover:text-neutral-100"
            href="#about"
          >
            about
          </Link>
          <Link
            className="transition-colors hover:text-neutral-100"
            href="#skills"
          >
            skills
          </Link>
          <Link
            className="transition-colors hover:text-neutral-100"
            href="#contact"
          >
            contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
