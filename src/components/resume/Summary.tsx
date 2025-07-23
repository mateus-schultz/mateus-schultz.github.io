import { HTMLAttributes, memo } from "react";
import { Link } from "react-router-dom";

import { Resume } from "@/types/resume";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  resume: Resume;
}

// Memoized Summary component
export const Summary = memo<Props>(({ resume, className, ...rest }) => {
  return (
    <div className={cn("w-full flex flex-col", className)} {...rest}>
      <Link
        to={resume.summaryLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black/90 hover:underline font-bold text-lg"
        title={resume.summary}
      >
        {resume.summary}
      </Link>
    </div>
  );
});

Summary.displayName = "Summary";
