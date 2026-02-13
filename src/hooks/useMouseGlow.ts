"use client";

import { useCallback, useRef } from "react";

export function useMouseGlow<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<T>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    element.style.setProperty("--glow-x", `${x}px`);
    element.style.setProperty("--glow-y", `${y}px`);
  }, []);

  return { ref, handleMouseMove };
}
