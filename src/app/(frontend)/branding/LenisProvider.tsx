'use client'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

let lenisInstance: Lenis | null = null

export function stopLenis() { lenisInstance?.stop() }
export function startLenis() { lenisInstance?.start() }

export default function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  prevent: (node) => node.hasAttribute('data-lenis-prevent'),
})
    lenisInstance = lenis

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])

  return null
}