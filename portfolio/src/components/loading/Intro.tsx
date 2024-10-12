// @ts-nocheck
'use client'

import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Your loading content here */}
    </motion.div>
  )
}

export default Intro