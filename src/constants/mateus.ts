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
        "Creative and results-driven Frontend Engineer specialized in React, with proven expertise in developing MVPs and prototyping innovative solutions within agile Labs environments. Adept at transforming business needs into scalable, high-performance web interfaces and user experiences. Skilled in TypeScript, modern JavaScript frameworks, UI/UX best practices, and rapid product iteration. Passionate about clean code architecture, cross-functional collaboration, and continuous learning to deliver digital products that make a real impact.",
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
    email: "mateusbrasil1994@hotmail.com",
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
