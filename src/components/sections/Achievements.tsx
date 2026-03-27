"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    id: "01",
    title: "Led Full-Stack Platform Development",
    description:
      "Built Delraw end-to-end: owned system architecture, backend design (NestJS + PostgreSQL + Prisma) and frontend integration (Next.js). Delivered a production-ready supplier marketplace from concept to deployment.",
  },
  {
    id: "02",
    title: "Operating Officer — Coding Ninjas LPU",
    description:
      "Led and managed multiple technical and non-technical events, coordinated cross-functional teams and drove community growth. Mentored peers in competitive programming and web development.",
  },
];

export default function Achievements() {
  return (
    <section id="wins" className="bg-charcoal text-flax py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20 md:mb-32">
          <h2 className="text-label font-bold tracking-[0.2em] opacity-40 uppercase">
            ( Highlights )
          </h2>
          <p className="text-heading-sm max-w-xl leading-snug tracking-tighter uppercase">
            Key milestones and leadership roles that define my professional journey.
          </p>
        </div>

        <div className="flex flex-col border-t border-flax/10">
          {achievements.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group flex flex-col md:grid md:grid-cols-[100px_1fr_auto] items-start md:items-center py-12 md:py-16 border-b border-flax/10 hover:bg-flax/[0.02] transition-colors px-4 -mx-4 rounded-xl"
              data-cursor
            >
              <span className="text-micro font-bold opacity-30 mb-4 md:mb-0">( {item.id} )</span>
              <div className="flex-1 pr-10">
                <h3 className="text-heading-md uppercase tracking-tighter mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-body-lg text-flax/50 max-w-3xl leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-8 md:mt-0 w-12 h-12 rounded-full border border-flax/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
