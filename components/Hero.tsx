import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative snap-center w-full h-screen">
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.075] bg-grid-black-100/[0.075]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_80%)]"
        />
      </div>
      <div
        id="home"
        className="relative flex flex-col gap-8 justify-center items-center min-h-screen w-full z-20"
      >
        <h1 className="flex items-center justify-center text-6xl uppercase row-start-2 text-center leading-snug">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.5 }}
          >
            hey, i&apos;m morgan
          </motion.div>
        </h1>
      </div>
    </div>
  );
}
