"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/nav_items";

export default function Home() {
  return (
    <main className="relative font-[family-name:var(--font-geist-sans)] flex justify-center items-center flex-col overflow-hidden mx-auto">
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
    </main>
  );
}
