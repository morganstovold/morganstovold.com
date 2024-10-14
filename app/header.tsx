"use client";

import { scrollTo } from "@/lib/utils";

export default function Header() {
  return (
    <header className="container fixed w-full z-10 backdrop-blur-lg rounded-full py-4 font-[family-name:var(--font-geist-sans)] uppercase text-xl flex justify-between">
      <span
        className="transition-colors hover:text-neutral-600 cursor-pointer"
        onClick={() => scrollTo("home")}
      >
        morgan stovold
      </span>
      <div className="flex items-center gap-4 sm:gap-6 tracking-wide">
        <span
          className="transition-colors hover:text-neutral-600 cursor-pointer"
          onClick={() => scrollTo("about")}
        >
          about
        </span>
        <span
          className="transition-colors hover:text-neutral-600 cursor-pointer"
          onClick={() => scrollTo("skills")}
        >
          skills
        </span>
        <span
          className="transition-colors hover:text-neutral-600 cursor-pointer"
          onClick={() => scrollTo("contact")}
        >
          contact
        </span>
      </div>
    </header>
  );
}
