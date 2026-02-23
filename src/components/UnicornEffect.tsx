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

export const UnicornEffect = ({
  projectId,
  className = '',
  style
}: UnicornEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<unknown>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let isMounted = true
    const isMobile = window.innerWidth < 768

    const initScene = async () => {
      let attempts = 0
      while (!window.UnicornStudio?.addScene && attempts < 30) {
        await new Promise(resolve => setTimeout(resolve, 100))
        attempts++
      }

      if (!window.UnicornStudio?.addScene || !containerRef.current || !isMounted) {
        if (isMounted) setHasError(true)
        return
      }

      try {
        const scene = await window.UnicornStudio.addScene({
          element: containerRef.current,
          projectId: projectId,
          scale: isMobile ? 0.5 : 1,
          dpi: isMobile ? 0.5 : 1.0,
          lazyLoad: true,
          production: true,
        })
        sceneRef.current = scene
      } catch (err) {
        console.error('[UnicornEffect] Error adding scene:', err)
        if (isMounted) setHasError(true)
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
  }, [projectId])

  // Only show minimal fallback if WebGL completely fails
  if (hasError) {
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
            radial-gradient(ellipse 8% 45% at 50% 20%, rgba(160,120,255,0.35) 0%, transparent 100%),
            radial-gradient(ellipse 25% 20% at 50% 25%, rgba(80,40,200,0.12) 0%, transparent 100%),
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

