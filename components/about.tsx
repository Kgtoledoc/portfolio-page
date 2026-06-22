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
  <span className="font-medium">Electrical Engineering</span> from{" "}
  <span className="font-medium">Universidad Nacional de Colombia</span>, I built a 6+ year career in{" "}
  <span className="font-medium">Cloud and DevOps Engineering</span>. I’ve designed, automated, and operated large-scale infrastructure across{" "}
  <span className="font-medium">AWS, GCP, Azure, and Oracle Cloud</span>. I’ve worked at{" "}
  <span className="font-medium">IBM, Oracle, Banco de Bogotá, Globant, and Simetrik</span>, and I’m currently a{" "}
  <span className="font-medium">Staff Software Engineer / Platform at Visa</span>.
</p>

<p className="mb-3">
  I hold multiple certifications including{" "}
  <span className="font-medium">AWS Solutions Architect Professional</span> and six Oracle Cloud certifications.
  My expertise spans{" "}
  <span className="font-medium">Kubernetes, Terraform, CI/CD automation, observability, and SRE practices</span>.
  I also build full-stack web applications and have a passion for{" "}
  <span className="font-medium">IoT, AI agents, cybersecurity, and bug hunting</span>.
</p>

<p>
  <span className="italic">When I’m not coding</span>, I enjoy playing video games, watching movies, and spending time with my dog. I also enjoy{" "}
  <span className="font-medium">learning new things</span>, especially{" "}
  <span className="font-medium">history and philosophy</span>, and I’m currently learning to play the guitar.
</p>
    </motion.section>
  );
}
