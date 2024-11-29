import { Link } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Card({ project }) {
  const { title, description, url, github, technologies } = project;
  return (
    <div className="relative group hover:-translate-y-2">
      <div className="bg-[#13233F] rounded shadow-lg relative h-full p-4 mb-12">
        <h1 className="font-bold text-primary text-2xl mb-2 group-hover:text-accent">
          {title}
        </h1>
        <p className="text-primary text-base w-10/12">{description}</p>
      </div>
      <div className="absolute bottom-2 px-4 w-full">
        <hr className="border-primary border " />
        <p className="text-gray-300">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block text-gray-200 text-sm  mr-2"
            >
              {tech}
            </span>
          ))}
        </p>
      </div>
      <span className="absolute right-5 top-5 flex ">
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithub className="text-primary text-lg hover:text-accent " />
          </a>
        )}
        <a href={url} target="_blank" rel="noreferrer">
          <Link className="text-primary ml-2 text-lg hover:text-accent" />
        </a>
      </span>
    </div>
  );
}
