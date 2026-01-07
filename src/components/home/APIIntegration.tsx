// src/components/home/APIIntegration.tsx
import { motion } from 'framer-motion'
import { Zap, Check, Database, Cloud } from 'lucide-react'

const integrations = [
  { name: 'Pixel', connected: true },
  { name: 'Webhooks', connected: true },
  { name: 'REST API', connected: true },
  { name: 'Zapier', connected: false },
]

const apiItems = [
  {
    icon: Zap,
    iconBg: 'bg-orange-500/20',
    iconColor: 'text-orange-400',
    label: 'Conversions tracked',
    badge: { text: 'Real-time', color: 'bg-green-500/20 text-green-400' },
  },
  {
    icon: Check,
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-400',
    label: 'RV3 Gateway',
    status: 'connected',
  },
  {
    icon: Database,
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
    label: 'Cust01',
    sublabel: 'Customer events pipeline',
  },
  {
    icon: Cloud,
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
    label: 'Webhook Delivery',
    status: 'active',
  },
]

export const APIIntegration = () => {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/50 mb-6">
              API
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] pb-2">
              <span className="block bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent pb-1">
                High-Performance API
              </span>
              <span className="block bg-gradient-to-b from-white/70 via-white/50 to-white/30 bg-clip-text text-transparent">
                Integration
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-white/50 leading-relaxed">
              Connect your payment platforms with Revenify's unified API.
              Designed for speed, reliability, and real-time tracking.
            </p>

            {/* Bullets */}
            <ul className="mt-8 space-y-4">
              <li className="text-white/60 text-sm leading-relaxed">
                Track conversions with sub-millisecond latency across all your
                marketing channels with a single line of code.
              </li>
              <li className="text-white/60 text-sm leading-relaxed">
                Eliminate data silos and focus on building your application
                logic with 99.99% uptime guaranteed.
              </li>
            </ul>

            {/* Footnote */}
            <p className="mt-8 text-xs text-white/30">
              Instant attribution access — stream events, query historical data,
              and broadcast conversions with sub-millisecond latency.
            </p>
          </motion.div>

          {/* Right Content - Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Browser Card */}
            <div className="bg-[#0D0D0D] border border-white/10 rounded-2xl overflow-hidden">
              {/* Browser Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  {/* Traffic Lights */}
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
                  </div>
                  <span className="text-sm text-white/70">API Tracks</span>
                </div>
                <div className="flex gap-4">
                  <button className="text-xs text-white/40 hover:text-white/60">
                    History
                  </button>
                  <button className="text-xs text-orange-400">Docs</button>
                </div>
              </div>

              {/* Browser Content */}
              <div className="p-4 space-y-3">
                {apiItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${item.iconBg}`}>
                        <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                      </div>
                      <div>
                        <p className="text-sm text-white/80">{item.label}</p>
                        {item.sublabel && (
                          <p className="text-xs text-white/40">{item.sublabel}</p>
                        )}
                      </div>
                    </div>
                    {item.badge && (
                      <span
                        className={`px-2 py-1 rounded text-xs ${item.badge.color}`}
                      >
                        {item.badge.text}
                      </span>
                    )}
                    {item.status && (
                      <span className="flex items-center gap-1.5 text-xs text-green-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        {item.status}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Integration Logos */}
            <div className="flex flex-wrap gap-2">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-white/60"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      integration.connected ? 'bg-green-400' : 'bg-orange-400'
                    }`}
                  />
                  {integration.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
