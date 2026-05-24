"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import {
  fadeInUp,
  textPopup,
  imageSlideLeft,
  imageSlideRight,
} from "@/lib/animations";

// Form Schema definition using Zod
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().refine((val) => !val || /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(val), {
    message: "Invalid phone number format",
  }).optional(),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  message: z.string().min(10, "Message details must be at least 10 characters"),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Submitted:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <PageTransition>
      <main className="flex-grow flex items-center justify-center pt-32 pb-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          
          {/* Header Section (Mobile only) */}
          <div className="col-span-1 md:hidden mb-10">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={textPopup(0.6)}
              className="font-playfair text-4xl text-on-background mb-4"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={textPopup(0.6, 0.15)}
              className="font-inter text-base text-on-surface-variant"
            >
              We&apos;d love to hear about your next project.
            </motion.p>
          </div>

          {/* Left: Contact Form Container */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageSlideLeft(0.8)}
            className="col-span-1 md:col-span-7 bg-surface-container-low p-8 md:p-12 lg:p-16 border border-outline-variant/50 relative overflow-hidden"
          >
            {/* Header Section (Desktop only) */}
            <div className="hidden md:block mb-12">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={textPopup(0.7)}
                className="font-playfair text-5xl text-on-background mb-4"
              >
                Get in Touch
              </motion.h1>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={textPopup(0.7, 0.15)}
                className="font-inter text-base text-on-surface-variant max-w-md leading-relaxed"
              >
                We curate spaces that reflect quiet confidence. Tell us about your vision.
              </motion.p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-8 relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name Input */}
                    <div className="relative flex flex-col">
                      <input
                        {...register("name")}
                        className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-on-background focus:ring-0 px-0 py-2.5 font-inter text-base text-on-background transition-colors duration-300 placeholder-transparent outline-none"
                        id="name"
                        placeholder="Name"
                        type="text"
                      />
                      <label
                        className="absolute left-0 top-2.5 font-inter text-sm text-on-surface-variant transition-all duration-300 pointer-events-none
                          peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base
                          peer-focus:-top-4 peer-focus:text-xs peer-focus:text-on-background
                          peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-on-background"
                        htmlFor="name"
                      >
                        Name *
                      </label>
                      {errors.name && (
                        <span className="text-error text-xs mt-1 font-inter">{errors.name.message}</span>
                      )}
                    </div>

                    {/* Phone Input */}
                    <div className="relative flex flex-col">
                      <input
                        {...register("phone")}
                        className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-on-background focus:ring-0 px-0 py-2.5 font-inter text-base text-on-background transition-colors duration-300 placeholder-transparent outline-none"
                        id="phone"
                        placeholder="Phone"
                        type="tel"
                      />
                      <label
                        className="absolute left-0 top-2.5 font-inter text-sm text-on-surface-variant transition-all duration-300 pointer-events-none
                          peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base
                          peer-focus:-top-4 peer-focus:text-xs peer-focus:text-on-background
                          peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-on-background"
                        htmlFor="phone"
                      >
                        Phone (Optional)
                      </label>
                      {errors.phone && (
                        <span className="text-error text-xs mt-1 font-inter">{errors.phone.message}</span>
                      )}
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative flex flex-col">
                    <input
                      {...register("email")}
                      className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-on-background focus:ring-0 px-0 py-2.5 font-inter text-base text-on-background transition-colors duration-300 placeholder-transparent outline-none"
                      id="email"
                      placeholder="Email"
                      type="email"
                    />
                    <label
                      className="absolute left-0 top-2.5 font-inter text-sm text-on-surface-variant transition-all duration-300 pointer-events-none
                        peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base
                        peer-focus:-top-4 peer-focus:text-xs peer-focus:text-on-background
                        peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-on-background"
                      htmlFor="email"
                    >
                      Email Address *
                    </label>
                    {errors.email && (
                      <span className="text-error text-xs mt-1 font-inter">{errors.email.message}</span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="relative flex flex-col pt-2">
                    <textarea
                      {...register("message")}
                      className="peer w-full bg-transparent border-0 border-b border-outline-variant focus:border-on-background focus:ring-0 px-0 py-2.5 font-inter text-base text-on-background transition-colors duration-300 resize-none placeholder-transparent outline-none"
                      id="message"
                      placeholder="Message Details"
                      rows={4}
                    />
                    <label
                      className="absolute left-0 top-4 font-inter text-sm text-on-surface-variant transition-all duration-300 pointer-events-none
                        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-on-background
                        peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-on-background"
                      htmlFor="message"
                    >
                      Message Details *
                    </label>
                    {errors.message && (
                      <span className="text-error text-xs mt-1 font-inter">{errors.message.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 0 0 4px rgba(242, 193, 78, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-4 bg-on-background text-surface font-inter text-xs uppercase tracking-widest font-semibold hover:text-primary-container transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      type="submit"
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Schedule Consultation <ArrowRight size={14} />
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 relative z-10"
                >
                  <CheckCircle2 size={64} className="text-primary mb-6 animate-pulse" />
                  <h2 className="font-playfair text-2xl md:text-3xl text-on-background font-medium mb-3">
                    Thank You
                  </h2>
                  <p className="font-inter text-base text-on-surface-variant max-w-md leading-relaxed mb-8">
                    Your inquiry has been received. One of our design advisors will contact you within 24 hours to schedule your introductory consultation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="border border-on-background text-on-background font-inter text-xs uppercase tracking-widest px-6 py-3 font-semibold hover:bg-surface-container-low transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Decorative background element */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-secondary-container rounded-full opacity-20 blur-3xl pointer-events-none"></div>
          </motion.div>

          {/* Right: Contact Details & Map */}
          <div className="col-span-1 md:col-span-5 flex flex-col h-full justify-between pt-8 md:pt-0">
            <div className="space-y-10 mb-12 md:pl-8">
              {/* Inquiries */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={textPopup(0.6)}
                className="group"
              >
                <h3 className="font-inter text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-2.5">
                  Inquiries
                </h3>
                <a
                  className="font-playfair text-xl md:text-2xl text-on-background hover:text-primary transition-colors block font-medium"
                  href="mailto:hello@studiointeriors.com"
                >
                  hello@studiointeriors.com
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={textPopup(0.6, 0.1)}
              >
                <h3 className="font-inter text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-2.5">
                  Phone
                </h3>
                <a
                  className="font-inter text-base md:text-lg text-on-background hover:text-primary transition-colors block"
                  href="tel:+12125550198"
                >
                  +1 (212) 555-0198
                </a>
              </motion.div>

              {/* Studio Address */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={textPopup(0.6, 0.2)}
              >
                <h3 className="font-inter text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-2.5">
                  Studio
                </h3>
                <address className="font-inter text-base text-on-background not-italic leading-relaxed">
                  120 Minimalist Way
                  <br />
                  Suite 400
                  <br />
                  New York, NY 10012
                </address>
              </motion.div>
            </div>

            {/* Map Placeholder Image with location marker */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10px" }}
              variants={imageSlideRight(0.8)}
              className="w-full aspect-[4/3] md:aspect-square bg-surface-container-highest relative overflow-hidden border border-outline-variant/30 mt-auto group cursor-pointer"
            >
              <Image
                src="/images/map-new-york.jpg"
                alt="Studio Location Map"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-750 ease-in-out"
              />
              {/* Floating Pin Marker */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none drop-shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <MapPin size={32} className="text-primary-container fill-primary" />
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </main>
    </PageTransition>
  );
}
