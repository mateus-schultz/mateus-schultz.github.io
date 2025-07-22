import { HTMLAttributes, memo } from "react";
import { Link } from "react-router-dom";

import { Resume } from "@/types/resume";
import { cn } from "@/lib/utils";
import { Markdown } from "@/components/Markdown";
import { Heading } from "@/components/Heading";

interface Props extends HTMLAttributes<HTMLDivElement> {
  resume: Resume;
}

// Memoized About component
export const About = memo<Props>(({ resume, className, ...rest }) => {
  return (
    <div className={cn("flex flex-col gap-3 w-full", className)} {...rest}>
      <Heading level={2} className="">
        About
      </Heading>
      <Link to={resume.aboutLink} target="_blank" rel="noopener noreferrer">
        <div className="w-full flex flex-col gap-3">
          {resume.about?.map((content, index) => (
            <div key={`${content.title}-${index}`}>
              {content.title && <b>{content.title}:</b>}{" "}
              {content.description && (
                <Markdown>{content.description}</Markdown>
              )}
              {content.items && content.items.length > 0 && (
                <span> {content.items.join(" • ")}</span>
              )}
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
});

About.displayName = "About";
