"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { CSSProperties, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "section";
}

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
  style,
  as: Tag = "div",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLElement>}
      className={`scroll-reveal ${isVisible ? "visible" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
