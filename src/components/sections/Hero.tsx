"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let mouseX = -9999;
    let mouseY = -9999;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(20, 20, 20, 0.15)";

      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.vx += (dx / dist) * force * 0.4;
          p.vy += (dy / dist) * force * 0.4;
        }

        // Dampen & Move
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x += p.vx;
        p.y += p.vy;

        // Bounce/Wrap
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw individual dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    initParticles();
  }, [initParticles]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-2 pb-12 bg-flax text-charcoal overflow-hidden">
      {/* Particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      />
      {/* Top Navbar */}
      <Navbar />

      {/* Center: Massive banner text (Static with reveal) */}
      <div className="flex-1 flex items-center justify-center -mt-6 sm:-mt-10 px-4">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%", rotate: 5 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-hero-huge uppercase whitespace-nowrap"
          >
            AYUSH PURI <span className="text-charcoal-border">*</span>
          </motion.h1>
        </div>
      </div>

      {/* Bottom Area: Bio, Image */}
      <div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-end w-full">
        {/* Left: Arrow & Bio & Resume */}
        <div className="flex flex-col gap-5 md:pb-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-charcoal/30 mb-5"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
            <p className="text-body-lg text-charcoal/80 max-w-[280px] leading-relaxed mb-8">
              A Full-Stack Developer. 2x Hackathon Winner. ReactJS · Node.js · Next.js · PostgreSQL.
              Currently Operating Officer at Coding Ninjas LPU.
            </p>
            <a
              href="/AyushCV.pdf"
              download
              data-cursor
              className="bg-charcoal text-flax px-8 py-4 rounded-full text-label tracking-[0.2em] inline-block hover:scale-105 transition-transform duration-300"
            >
              RESUME
            </a>
          </motion.div>
        </div>

        {/* Center: Portrait Image Placeholder */}
        <div className="flex justify-center md:col-span-1">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[300px] aspect-[4/5] bg-charcoal/5 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
          >
            <Image
              src="/hero-portrait.jpeg"
              alt="Ayush Puri Portrait"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Right: Empty for balance */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
}
