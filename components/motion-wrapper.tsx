"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function MotionWrapper({
  children,
  delay = 0,
  y = 20,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}
