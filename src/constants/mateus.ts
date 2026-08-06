import { Resume } from "@/types/resume";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SKILLS } from "./SKILLS";
import { LOCATIONS } from "./LOCATIONS";
import { LANGUAGES } from "./LANGUAGES";
import { EXPERIENCES } from "./EXPERIENCES";
import { EDUCATIONS } from "./EDUCATIONS";
import { PROJECTS } from "./PROJECTS";

const LinkedinURL = "https://www.linkedin.com/in/mateus-schultz-980380149/";

export const RESUME: Resume = {
  firstName: "Mateus",
  lastName: "Schultz",
  name: "Mateus Schultz",
  nick: "",
  gender: "male",
  nameLink: LinkedinURL,

  initials: "MS",
  initialsLink: LinkedinURL,

  locations: LOCATIONS,
  languages: LANGUAGES,

  avatar: "/Mateus.jpg",
  avatarLink: LinkedinURL,

  summary: "Senior Frontend Engineer",
  summaryLink: LinkedinURL,

  about: [
    {
      description:
        "I’m a frontend developer focused on building simple, reliable, and user‑friendly interfaces. My main experience is with React, TypeScript, Next.js, and TailwindCSS, and I’ve also explored Angular and Vue/Nuxt in side projects. I’m responsible, collaborative, and make sure the work gets done while keeping performance, accessibility, and responsive design in mind. Recently, I’ve been using AI tools like Claude and LLMs to accelerate development and deliver solid products with the team.",
    },
    {
      title: "Competencies",
      items: [
        "JavaScript",
        "Typescript",
        "HTML",
        "CSS",
        "React Native",
        "React, Next.js, Node.js",
        "Redux, Zustand, React Query",
        "Tailwind CSS, Material UI, Mantine, Bootstrap, Chakra UI",
        "Software Development",
        "Continuous Improvements",
      ],
    },
  ],
  aboutLink: LinkedinURL,
  website: LinkedinURL,

  contact: {
    website: LinkedinURL,
    email: "mateus-schultz@outlook.com",
    phone: "+55 35 99849-6105",
    cv: "/mateus_cv.pdf",
    resume: "/mateus_cv.pdf",
    linkedin: LinkedinURL,
    github: "https://github.com/mateus-schultz",
    socials: [
      {
        name: "LinkedIn",
        url: LinkedinURL,
        icon: FaLinkedin,
      },
      {
        name: "Github",
        url: "https://github.com/mateus-schultz",
        icon: FaGithub,
      },
    ],
  },

  experiences: EXPERIENCES,

  educations: EDUCATIONS,

  skills: SKILLS,

  projects: PROJECTS,

  characteristics: [
    "self-motivated",
    "self-organized",
    "self-conscious",
    "self-control",
    "responsible",
    "honest",
    "fair",
    "hardworking",
    "purposeful",
    "resourcefulness",
    "patience",
    "principles",
    "decisive",
    "careful",
    "friendly",
    "enjoy learning",
  ],
};
