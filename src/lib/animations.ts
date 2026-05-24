import { Variants } from "framer-motion";

export const fadeInUp = (duration = 0.6, delay = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: [0.215, 0.61, 0.355, 1], delay },
  },
});

export const fadeInDown = (duration = 0.6, delay = 0): Variants => ({
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: [0.215, 0.61, 0.355, 1], delay },
  },
});

export const fadeInLeft = (duration = 0.6, delay = 0): Variants => ({
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: [0.215, 0.61, 0.355, 1], delay },
  },
});

export const fadeInRight = (duration = 0.6, delay = 0): Variants => ({
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: [0.215, 0.61, 0.355, 1], delay },
  },
});

export const scaleIn = (duration = 0.6, delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration, ease: [0.215, 0.61, 0.355, 1], delay },
  },
});

/* Specific Text Popup Animation */
export const textPopup = (duration = 0.6, delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
      delay,
      duration,
    },
  },
});

/* Specific Image Slide In Animations */
export const imageSlideLeft = (duration = 0.8, delay = 0): Variants => ({
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: [0.25, 0.46, 0.45, 0.94], delay },
  },
});

export const imageSlideRight = (duration = 0.8, delay = 0): Variants => ({
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: [0.25, 0.46, 0.45, 0.94], delay },
  },
});

export const imageSlideUp = (duration = 0.8, delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: [0.25, 0.46, 0.45, 0.94], delay },
  },
});

export const imageSlideDown = (duration = 0.8, delay = 0): Variants => ({
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: [0.25, 0.46, 0.45, 0.94], delay },
  },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const imageZoomVariants: Variants = {
  hover: { scale: 1.05, transition: { duration: 0.8, ease: "easeOut" } },
};

export const buttonHoverVariants: Variants = {
  hover: {
    scale: 1.02,
    boxShadow: "0 0 0 4px rgba(242, 193, 78, 0.3)",
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  tap: { scale: 0.98 },
};

export const cardHoverVariants: Variants = {
  hover: {
    y: -8,
    boxShadow: "0 10px 40px -10px rgba(27, 27, 28, 0.08)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

