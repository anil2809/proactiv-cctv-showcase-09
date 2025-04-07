
"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextCycleProps {
  words: string[];
  className?: string;
  speed?: number;
}

export function AnimatedTextCycle({
  words = [],
  className,
  speed = 2000,
}: AnimatedTextCycleProps) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setShow(true);
      }, 500);
    }, speed);

    return () => clearInterval(intervalId);
  }, [speed, words.length]);

  return (
    <span
      className={cn(
        "inline-block duration-500 transition-all",
        show ? "opacity-100 transform-none" : "opacity-0 -translate-y-3",
        className
      )}
    >
      {words[index]}
    </span>
  );
}

export default AnimatedTextCycle;
