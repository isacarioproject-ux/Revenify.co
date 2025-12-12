// src/components/UnicornEffect.tsx
import { useEffect, useRef } from 'react'

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

  useEffect(() => {
    let isMounted = true

    const initScene = async () => {
      // Wait for UnicornStudio to be available (loaded from index.html)
      let attempts = 0
      while (!window.UnicornStudio?.addScene && attempts < 30) {
        await new Promise(resolve => setTimeout(resolve, 100))
        attempts++
      }

      if (!window.UnicornStudio?.addScene || !containerRef.current || !isMounted) {
        console.warn('[UnicornEffect] UnicornStudio.addScene not available')
        return
      }

      try {
        console.log('[UnicornEffect] Adding scene...')
        const scene = await window.UnicornStudio.addScene({
          element: containerRef.current,
          projectId: projectId,
          scale: 1,
          dpi: 1.5,
          lazyLoad: false,
          production: true,
        })
        console.log('[UnicornEffect] Scene added:', scene)
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
  }, [projectId])

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
