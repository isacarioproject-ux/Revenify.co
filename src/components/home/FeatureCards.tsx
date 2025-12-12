// src/components/home/FeatureCards.tsx
import { motion } from 'framer-motion'
import { Zap, Shield, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  {
    id: 'automation',
    icon: Zap,
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    title: 'Automation',
    description:
      'As a visitor lands on your site, our pixel captures every touchpoint automatically. No manual tagging required.',
    link: {
      text: 'LEARN ABOUT AUTOMATION',
      href: '/integrations',
    },
    gradient: 'from-blue-500/20 via-blue-500/5 to-transparent',
  },
  {
    id: 'identity',
    icon: Shield,
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
    title: 'Identity',
    description:
      'With your Revenify workspace, you verify all events, unlocking full visitor insight and consistent identity resolution.',
    link: {
      text: 'LEARN ABOUT IDENTITY',
      href: '/docs',
    },
    gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
  },
]

export const FeatureCards = () => {
  return (
    <section className="py-8 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden p-8 bg-[#0D0D0D] border border-white/10 rounded-2xl hover:border-white/20 transition-all"
            >
              {/* Background Gradient - subtle glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 p-3 ${feature.iconBg} rounded-xl mb-6`}>
                  <feature.icon className={`w-full h-full ${feature.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Link */}
                <Link
                  to={feature.link.href}
                  className="inline-flex items-center gap-2 text-xs text-white/50 tracking-wide hover:text-white/70 transition-colors group/link"
                >
                  {feature.link.text}
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
