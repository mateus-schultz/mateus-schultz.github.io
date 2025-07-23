import { HTMLAttributes, memo } from "react";
import { Resume } from "@/types/resume";
import { cn } from "@/lib/utils";
import {
  Locations,
  Avatar,
  Socials,
  Summary,
  Name,
  Actions,
  About,
  Experience,
  Education,
  Skills,
  Projects,
  Languages,
  Links,
  Characteristics,
  Navigations,
} from "@/components/resume";

interface Props extends HTMLAttributes<HTMLDivElement> {
  resume: Resume;
}

// Memoized CV component to prevent unnecessary re-renders
export const CV = memo<Props>(({ resume, className, ...rest }) => {
  return (
    <div
      className={cn(
        "page flex relative justify-center bg-zinc-500 print:bg-none",
        className
      )}
      {...rest}
    >
      <style>{`
        @page {
          size: A4;
          margin: 0;
          padding: 0;
        }

        * {
          // Force add background color to print
          -webkit-print-color-adjust: exact !important; /* Chrome, Safari 6 – 15.3, Edge */
          color-adjust: exact !important; /* Firefox 48 – 96 */
          print-color-adjust: exact !important; /* Firefox 97+, Safari 15.4+ */
        }

        /* Smooth scrolling for hash links */
        html {
          scroll-behavior: smooth;
        }

        /* Scroll offset to account for any fixed headers */
        section[id] {
          scroll-margin-top: 2rem;
        }

        /* Highlight section when targeted by hash */
        section[id]:target {
          animation: highlightSection 2s ease-in-out;
        }

        @keyframes highlightSection {
          0% {
            background-color: rgba(59, 130, 246, 0.1);
          }
          50% {
            background-color: rgba(59, 130, 246, 0.2);
          }
          100% {
            background-color: transparent;
          }
        }
      `}</style>

      {/* Bug-free Navigations component */}
      <Navigations />

      <div
        className="m-0 flex min-h-[297mm] relative w-[210mm] flex-col bg-white p-[10mm] text-base print:bg-none"
        id="cv"
      >
        <div className="flex w-full gap-9 flex-col">
          {/* Header Section */}
          <section
            id="header"
            className="flex w-full flex-col-reverse gap-6 justify-between sm:flex-row"
          >
            <div className="flex flex-col gap-1.5">
              <div id="name-summary" className="flex flex-col">
                <Name resume={resume} />
                <Summary resume={resume} />
              </div>

              <div id="locations">
                <Locations resume={resume} />
              </div>

              <div id="contact" className="mt-1.5 flex flex-col gap-3">
                <Links resume={resume} />
                <Socials resume={resume} />
              </div>
            </div>
            <div id="avatar">
              <Avatar
                resume={resume}
                className="bg-aluminum sm:bg-transparent"
              />
            </div>
          </section>

          {/* Main Content Sections */}
          <div className="flex w-full gap-9 flex-col">
            <section id="about">
              <About resume={resume} />
            </section>
          </div>

          <section id="experience">
            <Experience resume={resume} />
          </section>

          <section id="education">
            <Education resume={resume} />
          </section>

          <section id="skills">
            <Skills resume={resume} />
          </section>

          <section id="languages">
            <Languages resume={resume} />
          </section>

          <section id="projects">
            <Projects resume={resume} />
          </section>

          <section id="characteristics">
            <Characteristics resume={resume} />
          </section>
        </div>

        <section id="actions">
          <Actions resume={resume} />
        </section>
      </div>
    </div>
  );
});

CV.displayName = "CV";
