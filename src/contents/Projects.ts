import { IconType } from "react-icons";

import { BiWorld } from "react-icons/bi";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";

type ProjectsType = {
  id: number;
  name: string;
  image: string;
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
  image: string;
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
    image:
      "https://img.freepik.com/free-vector/search-concept-yellow-folder-magnifier-icons-hand-drawn-cartoon-art-illustration_56104-891.jpg?w=900&t=st=1681102085~exp=1681102685~hmac=bafca06cf9f7eb50ffe8d640e5a84447abfc42d4f543f0ccffa6893bc10abfed",
    website: "https://www.anilearn.dev/",
    github: "https://github.com/AliReza1083/AniLearn.dev",
    product_hunt: null,
    twitter: null,
    links: [
      {
        id: 1,
        name: "Website",
        icon: BiWorld,
        href: "https://www.anilearn.dev",
      },
      {
        id: 2,
        name: "GitHub",
        icon: AiFillGithub,
        href: "https://github.com/AliReza1083/AniLearn.dev",
      },
      // {
      //   id: 3,
      //   name: "Product Hunt",
      //   icon: FaProductHunt,
      //   href: "#",
      // },
      // {
      //   id: 3,
      //   name: "Twitter",
      //   icon: AiOutlineTwitter,
      //   href: "#",
      // },
    ],
  },
  {
    id: 2,
    name: "Asakatsu",
    description:
      "A project where you can keep track of your goal's progress, and contribute to open source in the same time.",
    image:
      "https://img.freepik.com/free-vector/search-concept-yellow-folder-magnifier-icons-hand-drawn-cartoon-art-illustration_56104-891.jpg?w=900&t=st=1681102085~exp=1681102685~hmac=bafca06cf9f7eb50ffe8d640e5a84447abfc42d4f543f0ccffa6893bc10abfed",
    website: "https://www.anilearn.dev/",
    github: "https://github.com/AliReza1083/AniLearn.dev",
    product_hunt: null,
    twitter: null,
    links: [
      {
        id: 1,
        name: "Website",
        icon: BiWorld,
        href: "https://asakatsu-website.netlify.app/",
      },
      {
        id: 2,
        name: "GitHub",
        icon: AiFillGithub,
        href: "https://github.com/asakatsuOrg/Asakatsu-Website",
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
        href: "https://twitter.com/Ali_Developer05/status/1607304669491257345?t=_mCwr4PEncWJaVjchmUZng&s=19",
      },
    ],
  },
];