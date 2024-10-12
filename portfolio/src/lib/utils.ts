// @ts-nocheck
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function randomize(n:number){
  const randomNum = Math.floor(Math.random()*n)

  return randomNum
}