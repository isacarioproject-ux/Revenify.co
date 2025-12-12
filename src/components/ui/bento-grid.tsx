"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface BentoItem {
  title: string;
  meta?: string;
  description: string;
  icon?: React.ReactNode;
  status?: string;
  tags?: string[];
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

export const BentoGrid = ({ items, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]",
        className
      )}
    >
      {items.map((item, index) => (
        <BentoCard key={index} item={item} index={index} />
      ))}
    </div>
  );
};

const BentoCard = ({ item, index }: { item: BentoItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "group relative p-6 rounded-xl border border-white/10 bg-[#0D0D0D] overflow-hidden",
        "hover:border-white/20 transition-all duration-300",
        item.colSpan === 2 && "md:col-span-2",
        item.hasPersistentHover && "border-white/20"
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {item.icon && (
              <div className="p-2 rounded-lg bg-white/5">{item.icon}</div>
            )}
            <div>
              <h3 className="text-lg font-medium text-white/90">{item.title}</h3>
              {item.meta && (
                <p className="text-xs text-white/40 mt-0.5">{item.meta}</p>
              )}
            </div>
          </div>
          {item.status && (
            <span
              className={cn(
                "px-2 py-1 text-xs rounded-md",
                item.status === "Live" && "bg-green-500/10 text-green-400",
                item.status === "Updated" && "bg-blue-500/10 text-blue-400",
                item.status === "Beta" && "bg-orange-500/10 text-orange-400"
              )}
            >
              {item.status}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-white/50 leading-relaxed flex-1">
          {item.description}
        </p>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 text-xs bg-white/5 text-white/40 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Decorative corner gradient */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};
