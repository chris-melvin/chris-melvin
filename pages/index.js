import Head from "next/head";
import Hero from "../components/hero";
import Script from "next/script";
import ProjectCard from "../components/project-card";
import projects from "../shared/projects.json";
import Contact from "../components/contact";
import About from "../components/aboutme";
import Button from "../components/button";
import ContactMe from "../components/contactme";

export default function Home({ filecontent }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
      />
      <Hero>
        <div className="w-2/3 ml-10 pt-48">
          <h1 className="text-2xl md:text-6xl text-white font-bold">
            Hi,
            <br /> I’m <span className="text-primary">Chris Melvin</span>
            , <br />
            Web Developer
          </h1>
          <p className="text-sm md:text-lg text-gray-100 mt-2 md:mt-4 ml-1">
            Jamstack Developer, Front-End Developer
          </p>
          <Button>Contact</Button>
        </div>
      </Hero>
      <About />
      <section className="bg-background p-4">
        <h1 className="text-3xl text-white pb-4">Projects</h1>
        <div className="grid grid-cols-autofit gap-4 items-stretch">
          {filecontent.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="bg-background p-4 ">
        <h1 className="text-3xl text-white pb-4">Contact</h1>

        <div className="flex justify-center sm:flex-wrap-reverse w-full ">
          <ContactMe />

          <div className="md:w-1/2 pt-6 px-4">
            <h2 className="text-2xl text-white ">Get In Touch </h2>
            <p className="text-lg text-white  ">
              I’m currently looking for any new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I’ll try my best to get back to you!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export const getStaticProps = async () => {
  const filecontent = await projects;
  return {
    props: { filecontent },
  };
};
