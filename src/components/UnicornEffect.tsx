// src/components/UnicornEffect.tsx
import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    UnicornStudio?: {
      init: (options?: { scale?: number; dpi?: number }) => Promise<unknown[]>
      destroy: () => void
      addScene: (options: {
        elementId?: string
        element?: HTMLElement
        projectId: string
        scale?: number
        dpi?: number
        lazyLoad?: boolean
        production?: boolean
      }) => Promise<unknown>
    }
  }
}

interface UnicornEffectProps {
  projectId: string
  className?: string
  style?: React.CSSProperties
}

const MOBILE_BREAKPOINT = 768

export const UnicornEffect = ({
  projectId,
  className = '',
  style
}: UnicornEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<unknown>(null)
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT
  )

  // Detect mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
  }, [])

  useEffect(() => {
    // Skip heavy WebGL on mobile to prevent freezing
    if (isMobile) return

    let isMounted = true

    const initScene = async () => {
      let attempts = 0
      while (!window.UnicornStudio?.addScene && attempts < 30) {
        await new Promise(resolve => setTimeout(resolve, 100))
        attempts++
      }

      if (!window.UnicornStudio?.addScene || !containerRef.current || !isMounted) {
        return
      }

      try {
        const scene = await window.UnicornStudio.addScene({
          element: containerRef.current,
          projectId: projectId,
          scale: 1,
          dpi: 1.0,
          lazyLoad: true,
          production: true,
        })
        sceneRef.current = scene
      } catch (err) {
        console.error('[UnicornEffect] Error adding scene:', err)
      }
    }

    initScene()

    // Hide watermark
    const hideWatermark = () => {
      if (!containerRef.current) return

      const links = containerRef.current.querySelectorAll('a')
      links.forEach(link => {
        if (link.href?.includes('unicorn')) {
          link.style.cssText = 'display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important;position:absolute!important;left:-9999px!important;'
        }
      })
    }

    const timers = [
      setTimeout(hideWatermark, 1000),
      setTimeout(hideWatermark, 2000),
      setTimeout(hideWatermark, 4000),
    ]

    const observer = new MutationObserver(hideWatermark)
    if (containerRef.current) {
      observer.observe(containerRef.current, { childList: true, subtree: true })
    }

    return () => {
      isMounted = false
      timers.forEach(clearTimeout)
      observer.disconnect()
    }
  }, [projectId, isMobile])

  // Mobile: enhanced CSS gradient fallback with animation
  if (isMobile) {
    return (
      <>
        <style>{`
          @keyframes unicornPulse {
            0%, 100% { opacity: 0.85; transform: scale(1) translateY(0); }
            50% { opacity: 1; transform: scale(1.05) translateY(-2%); }
          }
          @keyframes unicornShift {
            0%, 100% { opacity: 0.6; transform: translateX(0) scale(1); }
            50% { opacity: 0.9; transform: translateX(3%) scale(1.08); }
          }
        `}</style>
        <div
          className={className}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(180deg, #050008 0%, #000000 100%)',
            overflow: 'hidden',
            ...style,
          }}
        >
          {/* Primary aurora glow */}
          <div style={{
            position: 'absolute',
            top: '5%',
            left: '15%',
            width: '70%',
            height: '60%',
            background: 'radial-gradient(ellipse 100% 100% at 50% 30%, rgba(140,80,255,0.55) 0%, rgba(100,40,220,0.25) 40%, transparent 70%)',
            filter: 'blur(30px)',
            animation: 'unicornPulse 6s ease-in-out infinite',
          }} />
          {/* Bright center beam */}
          <div style={{
            position: 'absolute',
            top: '0%',
            left: '35%',
            width: '30%',
            height: '70%',
            background: 'radial-gradient(ellipse 100% 80% at 50% 20%, rgba(200,170,255,0.50) 0%, rgba(150,100,255,0.20) 40%, transparent 70%)',
            filter: 'blur(20px)',
            animation: 'unicornShift 8s ease-in-out infinite',
          }} />
          {/* Subtle side accent */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '40%',
            height: '50%',
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(80,40,200,0.20) 0%, transparent 70%)',
            filter: 'blur(25px)',
          }} />
          {/* Subtle right accent */}
          <div style={{
            position: 'absolute',
            top: '8%',
            right: '5%',
            width: '35%',
            height: '45%',
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(120,60,255,0.15) 0%, transparent 70%)',
            filter: 'blur(25px)',
          }} />
        </div>
      </>
    )
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        ...style
      }}
    >
      <style>{`
        [data-scene-id] {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
        }
        [data-scene-id] canvas {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          display: block !important;
        }
        [data-scene-id] a[href*="unicorn"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
          position: absolute !important;
          left: -9999px !important;
        }
      `}</style>
    </div>
  )
}

export default UnicornEffect
