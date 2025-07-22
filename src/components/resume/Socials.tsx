import { HTMLAttributes, memo } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaGlobe, FaCalendarDay } from "react-icons/fa";

import { Resume } from "@/types/resume";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  resume: Resume;
}

// Memoized Socials component
export const Socials = memo<Props>(({ resume, className, ...rest }) => {
  return (
    <div className={cn("flex gap-1.5 items-center", className)} {...rest}>
      {resume.contact.email && (
        <Link
          to={`mailto:${resume.contact.email}`}
          title={resume.contact.email}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black transition-all duration-300 hover:scale-105 rounded size-8 items-center justify-center flex"
        >
          <span className="sr-only">{resume.contact.email}</span>
          <FaEnvelope className="h-4 w-4" />
        </Link>
      )}
      {resume.contact.phone && (
        <Link
          to={`tel:${resume.contact.phone}`}
          title={resume.contact.phone}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black transition-all duration-300 hover:scale-105 rounded size-8 items-center justify-center flex"
        >
          <span className="sr-only">{resume.contact.phone}</span>
          <FaPhone className="h-4 w-4" />
        </Link>
      )}
      {resume.contact.socials?.map((social) => {
        const Icon = social.icon;

        return (
          <Link
            key={social.name}
            title={social.name}
            to={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black transition-all duration-300 hover:scale-105 rounded size-8 items-center justify-center flex"
          >
            <span className="sr-only">{social.name}</span>
            <Icon className="h-4 w-4" />
          </Link>
        );
      })}
      {resume.contact.website && (
        <Link
          to={resume.contact.website}
          title="Website/Portfolio/Resume/CV"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black transition-all duration-300 hover:scale-105 rounded size-8 items-center justify-center flex"
        >
          <span className="sr-only">Website/Portfolio/Resume/CV</span>
          <FaGlobe className="h-4 w-4" />
        </Link>
      )}
      {resume.contact.call && (
        <Link
          to={resume.contact.call}
          title="Book a Call"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black transition-all duration-300 hover:scale-105 rounded size-8 items-center justify-center flex"
        >
          <span className="sr-only">Book a Call</span>
          <FaCalendarDay className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
});

Socials.displayName = "Socials";
