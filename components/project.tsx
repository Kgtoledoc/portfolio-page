"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="h-full"
    >
      <div className="group flex flex-col h-full bg-gray-100 border border-black/5 rounded-xl overflow-hidden hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
        <div className="flex flex-col flex-grow p-6">
          <h3 className="font-semibold text-lg leading-snug mb-2">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-white/70 line-clamp-3 flex-grow">
            {description}
          </p>
          <div className="mt-4 flex items-end justify-between gap-2">
            <ul className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="bg-black/[0.7] px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 shrink-0">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-white/50 dark:hover:text-white transition"
                  aria-label="GitHub repository"
                >
                  <BsGithub size={18} />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-white/50 dark:hover:text-white transition"
                  aria-label="Live demo"
                >
                  <BsArrowUpRightSquare size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
