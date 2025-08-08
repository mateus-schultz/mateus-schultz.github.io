import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Rocket,
  Zap,
  FileText,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";

export default function Portfolio() {
  const { t } = useTranslation();

  const skillCategories = {
    essentials: ["HTML", "CSS", "JavaScript", "TypeScript"],
    frontend: [
      "React",
      "Angular",
      "Vue",
      "Next.js",
      "Vite",
      "Styled Components",
      "Tailwind",
      "Bootstrap",
      "Material UI",
      "Chakra UI",
      "Mantine",
      "Emotion",
      "Sass",
      "Redux",
      "Zustand",
    ],
    mobile: ["React Native", "Expo", "Flutter", "FlutterFlow"],
    testing: ["Jest", "Cypress", "Playwright", "Vitest"],
    monorepo: ["Yarn", "Nx"],
    backend: ["Node.js", "NestJS", "Adonis"],
    tools: [
      "Webpack",
      "Docker",
      "Git",
      "GitHub",
      "Gitlab",
      "BitBucket",
      "Vercel",
      "Figma",
    ],
    utilities: ["GraphQL", "Strapi"],
  };

  const experienceKeys = ["pitang", "bbchain", "atelie", "deal", "soitic"];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 dark:bg-gradient-to-br light:bg-gradient-to-br light:from-blue-50 light:via-indigo-50 light:to-purple-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgIDxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj4gICAgICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+ICAgIDwvZz4gIDwvZz48L3N2Zz4=')] opacity-20"></div>

      {/* Theme and Language Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <LanguageSelector />
        <ThemeToggle />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-16 mt-4">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-500/10 dark:bg-purple-500/10 light:bg-purple-100 rounded-full border border-purple-500/20 dark:border-purple-500/20 light:border-purple-300">
            <Zap className="w-4 h-4 text-purple-400 dark:text-purple-400 light:text-purple-600" />
            <span className="text-purple-300 dark:text-purple-300 light:text-purple-700 text-sm font-medium">
              {t("header.title")}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 dark:from-white dark:via-purple-200 dark:to-purple-400 light:from-slate-900 light:via-purple-800 light:to-purple-600 bg-clip-text text-transparent mb-6">
            Mateus Schultz
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 dark:text-slate-300 light:text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("header.subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* <a href="https://github.com/mateus-schultz" target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/5 border-white/20 text-white hover:bg-white/10 dark:bg-white/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10 light:bg-white light:border-slate-300 light:text-slate-900 light:hover:bg-slate-50"
              >
                <Github className="w-5 h-5 mr-2" />
                {t("header.github")}
              </Button>
            </a> */}
            <a
              href="https://www.linkedin.com/in/mateus-schultz-980380149/"
              target="_blank"
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-white/5 border-white/20 text-white hover:bg-white/10 dark:bg-white/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10 light:bg-white light:border-slate-300 light:text-slate-900 light:hover:bg-slate-50"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                {t("header.linkedin")}
              </Button>
            </a>
            <Link to="/cv">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/5 border-white/20 text-white hover:bg-white/10 dark:bg-white/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10 light:bg-white light:border-slate-300 light:text-slate-900 light:hover:bg-slate-50"
              >
                <FileText className="w-5 h-5 mr-2" />
                {t("header.cv")}
              </Button>
            </Link>
            <a href="#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t("header.contact")}
              </Button>
            </a>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm dark:bg-white/5 dark:border-white/10 light:bg-white light:border-slate-200 light:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-purple-400 dark:text-purple-400 light:text-purple-600" />
                {t("about.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 dark:text-slate-300 light:text-slate-700 space-y-4">
              <p>
                <strong>{t("about.paragraph1")}</strong>
              </p>
              <p>
                <strong>{t("about.paragraph2")}</strong>
              </p>
              <p>
                <strong>{t("about.paragraph3")}</strong>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white dark:text-white light:text-slate-900 mb-8 text-center flex items-center justify-center gap-2">
            <Rocket className="w-8 h-8 text-purple-400 dark:text-purple-400 light:text-purple-600" />
            {t("experience.title")}
          </h2>
          <div className="space-y-6">
            {experienceKeys.map((expKey, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm dark:bg-white/5 dark:border-white/10 light:bg-white light:border-slate-200 light:shadow-lg"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-white dark:text-white light:text-slate-900">
                        {t(`experience.positions.${expKey}.title`)}
                      </CardTitle>
                      <CardDescription className="text-purple-300 dark:text-purple-300 light:text-purple-700 font-medium">
                        <a
                          href={t(`experience.positions.${expKey}.companyLink`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {t(`experience.positions.${expKey}.company`)}
                        </a>
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className={`w-fit mt-2 md:mt-0 font-medium ${
                        t(`experience.positions.${expKey}.period`).includes(
                          t("experience.current")
                        )
                          ? "border-emerald-600 text-emerald-400 bg-emerald-950/30 dark:border-emerald-600 dark:text-emerald-400 dark:bg-emerald-950/30 light:border-emerald-600 light:text-emerald-700 light:bg-emerald-50"
                          : "border-slate-500 text-slate-300 bg-slate-800/30 dark:border-slate-500 dark:text-slate-300 dark:bg-slate-800/30 light:border-slate-400 light:text-slate-600 light:bg-slate-100"
                      }`}
                    >
                      {t(`experience.positions.${expKey}.period`)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <div className="space-y-3">
                    {(
                      t(`experience.positions.${expKey}.projects`, {
                        returnObjects: true,
                      }) as string[]
                    ).map((project: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-400 dark:bg-purple-400 light:bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm leading-relaxed">{project}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white dark:text-white light:text-slate-900 mb-8 text-center">
            {t("skills.title")}
          </h2>
          <div className="space-y-8">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-300 dark:text-purple-300 light:text-purple-700">
                  {t(`skills.${category}`)}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-700/50 hover:border-slate-500 hover:text-white dark:bg-slate-800/50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700/50 light:bg-slate-100 light:border-slate-300 light:text-slate-700 light:hover:bg-slate-200 px-4 py-2 text-sm transition-all duration-300 font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center" id="contact">
          <h2 className="text-3xl font-bold text-white dark:text-white light:text-slate-900 mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-300 light:text-slate-700 mb-8 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>

          <a
            href="mailto:mateus-schultz@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3"
            >
              <Mail className="w-5 h-5 mr-2" />
              {t("cta.button")}
            </Button>
          </a>
        </section>
      </div>
    </div>
  );
}
