import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCloud, FaCode } from "react-icons/fa";
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
    name: "Certifications",
    hash: "#certifications",
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
    title: "IBM — Cloud Architect Jr",
    location: "Bogota, CO",
    description:
      "Designed enterprise cloud architectures on IBM Cloud for internal and external clients. Implemented IaC automation with Terraform and participated in pre-sales technical work, receiving an Innovation Award.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 – 2019",
  },
  {
    title: "IBM — System Service Representative",
    location: "Bogota, CO",
    description:
      "Operated cloud and middleware workloads via Azure DevOps pipelines and automated IaC provisioning. Improved system reliability by implementing monitoring, incident response, and operational runbooks across multi-OS environments.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Oracle — Cloud Engineer",
    location: "Bogota, CO",
    description:
      "Designed and delivered cloud architectures and PoCs for enterprise customers on Oracle Cloud. Automated provisioning with Terraform and built CI/CD pipelines using Jenkins and Azure DevOps for cross-cloud deployments.",
    icon: React.createElement(FaCloud),
    date: "2020 – 2022",
  },
  {
    title: "Banco de Bogotá — DevOps Engineer / Cloud Architect",
    location: "Bogota, CO",
    description:
      "Designed secure and scalable AWS architectures following the Well-Architected Framework. Automated infrastructure provisioning and CI/CD workflows with GitHub Actions and Terraform. Supported migration to Kubernetes-based microservices.",
    icon: React.createElement(FaCloud),
    date: "Jan 2022 – Apr 2022",
  },
  {
    title: "Globant — Cloud/DevOps Engineer",
    location: "Bogota, CO",
    description:
      "Designed multi-account AWS architectures for enterprise mobile and backend platforms. Led CloudOps initiatives with HA, DR, monitoring, and cost optimization. Built and maintained Jenkins CI/CD pipelines, accelerating release processes by 60%.",
    icon: React.createElement(FaCloud),
    date: "2022 – 2025",
  },
  {
    title: "Simetrik — CloudOps Engineer",
    location: "Bogota, CO",
    description:
      "Automated CloudOps workflows using Harness Platform. Managed production-grade EKS and ECS clusters with resilience and observability. Implemented IaC governance with Terraform and reduced cloud costs through rightsizing and usage analytics.",
    icon: React.createElement(FaCloud),
    date: "May 2025 – Oct 2025",
  },
  {
    title: "Visa — Staff Software Engineer / Platform",
    location: "Bogota, CO",
    description:
      "Architected mission-critical, high-volume cloud platforms across GCP and AWS with emphasis on reliability, security, and observability. Designed multi-region container architectures using GKE and EKS. Mentored engineers in SRE principles and cloud architecture patterns.",
    icon: React.createElement(FaCode),
    date: "Dec 2025 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "gRPC Image Processor Microservices",
    description:
      "Microservices architecture to process images using the gRPC protocol. Two Python services communicate via gRPC and are containerized with Docker for deployment on AWS EKS.",
    tags: ["Python", "gRPC", "Docker", "AWS", "EKS"],
    imageUrl: corpcommentImg,
    githubUrl: "https://github.com/Kgtoledoc/image-processor",
    liveUrl: "",
  },
  {
    title: "EKS Microservices Infrastructure",
    description:
      "Terraform infrastructure to deploy containerized microservices on AWS EKS. Includes VPC design, ECR repositories, EKS cluster provisioning, and AWS CodeBuild pipelines for automated CI/CD deployments.",
    tags: ["Terraform", "AWS", "EKS", "ECR", "CodeBuild", "IaC"],
    imageUrl: rmtdevImg,
    githubUrl: "https://github.com/Kgtoledoc/infrastructure",
    liveUrl: "",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Full-stack real-time chat app built with NestJS and Socket.IO. Supports multiple chat rooms, real-time user notifications, and timestamped messages with a clean TypeScript codebase throughout.",
    tags: ["NestJS", "Socket.IO", "TypeScript", "Node.js", "React"],
    imageUrl: wordanalyticsImg,
    githubUrl: "https://github.com/Kgtoledoc/real-time-chat-app-backend",
    liveUrl: "",
  },
  {
    title: "Serverless Data Pipeline on AWS",
    description:
      "End-to-end serverless data engineering pipeline using AWS CDK with Python. Extracts data from public APIs via Lambda, stores in S3 Data Lake, catalogs with Glue Crawler, and queries through Athena with Lake Formation governance.",
    tags: ["AWS CDK", "Lambda", "S3", "Glue", "Athena", "Python", "Lake Formation"],
    imageUrl: corpcommentImg,
    githubUrl: "https://github.com/Kgtoledoc/data-engineer-aws-crawler",
    liveUrl: "",
  },
  {
    title: "Multi-Tier AWS Cloud Architecture",
    description:
      "Production-grade multi-AZ AWS architecture following the Well-Architected Framework. Features a 3-layer VPC, ALB, ECS Fargate, Lambda, RDS, and security groups implementing defense-in-depth with no inbound public rules on compute.",
    tags: ["AWS", "Terraform", "ECS Fargate", "VPC", "RDS", "Lambda", "ALB"],
    imageUrl: rmtdevImg,
    githubUrl: "https://github.com/Kgtoledoc/ccs-project",
    liveUrl: "",
  },
  {
    title: "CI/CD Migration: Jenkins to Azure DevOps",
    description:
      "Migrated enterprise CI/CD pipelines from Jenkins to Azure DevOps with Terraform-managed infrastructure. Standardized deployment workflows and improved pipeline reliability across cloud environments.",
    tags: ["Azure DevOps", "Jenkins", "Terraform", "CI/CD", "Python", "Bash"],
    imageUrl: wordanalyticsImg,
    githubUrl: "https://github.com/Kgtoledoc/devops-code",
    liveUrl: "",
  },
  {
    title: "Smart Irrigation System (IoT)",
    description:
      "Automated plant irrigation system with a Python/FastAPI backend and Arduino/ESP32 hardware integration. Features real-time soil moisture monitoring, automated watering schedules, solar power support, and a web dashboard for remote control.",
    tags: ["Python", "FastAPI", "IoT", "Arduino", "ESP32", "Raspberry Pi"],
    imageUrl: corpcommentImg,
    githubUrl: "https://github.com/Kgtoledoc/irrigation-system-iot",
    liveUrl: "",
  },
] as const;

export const skillsData = {
  "Cloud Platforms": ["AWS", "GCP", "Azure", "Oracle Cloud"],
  "DevOps & IaC": ["Terraform", "AWS CDK", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Harness", "Linux", "Bash", "Git", "CI/CD"],
  "Observability": ["Grafana", "Prometheus", "Datadog"],
  "Languages": ["Python", "TypeScript", "Node.js", "Java"],
  "Web & Databases": ["React", "Next.js", "NestJS", "Express", "PostgreSQL", "MongoDB"],
} as const;

export const certificationsData = [
  {
    name: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    badge: "SAP-C02",
  },
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    badge: "SAA-C03",
  },
  {
    name: "AWS Developer Associate",
    issuer: "Amazon Web Services",
    badge: "DVA-C02",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    badge: "CLF-C02",
  },
  {
    name: "Oracle Cloud Certified",
    issuer: "Oracle Cloud Infrastructure",
    badge: "OCI ×6",
  },
] as const;
