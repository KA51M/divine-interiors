"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { textPopup, imageSlideUp } from "@/lib/animations";

const CATEGORIES = ["All", "Homes", "Offices", "Commercial", "Renovation", "Concept", "Details"] as const;
type Category = (typeof CATEGORIES)[number];

const PROJECTS = [
  {
    id: 1,
    title: "Silvassa Advocate office",
    category: "Offices",
    location: "Silvassa",
    image: "/images/project-silvassa-advocate.jpg",
  },
  {
    id: 2,
    title: "BANGLOW VAPI 4BHK",
    category: "Homes",
    location: "Vapi",
    image: "/images/project-vapi-4bhk.jpg",
  },
  {
    id: 3,
    title: "Bhilad 4BHK Banglow",
    category: "Homes",
    location: "Bhilad",
    image: "/images/project-bhilad-4bhk.jpg",
  },
  {
    id: 4,
    title: "Dungari Apartment",
    category: "Homes",
    location: "Dungari",
    image: "/images/project-dungari-apartment.jpg",
  },
  {
    id: 5,
    title: "Pali Hill 3BHK",
    category: "Homes",
    location: "Pali Hill",
    image: "/images/project-pali-hill-banglow.jpg",
  },
  {
    id: 6,
    title: "3BHK Banglow",
    category: "Homes",
    location: "Silvassa",
    image: "/images/project-3bhk-silvassa.jpg",
  },
  {
    id: 7,
    title: "Vapi 2BHK",
    category: "Homes",
    location: "Vapi",
    image: "/images/project-vapi-2bhk.jpg",
  },
  {
    id: 8,
    title: "Pavan Putra Super Store",
    category: "Commercial",
    location: "Commercial",
    image: "/images/project-pavan-putra.jpg",
  },
  {
    id: 9,
    title: "3D Optic",
    category: "Commercial",
    location: "Commercial",
    image: "/images/project-3d-optic.jpg",
  },
  {
    id: 10,
    title: "Monginis Bakery",
    category: "Commercial",
    location: "Concept",
    image: "/images/service-3-concept-development.jpg",
  },
  {
    id: 11,
    title: "Modern Banglow",
    category: "Homes",
    location: "Residential",
    image: "/images/project-modern-banglow.jpg",
  },
  {
    id: 12,
    title: "Naroli 4BHK Banglow",
    category: "Homes",
    location: "Naroli",
    image: "/images/project-naroli-banglow.jpg",
  },
  {
    id: 13,
    title: "Luxury Jewelry Boutique",
    category: "Commercial",
    location: "Retail",
    image: "/images/project-jewelry-shop.jpg",
  },
  {
    id: 14,
    title: "Sun Residency",
    category: "Homes",
    location: "Apartment",
    image: "/images/project-sun-residency.jpg",
  },
  {
    id: 15,
    title: "Modern Villa",
    category: "Homes",
    location: "Villa",
    image: "/images/service-5-3d-visualization.jpg",
  },
  {
    id: 16,
    title: "Pramukh Garden",
    category: "Homes",
    location: "Complex",
    image: "/images/project-pramukh-garden.jpg",
  },
  {
    id: 17,
    title: "Naroli Site Planning",
    category: "Concept",
    location: "Naroli",
    image: "/images/service-2-space-planning.jpg",
  },
  {
    id: 18,
    title: "Modern Office Renovation",
    category: "Renovation",
    location: "Corporate",
    image: "/images/project-office-renovation.jpg",
  },
  {
    id: 19,
    title: "Architectural Wireframe",
    category: "Concept",
    location: "Design",
    image: "/images/service-4-design-development.jpg",
  },
  {
    id: 20,
    title: "Vapi Site Details",
    category: "Details",
    location: "Vapi",
    image: "/images/service-8-lighting-design.jpg",
  },
  {
    id: 21,
    title: "Design Consultation",
    category: "Concept",
    location: "Studio",
    image: "/images/service-1-consultation.jpg",
  },
  {
    id: 22,
    title: "Medical Solutions",
    category: "Commercial",
    location: "Retail",
    image: "/images/project-medical-solutions.jpg",
  },
  {
    id: 23,
    title: "Material Selection",
    category: "Details",
    location: "Studio",
    image: "/images/service-7-furniture-selection.jpg",
  },
  {
    id: 24,
    title: "Valsad Residence",
    category: "Homes",
    location: "Valsad",
    image: "/images/service-6-project-management.jpg",
  },
  {
    id: 25,
    title: "Sun Residency",
    category: "Homes",
    location: "Apartment",
    image: "/images/project-sun-residency.jpg",
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
                  className="masonry-item hover-reveal-container group cursor-pointer relative overflow-hidden image-zoom-container border border-outline-variant/30"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-750 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-on-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Reveal Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-white/80 font-label-sm text-xs uppercase tracking-widest mb-2 inline-block">
                      {project.category}
                    </span>
                    <h2 className="font-playfair text-lg md:text-2xl text-white drop-shadow-md font-medium leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-white/80 font-label-sm text-xs mt-2 uppercase tracking-widest">
                      {project.location}
                    </p>
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
