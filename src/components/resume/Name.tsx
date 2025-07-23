import { HTMLAttributes, memo } from "react";
import { Link } from "react-router-dom";

import { Resume } from "@/types/resume";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  resume: Resume;
}

// Memoized Name component
export const Name = memo<Props>(({ resume, className, ...rest }) => {
  return (
    <h1 className={cn("w-full flex flex-col", className)} {...rest}>
      <Link
        to={resume.nameLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl mb-1.5 font-bold hover:underline"
        title={`${resume.name} ${resume.nick ? `(${resume.nick})` : ""}`}
      >
        {resume.name}
      </Link>
    </h1>
  );
});

Name.displayName = "Name";
