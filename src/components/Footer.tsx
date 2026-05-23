import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-on-background w-full pt-16 pb-24 md:pb-8 border-t border-outline-variant/30 text-on-surface dark:text-inverse-on-surface">
      <div className="grid grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Column with Logo image only */}
        <div className="col-span-12 md:col-span-6 mb-8 md:mb-0">
          <Link href="/" className="flex items-center group mb-4">
            <div className="relative h-8 w-24">
              <Image
                src="/images/logo.PNG"
                alt="STUDIO Logo"
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
          </Link>
          <p className="font-inter text-sm text-on-surface-variant dark:text-inverse-on-surface/80 max-w-sm leading-relaxed mt-2">
            Architectural precision and curated serenity. Curating spaces of quiet luxury and structural rigor.
          </p>
        </div>

        {/* Links Column */}
        <div className="col-span-12 md:col-span-6 flex flex-col md:flex-row justify-start md:justify-end gap-y-4 gap-x-8 items-start md:items-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-sm text-secondary dark:text-tertiary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors duration-300 opacity-80 hover:opacity-100"
          >
            Instagram
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-sm text-secondary dark:text-tertiary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors duration-300 opacity-80 hover:opacity-100"
          >
            Pinterest
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-sm text-secondary dark:text-tertiary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors duration-300 opacity-80 hover:opacity-100"
          >
            LinkedIn
          </a>
          <Link
            href="/privacy"
            className="font-inter text-sm text-secondary dark:text-tertiary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors duration-300 opacity-80 hover:opacity-100"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Copyright */}
        <div className="col-span-12 mt-12 pt-8 border-t border-outline-variant/20 flex justify-between items-center text-sm">
          <span className="font-inter text-xs tracking-wider uppercase text-on-surface dark:text-inverse-on-surface opacity-60">
            © {new Date().getFullYear()} STUDIO INTERIORS. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
}
