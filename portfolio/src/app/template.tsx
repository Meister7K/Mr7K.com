'use client'

import { motion} from 'framer-motion'
import { ReactNode } from 'react'
import { usePageTransition } from '@/hooks/usePageTransition'
import Footer from '@/components/footer/Footer'
import ProgressBar from '@/components/loading/ProgressBar'

const PageTransition = ({ children }: { children: ReactNode }) => {
  const isTransitioning = usePageTransition()

  return (
    <>
      {/* {isTransitioning && (
        <motion.div
          key="transition"
          className="fixed inset-0 z-50 bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )} */}
      <motion.div
        key="page"
        initial={{ y:20, opacity: 0 }}
        animate={{y:0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease:'easeInOut', duration: 0.5 }}
        
      >
        <ProgressBar/>
        {children}
        <Footer/>
      </motion.div>
    </>
  )
}

export default PageTransition