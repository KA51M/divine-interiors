"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, animate, useInView } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import {
  fadeInUp,
  staggerContainer,
  imageZoomVariants,
  buttonHoverVariants,
  textPopup,
  imageSlideLeft,
  imageSlideRight,
  imageSlideUp,
} from "@/lib/animations";

function Counter({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-10px" });

  useEffect(() => {
    if (inView) {
      const node = nodeRef.current;
      if (!node) return;

      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate(latest) {
          node.textContent = Math.round(latest).toLocaleString();
        },
      });

      return () => controls.stop();
    }
  }, [inView, value, duration]);

  return <span ref={nodeRef}>0</span>;
}

export default function Home() {
  return (
    <PageTransition>
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-secondary">
          <Image
            src="/images/hero-home.jpg"
            alt="Hero Interior"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-90 mix-blend-multiply filter contrast-125 saturate-50"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center md:text-left flex flex-col items-center md:items-start justify-center h-full">
          <motion.div
            variants={staggerContainer(0.2, 0.1)}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h1
              variants={textPopup(0.8)}
              className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6"
            >
              Spaces Designed with Purpose &amp; Elegance
            </motion.h1>
            <motion.p
              variants={textPopup(0.8, 0.15)}
              className="font-inter text-lg md:text-xl text-inverse-on-surface/80 mb-10 max-w-xl"
            >
              Minimal and emotional. We craft environments that speak to the soul through architectural precision and curated serenity.
            </motion.p>
            <motion.div
              variants={fadeInUp(0.8, 0.3)}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6"
            >
              <Link href="/projects" className="w-full sm:w-auto">
                <motion.button
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary-container font-inter text-xs uppercase tracking-widest font-semibold transition-all duration-300"
                >
                  Explore Projects
                </motion.button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full sm:w-auto px-8 py-4 border border-white text-white font-inter text-xs uppercase tracking-widest hover:bg-white/10 transition-all duration-300 font-semibold"
                >
                  Book Consultation
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="text-white opacity-70" size={24} />
          </motion.div>
        </div>
      </section>



      {/* 2. Signature Intro */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          {/* Left: Brand Story */}
          <div className="md:col-span-5 md:pr-10 order-2 md:order-1 mt-10 md:mt-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10px" }}
              variants={textPopup(0.6)}
              className="w-12 h-px bg-outline mb-8"
            ></motion.div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10px" }}
              variants={textPopup(0.7)}
              className="font-playfair text-3xl md:text-4xl lg:text-5xl font-medium text-on-background mb-6 leading-tight"
            >
              The intersection of art and architecture.
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10px" }}
              variants={textPopup(0.8, 0.1)}
              className="font-inter text-base text-on-surface-variant mb-8 leading-relaxed"
            >
              Founded on the principles of Calm Luxury, STUDIO approaches each project as a unique narrative. We believe that an interior should be a quiet sanctuary—expansive, high-contrast, and meticulously detailed. Our design language embraces generous whitespace, structural grids, and tonal depth to evoke confidence and timelessness.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10px" }}
              variants={fadeInUp(0.6, 0.2)}
            >
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-on-background hover:text-primary transition-colors group font-semibold"
              >
                <span className="font-inter text-xs uppercase tracking-widest">Read Our Story</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Portrait Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10px" }}
            variants={imageSlideRight(0.8)}
            className="md:col-span-6 md:col-start-7 order-1 md:order-2 zoom-container border border-outline-variant/50 p-2 bg-surface-container-low shadow-gallery relative group cursor-pointer"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <motion.div
                whileHover="hover"
                className="w-full h-full"
                variants={imageZoomVariants}
              >
                <Image
                  src="/images/designer-workspace.jpg"
                  alt="Designer Workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-750"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2.5. Awards & Recognition Section */}
      <section className="w-full bg-surface py-20 md:py-28 border-t border-outline-variant/30 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Award Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10px" }}
              variants={imageSlideLeft(0.8)}
              className="lg:col-span-5"
            >
              <div className="zoom-container border border-outline-variant/20 p-2 bg-surface-container-low shadow-gallery max-w-md mx-auto lg:ml-0 group cursor-pointer relative aspect-[4/3] w-full overflow-hidden">
                <motion.div
                  whileHover="hover"
                  className="w-full h-full"
                  variants={imageZoomVariants}
                >
                  <Image
                    src="/images/award-trendsetter.jpg"
                    alt="India Trendsetter Design Awards Ceremony"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-all duration-750"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column: Editorial Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <motion.span 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10px" }}
                variants={textPopup(0.6)}
                className="font-inter text-[10px] uppercase tracking-[0.25em] text-primary font-bold mb-4"
              >
                Excellence in Design
              </motion.span>
              
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10px" }}
                variants={textPopup(0.7, 0.1)}
                className="font-playfair text-3xl md:text-4xl lg:text-5xl text-on-background mb-8 leading-tight font-medium"
              >
                Awards &amp; Recognition
              </motion.h2>

              <div className="mb-8 space-y-4">
                <motion.h3 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10px" }}
                  variants={textPopup(0.7, 0.2)}
                  className="font-playfair text-lg md:text-xl text-on-surface font-medium italic"
                >
                  India Trendsetter Design Awards — Goa 2024
                </motion.h3>
                <motion.p 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10px" }}
                  variants={fadeInUp(0.8, 0.3)}
                  className="font-inter text-sm md:text-base text-on-surface-variant leading-relaxed max-w-xl"
                >
                  Grateful and honored to be recognized as the <span className="text-on-background font-semibold">Promising and Innovative Interior Design &amp; Execution Firm of the Year!</span> This award is a testament to our passion for creativity and excellence in every project.
                </motion.p>
              </div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10px" }}
                variants={fadeInUp(0.8, 0.4)}
                className="pt-6 border-t border-outline-variant/20 w-full max-w-xl"
              >
                <p className="font-inter text-[11px] md:text-xs text-on-surface/50 italic leading-relaxed">
                  Thank you @beginup_com for this award; we are deeply grateful to have it in our hands.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.7. Impact Stats Section (Moved here after Awards) */}
      <section className="w-full bg-surface-container-low border-t border-outline-variant/30 py-20 md:py-24 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            {/* Stat 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10px" }}
              variants={fadeInUp(0.8, 0.1)}
              className="flex flex-col items-center justify-center p-8 border border-outline-variant/20 bg-surface rounded-sm shadow-gallery"
            >
              <span className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-3">
                <Counter value={36} />
              </span>
              <span className="font-inter text-xs uppercase tracking-[0.2em] text-on-surface-variant font-semibold">
                Clients in India
              </span>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10px" }}
              variants={fadeInUp(0.8, 0.2)}
              className="flex flex-col items-center justify-center p-8 border border-outline-variant/20 bg-surface rounded-sm shadow-gallery"
            >
              <span className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-3">
                <Counter value={50} />
              </span>
              <span className="font-inter text-xs uppercase tracking-[0.2em] text-on-surface-variant font-semibold">
                Projects Completed
              </span>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10px" }}
              variants={fadeInUp(0.8, 0.3)}
              className="flex flex-col items-center justify-center p-8 border border-outline-variant/20 bg-surface rounded-sm shadow-gallery"
            >
              <div className="flex items-baseline justify-center mb-3">
                <span className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
                  <Counter value={5555} />
                </span>
                <span className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-primary ml-1">
                  K
                </span>
              </div>
              <span className="font-inter text-xs uppercase tracking-[0.2em] text-on-surface-variant font-semibold">
                Square Feet
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Featured Work */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 border-t border-outline-variant/30">
        <div className="flex justify-between items-end mb-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10px" }}
            variants={textPopup(0.6)}
            className="font-playfair text-2xl md:text-3xl text-on-background"
          >
            Selected Works
          </motion.h2>
        </div>

        {/* Masonry-style Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Item 1 - Large (8 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10px" }}
            variants={imageSlideLeft(0.8)}
            className="md:col-span-8 group relative overflow-hidden border border-outline-variant/50 bg-surface cursor-pointer aspect-[16/10] md:aspect-[16/9]"
          >
            <Link href="/projects">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/project-minimalist-loft.jpg"
                  alt="The Minimalist Loft"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-on-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="font-playfair text-2xl text-surface transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 font-medium">
                    The Minimalist Loft
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Item 2 - Small (4 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10px" }}
            variants={imageSlideRight(0.8)}
            className="md:col-span-4 group relative overflow-hidden border border-outline-variant/50 bg-surface cursor-pointer aspect-square md:aspect-auto"
          >
            <Link href="/projects">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/project-curved-concrete.jpg"
                  alt="Curved Concrete"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-on-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="font-playfair text-2xl text-surface text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 font-medium">
                    Curved Concrete
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Item 3 - Small (4 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10px" }}
            variants={imageSlideLeft(0.8)}
            className="md:col-span-4 group relative overflow-hidden border border-outline-variant/50 bg-surface cursor-pointer aspect-square md:aspect-auto"
          >
            <Link href="/projects">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/project-urban-sanctuary.jpg"
                  alt="Urban Sanctuary"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-on-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="font-playfair text-2xl text-surface text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 font-medium">
                    Urban Sanctuary
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Item 4 - Large (8 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10px" }}
            variants={imageSlideRight(0.8)}
            className="md:col-span-8 group relative overflow-hidden border border-outline-variant/50 bg-surface cursor-pointer aspect-[16/10] md:aspect-[16/9]"
          >
            <Link href="/projects">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/project-atelier-space.jpg"
                  alt="Atelier Space"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-on-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="font-playfair text-2xl text-surface text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 font-medium">
                    Atelier Space
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10px" }}
          variants={fadeInUp(0.6, 0.2)}
          className="mt-16 text-center"
        >
          <Link href="/projects">
            <motion.button
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-primary-container text-on-primary-container font-inter text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer rounded-sm"
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </section>



      {/* 4. Philosophy Strip */}
      <section className="w-full bg-secondary-container py-32 px-margin-mobile md:px-margin-desktop border-y border-outline-variant/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10px" }}
          variants={textPopup(0.8)}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="font-playfair text-3xl md:text-4xl lg:text-5xl text-on-secondary-container leading-tight italic">
            &ldquo;We design interiors that reflect personality, light, and absolute balance.&rdquo;
          </p>
          <div className="w-16 h-px bg-outline mx-auto mt-12"></div>
        </motion.div>
      </section>

      {/* 5. Disciplines Section */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-24">
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10px" }}
            variants={textPopup(0.6)}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl text-on-background mb-4"
          >
            Disciplines
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10px" }}
            variants={textPopup(0.7, 0.1)}
            className="font-inter text-base text-on-surface-variant max-w-2xl mx-auto opacity-70 leading-relaxed"
          >
            A comprehensive approach to spatial design, blending architectural precision with aesthetic intuition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Consultation (Large/Featured) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10px" }}
            variants={imageSlideUp(0.6)}
            className="group relative bg-[#dfac2c]/10 border border-outline-variant/30 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 flex flex-col h-full md:col-span-12 lg:col-span-8 cursor-pointer"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10px" }}
              variants={imageSlideUp(0.8)}
              className="relative w-full aspect-video md:aspect-[21/9] mb-6 overflow-hidden border border-outline-variant/20"
            >
              <Image
                src="/images/discipline-consultation.jpg"
                alt="Consultation"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.h3
              variants={textPopup(0.6, 0.15)}
              className="font-playfair text-2xl font-medium text-on-background mb-3"
            >
              Consultation
            </motion.h3>
            <motion.p
              variants={textPopup(0.6, 0.25)}
              className="font-inter text-sm text-on-surface-variant leading-relaxed opacity-80 max-w-2xl"
            >
              Expert guidance to define your vision and spatial potential, creating a roadmap for your unique narrative. Our process begins with a deep dive into your lifestyle and aspirations.
            </motion.p>
          </motion.div>

          {/* Space Planning */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10px" }}
            variants={imageSlideUp(0.6, 0.1)}
            className="group relative bg-[#dfac2c]/10 border border-outline-variant/30 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 flex flex-col h-full md:col-span-6 lg:col-span-4 cursor-pointer"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10px" }}
              variants={imageSlideRight(0.8)}
              className="relative w-full aspect-[4/3] mb-6 overflow-hidden border border-outline-variant/20"
            >
              <Image
                src="/images/discipline-space-planning.jpg"
                alt="Space Planning"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.h3
              variants={textPopup(0.6, 0.15)}
              className="font-playfair text-2xl font-medium text-on-background mb-3"
            >
              Space Planning
            </motion.h3>
            <motion.p
              variants={textPopup(0.6, 0.25)}
              className="font-inter text-sm text-on-surface-variant leading-relaxed opacity-80"
            >
              Meticulous architectural flow and functional zoning to maximize volume, light, and usability.
            </motion.p>
          </motion.div>

          {/* Concept Development */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10px" }}
            variants={imageSlideUp(0.6, 0.2)}
            className="group relative bg-[#dfac2c]/10 border border-outline-variant/30 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 flex flex-col h-full md:col-span-6 lg:col-span-5 cursor-pointer"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10px" }}
              variants={imageSlideLeft(0.8)}
              className="relative w-full aspect-[4/3] mb-6 overflow-hidden border border-outline-variant/20"
            >
              <Image
                src="/images/discipline-concept-development.jpg"
                alt="Concept Development"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.h3
              variants={textPopup(0.6, 0.15)}
              className="font-playfair text-2xl font-medium text-on-background mb-3"
            >
              Concept Development
            </motion.h3>
            <motion.p
              variants={textPopup(0.6, 0.25)}
              className="font-inter text-sm text-on-surface-variant leading-relaxed opacity-80"
            >
              Crafting a cohesive narrative and aesthetic direction that serves as the soul of your sanctuary through material exploration.
            </motion.p>
          </motion.div>

          {/* Design Development */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10px" }}
            variants={imageSlideUp(0.6, 0.3)}
            className="group relative bg-[#dfac2c]/10 border border-outline-variant/30 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 flex flex-col h-full md:col-span-12 lg:col-span-7 cursor-pointer"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10px" }}
              variants={imageSlideUp(0.8)}
              className="relative w-full aspect-video mb-6 overflow-hidden border border-outline-variant/20"
            >
              <Image
                src="/images/discipline-design-development.jpg"
                alt="Design Development"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.h3
              variants={textPopup(0.6, 0.15)}
              className="font-playfair text-2xl font-medium text-on-background mb-3"
            >
              Design Development
            </motion.h3>
            <motion.p
              variants={textPopup(0.6, 0.25)}
              className="font-inter text-sm text-on-surface-variant leading-relaxed opacity-80"
            >
              Detailed refinement of materials, finishes, and architectural details to ensure absolute precision in the final build.
            </motion.p>
          </motion.div>
        </div>

        {/* View All Services Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10px" }}
          variants={fadeInUp(0.6, 0.4)}
          className="mt-16 text-center"
        >
          <Link href="/services">
            <motion.button
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-primary-container text-on-primary-container font-inter text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer rounded-sm"
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  );
}
