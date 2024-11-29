"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaUser, FaBriefcase, FaCode, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsScrolled(true);
    setHasInteracted(true);
    if (id === "about") {
      setIsScrolled(false);
      setHasInteracted(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Navigation = () => (
    <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 ">
      <button
        onClick={() => scrollToSection("about")}
        className="p-4 lg:p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all flex flex-col items-center"
      >
        <FaUser className="text-[#FFEEF2] text-xl lg:text-lg" />
        <span className="text-[#FFEEF2] text-sm lg:text-xs mt-2">About</span>
      </button>
      <button
        onClick={() => scrollToSection("experiences")}
        className="p-4 lg:p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all flex flex-col items-center"
      >
        <FaBriefcase className="text-[#FFEEF2] text-xl lg:text-lg" />
        <span className="text-[#FFEEF2] text-sm lg:text-xs mt-2">
          Experience
        </span>
      </button>
      <button
        onClick={() => scrollToSection("projects")}
        className="p-4 lg:p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all flex flex-col items-center"
      >
        <FaCode className="text-[#FFEEF2] text-xl lg:text-lg" />
        <span className="text-[#FFEEF2] text-sm lg:text-xs mt-2">Projects</span>
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className="p-4 lg:p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all flex flex-col items-center"
      >
        <FaEnvelope className="text-[#FFEEF2] text-xl lg:text-lg" />
        <span className="text-[#FFEEF2] text-sm lg:text-xs mt-2">Contact</span>
      </button>
    </div>
  );

  return (
    <section className="min-h-screen items-center bg-[#0E192F]" id="about">
      <div className="flex flex-col lg:flex-row gap-4 max-w-6xl mx-auto pt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#FFEEF2] mb-4">
            Chris Melvin Factoriza
          </h1>
          <p className="text-lg sm:text-xl text-[#FFEEF2] mb-4">
            Frontend Developer
          </p>
          <p className="text-md text-gray-400 mb-4 max-w-lg">
            I create responsive, user-centric web solutions that combine elegant
            design with powerful functionality.
          </p>
          {!hasInteracted && !isScrolled && (
            <div className="my-8">
              <Navigation />
            </div>
          )}
          <div className="flex flex-row gap-4 mt-auto">
            <a
              href="https://github.com/chris-melvin"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-[#FFEEF2] text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/chris-melvin/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-[#FFEEF2] text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/chrismelvinf_/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-[#FFEEF2] text-2xl" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-lg text-[#FFEEF2] opacity-75 px-4 lg:px-0 mx-auto">
          <p>
            Frontend development is more than just writing code—it's my way of
            turning ideas into tangible, interactive solutions. It allows me to
            break down seemingly overwhelming challenges into manageable
            components that solve real-world problems.
          </p>
          <p>
            I'm currently building{" "}
            <a
              className="hover:text-accent font-bold"
              href="https://echoess.xyz/"
              target="_blank"
              rel="noreferrer"
            >
              Echoess
            </a>
            , an edtech platform that reimagines learning. It shifts the focus
            from passive content consumption to active participation,
            encouraging collaboration and discussion to make learning more
            engaging and impactful.
          </p>
          <p>
            I previously worked at{" "}
            <a
              className="hover:text-accent font-bold"
              href="https://prosperna.com/"
              target="_blank"
              rel="noreferrer"
            >
              Prosperna
            </a>
            , an e-commerce startup, where I led the development of a
            drag-and-drop page builder. This tool empowered business owners to
            create custom web stores easily, balancing powerful functionality
            with simplicity.
          </p>
          <p>
            Outside of work, I enjoy staying active at the gym and following
            sports, especially football and Formula 1. I'm passionate about
            reading, diving into books on philosophy, psychology, and
            self-improvement, which broaden my perspective. Writing is another
            creative outlet for me, helping me organize ideas and reflect on
            experiences.
          </p>
        </div>
      </div>
      {(hasInteracted || isScrolled) && (
        <div
          className={`fixed bottom-4 left-0 right-0 lg:left-4 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:right-auto transition-all duration-300 z-40 px-4 lg:px-0 ${
            isScrolled
              ? "scale-75 lg:scale-90 opacity-50 hover:opacity-100"
              : ""
          }`}
        >
          <Navigation />
        </div>
      )}
    </section>
  );
}
