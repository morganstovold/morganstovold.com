"use client";

import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";
import Link from "next/link";

import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center font-[family-name:var(--font-geist-sans)] overflow-x-hidden text-neutral-400">
      <section
        id="home"
        className="relative dark:bg-grid-white/[0.05] bg-grid-black/[0.05] flex flex-col gap-8 justify-center items-center min-h-screen w-full p-8"
      >
        <div className="absolute w-full pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
        <h1 className="flex items-center justify-center text-5xl uppercase row-start-2 text-center leading-snug">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 1 }}
          >
            hi, i&apos;m <span className="text-neutral-100">morgan</span>
          </motion.div>
        </h1>
        <div
          className={`absolute top-3/4 gap-8 items-center justify-center row-start-3`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 1 }}
          >
            <Link href="#title">
              <MoveDown size={38} className="cursor-pointer animate-bounce" />
            </Link>
          </motion.div>
        </div>
      </section>
      <section
        id="title"
        className="relative flex flex-col gap-8 justify-center items-center min-h-screen w-full p-8"
      >
        <h1 className="flex gap-3 items-center justify-center text-5xl uppercase text-center row-start-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 1 }}
            className="flex flex-col gap-3"
          >
            <span>
              an aspiring{" "}
              <span className="text-neutral-100">software engineer</span>
            </span>
            <p className="text-xl text-center">based in benicia, california</p>
          </motion.div>
        </h1>
        <div
          className={`absolute top-3/4 gap-8 items-center justify-center row-start-3`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 1 }}
          >
            <Link href="#about">
              <MoveDown size={38} className="cursor-pointer animate-bounce" />
            </Link>
          </motion.div>
        </div>
      </section>
      <div className="w-3/4 h-0.5 bg-neutral-900" />
      <section
        id="about"
        className="relative flex flex-col gap-8 justify-center items-center min-h-screen w-full p-8"
      >
        <h1 className="flex gap-3 items-center justify-center text-5xl uppercase text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 1 }}
          >
            about <span className="text-neutral-100">me</span>
          </motion.div>
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 1 }}
          className="max-w-screen-sm break-words text-lg uppercase text-neutral-400 text-justify"
        >
          <p>
            born and raised in{" "}
            <span className="text-neutral-100">benicia, california</span>. i
            started programming at the age of 12, a{" "}
            <span className="text-neutral-100">self taught developer</span>{" "}
            driven by the curiosity and deep interest in computers and
            technology.{" "}
            <span className="text-neutral-100">i&apos;ve dedicated myself</span>{" "}
            to learning and mastering various programming languages, frameworks,
            and libraries.{" "}
            <span className="text-neutral-100">i&apos;m passionate</span> about
            creating and building software that solves{" "}
            <span className="text-neutral-100">real world problems</span>. in
            college i will obtain a{" "}
            <span className="text-neutral-100">
              masters degree in computer science
            </span>
            , and persue a career in software engineering.
          </p>
        </motion.div>
      </section>
      <div className="w-3/4 h-0.5 bg-neutral-900" />
      <section
        id="skills"
        className="relative flex flex-col gap-8 justify-center items-center min-h-screen w-full p-8"
      >
        <h1 className="flex gap-3 items-center justify-center text-5xl uppercase text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 1 }}
          >
            <span className="text-neutral-100">qualities</span> and{" "}
            <span className="text-neutral-100">skills</span>
          </motion.div>
        </h1>
        <div>
          <motion.ul></motion.ul>
        </div>
      </section>
    </main>
  );
}
