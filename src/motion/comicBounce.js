// Shared springy "comic panel" bounce for every button — a little overshoot
// wiggle on hover, and a squash on tap, like a cartoon sticker being poked.
export const comicBounce = {
  whileHover: {
    scale: 1.08,
    rotate: [0, -3, 3, -2, 0],
    transition: { rotate: { duration: 0.5, ease: "easeInOut" }, scale: { type: "spring", stiffness: 400, damping: 10 } },
  },
  whileTap: {
    scale: 0.9,
    rotate: -2,
    transition: { type: "spring", stiffness: 500, damping: 12 },
  },
};
