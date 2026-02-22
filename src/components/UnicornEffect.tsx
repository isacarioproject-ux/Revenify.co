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

  // Mobile: lightweight CSS gradient fallback
  if (isMobile) {
    return (
      <div
        className={className}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(ellipse 12% 50% at 50% 25%, rgba(180,140,255,0.50) 0%, rgba(120,60,255,0.20) 50%, transparent 100%),
            radial-gradient(ellipse 35% 25% at 50% 30%, rgba(80,40,200,0.18) 0%, transparent 100%),
            radial-gradient(ellipse 6% 40% at 50% 25%, rgba(220,200,255,0.35) 0%, transparent 100%),
            linear-gradient(180deg, #050008 0%, #000000 100%)
          `,
          ...style,
        }}
      />
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
