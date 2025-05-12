"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  After graduating with a degree in{" "}
  <span className="font-medium">Electrical Engineering</span> from the{" "}
  <span className="font-medium">Universidad Nacional</span>, I began my career in the technology industry. I have experience in{" "}
  <span className="font-medium">Cloud and DevOps Engineering</span> and have participated in various projects involving{" "}
  <span className="font-medium">migration, operations, and service implementation</span> across cloud providers such as{" "}
  <span className="font-medium">AWS, Azure, and Oracle Cloud Infrastructure (OCI)</span>. I’ve had the opportunity to work with large teams at companies like{" "}
  <span className="font-medium">Globant, IBM, Oracle, and Banco de Bogotá</span>, and I’m currently contributing to a{" "}
  <span className="font-medium">FinTech startup</span>.
</p>

<p className="mb-3">
  I’m deeply curious and passionate about technology. I transitioned into{" "}
  <span className="font-medium">full-stack web development</span> through self-study and bootcamps.{" "}
  <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I{" "}
  <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core stack is{" "}
  <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I am also familiar with{" "}
  <span className="font-medium">TypeScript and Prisma</span>, and I’m always eager to learn new technologies. I am currently seeking a{" "}
  <span className="font-medium">full-time position</span> as a software developer or DevOps engineer.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and spending time with my dog. I also enjoy{" "}
  <span className="font-medium">learning new things</span>, especially{" "}
  <span className="font-medium">history and philosophy</span>. I'm currently learning how to play the guitar.
</p>
    </motion.section>
  );
}
