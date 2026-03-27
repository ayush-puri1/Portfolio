"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3300);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-between bg-charcoal transition-transform duration-800 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Subtle border glow */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(242,235,224,0.03)]" />

      {/* Center content */}
      <div className="flex flex-1 flex-col items-center justify-center gap-3">
        <h1 className="font-cormorant text-display-lg font-black text-cream/80 tracking-tight">
          Ayush Puri
        </h1>
        <p className="font-outfit text-label font-medium uppercase tracking-[0.22em] text-cream-ghost">
          © Folio 2025
        </p>

        {/* Progress bar */}
        <div className="mt-8 h-[1px] w-48 overflow-hidden bg-charcoal-border">
          <div
            className="h-full bg-cream-ghost/60"
            style={{
              animation: "progress-fill 2.4s ease-out forwards",
            }}
          />
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between px-10 pb-8">
        <p className="font-outfit text-micro font-medium uppercase tracking-[0.18em] text-cream-ghost/50">
          Version 1.0
        </p>
        <p className="font-outfit text-micro font-medium uppercase tracking-[0.18em] text-cream-ghost/50">
          Loading...
        </p>
      </div>
    </div>
  );
}
