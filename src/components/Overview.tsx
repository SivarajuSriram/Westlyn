"use client";
import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Overview = forwardRef((props, ref) => {
  return (
    <section  
      /* REDUCED PADDING: from py-24 md:py-32 to py-12 md:py-20 */
      className="relative py-12 md:py-20 bg-white text-zinc-900 overflow-hidden transform-gpu"
      style={{ backfaceVisibility: 'hidden' }}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 relative z-10">
        {/* TIGHTENED GAP: from gap-16 lg:gap-24 to gap-10 lg:gap-16 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">

          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[400px] md:h-[550px] lg:h-[650px] w-full overflow-hidden bg-stone-100 rounded-[40px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]">
                <img
                  src="/7.webp"
                  alt="Luxury Architecture"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* REDUCED MARGIN: from mb-8 md:mb-10 to mb-6 md:mb-8 */}
              <h2 className="text-2xl md:text-5xl mb-6 md:mb-8 uppercase tracking-tighter leading-[1.1] font-normal">
                Project Overview
              </h2>

              <div className="space-y-8">
                <p className="text-xl md:text-2xl lg:text-3xl font-geologica font-extralight tracking-tight">
                  There are places you visit. And places you instantly belong to.
                </p>

                <p className="text-base md:text-lg lg:text-xl font-geologica font-light leading-relaxed max-w-xl text-zinc-500">
                  Set within 10 acres and home to only 119 villas, this sanctuary is shaped by nature, openness, and intentional restraint. Not built for crowds. Built for a chosen few. 
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
});

Overview.displayName = 'Overview';

export default Overview;