"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="flex items-start justify-between px-6 py-8 md:px-12 w-full text-charcoal">
      <div className="font-bricolage font-bold text-2xl tracking-tighter uppercase">
        AYUSH®
      </div>
      
      <div className="hidden md:flex flex-col text-[10px] font-bold tracking-widest text-charcoal/50 uppercase leading-relaxed max-w-[200px]">
        <span>AVAILABLE FOR FREELANCERS</span>
        <span>WORK AND COLLABORATION</span>
      </div>

      <div className="hidden lg:flex items-center gap-8 font-bricolage font-medium text-[1.1rem]">
        {["Tech Stacks", "Live Projects", "About", "Contact" ].map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase().replace(" ", "-")}`} 
            className="hover:opacity-70 transition-opacity"
            data-cursor
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
