import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed z-10 backdrop-blur-lg rounded-full p-4 mt-4 bg-neutral-900/20 w-fit font-[family-name:var(--font-geist-sans)] text-neutral-400 uppercase text-xl">
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
    </header>
  );
}
