import { IconType } from "react-icons/lib";

export type Contact = {
  website?: string;
  call?: string;
  email: string;
  phone?: string;
  cv?: string;
  resume?: string;
  linkedin?: string;
  github?: string;
  npm?: string;
  telegram?: string;
  twitter?: string;
  socials?: {
    name: string;
    url: string;
    icon: IconType;
  }[];
};
