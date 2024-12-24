import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shaikh Sajed",
  initials: "SS",
  url: "https://dillion.io",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "An experienced Full Stack Web Developer passionate about building scalable and impactful web solutions, dedicated to bringing ideas to life on the web.",
  summary:
    "A Full Stack Web Developer with expertise in building scalable and efficient web solutions using the MERN stack. Skilled in backend systems, database management, and modern DevOps practices, with a Master's degree in Computer Applications. I’m passionate about turning complex challenges into seamless digital experiences that deliver real value and user satisfaction.",
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
    }
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
      description:
        "",
    },
    {
      company: "SRTMUN",
      badges: [],
      href: "https://srtmun-uims.org",
      title: "Fullstack Web Developer",
      logoUrl: "/assets/icons/srt.png",
      start: "May 2022",
      end: "May 2024",
      description:
        "",
    },
  ],
  education: [

  ],
  projects: [
    {
      title: "SRTMUN-UIMS",
      desc: "A University Information Management System.",
      techStack: ["react.svg", "redux.svg", "tailwind.svg", "node.svg", "mongodb.svg",],
      websiteURL: 'https://srtmun-uims.org',
      githubURL: 'https://github.com/myself-sajed/SRTMUN-UIMS',
      imgURL: 'p3.png'
    },
    {
      title: "Connector",
      desc: "A reliable chatting and realtime coding platform.",
      techStack: ["next.svg", "redux.svg", "tailwind.svg", "node.svg", "mongodb.svg", "socket.svg"],
      websiteURL: 'https://connector-sajed.vercel.app/',
      githubURL: 'https://github.com/myself-sajed/connector-client',
      imgURL: 'p1.png'
    },
    {
      title: "PhonePe Web (UI Only)",
      desc: "A UI PhonePe Web version with mock banking services.",
      techStack: ["react.svg", "redux.svg", "tailwind.svg", "firebase.svg"],
      websiteURL: 'https://phonepe-web.vercel.app/',
      githubURL: 'https://github.com/myself-sajed/PhonePe',
      imgURL: 'p2.png'
    },
  ],
} as const;
