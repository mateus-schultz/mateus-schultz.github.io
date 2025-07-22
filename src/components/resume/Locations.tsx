import { HTMLAttributes, memo } from "react";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";

import { Resume } from "@/types/resume";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  resume: Resume;
}

// Memoized Locations component
export const Locations = memo<Props>(({ resume, className, ...rest }) => {
  return (
    <div className={cn("flex flex-col gap-0.5", className)} {...rest}>
      {resume.locations.map((location) => (
        <Link
          key={location.link}
          to={location.link}
          title={location.name}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:underline text-sm text-black/80"
        >
          <FaGlobe className="h-4 w-4" />
          {location.name}
        </Link>
      ))}
    </div>
  );
});

Locations.displayName = "Locations";
