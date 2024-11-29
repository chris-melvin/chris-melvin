export const WorkExperience = () => {
  const experiences = [
    {
      title: "Developer",
      company: "Echoess",
      years: "2024 - Present",
      description:
        "Developed a comprehensive learning platform using Next.js, Supabase, and Tailwind CSS, implementing advanced educational technologies that enhance student engagement and knowledge retention.",
    },
    {
      title: "Software Developer",
      company: "Prosperna",
      years: "2022 - 2024",
      description:
        "Designed and maintained a high-quality, responsive UI for an e-commerce platform, ensuring smooth user experiences and increased engagement.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12" id="experiences">
      <div className="grid md:grid-cols-[300px_1fr] gap-8">
        <div className="flex items-center">
          <h2 className="text-3xl font-bold text-primary">Work Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-gray-200 pl-6 relative"
            >
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
              <h3 className="text-xl font-semibold text-accent">{exp.title}</h3>
              <div className="text-primary opacity-75 mb-2">
                <span>{exp.company}</span>
                <span className="mx-2">•</span>
                <span>{exp.years}</span>
              </div>
              <p className="text-primary opacity-75">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
