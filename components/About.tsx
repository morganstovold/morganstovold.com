import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className="relative flex flex-col gap-8 justify-center items-center min-h-screen w-full bg-black-100">
      <h1 className="flex items-center justify-center text-6xl uppercase row-start-2 text-center leading-snug">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 1 }}
        >
          An aspiring softwrae engineer
        </motion.div>
      </h1>
    </div>
  );
}
