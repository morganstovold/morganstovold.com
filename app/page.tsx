"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { NavItems } from "@/data/data";

export default function Home() {
  return (
    <>
      <FloatingNav navItems={NavItems} />
      <Hero />
      <About />
      <Projects />
    </>
  );
}
