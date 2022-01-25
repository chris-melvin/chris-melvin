import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

export default function ProjectCard({ project }) {
  const { title, description, url, github, technologies } = project;
  return (
    <div className="relative">
      <div className="bg-secondary rounded shadow-lg relative h-full p-4 mb-12">
        <h1 className="font-bold text-white text-2xl mb-2">{title}</h1>
        <p className="text-white text-base w-10/12">{description}</p>
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
            <AiFillGithub className="text-gray-300 text-lg hover:text-primary " />
          </a>
        )}
        <a href={url} target="_blank" rel="noreferrer">
          <AiOutlineLink className="text-gray-300 ml-2 text-lg hover:text-primary" />
        </a>
      </span>
    </div>
  );
}
