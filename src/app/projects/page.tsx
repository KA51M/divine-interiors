"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { textPopup, scaleIn, imageSlideUp } from "@/lib/animations";

const CATEGORIES = ["All", "Homes", "Offices", "Renovation"] as const;
type Category = (typeof CATEGORIES)[number];

const PROJECTS = [
  {
    id: 1,
    title: "The Glass Pavilion",
    category: "Homes",
    location: "Aspen, CO",
    image: "/images/project-glass-pavilion.jpg",
    cols: "md:col-span-8",
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    title: "Urban Retreat",
    category: "Offices",
    location: "New York, NY",
    image: "/images/project-urban-retreat.jpg",
    cols: "md:col-span-4",
    aspect: "aspect-[3/4] md:aspect-auto md:h-full",
  },
  {
    id: 3,
    title: "Heritage Restoration",
    category: "Renovation",
    location: "London, UK",
    image: "/images/project-heritage-restoration.jpg",
    cols: "md:col-span-6",
    aspect: "aspect-square",
  },
  {
    id: 4,
    title: "Coastal Minimal",
    category: "Homes",
    location: "Malibu, CA",
    image: "/images/project-coastal-minimal.jpg",
    cols: "md:col-span-6",
    aspect: "aspect-[4/5]",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <PageTransition>
      <div className="pt-20 pb-16 min-h-screen">
        {/* Page Header & Filters */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-8 border-b border-outline-variant/30">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textPopup(0.7)}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl text-on-surface mb-8"
          >
            Selected Works
          </motion.h1>
          
          <div className="flex flex-wrap gap-4 mt-8 font-inter text-xs uppercase tracking-widest font-semibold">
            {CATEGORIES.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`pb-1.5 px-3 transition-all relative cursor-pointer ${
                    isActive
                      ? "text-on-surface font-bold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  <span className="relative z-10">{category}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-filter-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-on-background dark:bg-surface-tint"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  layout
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={imageSlideUp(0.8, (idx % 2) * 0.1)}
                  exit="hidden"
                  className={`${project.cols} group relative cursor-pointer overflow-hidden border border-outline-variant/30 bg-surface flex flex-col`}
                >
                  <div className={`relative w-full ${project.aspect} overflow-hidden flex-grow`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-750 group-hover:scale-105"
                    />
                    {/* Shadow overlay on hover */}
                    <div className="absolute inset-0 bg-on-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover Info Reveal */}
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-end bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                      <div>
                        <span className="bg-surface-container-low text-on-surface px-2.5 py-1 font-inter text-[10px] uppercase tracking-widest rounded-sm mb-2.5 inline-block font-semibold">
                          {project.category}
                        </span>
                        <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl text-surface-container-lowest drop-shadow-md font-medium">
                          {project.title}
                        </h2>
                      </div>
                      <div className="text-surface-container-lowest font-inter text-xs drop-shadow-md flex items-center gap-1.5 font-medium">
                        <MapPin size={14} className="text-primary-container" />
                        {project.location}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
