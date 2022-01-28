export default function About() {
  return (
    <section className="bg-background p-4">
      <h1 className="text-3xl text-white pb-4 ">About Me</h1>
      <div className="md:w-2/5">
        <p className="text-lg text-white font-medium">
          Hi, welcome to my portfolio. I&apos;m a web developer who works mainly
          with <span className="text-primary">React</span>,{" "}
          <span className="text-primary">Next.js</span>, and the{" "}
          <span className="text-primary">JAMstack</span>. I enjoy building
          dynamic and beautiful websites for the modern web. I&apos;m also a
          writer who enjoys delving into different topics. You can read my work
          at
          <a
            className="text-primary "
            href="https://vinciix.com"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            vinciix.com &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
