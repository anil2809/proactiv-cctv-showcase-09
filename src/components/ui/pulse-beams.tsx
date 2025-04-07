
"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PulseBeamsProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function PulseBeams({
  children,
  className,
  onClick,
  ...props
}: PulseBeamsProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className={cn(
          "relative z-10 px-6 py-3 text-white font-medium rounded-lg overflow-hidden bg-primary hover:bg-primary/80",
          className
        )}
        {...props}
      >
        {children}
      </button>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[40%] w-[40%] bg-primary/40 rounded-full animate-pulse blur-2xl"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[60%] w-[60%] bg-primary/30 rounded-full animate-pulse blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}

export default PulseBeams;
