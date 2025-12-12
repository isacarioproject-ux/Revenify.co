// src/components/home/CTA.tsx
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { APP_URL } from '@/lib/constants'
import { Link } from 'react-router-dom'
import { AnimatedBorderButton } from '@/components/ui/moving-border'

export const CTA = () => {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.2] pb-2">
            <span className="bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent">Ready to track your </span>
            <span className="bg-gradient-to-b from-white/70 via-white/50 to-white/30 bg-clip-text text-transparent">revenue?</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
            Join marketing teams that trust Revenify to attribute every dollar 
            back to its source. Start your free trial today.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedBorderButton as="a" href={`${APP_URL}/auth?tab=signup`} className="px-8 py-4 text-sm tracking-wide">
              START FREE TRIAL
              <ArrowRight className="w-4 h-4" />
            </AnimatedBorderButton>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-4 text-white/40 hover:text-white/60 transition-colors text-sm"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
