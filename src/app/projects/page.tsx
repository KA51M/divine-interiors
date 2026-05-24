"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { textPopup, imageSlideUp } from "@/lib/animations";

const CATEGORIES = ["All", "Residential", "Commercial", "Design"] as const;
type Category = (typeof CATEGORIES)[number];

const PROJECTS = [
  {
    id: 1,
    title: "Silvassa Advocate office",
    category: "Commercial",
    tag: "Silvassa",
    image: "/images/project-silvassa-advocate.jpg",
    aspect: "",
  },
  {
    id: 2,
    title: "BANGLOW VAPI 4BHK",
    category: "Residential",
    tag: "Vapi",
    image: "/images/service-5-3d-visualization.jpg",
    aspect: "",
  },
  {
    id: 3,
    title: "bhilad 4BHK banglow",
    category: "Residential",
    tag: "Bhilad",
    image: "/images/service-4-design-development.jpg",
    aspect: "",
  },
  {
    id: 4,
    title: "Dungari",
    category: "Residential",
    tag: "Dungari",
    image: "/images/service-8-lighting-design.jpg",
    aspect: "",
  },
  {
    id: 5,
    title: "pali hill 3BHK Banglow",
    category: "Residential",
    tag: "Pali Hill",
    image: "/images/project-pali-hill-banglow.jpg",
    aspect: "",
  },
  {
    id: 6,
    title: "3BHK Banglow Silvasa",
    category: "Residential",
    tag: "Silvassa",
    image: "/images/service-6-project-management.jpg",
    aspect: "",
  },
  {
    id: 7,
    title: "Vapi 2BHK",
    category: "Residential",
    tag: "Vapi",
    image: null,
    aspect: "aspect-[4/3]",
  },
  {
    id: 8,
    title: "Pavan Putra super store",
    category: "Commercial",
    tag: "Commercial",
    image: null,
    aspect: "aspect-[3/4]",
  },
  {
    id: 9,
    title: "3D Optic",
    category: "Commercial",
    tag: "Commercial",
    image: "/images/project-3d-optic.jpg",
    aspect: "",
  },
  {
    id: 10,
    title: "monginis bakery",
    category: "Commercial",
    tag: "Commercial",
    image: "/images/service-3-concept-development.jpg",
    aspect: "",
  },
  {
    id: 11,
    title: "Banglow Project",
    category: "Residential",
    tag: "Residential",
    image: null,
    aspect: "aspect-[4/5]",
  },
  {
    id: 12,
    title: "Naroli 4BHK Banglow",
    category: "Residential",
    tag: "Naroli",
    image: "/images/service-1-consultation.jpg",
    aspect: "",
  },
  {
    id: 13,
    title: "jewelry shop",
    category: "Commercial",
    tag: "Commercial",
    image: "/images/project-jewelry-shop.jpg",
    aspect: "",
  },
  {
    id: 14,
    title: "Sun Residency 1 3BHK Flat",
    category: "Residential",
    tag: "Residential",
    image: null,
    aspect: "aspect-[16/9]",
  },
  {
    id: 15,
    title: "Sun residency 3BHK Flat",
    category: "Residential",
    tag: "Residential",
    image: "/images/service-7-furniture-selection.jpg",
    aspect: "",
  },
  {
    id: 16,
    title: "Pramukh garden 3BHK Flat",
    category: "Residential",
    tag: "Residential",
    image: null,
    aspect: "aspect-[4/3]",
  },
  {
    id: 17,
    title: "Naroli site",
    category: "Residential",
    tag: "Naroli",
    image: null,
    aspect: "aspect-[3/4]",
  },
  {
    id: 18,
    title: "Office Renovate",
    category: "Commercial",
    tag: "Commercial",
    image: null,
    aspect: "aspect-[4/5]",
  },
  {
    id: 19,
    title: "Revit Work",
    category: "Design",
    tag: "Design",
    image: "/images/service-2-space-planning.jpg",
    aspect: "",
  },
  {
    id: 20,
    title: "Vapi Site",
    category: "Residential",
    tag: "Vapi",
    image: null,
    aspect: "aspect-[1/1]",
  },
  {
    id: 21,
    title: "Avanti Low Price",
    category: "Commercial",
    tag: "Commercial",
    image: null,
    aspect: "aspect-[4/3]",
  },
  {
    id: 22,
    title: "Medical Store",
    category: "Commercial",
    tag: "Commercial",
    image: null,
    aspect: "aspect-[3/4]",
  },
  {
    id: 23,
    title: "Anam Low Price",
    category: "Commercial",
    tag: "Commercial",
    image: null,
    aspect: "aspect-[4/5]",
  },
  {
    id: 24,
    title: "Valsad Site",
    category: "Residential",
    tag: "Valsad",
    image: null,
    aspect: "aspect-[16/9]",
  },
  {
    id: 25,
    title: "First Banglow Project",
    category: "Residential",
    tag: "Residential",
    image: null,
    aspect: "aspect-[1/1]",
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
            className="masonry-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  layout
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={imageSlideUp(0.6, (idx % 3) * 0.05)}
                  exit="hidden"
                  className="masonry-item group cursor-pointer"
                >
                  <div className={`relative w-full overflow-hidden bg-surface-container-low mb-3 ${project.image ? "aspect-auto" : project.aspect}`}>
                    {project.image ? (
                      <div className="relative w-full" style={{ height: "auto" }}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto object-cover transition-transform duration-750 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-label-sm text-xs uppercase tracking-widest p-12 text-center select-none min-h-[160px]">
                        Image Coming Soon
                      </div>
                    )}
                  </div>
                  <div>
                    <span className="text-on-surface-variant font-label-sm text-xs uppercase tracking-widest mb-1 block">
                      {project.tag}
                    </span>
                    <h2 className="font-playfair text-lg md:text-xl text-on-surface font-medium transition-colors duration-300 group-hover:text-primary">
                      {project.title}
                    </h2>
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
