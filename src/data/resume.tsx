import { Icons } from "@/components/icons";

export const DATA = {
  name: "Neerajkumar",
  initials: "NC",
  url: "https://neerajkumar.vercel.app/",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Frontend & Mobile Developer building pixel-perfect web and mobile experiences with Next.js, React, and React Native.",
  summary:
    "I specialize in building dynamic web and mobile applications using Next.js, React, and React Native. I love crafting responsive designs with Tailwind CSS and ensuring smooth data management. My focus is on writing clean, maintainable code and delivering high-quality user experiences.",
  avatarUrl: "/me.webp",
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
        "Building and maintaining mobile apps with React Native, focusing on responsive UI, API integration, and high-performance cross-platform features.",
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
        "Developed responsive web applications using Next.js and Tailwind CSS, focusing on state management and UI implementation.",
    },
  ],
  projects: [
    {
      title: "YouTube Playlist Organiser",
      href: "https://yt-playlist-organiser.vercel.app/",
      dates: "2025",
      active: true,
      type: "Website",
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
      type: "App",
      description:
        "A minimal financial tracker that helps you keep track of your expenses and income. Built with Next.js, TypeScript, and Tailwind CSS, offering a clean and user-friendly interface for managing your finances.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "App",
          href: "https://mift.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/mift.png",
      video: "",
    },
  ],
} as const;
