import CustomCard from "@/components/ui/CustomCard/CustomCard";
import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Code Editor",
    image: "/images/react.jpeg",
    github: "https://github.com/hthanhlong/react_code_editor",
  },
  {
    id: 2,
    title: "Nike UI",
    image: "/images/nike.jpeg",
    github: "https://github.com/hthanhlong/nike-clone",
  },
  {
    id: 3,
    title: "Chat App",
    image: "/images/chat-app.jpeg",
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
    title: "E-commerce",
    image: "/images/e-commerce.jpeg",
    github: "https://github.com/your-repo/e-commerce",
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
      <div className="flex flex-col gap-2 lg:flex-row">
        {projects.map((project) => (
          <Card className="w-full text-center p-2 border-0" key={project.title}>
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
            <h1 className="text-xs">{project.title}</h1>
            {project.links && project.links.length > 0 ? (
              <div className="flex gap-2">
                {project.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-[8px] p-1 rounded-xl bg-blue-200 text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300"
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
                className="w-full text-[8px] p-1 rounded-xl bg-blue-200 text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300"
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
