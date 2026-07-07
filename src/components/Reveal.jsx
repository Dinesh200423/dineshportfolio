import { motion } from "framer-motion";

const easePremium = [0.16, 1, 0.3, 1];

export default function Reveal({
  children,
  delay = 0,
  y = 32,
  as = "div",
  className = "",
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: easePremium }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
