'use client';
import { useContext } from 'react';
import { TabsContext } from '../../context/tabsContext';
import { AnimatePresence, motion } from "framer-motion";

const fadeVariants = {
  initial: { opacity: 0, y: 5, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.98 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

const FadeInOut = ({ children }) => {
  const { activeTab } = useContext(TabsContext);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeInOut;