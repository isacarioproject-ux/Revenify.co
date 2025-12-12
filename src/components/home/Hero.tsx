// src/components/home/Hero.tsx
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { APP_URL } from '@/lib/constants'
import { AnimatedBorderButton } from '@/components/ui/moving-border'
import { UnicornEffect } from '@/components/UnicornEffect'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start text-center bg-transparent overflow-hidden">
      {/* Unicorn Studio Effect Background */}
      <div className="absolute inset-0 z-0" style={{ width: '100vw', height: '100vh', minHeight: '100%', transform: 'translateY(-10%)' }}>
        <UnicornEffect 
          projectId="JtvvoAbLWNMzlkLcKTRz"
          className="w-full h-full"
          style={{ width: '100%', height: '100%', minWidth: '100vw', minHeight: '100vh' }}
        />
      </div>
      
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-28 pb-8 sm:pb-12">
        {/* Tag/Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Real-Time Revenue Attribution Tracking
          </span>
        </motion.div>

        {/* Headline - with gradient effect like reference */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight"
        >
          <span className="text-white">Track </span>
          <span className="text-white/80">every dollar</span>
          <br />
          <span className="text-white">to </span>
          <span className="text-white/80">its source.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/70 leading-relaxed px-2"
        >
          The essential platform for revenue attribution analytics. From tracking 
          your first visitor to enterprise-scale analytics, build everything on 
          a unified layer.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 sm:mt-10 flex items-center justify-center"
        >
          <AnimatedBorderButton as="a" href={`${APP_URL}/auth?tab=signup`} className="px-8 py-4 text-sm tracking-widest uppercase">
            Start Free
            <ArrowRight className="w-4 h-4" />
          </AnimatedBorderButton>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 sm:mt-12 w-full"
        >
          <div className="relative rounded-md sm:rounded-lg p-[1px] -mx-2 sm:mx-0 overflow-hidden">
            {/* Animated border effect */}
            <motion.span
              className="absolute inset-0 overflow-hidden rounded-md sm:rounded-lg"
              style={{ margin: '-1px' }}
            >
              <motion.span
                className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#262626_0%,#525252_50%,#262626_100%)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </motion.span>
            {/* Image container */}
            <div className="relative rounded-md sm:rounded-lg bg-neutral-900 overflow-hidden aspect-[16/9]">
              <img 
                src="/herosection.png.png" 
                alt="Revenify Dashboard - Revenue Attribution Analytics"
                className="w-full h-auto object-cover object-top scale-105 sm:scale-100"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Gradient Fade to Black */}
      <div className="absolute bottom-0 left-0 right-0 h-36 sm:h-[28rem] bg-gradient-to-t from-black via-black/90 to-transparent z-30 pointer-events-none" />
    </section>
  )
}
