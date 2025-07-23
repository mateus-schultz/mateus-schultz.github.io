import { HTMLAttributes, memo } from "react";
import { Link } from "react-router-dom";

import { Resume } from "@/types/resume";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  resume: Resume;
}

// Memoized Links component
export const Links = memo<Props>(({ resume, className, ...rest }) => {
  if (!resume.contact.email && !resume.contact.phone) return null;

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-1.5 md:items-center",
        className
      )}
      {...rest}
    >
      {resume.contact.email && (
        <Link
          to={`mailto:${resume.contact.email}`}
          title={resume.contact.email}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:underline text-sm text-black/80"
        >
          <div className="h-4 w-4 bg-black/80 min-w-4 min-h-4 rounded-full text-white flex justify-center items-center text-xs" />
          {resume.contact.email}
        </Link>
      )}

      {resume.contact.phone && (
        <Link
          to={`tel:${resume.contact.phone}`}
          title={resume.contact.phone}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:underline text-sm text-black/80"
        >
          <div className="h-4 w-4 bg-black/80 min-w-4 min-h-4 rounded-full text-white flex justify-center items-center text-xs" />
          {resume.contact.phone}
        </Link>
      )}
    </div>
  );
});

Links.displayName = "Links";
