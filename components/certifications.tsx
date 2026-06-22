"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { certificationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { SiAmazonaws, SiOracle } from "react-icons/si";

export default function Certifications() {
  const { ref } = useSectionInView("Certifications", 0.5);

  return (
    <section
      id="certifications"
      ref={ref}
      className="mb-28 max-w-5xl scroll-mt-28 w-full"
    >
      <SectionHeading>Certifications</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificationsData.map((cert, index) => {
          const isOracle = cert.issuer.toLowerCase().includes("oracle");
          return (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-start gap-4 bg-gray-100 border border-black/5 rounded-xl p-5 dark:bg-white/10 dark:text-white"
            >
              <div
                className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                  isOracle
                    ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                    : "bg-orange-100 text-orange-500 dark:bg-orange-900/30 dark:text-orange-400"
                }`}
              >
                {isOracle ? <SiOracle /> : <SiAmazonaws />}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm leading-snug">{cert.name}</p>
                <p className="text-xs text-gray-500 dark:text-white/50 mt-0.5">
                  {cert.issuer}
                </p>
                <span className="inline-block mt-2 bg-black/[0.07] dark:bg-white/10 text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded-full font-mono">
                  {cert.badge}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
