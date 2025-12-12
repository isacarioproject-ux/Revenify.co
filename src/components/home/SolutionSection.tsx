// src/components/home/SolutionSection.tsx
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const features = [
  'First-touch, last-touch, or multi-touch models',
  'Real-time data, not delayed reports',
  'Works with Stripe, Shopify, and 20+ integrations',
]

export const SolutionSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6"
        >
          <span className="text-white/90">Finally, </span>
          <span className="text-white/50 italic">clarity</span>
          <span className="text-white/90"> on your marketing spend</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Revenify tracks every visitor, every touchpoint, and every conversion — 
          then attributes revenue back to the exact source.
        </motion.p>

        {/* Features */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-green-400" />
              </div>
              <span className="text-sm text-white/60">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
