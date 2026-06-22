"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 w-full"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="flex flex-col gap-6 text-left">
        {(Object.entries(skillsData) as [string, readonly string[]][]).map(
          ([category, skills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-white/50 mb-2">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.li
                    key={skill}
                    variants={fadeIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={catIndex * 5 + i}
                    className="bg-white borderBlack rounded-xl px-4 py-2 text-sm dark:bg-white/10 dark:text-white/80"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
