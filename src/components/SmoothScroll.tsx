"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import type { ComponentProps, ReactNode } from "react";

type LenisChildren = ComponentProps<typeof ReactLenis>["children"];

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children as unknown as LenisChildren}
    </ReactLenis>
  );
}
