"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedBorderButton({
  children,
  className,
  containerClassName,
  as: Component = "button",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: any;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative inline-flex overflow-hidden rounded-full p-[1px]",
        containerClassName
      )}
      {...props}
    >
      {/* Animated border - Aceternity style */}
      <motion.span
        className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#262626_0%,#737373_50%,#262626_100%)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      {/* Inner content - neutral-800 background */}
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-800 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl gap-2",
          className
        )}
      >
        {children}
      </span>
    </Component>
  );
}

export function AnimatedBorderCard({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-[1px]",
        containerClassName
      )}
    >
      {/* Animated border */}
      <motion.span
        className="absolute inset-0 overflow-hidden rounded-2xl"
        style={{ margin: "-1px" }}
      >
        <motion.span
          className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#262626_0%,#525252_50%,#262626_100%)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </motion.span>
      {/* Inner content */}
      <div
        className={cn(
          "relative h-full w-full rounded-2xl bg-[#0D0D0D] p-8",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}