import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Javed Ansari",
  initials: "JD",
  url: "",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "Software Engineer and Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "In 2021, I embarked on a transformative journey that would shape my future in ways I could never have imagined. It all began when I made the pivotal decision to pursue a Bachelor of Technology in Computer Science Engineering (BTech CSE). This choice was not just an academic step; it was a leap into a world filled with endless possibilities and challenges that would ignite my passion for technology and innovation. So far I've participated in more than 5 Hackathons and more than 10 dev conferences.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "AWS",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Cloud",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "javedans2003@gmail.com",
    tel: "+91-8298342254",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mdansarijaved",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mdansarijaved",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/javedAns003",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@juniordeveloper19",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "javedans2003@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "https://github.com/mdansarijaved",
      badges: [],
      location: "Remote",
      title: "Freelance devleoper",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "current",
      description:
        " Collaborated with clients to understand their unique challenges and deliver tailored solutions. I take pride in my ability to problem-solve and innovate, ensuring that each project not only meets but exceeds expectations. My commitment to continuous learning keeps me updated with the latest technologies and best practices, allowing me to provide cutting-edge solutions that drive success for my clients.",
    },
  ],
  education: [
    {
      school: "Chandigarh University",
      href: "https://cuchd.in",
      degree: "Bachelor's Degree of Computer Science (BE)",
      logoUrl: "/cu.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Vishwakarmawoodworks",
      href: "https://vishwakarmawoodworks.com",
      dates: "Sep 2024 - Nov 2024",
      active: true,
      description: "A Furniture Ecommerce project.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://vishwakarmawoodworks.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://ik.imagekit.io/3c5crosq1/viswa.mov/ik-video.mp4?updatedAt=1734002991089",
    },
    {
      title: "Trekyaari",
      href: "https://trekyaari.com",
      dates: "June 2024 - Sep 2024",
      active: true,
      description: "Designed, developed a trekking cum tour package website.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Razorpay",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://trekyaari.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://ik.imagekit.io/3c5crosq1/Screen%20Recording%202024-12-12%20at%204.59.50%E2%80%AFPM.mov/ik-video.mp4?updatedAt=1734003291752",
    },
  ],
  hackathons: [
    {
      title: "Tech Hacks 4.0",
      dates: "November 23rd - 25th, 2023",
      location: "Chandigarh, India",
      description:
        "Developed a self hosting platform an alternative of vercel for the people who like to do things their own way",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackCBS 6.0 2023",
      dates: "September 14th - 16th, 2023",
      location: "Delhi, India",
      description: "Developed a UI component market place for developers",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackHound",
      dates: "March 23rd - 24th, 2022",
      location: "New Delhi, India",
      description:
        "Developed a Interestial themed online food delivery webiste.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
  ],
} as const;
