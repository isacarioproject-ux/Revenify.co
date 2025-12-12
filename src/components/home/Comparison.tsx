// src/components/home/Comparison.tsx
import { motion } from 'framer-motion'

const comparisonData = [
  {
    tool: 'Google Analytics',
    icon: '🔴',
    points: [
      { text: '24-48h data delay', status: 'bad' },
      { text: 'No revenue attribution', status: 'bad' },
      { text: 'Complex setup', status: 'bad' },
      { text: 'GDPR concerns', status: 'bad' },
    ],
  },
  {
    tool: 'Mixpanel/Amplitude',
    icon: '🟡',
    points: [
      { text: 'Expensive at scale', status: 'warning' },
      { text: 'Product analytics focus', status: 'warning' },
      { text: 'Limited attribution', status: 'warning' },
      { text: 'Steep learning curve', status: 'warning' },
    ],
  },
  {
    tool: 'Revenify',
    icon: '🟢',
    featured: true,
    points: [
      { text: 'Real-time data', status: 'good' },
      { text: 'Revenue-focused', status: 'good' },
      { text: 'Simple setup (2 min)', status: 'good' },
      { text: 'Affordable pricing', status: 'good' },
    ],
  },
]

export const Comparison = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
      <div className="max-w-4xl mx-auto">
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
            className="text-2xl sm:text-3xl lg:text-4xl font-light"
          >
            <span className="text-white/90">Stop using the </span>
            <span className="text-white/50 italic">wrong tools</span>
          </motion.h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {comparisonData.map((item, index) => (
            <motion.div
              key={item.tool}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`p-6 rounded-xl border ${
                item.featured
                  ? 'bg-green-500/5 border-green-500/20'
                  : 'bg-[#0D0D0D] border-white/10'
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl">{item.icon}</span>
                <h3 className={`font-medium ${item.featured ? 'text-green-400' : 'text-white/80'}`}>
                  {item.tool}
                </h3>
              </div>

              {/* Points */}
              <ul className="space-y-3">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-center gap-2 text-sm">
                    <span>
                      {point.status === 'good' && '✅'}
                      {point.status === 'warning' && '⚠️'}
                      {point.status === 'bad' && '❌'}
                    </span>
                    <span className={item.featured ? 'text-white/70' : 'text-white/50'}>
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
