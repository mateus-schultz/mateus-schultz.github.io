const ZERO: string[] = [""]; // 0
const ONE: string[] = [
  "Angular.js",
  "Angular",
  "Radix UI",
  "Headless UI",
  "Claude 4 Sonnet",
  "Claude 3.5 Sonnet",
  "Python",
  "TypeORM",
  "PNPM",
  "GitHub Actions",
  "MobX",
  "Module Federation",
  "Java",
];

const TWO: string[] = [
  "Webpack",
  "Vercel",
  "Shadcn UI",
  "Ruby",
  "Ruby on Rails",
  "Apollo GraphQL",
  "Apollo Server",
  "Apollo Client",
  "Microservices",
  "C#",
  "SQL Server",
  "Entity Framework",
  "ASP.NET",
  "ASP.NET Core",
];

const THREE: string[] = ["Docker"];

const FOUR: string[] = [
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "Nest.js",
  "React Query",
  "Zustand",
  "Vite",
  "Rollup",
  "PostgreSQL",
];

const FIVE: string[] = [
  "GitLab",
  "YARN",
  "MUI",
  "Material Design",
  "Material UI/UX",
  "Chakra UI",
  "Storybook",
];

const SIX: string[] = [
  "Axios",
  "GitHub",
  "BitBucket",
  "Linux",
  "TypeScript",
  "Redux Toolkit",
  "React Native",
  "React Router",
  "React Context",
  "React Hooks",
  "Tailwind UI",
  "Tailwind CSS",
  "Adobe XD",
  "Figma",
  "Zod",
  "Yup",
  "Jest",
  "Mocha",
  "Chai",
  "Azure",
  "CI/CD",
];

const SEVEN: string[] = [
  "HTML5",
  "CSS3",
  "Fetch",
  "React.js",
  "Styled Components",
  "Web Components",
  "Kanban",
  "Redux Core",
  "RESTful APIs",
  "Agile",
  "Scrum",
  "SASS",
  "SCSS",
];

const EIGHT: string[] = [
  "JavaScript",
  "Git",
  "SQL",
  "NPM",
  "HTML",
  "CSS",
  "Bootstrap",
];

export const SKILLS: {
  name: string;
  years: number;
}[] = [
  ...ZERO.filter(Boolean).map((name) => ({ name, years: 0 })),
  ...ONE.filter(Boolean).map((name) => ({ name, years: 1 })),
  ...TWO.filter(Boolean).map((name) => ({ name, years: 2 })),
  ...THREE.filter(Boolean).map((name) => ({ name, years: 3 })),
  ...FOUR.filter(Boolean).map((name) => ({ name, years: 4 })),
  ...FIVE.filter(Boolean).map((name) => ({ name, years: 5 })),
  ...SIX.filter(Boolean).map((name) => ({ name, years: 6 })),
  ...SEVEN.filter(Boolean).map((name) => ({ name, years: 7 })),
  ...EIGHT.filter(Boolean).map((name) => ({ name, years: 8 })),
];
