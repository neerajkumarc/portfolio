import { Icons } from "@/components/icons";

export const DATA = {
  name: "Neerajkumar",
  initials: "NC",
  url: "https://neerajkumar.vercel.app/",
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
      company: "Cogitare Labs LLP",
      href: "#",
      badges: [],
      location: "Remote",
      title: "React Native Developer",
      logoUrl: "/work/cogitarelabs.png",
      start: "Nov 2024",
      end: "Present",
      description:
        "Currently developing and maintaining mobile applications using React Native, ensuring cross-platform compatibility and optimal performance. Working on implementing responsive UI components, integrating RESTful APIs, and utilizing native device features. Collaborating with the team to deliver high-quality mobile solutions while following best practices and maintaining code quality.",
    },
    {
      company: "Cogitare Labs LLP",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/work/cogitarelabs.png",
      start: "Aug 2024",
      end: "Nov 2024",
      description:
        "Built and maintained responsive user interfaces with Next.js and Tailwind CSS for seamless user experiences, collaborating closely with backend teams to implement features, resolve issues, and ensure a cohesive product. Leveraged AWS for efficient image uploads and storage, implemented real-time socket communication, and optimized load times to enhance frontend performance. Utilized state management tools like Zustand and Context API for efficient application state management, and developed reusable components for a clean, scalable codebase, contributing to the project’s overall maintainability.",
    },
  ],
  projects: [
    {
      title: "YouTube Playlist Organiser",
      href: "https://yt-playlist-organiser.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "A Next.js application that helps you organize and manage your YouTube playlists efficiently using AI. Features include viewing and managing playlists, organizing videos within playlists, and a clean, modern user interface.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "YouTube Data API",
        "AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://yt-playlist-organiser.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/yt-playlist.png",
      video: "",
    },
    {
      title: "mift",
      href: "https://mift.vercel.app/",
      dates: "2025",
      active: false,
      description:
        "A minimal financial tracker that helps you keep track of your expenses and income. Built with Next.js, TypeScript, and Tailwind CSS, offering a clean and user-friendly interface for managing your finances.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://mift.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/mift.png",
      video: "",
    },
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
      active: false,
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
      active: false,
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
      active: false,
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
