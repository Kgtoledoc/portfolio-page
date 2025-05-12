import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "IBM - Internship",
    location: "Bogota, CO",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2019",
  },
  {
    title: "IBM - Middleware Administrator",
    location: "Bogota, CO",
    description:
      "I worked as a middleware administrator for 7 months. I learned about cloud computing and DevOps.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2020",
  },
  {
    title: "Oracle - Cloud Solution Engineer",
    location: "Bogota, CO",
    description:
      "I worked as a cloud solution engineer for 1 year. I learned about Oracle Cloud and DevOps. I also migrated on-premise applications to OCI and create templates of IaC to deploy applications.",
    icon: React.createElement(FaReact),
    date: "2020 - 2022",
  },
  {
    title: "Banco de Bogota - DevOps Engineer",
    location: "Bogota, CO",
    description:
      "",
    icon: React.createElement(FaReact),
    date: "2022 - 2022",
  },
  {
    title: "Globant - Cloud Engineer",
    location: "Bogota, CO",
    description:
      "",
    icon: React.createElement(FaReact),
    date: "2022 - 2025",
  },
  {
    title: "Simetrik - Cloud Engineer",
    location: "Bogota, CO",
    description:
      "",
    icon: React.createElement(FaReact),
    date: "2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Process Image using gRPC and EKS",
    description:
      "A web app that allows you to upload an image and process it using gRPC and EKS. It uses a microservices architecture.",
    tags: ["Python", "gRPC", "EKS", "AWS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "MiNissanApp - Infrastructure",
    description:
      "Designed and implemented the infrastructure for a web app using Terraform and AWS. The app allows users to manage their Nissan cars.",
    tags: ["Terraform", "AWS", "Typescript", "Node.js", "Lambda", "ECS", "S3", "RDS"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Migration of Jenkins to Azure DevOps",
    description:
      "Migrated a Jenkins pipeline to Azure DevOps. The pipeline builds and deploys a web app using Terraform and Azure.",
    tags: ["Azure DevOps", "Jenkins", "Python"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "AWS",
  "Terraform",
  "Docker",
  "Kubernetes",
  "Ansible",
  "Linux",
  "Bash",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "AWS",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
