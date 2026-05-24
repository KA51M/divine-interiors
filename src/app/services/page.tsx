"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import {
  fadeInUp,
  textPopup,
  staggerContainer,
} from "@/lib/animations";

export default function Services() {
  return (
    <PageTransition>
      <div className="pt-20 pb-16">
        {/* Page Header */}
        <header className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center border-b border-outline-variant/30">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textPopup(0.7)}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl text-on-background font-medium mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textPopup(0.7, 0.15)}
            className="font-inter text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
          >
            Meticulous attention to detail and architectural precision applied to every dimension of your space.
          </motion.p>
        </header>

        {/* Services Grid */}
        <section className="py-20 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer(0.1, 0.1)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            {/* Service 1 */}
            <motion.div
              variants={fadeInUp(0.6)}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EDE6DA] border border-[#1F1F1F]/10">
                <Image
                  src="/images/service-1-consultation.jpg"
                  alt="Consultation"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col gap-2 border-t border-[#1F1F1F]/20 pt-4">
                <span className="font-label-sm text-on-surface-variant uppercase tracking-widest">Strategic</span>
                <h3 className="font-headline-md text-headline-md font-playfair text-xl md:text-2xl text-[#1F1F1F] font-medium">1. Consultation</h3>
                <p className="font-body-md text-body-md font-inter text-sm md:text-base text-[#1F1F1F]/70 leading-relaxed">Strategic guidance to define your vision and the structural requirements of your space.</p>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              variants={fadeInUp(0.6)}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EDE6DA] border border-[#1F1F1F]/10">
                <Image
                  src="/images/service-2-space-planning.jpg"
                  alt="Space Planning"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 border-t border-[#1F1F1F]/20 pt-4">
                <span className="font-label-sm text-on-surface-variant uppercase tracking-widest">Architectural</span>
                <h3 className="font-headline-md text-headline-md font-playfair text-xl md:text-2xl text-[#1F1F1F] font-medium">2. Space Planning</h3>
                <p className="font-body-md text-body-md font-inter text-sm md:text-base text-[#1F1F1F]/70 leading-relaxed">Optimizing layout and flow to ensure functional elegance and architectural balance.</p>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              variants={fadeInUp(0.6)}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EDE6DA] border border-[#1F1F1F]/10">
                <Image
                  src="/images/service-3-concept-development.jpg"
                  alt="Concept Development"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 border-t border-[#1F1F1F]/20 pt-4">
                <span className="font-label-sm text-on-surface-variant uppercase tracking-widest">Creative</span>
                <h3 className="font-headline-md text-headline-md font-playfair text-xl md:text-2xl text-[#1F1F1F] font-medium">3. Concept Development</h3>
                <p className="font-body-md text-body-md font-inter text-sm md:text-base text-[#1F1F1F]/70 leading-relaxed">Curating materials, textures, and palettes to establish a cohesive visual narrative.</p>
              </div>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              variants={fadeInUp(0.6)}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EDE6DA] border border-[#1F1F1F]/10">
                <Image
                  src="/images/service-4-design-development.jpg"
                  alt="Design Development"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 border-t border-[#1F1F1F]/20 pt-4">
                <span className="font-label-sm text-on-surface-variant uppercase tracking-widest">Technical</span>
                <h3 className="font-headline-md text-headline-md font-playfair text-xl md:text-2xl text-[#1F1F1F] font-medium">4. Design Development</h3>
                <p className="font-body-md text-body-md font-inter text-sm md:text-base text-[#1F1F1F]/70 leading-relaxed">Refining concepts into detailed plans and precise specifications for execution.</p>
              </div>
            </motion.div>

            {/* Service 5 */}
            <motion.div
              variants={fadeInUp(0.6)}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EDE6DA] border border-[#1F1F1F]/10">
                <Image
                  src="/images/service-5-3d-visualization.jpg"
                  alt="3D Visualization"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 border-t border-[#1F1F1F]/20 pt-4">
                <span className="font-label-sm text-on-surface-variant uppercase tracking-widest">Visual</span>
                <h3 className="font-headline-md text-headline-md font-playfair text-xl md:text-2xl text-[#1F1F1F] font-medium">5. 3D Visualization</h3>
                <p className="font-body-md text-body-md font-inter text-sm md:text-base text-[#1F1F1F]/70 leading-relaxed">High-fidelity renderings to preview your space with absolute architectural accuracy.</p>
              </div>
            </motion.div>

            {/* Service 6 */}
            <motion.div
              variants={fadeInUp(0.6)}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EDE6DA] border border-[#1F1F1F]/10">
                <Image
                  src="/images/service-6-project-management.jpg"
                  alt="Project Management"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 border-t border-[#1F1F1F]/20 pt-4">
                <span className="font-label-sm text-on-surface-variant uppercase tracking-widest">Operational</span>
                <h3 className="font-headline-md text-headline-md font-playfair text-xl md:text-2xl text-[#1F1F1F] font-medium">6. Project Management</h3>
                <p className="font-body-md text-body-md font-inter text-sm md:text-base text-[#1F1F1F]/70 leading-relaxed">Seamless oversight from blueprint to final build, ensuring impeccable execution.</p>
              </div>
            </motion.div>

            {/* Service 7 */}
            <motion.div
              variants={fadeInUp(0.6)}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EDE6DA] border border-[#1F1F1F]/10">
                <Image
                  src="/images/service-7-furniture-selection.jpg"
                  alt="Furniture Selection"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 border-t border-[#1F1F1F]/20 pt-4">
                <span className="font-label-sm text-on-surface-variant uppercase tracking-widest">Curatorial</span>
                <h3 className="font-headline-md text-headline-md font-playfair text-xl md:text-2xl text-[#1F1F1F] font-medium">7. Furniture Selection</h3>
                <p className="font-body-md text-body-md font-inter text-sm md:text-base text-[#1F1F1F]/70 leading-relaxed">Sourcing and procurement of bespoke pieces that elevate the overall aesthetic.</p>
              </div>
            </motion.div>

            {/* Service 8 */}
            <motion.div
              variants={fadeInUp(0.6)}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EDE6DA] border border-[#1F1F1F]/10">
                <Image
                  src="/images/service-8-lighting-design.jpg"
                  alt="Lighting Design"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 border-t border-[#1F1F1F]/20 pt-4">
                <span className="font-label-sm text-on-surface-variant uppercase tracking-widest">Atmospheric</span>
                <h3 className="font-headline-md text-headline-md font-playfair text-xl md:text-2xl text-[#1F1F1F] font-medium">8. Lighting Design</h3>
                <p className="font-body-md text-body-md font-inter text-sm md:text-base text-[#1F1F1F]/70 leading-relaxed">Orchestrating natural and artificial light to enhance mood and architectural form.</p>
              </div>
            </motion.div>

            {/* Service 9 */}
            <motion.div
              variants={fadeInUp(0.6)}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EDE6DA] border border-[#1F1F1F]/10">
                <Image
                  src="/images/service-9-custom-elements.jpg"
                  alt="Custom Elements"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 border-t border-[#1F1F1F]/20 pt-4">
                <span className="font-label-sm text-on-surface-variant uppercase tracking-widest">Bespoke</span>
                <h3 className="font-headline-md text-headline-md font-playfair text-xl md:text-2xl text-[#1F1F1F] font-medium">9. Custom Elements</h3>
                <p className="font-body-md text-body-md font-inter text-sm md:text-base text-[#1F1F1F]/70 leading-relaxed">Tailored millwork and unique architectural features designed exclusively for you.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
