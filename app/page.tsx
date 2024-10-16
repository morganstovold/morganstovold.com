"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { NavItems } from "@/data/data";

export default function Home() {
  return (
    <main className="relative font-[family-name:var(--font-geist-sans)] flex justify-center items-center flex-col mx-auto">
      <FloatingNav navItems={NavItems} />
      <Hero />
      <About />
    </main>
  );
}
