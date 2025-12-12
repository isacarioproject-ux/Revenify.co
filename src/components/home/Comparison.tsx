// src/components/home/Comparison.tsx
import { motion } from 'framer-motion'
import { Check, X, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

const comparisonFeatures = [
  { feature: 'Real-time data', ga: false, mixpanel: 'partial', revenify: true },
  { feature: 'Revenue attribution', ga: false, mixpanel: 'partial', revenify: true },
  { feature: 'Multi-touch models', ga: false, mixpanel: true, revenify: true },
  { feature: 'Setup time', ga: '1-2 hours', mixpanel: '30+ min', revenify: '2 min' },
  { feature: 'Learning curve', ga: 'Steep', mixpanel: 'Moderate', revenify: 'Easy' },
  { feature: 'Pricing', ga: 'Free*', mixpanel: '$$$', revenify: 'Affordable' },
  { feature: 'GDPR compliant', ga: 'partial', mixpanel: true, revenify: true },
  { feature: 'Payment integrations', ga: false, mixpanel: 'partial', revenify: true },
]

const StatusIcon = ({ status }: { status: boolean | string }) => {
  if (status === true) {
    return (
      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
        <Check className="w-3.5 h-3.5 text-green-400" />
      </div>
    )
  }
  if (status === false) {
    return (
      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
        <X className="w-3.5 h-3.5 text-red-400" />
      </div>
    )
  }
  if (status === 'partial') {
    return (
      <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
        <Minus className="w-3.5 h-3.5 text-yellow-400" />
      </div>
    )
  }
  return <span className="text-sm text-white/60">{status}</span>
}

export const Comparison = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-flex px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">
              COMPARISON
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4"
          >
            <span className="text-white/90">Stop using the </span>
            <span className="text-white/50 italic">wrong tools</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 max-w-xl mx-auto"
          >
            See how Revenify compares to other analytics platforms
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[600px] border border-white/10 rounded-sm overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-4 border-b border-white/10">
              <div className="text-sm font-medium text-white/50">Feature</div>
              <div className="text-center">
                <div className="text-sm font-medium text-white/50">Google Analytics</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-white/50">Mixpanel</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-sm font-medium text-green-400">Revenify</span>
                </div>
              </div>
            </div>

            {/* Table Body */}
            {comparisonFeatures.map((row, index) => (
              <div
                key={row.feature}
                className={cn(
                  "grid grid-cols-4 gap-4 p-4 items-center",
                  index !== comparisonFeatures.length - 1 && "border-b border-white/5"
                )}
              >
                <div className="text-sm text-white/70">{row.feature}</div>
                <div className="flex justify-center">
                  <StatusIcon status={row.ga} />
                </div>
                <div className="flex justify-center">
                  <StatusIcon status={row.mixpanel} />
                </div>
                <div className="flex justify-center">
                  <StatusIcon status={row.revenify} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-white/30 mt-6"
        >
          * Google Analytics 4 is free but has data sampling and 24-48h delays
        </motion.p>
      </div>
    </section>
  )
}
