import { IconType } from "react-icons";

import { BiWorld } from "react-icons/bi";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";

type ProjectsType = {
  id: number;
  name: string;
  description: string;
  website: string;
  github: string;
  product_hunt: null | string;
  twitter: null | string;
  links: { id: number; name: string; icon: IconType; href: string }[];
}[];

export type ProjectType = {
  id: number;
  name: string;
  description: string;
  website: string;
  github: string;
  product_hunt: null | string;
  twitter: null | string;
  links: { id: number; name: string; icon: IconType; href: string }[];
};

export const PROJECTS: ProjectsType = [
  {
    id: 1,
    name: "AniLearn.dev",
    description:
      "We provide the best content to learn something very easily. The visual descriptions of development principles that We create are very clear.",
    website: "https://www.anilearn.dev/",
    github: "https://github.com/AliReza1083/AniLearn.dev",
    product_hunt: null,
    twitter: null,
    links: [
      {
        id: 1,
        name: "Website",
        icon: BiWorld,
        href: "#",
      },
      {
        id: 2,
        name: "GitHub",
        icon: AiFillGithub,
        href: "#",
      },
      // {
      //   id: 3,
      //   name: "Product Hunt",
      //   icon: FaProductHunt,
      //   href: "#",
      // },
      {
        id: 3,
        name: "Twitter",
        icon: AiOutlineTwitter,
        href: "#",
      },
    ],
  },
  {
    id: 2,
    name: "Asakatsu",
    description:
      "A project where you can keep track of your goal's progress, and contribute to open source in the same time.",
    website: "https://www.anilearn.dev/",
    github: "https://github.com/AliReza1083/AniLearn.dev",
    product_hunt: null,
    twitter: null,
    links: [
      {
        id: 1,
        name: "Website",
        icon: BiWorld,
        href: "#",
      },
      {
        id: 2,
        name: "GitHub",
        icon: AiFillGithub,
        href: "#",
      },
      // {
      //   id: 3,
      //   name: "Product Hunt",
      //   icon: FaProductHunt,
      //   href: "#",
      // },
      {
        id: 3,
        name: "Twitter",
        icon: AiOutlineTwitter,
        href: "#",
      },
    ],
  },
];
