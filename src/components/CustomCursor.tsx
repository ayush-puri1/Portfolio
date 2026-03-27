"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
    if (dotRef.current) {
      gsap.set(dotRef.current, {
        x: e.clientX - 4,
        y: e.clientY - 4,
      });
    }
    if (ringRef.current) {
      gsap.to(ringRef.current, {
        x: e.clientX - 18,
        y: e.clientY - 18,
        duration: 0.45,
        ease: "power2.out",
      });
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (ringRef.current) {
      gsap.to(ringRef.current, {
        width: 20,
        height: 20,
        x: mousePos.current.x - 10,
        y: mousePos.current.y - 10,
        borderColor: "rgba(242,235,224,0.9)",
        duration: 0.25,
        ease: "power2.out",
      });
    }
    if (dotRef.current) {
      gsap.to(dotRef.current, {
        width: 12,
        height: 12,
        x: mousePos.current.x - 6,
        y: mousePos.current.y - 6,
        opacity: 0.6,
        duration: 0.25,
        ease: "power2.out",
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (ringRef.current) {
      gsap.to(ringRef.current, {
        width: 36,
        height: 36,
        borderColor: "rgba(242,235,224,0.5)",
        duration: 0.25,
        ease: "power2.out",
      });
    }
    if (dotRef.current) {
      gsap.to(dotRef.current, {
        width: 8,
        height: 8,
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
      });
    }
  }, []);

  useEffect(() => {
    // Detect touch device
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    window.addEventListener("mousemove", handleMouseMove);

    const attachHoverListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, [data-cursor], input, textarea, select"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
      return interactives;
    };

    // Attach after a short delay to allow DOM to render
    const timeout = setTimeout(() => {
      attachHoverListeners();
    }, 100);

    // Re-attach on mutations
    const observer = new MutationObserver(() => {
      attachHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  return (
    <>
      <div
        ref={dotRef}
        id="cursor-dot"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-white"
        style={{ mixBlendMode: "difference" }}
      />
      <div
        ref={ringRef}
        id="cursor-ring"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 rounded-full border-[1.5px] border-white"
        style={{ mixBlendMode: "difference" }}
      />
    </>
  );
}
