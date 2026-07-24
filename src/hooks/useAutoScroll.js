import { useEffect, useRef } from "react";

// Continuously scrolls a horizontally-scrollable element, pausing on hover/touch
// and looping seamlessly once it passes the width of one content set (the caller
// is expected to render its items twice back-to-back for the loop to be seamless).
export function useAutoScroll({ speed = 0.5 } = {}) {
  const ref = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const pause = () => (pausedRef.current = true);
    const resume = () => (pausedRef.current = false);

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume);

    let frameId;
    const step = () => {
      if (!pausedRef.current) {
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        } else {
          el.scrollLeft += speed;
        }
      }
      frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frameId);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, [speed]);

  return ref;
}
