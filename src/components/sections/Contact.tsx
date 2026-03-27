"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal text-flax py-24 md:py-48 overflow-hidden border-t border-flax/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Large Heading */}
        <div className="mb-20 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-hero-huge uppercase tracking-tighter leading-none"
          >
            Let&apos;s Talk <br />
            <span className="opacity-40 italic">Together /</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-end">
          {/* Left: Email */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-micro font-bold opacity-30 mb-8 uppercase tracking-[0.2em]">
              ( Contact Details )
            </p>
            <a
              href="mailto:sawanpuri011@gmail.com"
              className="text-heading-md hover:italic transition-all duration-300 block mb-4 underline decoration-flax/20 underline-offset-8"
              data-cursor
            >
              sawanpuri011@gmail.com
            </a>
            <p className="text-body-lg text-flax/50 max-w-sm">
              Currently open to new opportunities, collaborations, and interesting projects.
              Let&apos;s build something impactful.
            </p>
          </motion.div>

          {/* Right: Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col gap-8 md:items-end"
          >
            <p className="text-micro font-bold opacity-30 mb-4 uppercase tracking-[0.2em] md:text-right">
              ( Socials )
            </p>
            <div className="flex flex-col md:items-end gap-4">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/in/ayush-puri-b313b9298/" },
                { name: "GitHub", url: "https://github.com/ayush-puri1" },

              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-heading-sm uppercase tracking-tighter hover:translate-x-4 md:hover:-translate-x-4 transition-transform duration-500 flex items-center gap-4"
                  data-cursor
                >
                  <span className="text-micro opacity-20 hidden md:block">/</span>
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
