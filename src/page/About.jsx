import React from "react";
import AboutMe from "../components/About/AboutMe";
import Licenses from "../components/About/Licenses";
import { AnimatePresence, motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="mt-10 pb-52"
    >
      <AboutMe />
      <Licenses />
    </motion.div>
  );
}
