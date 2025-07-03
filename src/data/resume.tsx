import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shaikh Sajed",
  initials: "SS",
  url: "https://dillion.io",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  avatarUrl: "/assets/icons/me.jpg",
  skills: [
    {
      name: "HTML",
      icon: "html.svg"
    },
    {
      name: "CSS",
      icon: "css.svg"
    },
    {
      name: "JavaScript",
      icon: "javascript.svg"
    },
    {
      name: "TypeScript",
      icon: "typescript.svg"
    },
    {
      name: "Tailwind CSS",
      icon: "tailwind.svg"
    },
    {
      name: "React JS",
      icon: "react.svg"
    },
    {
      name: "Next JS",
      icon: "next.svg"
    },
    {
      name: "Node JS",
      icon: "node.svg"
    },
    {
      name: "Express JS",
      icon: "express.svg"
    },
    {
      name: "MongoDB",
      icon: "mongodb.svg"
    },
    {
      name: "Docker",
      icon: "docker.svg"
    },
    {
      name: "AWS",
      icon: "aws.svg"
    },
    {
      name: "Kafka",
      icon: "kafka.svg"
    },
    {
      name: "Inngest AI",
      icon: "inngest.png"
    },
    {
      name: "Pinecone",
      icon: "pinecone.svg"
    },

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "digitalsajed@gmail.com",
    tel: "7773936878",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/myself-sajed",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shaikhsajed",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:digitalsajed@gmail",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Ideamind Technologies Pvt. Ltd.",
      href: "#",
      badges: [],
      location: "Hyderabad, India",
      title: "Fullstack Web Developer",
      logoUrl: "/assets/icons/ideamind.jpg",
      start: "June 2024",
      end: "Present",
      description: [
        "Led end-to-end development of 4 major platforms created from the ground-up with strong frontend and backend ownership.",
        "Improved scalability, UX, and delivery speed by designing reusable components, RBAC systems, and high-performance UIs.",
        "Reduced manual effort by ~60%, achieved >90% UAT success, and laid groundwork for AI integration using LLMs and Inngest."
      ],
    },
    {
      company: "SRTMUN",
      badges: [],
      href: "https://srtmun-uims.org",
      title: "Fullstack Web Developer",
      logoUrl: "/assets/icons/srt.png",
      start: "May 2022",
      end: "May 2024",
      description: [
        "Built a full-scale University Information Management System from scratch, covering students, staff, and faculty operations.",
        "Developed 10+ critical reporting modules (e.g., CAS, PBAS, NIRF) with dashboards and auto-generated reports for departments and schools.",
        "Reduced manual paperwork by 50% through digitization and an intuitive onboarding guide for all users (teachers, admin, staff)."
      ]
    },
  ],
  education: [

  ],
  projects: [
    {
      title: "Find My Doctor",
      desc: [
        "AI-powered medical triage platform built using NLP.",
        "Analyzes symptoms from natural language queries.",
        "Recommends suitable doctors based on urgency, specialization, and context relevance."
      ],
      techStack: ["React JS", "Zustand", "Node JS", "MongoDB", "Inngest", "Pinecone", "Tailwind CSS"],
      websiteURL: 'https://find-my-doctor-app.vercel.app/',
      githubURL: 'https://github.com/myself-sajed/fmd-client',
      imgURL: 'fmd.png'
    },
    {
      title: "Round Pizza Microservices Architecture",
      desc: [
        "Microservices system with separate services for Auth, Product, Orders, Category, Socket, and Notifications.",
        "Uses API Gateway with Redis caching and dedicated databases (PostgreSQL and MongoDB).",
        "Real-time communication via Socket.IO and notifications through Nodemailer.",
        "Supports client and admin panels routed through the gateway for clean separation."
      ],
      techStack: ["React JS", "Next JS", "Zustand", "Node JS", "Express JS", "PostgreSQL", "MongoDB", "Redis", "Socket.io", "Kafka", "Tailwind CSS"],
      websiteURL: 'https://app.eraser.io/workspace/bvBOgZYuP9cvNw376AIP?origin=share',
      githubURL: 'https://app.eraser.io/workspace/bvBOgZYuP9cvNw376AIP?origin=share',
      imgURL: 'round.png'
    },
    {
      title: "Connector",
      desc: [
        "Real-time medical chat platform for patient-doctor interactions.",
        "Powered by Socket.IO for instant bi-directional messaging.",
        "Supports AI-assisted replies and automatic case creation.",
        "Built on the MERN stack with dynamic updates and user-friendly interface."
      ],
      techStack: ["Next.js", "Redux", "Tailwind CSS", "Node.js", "MongoDB", "Socket.IO"],
      websiteURL: 'https://connector-sajed.vercel.app/',
      githubURL: 'https://github.com/myself-sajed/connector-client',
      imgURL: 'connector.png'
    },
    {
      title: "SRTMUN-UIMS",
      desc: [
        "Comprehensive platform to manage university data: faculty, students, staff, and admin.",
        "Generates 10+ institutional reports like PM-USHA, CAS, PBAS, NIRF, and UDRF.",
        "Includes data visualizations and dashboards for performance analysis.",
        "Enabled SRTMUN to move toward fully digital, paperless administration."
      ],
      techStack: ["React", "Redux", "Tailwind CSS", "Node.js", "MongoDB"],
      websiteURL: 'https://srtmun-uims.org',
      githubURL: 'https://github.com/myself-sajed/SRTMUN-UIMS',
      imgURL: 'srtmun.png'
    }
  ]

} as const;
