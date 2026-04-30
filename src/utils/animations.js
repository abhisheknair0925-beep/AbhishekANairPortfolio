// Reusable Framer Motion Variants

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15,
      duration: 0.6 
    } 
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const hoverLift = {
  rest: { y: 0, scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: { 
    y: -8, 
    scale: 1.02, 
    boxShadow: "0px 10px 30px rgba(99,102,241,0.15)",
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
};

export const imageZoom = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeInOut" } },
};

export const buttonGlow = {
  rest: { scale: 1, boxShadow: "0 0 0px rgba(99,102,241,0)" },
  hover: { 
    scale: 1.05, 
    boxShadow: "0 0 20px rgba(99,102,241,0.5)",
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
};
