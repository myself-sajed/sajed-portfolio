import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shaikh Sajed",
  initials: "SS",
  url: "https://sajed-dev.vercel.app",
  description: "Shaikh Sajed | Fullstack Web Developer, who loves Building Scalable Web Applications",
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
        "Led development of 4 complex platforms using the MERN stack, delivering scalable APIs & high-end designs.",
        "Implemented microservice architecture using NodeJS & Postgres with Kafka and Redis for async communication and caching, improving system responsiveness by 60%.",
        "Built modular UI kits with React, Tailwind, and ShadCN, accelerating frontend delivery by 40% across teams.",
        "Integrated AI workflows using Inngest and Pinecone to automate key business logic and deliver real-time recommendations with zero downtime."
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
        "Developed and maintained 30+ internal web modules using ReactJS, NodeJS and MongoDB that digitized core academic and admin workflows across departments reducing repetitive manual work.",
        "Engineered reporting automation for 11 academic workflows including CAS, PBAS & AQAR, reducing manual documentation by 90%.",
        "Engineered backend systems for dynamic PDF using Puppeteer and Excel generation from academic data, saving 100+ hours per quarter.",
        "Standardized internal dashboards and approval flows, improving cross-department communication and decision tracking by 50%."
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
        "Built an AI triage system that matches user symptoms to relevant doctors and probable conditions using AI agents, severity scoring, and vector search through Pinecone.",
        "Orchestrated Gemini-based pipelines using Inngest for real-time feedback, embeddings, and vector search."
      ],
      techStack: ["React JS", "Zustand", "Node JS", "MongoDB", "Inngest", "Pinecone", "Tailwind CSS"],
      websiteURL: 'https://find-my-doctor-app.vercel.app/',
      githubURL: 'https://github.com/myself-sajed/fmd-client',
      imgURL: 'fmd.png'
    },
    {
      title: "Round Pizza Microservices Architecture",
      desc: [
        "Engineered a microservices-based pizza ordering application using NodeJS, Postgres & MongoDB, for auth, catalog, order processing, payment, and notification modules.",
        "Implemented React & Next.js frontend with socket-powered dashboards and role-based routing.",
        "Real-time communication via Socket.IO and notifications through Nodemailer.",
        "Used Kafka for cross-service events and Redis for API response optimization"
      ],
      techStack: ["React JS", "Next JS", "Zustand", "Node JS", "Express JS", "PostgreSQL", "MongoDB", "Redis", "Socket.io", "Kafka", "Tailwind CSS"],
      websiteURL: 'https://app.eraser.io/workspace/bvBOgZYuP9cvNw376AIP?origin=share',
      githubURL: 'https://app.eraser.io/workspace/bvBOgZYuP9cvNw376AIP?origin=share',
      imgURL: 'round.png'
    },
    {
      title: "Connector",
      desc: [
        "A Chatting and Collaborative Code Sharing Platform",
        "Designed a collaborative code-sharing and real-time chat platform using MERN stack and Socket.io.",
        "Integrated syntax highlighting for code blocks and crafted frontend design using ShadCN for better accessibility"
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
