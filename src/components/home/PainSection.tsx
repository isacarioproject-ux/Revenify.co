// src/components/home/PainSection.tsx
import { motion } from 'framer-motion'
import { TrendingDown, HelpCircle, AlertTriangle } from 'lucide-react'
import { CardSpotlight } from '@/components/ui/card-spotlight'

const painPoints = [
  {
    id: 1,
    icon: HelpCircle,
    iconColor: 'text-red-400',
    title: 'No Visibility',
    quote: '"I think Google Ads is working..."',
    description: 'You spend thousands on ads but have no idea which ones actually drive revenue.',
  },
  {
    id: 2,
    icon: TrendingDown,
    iconColor: 'text-orange-400',
    title: 'Wasted Budget',
    quote: '"Our social might be driving some sales..."',
    description: 'Without clear attribution, you keep funding campaigns that don\'t convert.',
  },
  {
    id: 3,
    icon: AlertTriangle,
    iconColor: 'text-yellow-400',
    title: 'No Answers',
    quote: '"The CFO is asking for ROI numbers again..."',
    description: 'When leadership asks for marketing ROI, you scramble for spreadsheets.',
  },
]

export const PainSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4">
            <span className="text-white/90">Marketing without attribution is </span>
            <span className="text-white/50 italic">gambling</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Every day, marketers waste budget on channels that don't convert — simply because they can't see what's working.
          </p>
        </motion.div>

        {/* Pain Points with CardSpotlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {painPoints.map((pain, index) => (
            <motion.div
              key={pain.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CardSpotlight className="h-full">
                <div className="relative z-20">
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <pain.icon className={`w-5 h-5 ${pain.iconColor}`} />
                    </div>
                    <span className="text-sm font-medium text-white/70">{pain.title}</span>
                  </div>

                  {/* Quote */}
                  <p className="text-lg text-white/80 font-medium mb-3">
                    {pain.quote}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-white/50 leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>

        {/* CTA Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-lg text-white/40"
        >
          Sound familiar?
        </motion.p>
      </div>
    </section>
  )
}
