// src/components/home/SolutionSection.tsx
import { motion } from 'framer-motion'
import { Check, Zap, BarChart3, Link2 } from 'lucide-react'
import { GlowingCard, GlowingCardGrid } from '@/components/ui/glowing-card'

const features = [
  {
    icon: BarChart3,
    title: 'Multi-Touch Attribution',
    description: 'First-touch, last-touch, or multi-touch models — choose what fits your business.',
    color: 'rgba(59, 130, 246, 0.15)',
  },
  {
    icon: Zap,
    title: 'Real-Time Data',
    description: 'See conversions as they happen, not 24-48 hours later like Google Analytics.',
    color: 'rgba(34, 197, 94, 0.15)',
  },
  {
    icon: Link2,
    title: '20+ Integrations',
    description: 'Works with Stripe, Shopify, WooCommerce, and all major payment platforms.',
    color: 'rgba(168, 85, 247, 0.15)',
  },
]

export const SolutionSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4">
            <span className="text-white/90">Finally, </span>
            <span className="text-white/50 italic">clarity</span>
            <span className="text-white/90"> on your marketing spend</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            Revenify tracks every visitor, every touchpoint, and every conversion — 
            then attributes revenue back to the exact source.
          </p>
        </motion.div>

        {/* Feature Cards with Glow Effect */}
        <GlowingCardGrid className="grid-cols-1 md:grid-cols-3">
          {features.map((feature, index) => (
            <GlowingCard key={index} glowColor={feature.color}>
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white/70" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium text-white/90 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed flex-1">
                  {feature.description}
                </p>

                {/* Checkmark */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-xs text-green-400/70">Included in all plans</span>
                </div>
              </div>
            </GlowingCard>
          ))}
        </GlowingCardGrid>
      </div>
    </section>
  )
}
