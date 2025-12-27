// src/components/home/AdvancedFeatures.tsx
import { motion } from 'framer-motion'
import { GitBranch, Globe, Smartphone, Link2, Eye, Shield } from 'lucide-react'
import { ADVANCED_FEATURES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  GitBranch,
  Globe,
  Smartphone,
  Link2,
  Eye,
  Shield,
}

export const AdvancedFeatures = () => {
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
              ADVANCED FEATURES
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
            <span className="text-white/90">Powerful tools for </span>
            <span className="text-white/50 italic">smart marketers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 max-w-xl mx-auto"
          >
            Go beyond basic link shortening. Optimize, personalize, and track every click.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ADVANCED_FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon] || GitBranch
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-[#0D0D0D] border border-white/10 rounded-xl hover:border-white/20 transition-all"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <Icon className="w-5 h-5 text-white/70" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium text-white/90 mb-1">
                  {feature.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-white/50 mb-3">
                  {feature.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-white/40 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Plans badges */}
                <div className="flex flex-wrap gap-2">
                  {feature.plans.map((plan) => (
                    <span
                      key={plan}
                      className={`text-xs px-2 py-1 rounded-md ${
                        plan === 'Business'
                          ? 'bg-purple-500/10 text-purple-400'
                          : plan === 'Pro'
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-green-500/10 text-green-400'
                      }`}
                    >
                      {plan}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
