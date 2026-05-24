"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Compass, Paintbrush, Folder, Phone } from "lucide-react";

const DESKTOP_NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
];

const MOBILE_NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Compass },
  { label: "Services", href: "/services", icon: Paintbrush },
  { label: "Projects", href: "/projects", icon: Folder },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md dark:bg-on-background/80 border-b border-outline-variant/30">
        <div className="w-full flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {/* Logo only - Sleek, proper size, no bg color, no text */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-8 md:h-11 w-24 md:w-32">
              <Image
                src="/images/logo.PNG"
                alt="STUDIO Logo"
                fill
                sizes="(max-width: 768px) 96px, 128px"
                className="object-contain filter dark:invert-0"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 h-full relative">
            {DESKTOP_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative font-inter text-xs uppercase tracking-widest text-on-surface-variant dark:text-tertiary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors duration-300 pb-1 h-full flex items-center justify-center font-semibold"
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="desktop-active-nav"
                      className="absolute bottom-5 left-0 right-0 h-[2px] bg-primary dark:bg-primary-fixed-dim"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Trailing Action */}
          <div className="hidden md:block">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 0 4px rgba(242, 193, 78, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 bg-on-background dark:bg-surface text-surface dark:text-on-background font-inter text-xs uppercase tracking-widest hover:text-primary transition-all duration-300 font-semibold"
              >
                Inquire
              </motion.button>
            </Link>
          </div>

          {/* Mobile Right Call Action */}
          <div className="md:hidden flex items-center">
            <Link
              href="/contact"
              className="p-2.5 text-black hover:text-primary transition-colors flex items-center justify-center rounded-full bg-surface-container-low border border-outline-variant/30"
              aria-label="Contact Studio"
            >
              <Phone size={18} className="text-black fill-current" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Tab Bar */}
      <nav 
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-t border-outline-variant/20 shadow-[0_-4px_24px_-10px_rgba(27,27,28,0.08)]"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 8px)" }}
      >
        <div className="w-full flex justify-around items-center h-16 max-w-md mx-auto px-4">
          {MOBILE_NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center w-16 h-full relative"
              >
                <div
                  className={`p-1 transition-colors duration-300 ${
                    isActive ? "text-[#785a00]" : "text-on-surface-variant/70"
                  }`}
                >
                  <Icon size={20} className={isActive ? "stroke-[2.5px]" : "stroke-[1.8px]"} />
                </div>
                <span
                  className={`text-[9px] font-inter uppercase tracking-wider transition-colors duration-300 ${
                    isActive ? "text-[#785a00] font-bold" : "text-on-surface-variant/70"
                  }`}
                >
                  {item.label}
                </span>
                
                {/* Active indicator dot */}
                {isActive && (
                  <motion.div
                    layoutId="mobile-active-dot"
                    className="absolute bottom-1 w-1 h-1 bg-[#785a00] rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
