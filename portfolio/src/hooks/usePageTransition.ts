// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export const usePageTransition = () => {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 500) // Adjust timing as needed
    return () => clearTimeout(timer)
  }, [pathname])

  return isTransitioning
}