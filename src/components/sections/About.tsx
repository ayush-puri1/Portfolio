"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-charcoal text-flax py-24 md:py-48 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Large Heading */}
        <div className="mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-heading-lg uppercase tracking-tighter leading-none"
          >
            Builder, Developer, <br />
            <span className="opacity-40 italic">Tech Geek /</span>
          </motion.h2>
        </div>

        {/* Typography-Centric Layout */}
        <div className="flex flex-col gap-16 md:gap-32">
          {/* Main Bio Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start"
          >
            {/* Tag/Label */}
            <div className="lg:w-1/4">
               <span className="text-micro font-bold opacity-40 uppercase tracking-[0.2em] sticky top-40 block">
                ( Inside The Mind )
              </span>
            </div>

            {/* Bio Content */}
            <div className="lg:w-3/4 flex flex-col gap-10">
              <p className="text-heading-md leading-tight tracking-tight uppercase">
                I&apos;m Ayush Puri, a passionate Full-Stack Developer currently
                pursuing B.Tech in Computer Science at Lovely Professional
                University. I build scalable, user-focused digital products from
                scratch — architecture, backend, and frontend.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <p className="text-body-lg text-flax/60 leading-relaxed">
                  From leading end-to-end development of Delraw, a full-stack supplier
                  marketplace, to serving as Operating Officer at Coding Ninjas LPU — I
                  bring both technical depth and leadership to every project I touch.
                </p>
                <p className="text-body-lg text-flax/60 leading-relaxed">
                  My goal is to push the boundaries of what&apos;s possible on the web, 
                  leveraging modern tools like Next.js, AI, and robust system design to 
                  build impactful experiences.
                </p>
              </div>

              {/* Metadata Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-flax/10 mt-10">
                <div>
                  <p className="text-micro font-bold opacity-30 mb-2 uppercase hover:opacity-100 transition-opacity tracking-widest">( Education )</p>
                  <p className="text-body-md">B.Tech CSE, LPU</p>
                </div>
                <div>
                  <p className="text-micro font-bold opacity-30 mb-2 uppercase hover:opacity-100 transition-opacity tracking-widest">( Location )</p>
                  <p className="text-body-md">Ludhiana, India</p>
                </div>
                <div>
                  <p className="text-micro font-bold opacity-30 mb-2 uppercase hover:opacity-100 transition-opacity tracking-widest">( Experience )</p>
                  <p className="text-body-md">2+ Years Dev</p>
                </div>
                <div>
                  <p className="text-micro font-bold opacity-30 mb-2 uppercase hover:opacity-100 transition-opacity tracking-widest">( Role )</p>
                  <p className="text-body-md">Full-Stack Lead</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Large Callout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="p-10 md:p-20 bg-flax/5 rounded-[3rem] border border-flax/10 relative group"
          >
             <div className="absolute top-10 left-10 text-flax/10 text-[8rem] font-serif select-none pointer-events-none group-hover:text-flax/20 transition-colors duration-700">“</div>
             <p className="text-heading-sm italic opacity-90 leading-tight tracking-tight text-center max-w-4xl mx-auto relative z-10">
                &ldquo;Engineering software that bridges the gap between complex logic and elegant user experiences.&rdquo;
              </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
