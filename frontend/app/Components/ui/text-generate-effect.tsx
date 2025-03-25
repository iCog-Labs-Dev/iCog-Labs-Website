"use client";

import { useEffect, useRef } from "react";
import { stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!containerRef.current) return;
    animate(
      containerRef.current.querySelectorAll("span"),
      { opacity: 1, filter: filter ? "blur(0px)" : " none" },
      { duration: duration, delay: stagger(0.3) }
    );
  }, [animate]);

  const renderWords = () =>
    words.split(" ").map((letter, index) => (
      <span key={index} className="opacity-0 inline-block">
        {letter}
      </span>
    ));

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4 dark:text-white text-white text-2xl leading-snug tracking-wide">
        <div ref={containerRef}>{renderWords()}</div>
      </div>
    </div>
  );
};
