import { motion } from "framer-motion";
import { NavigationIcon } from "lucide-react";
import Link from "next/link";

import { Skills, Socials } from "@/data/data";

import { Spotlight } from "./ui/Spotlight";

export default function About() {
  return (
    <div
      id="about"
      className="snap-center relative flex flex-col gap-12 p-8 justify-center items-center min-h-screen w-full bg-black-100"
    >
      <Spotlight
        className="top-[10%] left-[100%] h-[80vh] w-[50vw]"
        fill="red"
      />
      <Spotlight
        className="top-[90%] left-[10%] h-[80vh] w-[50vw]"
        fill="purple"
      />
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 1 }}
        className="flex items-center justify-center text-4xl uppercase row-start-2 text-center leading-snug"
      >
        an aspiring full stack developer
      </motion.h1>
      <div className="grid grid-cols-[minmax(0,70%),minmax(0,30%)] gap-4 md:flex-row justify-center max-w-screen-lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 1 }}
          className="flex flex-col h-full gap-4 p-4 text-md capitalize bg-black/20 backdrop-blur-3xl border rounded-lg"
        >
          <h2 className="text-xl uppercase text-neutral-50">Background</h2>
          <p className="text-neutral-300 font-normal">
            Born and raised in Benicia, California. I started programming at the
            age of 12, a self-taught developer driven by curiosity and a deep
            interest in computers and technology. i&apos;ve dedicated myself to
            learning and mastering various programming languages, frameworks,
            and libraries. I plan to obtain a master&apos;s degree in computer
            science during my enrollment in college, and pursue a career in
            software engineering.
          </p>
          <h1 className="mt-auto flex items-center gap-2">
            <NavigationIcon size="20" /> Benicia, CA
          </h1>
        </motion.div>
        <div className="flex flex-col gap-4">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 1 }}
            className="flex aspect-square h-full p-4 rounded-lg bg-black/20 backdrop-blur-3xl border"
            src="./headshot.png"
            alt="headshot"
          />
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { staggerChildren: 0.5 } }}
            viewport={{ amount: 1 }}
            className="flex justify-center p-4 rounded-lg bg-black/20 backdrop-blur-3xl border"
          >
            {Socials.map((item) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 1 }}
                className="flex items-center gap-2"
              >
                <Link href={item.url}>
                  <item.icon size="24" />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 1 }}
          className="flex flex-col h-full gap-4 p-4 col-start-1 col-end-3 text-md capitalize bg-black/20 backdrop-blur-3xl border rounded-lg"
        >
          <h2 className="text-xl text-center uppercase text-neutral-50 border-b pb-4">Skills</h2>
          <motion.ul
            className="flex flex-wrap items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { staggerChildren: 0.5 } }}
            viewport={{ amount: 1 }}
          >
            {Skills.map((item) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 1 }}
                className="text-neutral-300 font-normal w-16 h-16"
              >
                {item.icon}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}
