// @ts-nocheck
'use client'

import { useState, useEffect, useCallback } from 'react'

export const useAtBottom = (offset = 10) => {
  const [isAtBottom, setIsAtBottom] = useState(false)

  const checkIfAtBottom = useCallback(() => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY || document.documentElement.scrollTop

    setIsAtBottom(windowHeight + scrollTop >= documentHeight - offset)
  }, [offset])

  useEffect(() => {
    checkIfAtBottom() // Check initially
    window.addEventListener('scroll', checkIfAtBottom)
    window.addEventListener('resize', checkIfAtBottom)

    return () => {
      window.removeEventListener('scroll', checkIfAtBottom)
      window.removeEventListener('resize', checkIfAtBottom)
    }
  }, [checkIfAtBottom])

  return isAtBottom
}