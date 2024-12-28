import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import animations from "../animations/animationTypes";

export default function PageTransition({ children }) {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      variants={animations.zoomInOut}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
