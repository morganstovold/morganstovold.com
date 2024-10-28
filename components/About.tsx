import { motion } from "framer-motion";
import { NavigationIcon } from "lucide-react";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skills, Socials } from "@/data/data";

export default function About() {
  return (
    <div
      id="about"
      className="snap-mandatory relative h-screen p-8 flex flex-col gap-12 justify-center items-center w-full bg-black-100"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.5 }}
        className="text-6xl uppercase row-start-2 text-center leading-snug"
      >
        About <span className="underline">Me</span>
      </motion.h1>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-[1fr,auto] container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          className="flex flex-col h-full gap-4 p-8 text-md capitalize bg-black/20 backdrop-blur-3xl border rounded-xl md:col-span-2"
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          className="flex flex-col h-full gap-4 p-8 text-md capitalize bg-black/20 backdrop-blur-3xl border rounded-xl w-full md:col-1 md:row-2"
        >
          <h2 className="text-xl text-center uppercase text-neutral-50 border-b pb-4">
            Skills
          </h2>
          <motion.ul
            className="flex flex-wrap h-full items-center justify-center gap-4"
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
          className="flex md:flex-col items-center justify-center gap-8 rounded-xl p-8 bg-black/20 backdrop-blur-3xl border w-full md:w-fit md:col-1 md:row-2"
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
      </div>
    </div>
  );
}
