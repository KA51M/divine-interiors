"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import {
  fadeInUp,
  textPopup,
  imageSlideLeft,
  imageSlideRight,
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

        {/* Service Block 1: Interior Design for Homes (Left Text, Right Image) */}
        <section className="py-20 md:py-32 border-b border-outline-variant/20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop items-center">
            {/* Text Content */}
            <div className="col-span-1 md:col-span-5 flex flex-col items-start gap-6 order-2 md:order-1 mt-8 md:mt-0">
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.6)}
                className="inline-block bg-secondary-container text-on-secondary-container font-inter text-[10px] uppercase font-bold px-3.5 py-1 tracking-widest"
              >
                Residential
              </motion.span>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.7, 0.1)}
                className="font-playfair text-3xl md:text-4xl text-on-background font-medium leading-tight"
              >
                Interior Design for Homes
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.8, 0.2)}
                className="font-inter text-base text-on-surface-variant leading-relaxed"
              >
                We transform residences into highly curated, breathable sanctuaries. Our approach blends minimalist principles with rich, tactile materials to create spaces that feel both effortlessly elegant and deeply personal. Every element is intentionally placed to evoke calm luxury.
              </motion.p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp(0.6, 0.3)}
                className="mt-2"
              >
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 0 4px rgba(27, 27, 28, 0.15)" }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-on-background text-surface font-inter text-xs uppercase tracking-widest px-6 py-3.5 font-semibold transition-all duration-300"
                  >
                    Explore Residential
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Image Container */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageSlideRight(0.8)}
              className="col-span-1 md:col-span-6 md:col-start-7 aspect-[4/5] md:aspect-square image-inset order-1 md:order-2 overflow-hidden bg-surface-container-low border border-outline-variant/30 group cursor-pointer"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/service-residential.jpg"
                  alt="Interior Design for Homes"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale-[20%] transition-transform duration-750 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Block 2: Office & Workspace Design (Right Text, Left Image) */}
        <section className="py-20 md:py-32 border-b border-outline-variant/20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop items-center">
            {/* Image Container */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageSlideLeft(0.8)}
              className="col-span-1 md:col-span-6 aspect-[4/5] md:aspect-[4/3] image-inset order-1 overflow-hidden bg-surface-container-low border border-outline-variant/30 group cursor-pointer"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/service-office.jpg"
                  alt="Office & Workspace Design"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale-[10%] transition-transform duration-750 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="col-span-1 md:col-span-5 md:col-start-8 flex flex-col items-start gap-6 order-2 mt-8 md:mt-0">
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.6)}
                className="inline-block bg-secondary-container text-on-secondary-container font-inter text-[10px] uppercase font-bold px-3.5 py-1 tracking-widest"
              >
                Commercial
              </motion.span>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.7, 0.1)}
                className="font-playfair text-3xl md:text-4xl text-on-background font-medium leading-tight"
              >
                Office &amp; Workspace Design
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.8, 0.2)}
                className="font-inter text-base text-on-surface-variant leading-relaxed"
              >
                Corporate environments engineered for focus and inspiration. We design workspaces that balance structural rigidity with human-centric comfort, utilizing tonal layering to separate functional zones without enclosing them, maintaining an open, gallery-like expanse.
              </motion.p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp(0.6, 0.3)}
                className="mt-2"
              >
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 0 4px rgba(27, 27, 28, 0.15)" }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-on-background text-surface font-inter text-xs uppercase tracking-widest px-6 py-3.5 font-semibold transition-all duration-300"
                  >
                    View Commercial Projects
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Block 3: 3D Layout Planning (Left Text, Right Image) */}
        <section className="py-20 md:py-32 border-b border-outline-variant/20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop items-center">
            {/* Text Content */}
            <div className="col-span-1 md:col-span-5 flex flex-col items-start gap-6 order-2 md:order-1 mt-8 md:mt-0">
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.6)}
                className="inline-block bg-secondary-container text-on-secondary-container font-inter text-[10px] uppercase font-bold px-3.5 py-1 tracking-widest"
              >
                Technical
              </motion.span>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.7, 0.1)}
                className="font-playfair text-3xl md:text-4xl text-on-background font-medium leading-tight"
              >
                3D Layout Planning
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.8, 0.2)}
                className="font-inter text-base text-on-surface-variant leading-relaxed"
              >
                Visualize the future of your space with absolute architectural precision. Our advanced 3D planning phase ensures every structural nuance and volumetric relationship is perfected before construction begins, ensuring a flawless execution of the design intent.
              </motion.p>
            </div>

            {/* Image Container */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageSlideRight(0.8)}
              className="col-span-1 md:col-span-6 md:col-start-7 aspect-[16/9] md:aspect-[4/3] image-inset order-1 md:order-2 overflow-hidden bg-surface-container-low border border-outline-variant/30 group cursor-pointer"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/service-3d-planning.jpg"
                  alt="3D Layout Planning"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-750 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Block 4: Renovation & Redesign Consulting (Right Text, Left Image) */}
        <section className="py-20 md:py-32 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop items-center">
            {/* Image Container */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageSlideLeft(0.8)}
              className="col-span-1 md:col-span-6 aspect-square md:aspect-[4/5] image-inset order-1 overflow-hidden bg-surface-container-low border border-outline-variant/30 group cursor-pointer"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/service-renovation.jpg"
                  alt="Renovation & Redesign Consulting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale-[15%] transition-transform duration-750 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="col-span-1 md:col-span-5 md:col-start-8 flex flex-col items-start gap-6 order-2 mt-8 md:mt-0">
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.6)}
                className="inline-block bg-secondary-container text-on-secondary-container font-inter text-[10px] uppercase font-bold px-3.5 py-1 tracking-widest"
              >
                Advisory
              </motion.span>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.7, 0.1)}
                className="font-playfair text-3xl md:text-4xl text-on-background font-medium leading-tight"
              >
                Renovation &amp; Redesign Consulting
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textPopup(0.8, 0.2)}
                className="font-inter text-base text-on-surface-variant leading-relaxed"
              >
                Strategic guidance for complex transformations. We provide expert oversight to navigate structural changes, material selection, and aesthetic cohesion, ensuring the final result aligns perfectly with our shared vision of calm luxury.
              </motion.p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp(0.6, 0.3)}
                className="mt-2"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(27, 27, 28, 0.05)" }}
                    whileTap={{ scale: 0.98 }}
                    className="border border-on-background text-on-background font-inter text-xs uppercase tracking-widest px-6 py-3.5 font-semibold transition-all duration-300"
                  >
                    Book a Consultation
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
