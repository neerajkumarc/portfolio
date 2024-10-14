import { Icons } from "@/components/icons";

export const DATA = {
  name: "Neerajkumar",
  initials: "NC",
  url: "https://example.com",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Frontend Engineer proficient in TypeScript, Next.js, and React, dedicated to developing user-friendly applications.",
  summary:
    "A frontend engineer, specialize in building dynamic web applications using TypeScript, Next.js, and React. I love using Tailwind CSS to create responsive designs and manage data with PostgreSQL, which keeps everything running smoothly. I&apos;m all about writing clean code and keeping up with the latest trends, aiming to deliver high-quality projects that users actually enjoy—without any pesky bugs, of course!",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "MongoDB",
    "TailwindCSS",
    "Zustand",
    "TanStack Query",
    "React Native",
    "Shadcn UI",
    "Firebase",
    "Express.js",
  ],
  contact: {
    email: "chaudharyneeraj91@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/neerajkumarc",
        icon: Icons.github,

        navbar: true,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/neerajkumar31",
        icon: Icons.linkedin,

        navbar: true,
      },
      {
        name: "Twitter",
        url: "https://x.com/neerajkumar_31",
        icon: Icons.x,

        navbar: true,
      },
      {
        name: "Email",
        url: "mailto: chaudharyneeraj91@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    ],
  },

  work: [
    {
      company: "Stealth Startup",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/startup.png",
      start: "Aug 2024",
      end: "Present",
      description:
        "Developing user-friendly web application using TypeScript, Next.js, and React. Utilizing TanStack Query for data fetching and Zustand for state management. Also building a mobile app using React Native and TypeScript.",
    },
  ],
  projects: [
    {
      title: "Global-Gamers-Hub",
      href: "https://globalgamers-hub.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A trusted platform where gamers can buy, sell, and trade their favorite game accounts and Items and other gaming assets securely. Featuring easy-to-use tools for users and an admin dashboard for seamless asset management.",
      technologies: ["Next.js", "Gemini AI API"],
      links: [
        {
          type: "Website",
          href: "https://globalgamers-hub.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "JobHunt",
      href: "https://jobhuntai.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Helps users craft cold emails, cover letters, and interview questions using tailored generators. Generated 100+ letters and questions in 2 weeks post-launch.",
      technologies: ["Next.js", "Gemini AI API"],
      links: [
        {
          type: "Website",
          href: "https://jobhuntai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI Quiz Generator",
      href: "https://aiquizgenerator.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "AI-powered quiz generation from text with dynamic content and an interactive interface. Generated 300+ quizzes in a month.",
      technologies: ["Node.js", "Express.js", "Gemini AI API"],
      links: [
        {
          type: "Website",
          href: "https://aiquizgenerator.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Endless Chain Story",
      href: "https://endlesschainstory.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Created a collaborative storytelling platform allowing users to contribute sentences to an ongoing narrative, featuring sentence validation and device fingerprinting.",
      technologies: ["Next.js", "Firebase", "Gemini AI API"],
      links: [
        {
          type: "Website",
          href: "https://endlesschainstory.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
