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
    scale: 0.8,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
};
