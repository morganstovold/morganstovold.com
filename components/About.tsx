import { motion } from "framer-motion";
import { NavigationIcon } from "lucide-react";
import Link from "next/link";

import { Skills, Socials } from "@/data/data";

import { Spotlight } from "@/components/ui/Spotlight";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function About() {
  return (
    <div
      id="about"
      className="snap-center flex flex-col gap-4 p-8 justify-center items-center w-full overflow-hidden bg-black-100"
    >
      <Spotlight
        className="top-[10%] left-[100%] h-[80vh] w-[50vw]"
        fill="red"
      />
      <Spotlight
        className="top-[90%] left-[10%] h-[80vh] w-[50vw]"
        fill="purple"
      />
      <div className="grid grid-cols-[4fr,6fr,2fr] gap-4 md:flex-row justify-center max-w-screen-lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          className="p-4 rounded-xl bg-black/20 backdrop-blur-3xl border"
        >
          <img
            className="flex aspect-square rounded-md"
            src="https://placehold.co/400x400"
            alt="headshot"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          className="flex flex-col h-full gap-4 p-4 text-md capitalize bg-black/20 backdrop-blur-3xl border rounded-xl"
        >
          <h2 className="text-xl text-center uppercase text-neutral-50 border-b pb-4">
            Skills
          </h2>
          <motion.ul
            className="flex flex-wrap h-full items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { staggerChildren: 0.5 } }}
            viewport={{ amount: 0.5 }}
          >
            <TooltipProvider delayDuration={0}>
              {Skills.map((item) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 0.5 }}
                  className="text-neutral-300 font-normal w-16 h-16"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>{item.icon}</TooltipTrigger>
                    <TooltipContent>{item.name}</TooltipContent>
                  </Tooltip>
                </motion.li>
              ))}
            </TooltipProvider>
          </motion.ul>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { staggerChildren: 0.5 } }}
          viewport={{ amount: 0.5 }}
          className="flex flex-col items-center justify-between rounded-xl py-4 bg-black/20 backdrop-blur-3xl border"
        >
          {Socials.map((item) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.5 }}
              className="flex items-center hover:text-neutral-400 border rounded-full p-4 my-auto"
            >
              <Link href={item.url}>
                <item.icon size="32" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          className="flex flex-col col-span-3 h-full gap-4 p-4 text-md capitalize bg-black/20 backdrop-blur-3xl border rounded-xl"
        >
          <h2 className="text-xl uppercase text-neutral-50">
            an aspiring full stack developer
          </h2>
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
            <NavigationIcon size="16" /> Benicia, CA
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
