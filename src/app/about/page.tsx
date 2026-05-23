"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import {
  fadeInUp,
  staggerContainer,
  textPopup,
  imageSlideLeft,
  imageSlideRight,
  imageSlideUp,
} from "@/lib/animations";

const TIMELINE = [
  {
    year: "2015",
    title: "Foundation",
    desc: "Established in a small atelier, focusing on residential renovations.",
  },
  {
    year: "2018",
    title: "Expansion",
    desc: "Moved to our current gallery space, taking on commercial hospitality projects.",
  },
  {
    year: "2021",
    title: "Recognition",
    desc: "Featured in Architectural Digest for the 'Silent House' project.",
  },
  {
    year: "Present",
    title: "Evolution",
    desc: "Launching our proprietary line of bespoke furniture and lighting.",
  },
];

export default function About() {
  return (
    <PageTransition>
      <div className="pt-24 md:pt-32 pb-16">
        {/* 1. Hero Section */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20 md:mb-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter items-end mb-12">
            <div className="col-span-1 md:col-span-8">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={textPopup(0.8)}
                className="font-playfair text-4xl sm:text-5xl md:text-6xl text-on-surface leading-tight mb-4"
              >
                Quiet Luxury. <br /> Architectural Rigor.
              </motion.h1>
            </div>
            <div className="col-span-1 md:col-span-4 pb-2">
              <motion.p
                initial="hidden"
                animate="visible"
                variants={textPopup(0.8, 0.15)}
                className="font-inter text-base md:text-lg text-on-surface-variant leading-relaxed"
              >
                We create spaces that are intensely personal and meticulously crafted, balancing minimalist editorial aesthetics with warm, livable comfort.
              </motion.p>
            </div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageSlideUp(1, 0.3)}
            className="w-full h-[400px] md:h-[614px] bg-surface-container border border-outline-variant/50 relative overflow-hidden"
          >
            <Image
              src="/images/architectural-workspace.jpg"
              alt="Architectural Workspace"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </section>

        {/* 2. Story Block */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20 md:mb-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter border-t border-outline-variant/30 pt-12">
            <div className="col-span-1 md:col-span-4">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.6)}
                className="font-inter text-xs uppercase tracking-widest text-primary font-bold mb-4"
              >
                Who We Are
              </motion.h2>
            </div>
            <div className="col-span-1 md:col-span-8 font-inter text-base md:text-lg text-on-surface-variant space-y-6 leading-relaxed">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.7, 0.1)}
              >
                Founded on the belief that a well-designed space can fundamentally alter the quality of daily life, STUDIO is a multidisciplinary interior architecture practice. We approach each project as a unique narrative, drawing inspiration from our clients&apos; histories and the inherent character of the architecture itself.
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.7, 0.2)}
              >
                Our studio operates at the intersection of rigorous architectural planning and curated decorative arts. We do not impose a singular house style; rather, we apply a consistent philosophy of refined reductionism, where every material, line, and object must justify its presence.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter mt-20 border-t border-outline-variant/30 pt-12">
            <div className="col-span-1 md:col-span-4">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.6)}
                className="font-inter text-xs uppercase tracking-widest text-primary font-bold mb-4"
              >
                Design Approach
              </motion.h2>
            </div>
            <div className="col-span-1 md:col-span-8 font-inter text-base md:text-lg text-on-surface-variant space-y-6 leading-relaxed">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.7, 0.1)}
              >
                Our methodology is rooted in an &apos;Editorial Minimalism&apos;—a deliberate orchestration of space, light, and texture to create environments that feel like curated gallery spaces yet remain deeply inviting. We prioritize high-contrast material palettes: raw concrete against polished brass, heavily textured linens against smooth lacquer.
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.7, 0.2)}
              >
                The process is highly collaborative and relentlessly detailed. From initial spatial planning to the final placement of a bespoke ceramic vessel, our focus remains on creating a cohesive sensory experience that speaks of quiet confidence and timeless relevance.
              </motion.p>
            </div>
          </div>
        </section>

        {/* 3. Timeline Strip */}
        <section className="bg-surface-container-low py-20 md:py-28 mb-20 md:mb-28 overflow-hidden">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={textPopup(0.6)}
              className="font-playfair text-3xl md:text-4xl text-center mb-16 font-medium text-on-surface"
            >
              Studio Evolution
            </motion.h3>
            <div className="relative">
              {/* Timeline Horizontal Line */}
              <div className="absolute top-6 left-0 w-full h-px bg-outline-variant/50 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-gutter relative z-10">
                {TIMELINE.map((item, idx) => (
                  <motion.div
                    key={item.year}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textPopup(0.6, idx * 0.15)}
                    className="flex flex-col md:items-center text-left md:text-center group"
                  >
                    {/* Circle Indicator */}
                    <div className="w-3 h-3 bg-outline-variant group-hover:bg-primary rounded-full mb-4 shadow-[0_0_0_4px_rgba(240,192,77,0)] group-hover:shadow-[0_0_0_4px_rgba(240,192,77,0.2)] transition-all duration-300 hidden md:block"></div>
                    <span className="font-inter text-xs font-semibold text-primary mb-1 uppercase tracking-widest">
                      {item.year}
                    </span>
                    <h4 className="font-playfair text-xl font-medium text-on-surface mb-2">
                      {item.title}
                    </h4>
                    <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Bento Grid - In Process */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16">
          <div className="flex justify-between items-end border-b border-outline-variant/30 pb-4 mb-10">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={textPopup(0.6)}
              className="font-playfair text-2xl md:text-3xl text-on-surface font-medium"
            >
              In Process
            </motion.h2>
            <Link
              href="/projects"
              className="font-inter text-xs uppercase tracking-widest text-primary hover:text-on-surface transition-colors font-semibold"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Left Column (Spans 8 columns, 2 rows) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageSlideLeft(0.8)}
              className="md:col-span-8 bg-surface-container relative overflow-hidden group border border-outline-variant/50 aspect-[4/3] md:aspect-video"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/brass-concrete-study.jpg"
                  alt="Architectural Details"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-750 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/60 to-transparent">
                  <span className="font-inter text-[10px] text-inverse-on-surface bg-primary px-2.5 py-1 uppercase tracking-widest font-semibold">
                    Materials
                  </span>
                  <h3 className="font-playfair text-xl text-surface mt-2 font-medium">
                    Brass &amp; Concrete Study
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Right Column (Spans 4 columns, 2 stack items) */}
            <div className="md:col-span-4 flex flex-col gap-6 md:gap-8">
              {/* Site Visit */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageSlideRight(0.8, 0.1)}
                className="bg-surface-container relative overflow-hidden group border border-outline-variant/50 aspect-[4/3] flex-1"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/site-visit.jpg"
                    alt="Site Visit"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover filter grayscale group-hover:grayscale-0 transition-transform duration-750 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-inter text-[10px] text-white bg-on-background px-2 py-0.5 uppercase tracking-widest font-semibold">
                      Process
                    </span>
                    <h4 className="font-playfair text-base text-white mt-1">Site Review</h4>
                  </div>
                </div>
              </motion.div>

              {/* Textile Swatches */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageSlideRight(0.8, 0.2)}
                className="bg-surface-container relative overflow-hidden group border border-outline-variant/50 aspect-[4/3] flex-1"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/textile-swatches.jpg"
                    alt="Textile Swatches"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-750 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-inter text-[10px] text-white bg-on-background px-2 py-0.5 uppercase tracking-widest font-semibold">
                      Tactility
                    </span>
                    <h4 className="font-playfair text-base text-white mt-1">Textile Curation</h4>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
