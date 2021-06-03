export const pageTransition = {
  initial: {
    opacity: 0,
    scale: 1.1,
  },
  in: {
    opacity: 1,
    scale: 1,
    x: "0vw",
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};

export const reveal = {
  initial: {
    opacity: 0.5,
    scale: 0.9,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
};

export const slideIn = {
  initial: {
    opacity: 0,
    x: -100,
  },
  in: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const verticalReveal = {
  initial: {
    y: -10,
    opacity: 0,
  },
  in: {
    y: 0,
    opacity: 1,
  },
};

export const staggerAnimation = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export const fadeReveal = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

export const slideFromRight = {
  initial: {
    opacity: 0,
    x: 100,
  },
  in: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};
