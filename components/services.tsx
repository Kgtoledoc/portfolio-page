"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { servicesData, calendlyUrl } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";

export default function Services() {
  const { ref } = useSectionInView("Services");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id="services"
    >
      <SectionHeading>Services</SectionHeading>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col rounded-xl border border-black/5 bg-gray-100 p-6 text-left transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl text-gray-700 dark:text-white/70">
                {service.icon}
              </span>
              <span className="font-mono text-lg font-semibold text-gray-900 dark:text-white">
                {service.price}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold leading-snug">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-white/70">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <a
        className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-lg font-medium text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 dark:bg-white/10"
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a call
        <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
      </a>
    </motion.section>
  );
}
