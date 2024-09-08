import React from 'react'
import Hero from "../components/Home/Hero"
import NavIcons from "../components/Home/NavIcons"
import { AnimatePresence, motion } from 'framer-motion'


export default function Home() {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 0.5}}}
    exit={{opacity: 0, transition: {duration: 10}}}

    className='pb-52'>
        <Hero />
        <NavIcons />
    </motion.div>
  )
}
