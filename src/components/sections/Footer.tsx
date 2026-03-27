"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-flax text-charcoal py-12 border-t border-charcoal/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo / Name */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-heading-sm font-bold uppercase tracking-tighter mb-1">
              Ayush Puri
            </h2>
            <p className="text-micro opacity-40 uppercase tracking-widest">— Full-Stack Developer</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-10">
            {["Tech Stacks", "Live Projects", "About", "Contact" ].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(" ", "-")}`} 
                className="text-micro font-bold uppercase tracking-widest hover:opacity-50 transition-opacity"
                data-cursor
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-right">
             <p className="text-micro font-bold opacity-30 uppercase tracking-widest">
              © {currentYear} Ayush Puri · Built with intent.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
