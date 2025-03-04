import CustomCard from "@/components/ui/CustomCard/CustomCard";
import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  image: string;
  live: string;
  github?: string;
  links?: {
    title: string;
    url: string;
  }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Code Editor",
    image: "/images/react.jpeg",
    live: "https://react-code-editor-long.vercel.app/",
    github: "https://github.com/hthanhlong/react_code_editor",
  },
  {
    id: 2,
    title: "Nike UI",
    image: "/images/nike.jpeg",
    live: "https://nike-clone-long.vercel.app/",
    github: "https://github.com/hthanhlong/nike-clone",
  },
  {
    id: 3,
    title: "Chat App",
    image: "/images/chat-app.jpeg",
    live: "https://chat-page-long.vercel.app/",
    links: [
      {
        title: "Frontend",
        url: "https://github.com/hthanhlong/chat-page",
      },
      {
        title: "Backend",
        url: "https://github.com/hthanhlong/chat-page-backend",
      },
    ],
  },
  {
    id: 4,
    title: "E-commerce",
    image: "/images/e-commerce.jpeg",
    live: "https://e-commerce-long.vercel.app/",
    links: [
      {
        title: "Frontend",
        url: "https://github.com/hthanhlong/microservice-app/tree/main/fe-a5-market",
      },
      {
        title: "Backend",
        url: "https://github.com/hthanhlong/microservice-app",
      },
    ],
  },
];

export default function PersonalProjects() {
  return (
    <CustomCard title="Personal Projects" className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {projects.map((project) => (
          <Card className="w-full text-center p-2 border-0" key={project.title}>
            <div className="relative group">
              <Image
                src={project.image}
                alt={project.title}
                width={200}
                height={200}
                className="w-full h-full object-cover hover:opacity-80 transition-all duration-300"
              />
              <Link
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700 font-bold bg-white px-2 py-1 rounded-lg text-xs hidden group-hover:block hover:opacity-80 transition-all duration-300"
                href={project.live || ""}
                target="_blank"
              >
                Live
              </Link>
            </div>
            <h1 className="text-sm lg:text-xs">{project.title}</h1>
            {project.links && project.links.length > 0 ? (
              <div className="flex gap-2">
                {project.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full lg:text-[10px] text-xs p-1 rounded-xl bg-blue-200 text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                href={project.github || ""}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:text-[10px] text-xs p-1 rounded-xl bg-blue-200 text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                Frontend
              </Link>
            )}
          </Card>
        ))}
      </div>
    </CustomCard>
  );
}
