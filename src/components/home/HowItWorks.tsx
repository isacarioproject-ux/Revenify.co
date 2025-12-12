// src/components/home/HowItWorks.tsx
import { motion } from 'framer-motion'

const steps = [
  {
    number: '1',
    title: 'Add Your Pixel',
    description: 'Copy & paste one line of code to your website. Takes 2 minutes.',
  },
  {
    number: '2',
    title: 'Create Tracking Links',
    description: 'Generate UTM links for each channel: Facebook, YouTube, Email, Ads.',
  },
  {
    number: '3',
    title: 'See Your Revenue',
    description: 'Watch real-time as clicks become leads, and leads become revenue.',
  },
]

export const HowItWorks = () => {
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
              HOW IT WORKS
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
            <span className="text-white/90">Start tracking in </span>
            <span className="text-white/50 italic">3 simple steps</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative p-6 bg-[#0D0D0D] border border-white/10 rounded-xl"
            >
              {/* Step Number */}
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <span className="text-lg font-light text-white/60">{step.number}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-white/90 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/50 leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-3 w-6 h-[1px] bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
