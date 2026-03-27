"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "Delraw Supplier Platform",
    desc: "A full-stack supplier marketplace enabling seamless supplier onboarding, product management, and order tracking. Features a comprehensive admin dashboard and supplier portal.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/ayush-puri1/delraw-supplier",
    color: "bg-charcoal-mid/80",
    image: "/images/delraw_sup.png"
  },
  {
    id: "02",
    title: "Eventone Platform",
    desc: "An event discovery and management platform with AI-powered recommendations. Users can browse, create, and manage events with an intuitive interface and intelligent suggestion engine.",
    tags: ["ReactJS", "Node.js", "Express", "MongoDB", "Gemini API"],
    liveUrl: "#",
    githubUrl: "https://github.com/ayush-puri1/eventone",
    color: "bg-charcoal/80",
    image: "/images/eventone.png"
  },
  {
    id: "03",
    title: "Coding Ninjas Community",
    desc: "Platform for managing student events and technical workshops. Facilitates communication between mentors and students while tracking progress and attendance.",
    tags: ["React", "Firebase", "Tailwind", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    color: "bg-charcoal/80",
    image: "/images/codingninjas.png" // Placeholder until found
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      id="live-projects"
      className="bg-charcoal text-flax relative w-full pt-10 overflow-hidden"
    >
      {/* Premium Gradient Background Layer */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 w-full h-[120%] bg-[radial-gradient(circle_at_50%_50%,_rgba(242,235,224,0.05)_0%,_transparent_70%)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal" />
      </div>

      {/* Header */}
      <div className="px-6 md:px-12 py-12 sticky top-0 bg-charcoal/40 backdrop-blur-md z-30 border-b border-flax/10">
        <h2 className="text-heading-lg uppercase tracking-tighter">Projects</h2>
      </div>

      <div className="relative z-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`sticky w-full h-screen ${project.color} backdrop-blur-sm flex flex-col justify-center border-t border-flax/10 origin-top shadow-[0_-10px_50px_rgba(0,0,0,0.7)]`}
            style={{
              top: `calc(${index * 48}px)`,
              zIndex: index + 1
            }}
          >
            <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-10 lg:gap-20 h-[90vh] py-10">

              {/* Left: Giant Index Number & Title */}
              <div className="lg:w-1/4 flex flex-col justify-between py-6 md:py-12">
                <div className="flex flex-col gap-4">
                  <span className="text-micro font-bold opacity-30 tracking-[0.2em]">
                    ( PROJECT {project.id} )
                  </span>
                  <h3 className="text-heading-sm md:text-heading-md uppercase tracking-tighter text-flax leading-tight">
                    {project.title}
                  </h3>
                </div>
                <span className="hidden lg:block text-[12rem] xl:text-[20rem] leading-none font-black text-flax/5 tracking-tighter -ml-4 select-none">
                  {project.id}.
                </span>
              </div>

              {/* Right: Immersive Project Card */}
              <div className="lg:w-3/4 flex flex-col justify-between h-full">

                <div className="bg-charcoal-mid/40 rounded-[3rem] w-full flex-[1.5] relative group overflow-hidden border border-flax/10 shadow-3xl">
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center backdrop-blur-md cursor-pointer">
                    <span className="bg-flax text-charcoal font-bold px-12 py-6 rounded-full uppercase tracking-[0.2em] transform scale-90 group-hover:scale-100 transition-all duration-700 shadow-2xl">
                      View Project
                    </span>
                  </div>

                  {/* Project Image */}
                  <div className="absolute inset-0 p-3 md:p-6">
                    <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.02]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Subtle Grain over image */}
                  <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-noise" />
                </div>

                <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-4">
                  <div className="max-w-2xl">
                    <p className="text-body-md md:text-body-lg text-flax/80 leading-relaxed mb-6">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="border border-flax/20 bg-flax/5 px-4 py-1.5 rounded-full text-[0.65rem] md:text-micro text-flax/60 hover:bg-flax/10 hover:text-flax transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-label hover:text-flax transition-colors uppercase font-bold tracking-widest border-b-2 border-flax/30 pb-1 hover:border-flax"
                      data-cursor
                    >
                      Source Code
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
        <div className="h-[20vh] bg-charcoal" />
      </div>
    </section>
  );
}
