"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Scale } from "lucide-react"

// type className = string | string[] | undefined

const Logo = () => {

  const SVGanim = {
    rest: {

      scale: 1,
      transition: {
        duration: 0.5,
      }
    },
    active: {
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: .2,
      }
    }
  }

  const pathAnims = {

    rest: {

      y: -10,
      transition: {

        duration: 1,
        type: "tween",
        ease: "easeIn"
      }
    },
    active: {
      staggerChildren: .5,
      y: 20,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  }

  return (
    <div className='header' title="click to return home">
      <motion.svg
        variants={SVGanim}
        initial="rest" whileHover="active" animate="rest"

        className='logo text-destructive min-w-20 p-1'
        viewBox="-50 -50 500 400"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        version="1.1"

        xmlns="http://www.w3.org/2000/svg">
        <defs
          id="defs4" />
        <motion.path
          variants={pathAnims}

          d="M 10,10 V 120 L 30,90 h 92 l 48,-80 z"
          fill="currentColor"
          strokeWidth="0.5"

          id="path1" />
        <motion.path
          variants={pathAnims}
          d="M 181,10 10,290 H 110 L 280,10.443352 Z"
          fill="currentColor"
          strokeWidth="0.5"

          id="path2" />
        <motion.path
          variants={pathAnims}
          d="m 390.21829,10 -150,240 -49,-80 99,-159.556648 z"
          fill="currentColor"
          strokeWidth="0.5"

          id="path3" />
        <motion.path
          variants={pathAnims}
          d="m 244.21828,256 16.09171,33.90829 129.90829,0.0917 -80,-140 z"
          fill="currentColor"
          strokeWidth="0.5"

          id="path4" />
      </motion.svg>
    </div>
  )
}

export default Logo