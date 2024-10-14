"use client";

import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";

import { BackgroundLines } from "@/components/ui/background-lines";
import { scrollTo } from "@/lib/utils";

export default function Home() {
  return (
    <main className="max-w-screen-lg flex flex-col w-full items-center font-[family-name:var(--font-geist-sans)] text-primary">
      <BackgroundLines
        id="home"
        className="relative flex flex-col gap-8 justify-center items-center min-h-screen w-full"
      >
        <h1 className="flex items-center justify-center text-6xl uppercase row-start-2 text-center leading-snug">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 1 }}
          >
            hey, i&apos;m morgan
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
            <MoveDown
              onClick={() => scrollTo("about")}
              size={38}
              className="cursor-pointer animate-bounce"
            />
          </motion.div>
        </div>
      </BackgroundLines>
      <section
        id="about"
        className="relative flex flex-col gap-8 justify-center items-center min-h-screen w-full"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 1 }}
          className="w-full gap-3 items-center justify-center text-6xl capitalize row-start-2"
        >
          an aspiring software engineer
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 1 }}
          className="break-words text-lg text-justify"
        >
          <p>
            Born and raised in Benicia, California. I started programming at the
            age of 12, a self-taught developer driven by curiosity and a deep
            interest in computers and technology. i&apos;ve dedicated myself to
            learning and mastering various programming languages, frameworks,
            and libraries. i&apos;m passionate about creating and building
            software that solves real-world problems. I plan to obtain
            a master&apos;s degree in computer science during my enrollment in college, and pursue a career in
            software engineering.
          </p>
        </motion.div>
        <div
          className={`absolute top-3/4 gap-8 items-center justify-center row-start-3`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 1 }}
          >
            <MoveDown
              onClick={() => scrollTo("skills")}
              size={38}
              className="cursor-pointer animate-bounce"
            />
          </motion.div>
        </div>
      </section>
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
            <span className="text-primary">qualities</span> and{" "}
            <span className="text-primary">skills</span>
          </motion.div>
        </h1>
        <div>
          <motion.ul></motion.ul>
        </div>
      </section>
    </main>
  );
}
