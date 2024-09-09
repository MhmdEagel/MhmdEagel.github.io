import React from "react";
import { motion } from "framer-motion";
import ProjectList from "../components/Projects/ProjectList";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="pb-52"
    >
      <ProjectList />
    </motion.div>
  );
}
