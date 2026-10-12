import { motion, type HTMLMotionProps } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/** Fades content up once as it scrolls into view. */
export default function Reveal({ delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease }}
      {...props}
    />
  );
}
