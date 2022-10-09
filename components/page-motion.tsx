import { pageMotion } from "../utils/motion-variants";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageMotion({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={pageMotion}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      {children}
    </motion.div>
  );
}
