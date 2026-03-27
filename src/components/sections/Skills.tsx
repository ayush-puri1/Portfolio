"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    id: "01",
    name: "Full-Stack Web Development",
    skills: [
      { id: "01", name: "ReactJS & Next.js", logo: "/next.svg" },
      { id: "02", name: "TypeScript & JavaScript", logo: "/file.svg" },
      { id: "03", name: "Tailwind CSS & Framer Motion", logo: "/vercel.svg" },
      { id: "04", name: "HTML & CSS", logo: "/globe.svg" },
    ],
  },
  {
    id: "02",
    name: "Backend & Databases",
    skills: [
      { id: "01", name: "Node.js & ExpressJS", logo: "/next.svg" },
      { id: "02", name: "NestJS & Prisma ORM", logo: "/next.svg" },
      { id: "03", name: "PostgreSQL & MySQL", logo: "/globe.svg" },
      { id: "04", name: "MongoDB & Supabase", logo: "/globe.svg" },
      { id: "05", name: "REST API & System Design", logo: "/window.svg" },
    ],
  },
  {
    id: "03",
    name: "Other Languages & Tools",
    skills: [
      { id: "01", name: "C++ & Java", logo: "/file.svg" },
      { id: "02", name: "Python & C", logo: "/file.svg" },
      { id: "03", name: "Git & GitHub", logo: "/globe.svg" },
      { id: "04", name: "Postman & Figma", logo: "/window.svg" },
      { id: "05", name: "Linux & Gemini API", logo: "/globe.svg" },
    ],
  },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; logo: string } | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      id="tech-stacks" 
      className="bg-charcoal text-flax py-24 md:py-32 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Logo Follower */}
      {hoveredSkill && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed pointer-events-none z-40 w-32 h-32 flex items-center justify-center bg-flax/10 backdrop-blur-md rounded-2xl border border-flax/20 overflow-hidden shadow-2xl"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y - 60,
          }}
        >
          <Image
            src={hoveredSkill.logo}
            alt={hoveredSkill.name}
            width={80}
            height={80}
            className="object-contain grayscale brightness-200"
          />
        </motion.div>
      )}

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20 md:mb-32">
          <h2 className="text-heading-sm font-bold tracking-tighter uppercase italic opacity-40">
            ( Tech Stacks )
          </h2>
          <p className="text-heading-sm max-w-xl leading-snug tracking-tighter uppercase">
            My expertise across the full development spectrum. I build from the ground up, 
            ensuring each layer is optimized for performance and impact.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-col border-t border-flax/10">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group flex flex-col md:flex-row py-12 md:py-20 border-b border-flax/10 relative"
            >
              {/* Sticky ID */}
              <div className="md:w-1/4 mb-10 md:mb-0">
                <div className="sticky top-32">
                  <span className="text-heading-sm font-bold tracking-tighter italic opacity-30">
                    ( {category.id} )
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-3/4">
                <h3 className="text-heading-md uppercase tracking-tighter mb-12 md:mb-16">
                  {category.name}
                </h3>

                <div className="flex flex-col">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.id} 
                      className="flex items-center justify-between py-6 border-t border-flax/5 first:border-t-0 group/skill cursor-none"
                      onMouseEnter={() => setHoveredSkill({ name: skill.name, logo: skill.logo })}
                      onMouseLeave={() => setHoveredSkill(null)}
                      data-cursor
                    >
                      <div className="flex items-center gap-6 md:gap-10">
                        <span className="text-micro font-bold opacity-30 font-mono">
                          {skill.id}
                        </span>
                        <span className="text-body-lg font-medium tracking-tight group-hover/skill:translate-x-4 transition-all duration-300 group-hover/skill:text-flax">
                          {skill.name}
                        </span>
                      </div>
                      <div className="w-12 h-[1px] bg-flax/10 group-hover/skill:w-20 group-hover/skill:bg-flax transition-all duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
