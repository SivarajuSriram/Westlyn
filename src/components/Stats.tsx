"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const Counter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      // Logic to animate all numbers found in the string separately
      const controls = animate(0, 1, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (progress) => {
          // This regex finds every number and calculates its current progress
          const currentString = value.replace(/\d+/g, (match) => {
            const target = parseInt(match);
            return Math.floor(target * progress).toString();
          });
          setDisplayValue(currentString);
        },
        // Ensure final value is exact string
        onComplete: () => setDisplayValue(value)
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

export default function StatsSection() {
  const stats = [
    { value: "11 Acres", label: "Lifestyle Project" },
    { value: "119", label: "Villas" },
    { value: "4", label: "BHK" },
    { value: "3262 - 4035", label: "Sq. Yds." },
  ];

  return (
    <section className="w-full bg-transparent py-20 font-sans">
      <div className="w-full px-8 md:px-24 flex flex-wrap justify-center md:justify-between items-center gap-16 md:gap-12">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center min-w-[200px]">
            <h3 className="text-xl md:text-5xl font-normal text-zinc-900 tracking-tighter leading-none mb-4">
              <Counter value={stat.value} />
            </h3>
            <span className="text-[11px] font-geologica uppercase tracking-[0.3em] text-zinc-400 font-bold">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}