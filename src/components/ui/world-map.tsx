"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MapDot {
  start: { lat: number; lng: number; label?: string };
  end: { lat: number; lng: number; label?: string };
}

interface WorldMapProps {
  dots?: MapDot[];
  className?: string;
}

export default function WorldMap({ dots = [], className }: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  // Convert lat/lng to SVG coordinates
  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  // Create curved path between points
  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className={cn("w-full aspect-[2/1] rounded-lg relative", className)}>
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full"
      >
        {/* Gradient for lines */}
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="5%" stopColor="#6366f1" stopOpacity="1" />
            <stop offset="95%" stopColor="#a855f7" stopOpacity="1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* World map SVG path - simplified continents */}
        <g fill="#e5e7eb" fillOpacity="0.8" stroke="none">
          {/* North America */}
          <path d="M 40,60 Q 80,50 130,55 Q 170,65 180,80 Q 200,100 195,130 Q 180,150 150,165 Q 120,175 80,170 Q 50,160 35,130 Q 25,100 40,60 Z" />
          
          {/* Central America */}
          <path d="M 130,170 Q 145,175 150,195 Q 148,210 140,220 Q 135,215 130,205 Q 125,190 130,170 Z" />
          
          {/* South America */}
          <path d="M 170,220 Q 200,210 220,240 Q 235,280 225,320 Q 200,360 175,350 Q 155,330 160,290 Q 165,250 170,220 Z" />
          
          {/* Europe */}
          <path d="M 380,55 Q 420,45 460,55 Q 490,70 480,95 Q 465,115 430,110 Q 400,105 385,85 Q 370,70 380,55 Z" />
          
          {/* Africa */}
          <path d="M 400,130 Q 440,120 475,140 Q 500,170 495,220 Q 480,270 445,290 Q 410,280 400,240 Q 390,190 400,130 Z" />
          
          {/* Asia */}
          <path d="M 490,40 Q 560,35 640,50 Q 700,70 720,100 Q 730,140 705,170 Q 660,190 600,180 Q 540,160 510,120 Q 485,80 490,40 Z" />
          
          {/* Japan */}
          <path d="M 720,90 Q 735,85 745,100 Q 750,120 740,130 Q 730,125 725,110 Q 720,100 720,90 Z" />
          
          {/* Southeast Asia */}
          <path d="M 650,180 Q 680,175 700,195 Q 710,220 695,245 Q 670,255 655,235 Q 645,210 650,180 Z" />
          
          {/* Australia */}
          <path d="M 680,280 Q 720,270 760,290 Q 785,315 775,345 Q 745,365 710,355 Q 680,335 685,310 Q 680,295 680,280 Z" />
        </g>

        {/* Connection paths */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          
          return (
            <g key={`path-group-${i}`}>
              {/* Main path */}
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5 * i,
                  ease: "easeOut",
                }}
              />
              
              {/* Start point */}
              <g>
                <circle cx={startPoint.x} cy={startPoint.y} r="4" fill="#6366f1" />
                <circle cx={startPoint.x} cy={startPoint.y} r="2" fill="white" />
                {dot.start.label && (
                  <text
                    x={startPoint.x}
                    y={startPoint.y + 14}
                    textAnchor="middle"
                    fill="#6b7280"
                    fontSize="8"
                    fontWeight="500"
                  >
                    {dot.start.label}
                  </text>
                )}
              </g>
              
              {/* End point */}
              <g>
                <circle cx={endPoint.x} cy={endPoint.y} r="4" fill="#a855f7" />
                <circle cx={endPoint.x} cy={endPoint.y} r="2" fill="white" />
                {dot.end.label && (
                  <text
                    x={endPoint.x}
                    y={endPoint.y + 14}
                    textAnchor="middle"
                    fill="#6b7280"
                    fontSize="8"
                    fontWeight="500"
                  >
                    {dot.end.label}
                  </text>
                )}
              </g>

              {/* Animated dot traveling along path */}
              <motion.circle
                r="3"
                fill="#6366f1"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{
                  duration: 2,
                  delay: 0.5 * i,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
                style={{
                  offsetPath: `path('${createCurvedPath(startPoint, endPoint)}')`,
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
