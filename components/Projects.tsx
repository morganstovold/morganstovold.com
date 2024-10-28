import { motion } from "framer-motion";
import Image from "next/image";

import { Projects as ProjectsData } from "@/data/data";

export default function Projects() {
  return (
    <div
      id="projects"
      className="relative snap-center h-fit w-full py-28 overflow-x-hidden"
    >
      <div
        className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.075] bg-grid-black-100/[0.075]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_80%)]"
        />
      </div>
      <div className="relative flex flex-col gap-8 justify-center items-center min-h-screen container">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          className="text-6xl uppercase row-start-2 text-center leading-snug"
        >
          Some of my projects
        </motion.h1>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ProjectsData.map((project) => (
            <li
              key={project.title}
              className="flex flex-col gap-4 p-4 bg-black/20 backdrop-blur-3xl border rounded-xl"
            >
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image}
                  alt=""
                  className="w-full object-cover rounded-md aspect-w-3 aspect-h-2 h-40 md:h-48 lg:h-56"
                />
              }
              <div className="flex flex-col gap-2 h-full">
                <h2 className="text-xl uppercase text-neutral-50">
                  {project.title}
                </h2>
                <p className="text-neutral-300 font-normal">
                  {project.description}
                </p>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-50 hover:underline flex mt-auto"
                >
                  View Project
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
