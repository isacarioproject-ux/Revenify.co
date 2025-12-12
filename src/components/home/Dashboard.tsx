// src/components/home/Dashboard.tsx
import { motion } from 'framer-motion'
import { LayoutDashboard, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const attributionSources = [
  { source: 'Google Ads', value: '39%', color: '#3B82F6' },
  { source: 'Facebook', value: '26%', color: '#A855F7' },
  { source: 'Organic', value: '22%', color: '#22C55E' },
  { source: 'Email', value: '13%', color: '#FB923C' },
]

export const Dashboard = () => {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/50 mb-6">
              BETA
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="block bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent">COMPLETE</span>
              <span className="block bg-gradient-to-b from-white/80 via-white/60 to-white/40 bg-clip-text text-transparent">REVENUE</span>
              <span className="block bg-gradient-to-b from-white/50 via-white/30 to-white/20 bg-clip-text text-transparent">ATTRIBUTION</span>
              <span className="block bg-gradient-to-b from-white/30 via-white/20 to-white/10 bg-clip-text text-transparent">ANALYTICS</span>
            </h2>

            {/* Description */}
            <p className="mt-8 text-white/50 leading-relaxed max-w-md">
              See exactly which marketing channels drive revenue. Real-time tracking
              from first click to final conversion.
            </p>
          </motion.div>

          {/* Right Content - Dashboard Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="relative z-10 bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <LayoutDashboard className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-white/80 font-medium">Revenify Core</span>
              </div>

              {/* Stats */}
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-white">$8,245.32</span>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-lg">
                  <TrendingUp className="w-3 h-3" />
                  +54.23%
                </span>
              </div>
              <p className="text-white/30 text-sm">this month</p>

              {/* Chart Area */}
              <div className="mt-6 h-24 relative">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,80 Q50,70 100,60 T200,40 T300,30 T400,10 L400,100 L0,100 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    d="M0,80 Q50,70 100,60 T200,40 T300,30 T400,10"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                <div>
                  <p className="text-xs text-white/40">Visitors</p>
                  <p className="text-lg font-semibold text-white">12.5K</p>
                </div>
                <div>
                  <p className="text-xs text-white/40">Conversions</p>
                  <p className="text-lg font-semibold text-white">847</p>
                </div>
                <div>
                  <p className="text-xs text-white/40">Revenue</p>
                  <p className="text-lg font-semibold text-white">$8.2K</p>
                </div>
              </div>
            </div>

            {/* Attribution Sources Card - Floating Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -right-4 lg:-right-8 top-0 z-20 w-56 bg-[#111] border border-white/10 rounded-xl p-4 shadow-xl hidden lg:block"
            >
              <p className="text-xs text-white/50 mb-4">Attribution Sources</p>
              <div className="space-y-3">
                {attributionSources.map((item) => (
                  <div key={item.source} className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs text-white/60 flex-1">
                      {item.source}
                    </span>
                    <span className="text-xs text-white/80 font-medium">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/integrations"
                className="mt-4 flex items-center gap-1 text-xs text-white/40 hover:text-white/60 transition-colors"
              >
                View Analytics
                <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>

            {/* Conversion Captured Card - Floating Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -right-4 lg:-right-8 bottom-16 z-20 bg-[#111] border border-white/10 rounded-xl p-4 shadow-xl hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-sm text-white/80">Conversion Captured</p>
                  <p className="text-xs text-white/40">$149.00 from Google Ads</p>
                </div>
              </div>
            </motion.div>

            {/* Live Visitors Badge - Floating Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute left-4 -bottom-4 z-30 bg-[#111] border border-white/10 rounded-lg px-3 py-2 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white/60">Live Visitors</span>
                <span className="text-sm text-white font-medium">847</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
