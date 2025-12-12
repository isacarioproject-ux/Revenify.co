// src/components/home/PainSection.tsx
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const painPoints = [
  {
    id: 1,
    quote: '"I think Google Ads is working..."',
  },
  {
    id: 2,
    quote: '"Our social might be driving some sales..."',
  },
  {
    id: 3,
    quote: '"The CFO is asking for ROI numbers again..."',
  },
]

export const PainSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-light mb-12"
        >
          <span className="text-white/90">Marketing without attribution is </span>
          <span className="text-white/50 italic">gambling</span>
        </motion.h2>

        {/* Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {painPoints.map((pain, index) => (
            <motion.div
              key={pain.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-[#0D0D0D] border border-white/10 rounded-xl"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                {pain.quote}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-lg text-white/40"
        >
          Sound familiar?
        </motion.p>
      </div>
    </section>
  )
}
