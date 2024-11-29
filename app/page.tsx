import React from "react";
import Hero from "../components/hero";
import projects from "../shared/projects.json";
import Card from "../components/ui/card";
import { WorkExperience } from "../components/workExperience";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <WorkExperience />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-4" id="projects">
          Projects
        </h2>
        <div className="grid grid-cols-autofit gap-4">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
}
