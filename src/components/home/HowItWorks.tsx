// src/components/home/HowItWorks.tsx
import { motion } from 'framer-motion'
import { Code2, Link2, TrendingUp, BarChart3 } from 'lucide-react'
import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid'

const bentoItems: BentoItem[] = [
  {
    title: 'Add Your Pixel',
    meta: '2 minutes setup',
    description: 'Copy & paste one line of code to your website. Works with any platform: WordPress, Shopify, custom sites.',
    icon: <Code2 className="w-4 h-4 text-blue-400" />,
    status: 'Live',
    tags: ['One-line install', 'No-code'],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: 'Create Tracking Links',
    meta: 'Unlimited links',
    description: 'Generate UTM links for each channel: Facebook, YouTube, Email, Google Ads.',
    icon: <Link2 className="w-4 h-4 text-purple-400" />,
    status: 'Updated',
    tags: ['UTM Builder', 'Multi-channel'],
  },
  {
    title: 'Real-Time Dashboard',
    meta: 'Live data',
    description: 'Watch as clicks become leads, and leads become revenue. All in real-time.',
    icon: <BarChart3 className="w-4 h-4 text-green-400" />,
    tags: ['Analytics', 'Reports'],
  },
  {
    title: 'See Your Revenue',
    meta: 'Instant insights',
    description: 'Know exactly which campaigns, ads, and channels drive your revenue. No more guessing.',
    icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
    status: 'Live',
    tags: ['Attribution', 'ROI'],
    colSpan: 2,
  },
]

export const HowItWorks = () => {
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
              HOW IT WORKS
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
            <span className="text-white/90">Start tracking in </span>
            <span className="text-white/50 italic">3 simple steps</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 max-w-xl mx-auto"
          >
            From zero to full revenue attribution in under 5 minutes. No technical skills required.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <BentoGrid items={bentoItems} />
      </div>
    </section>
  )
}
