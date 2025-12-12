// src/components/home/Testimonials.tsx
import { motion } from 'framer-motion'
import { Settings } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

const smallTestimonials = [
  {
    id: 1,
    quote:
      'We were spending hours in spreadsheets trying to figure out which ads were actually driving sales. Revenify showed us in minutes that 60% of our revenue came from just 2 campaigns.',
    author: {
      name: 'Marcus Thompson',
      title: 'Marketing Director, TechFlow',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      initials: 'MT',
    },
  },
  {
    id: 2,
    quote:
      'The real-time attribution changed everything. We can now see exactly which touchpoints lead to conversions and adjust our strategy on the fly.',
    author: {
      name: 'Elena Rodriguez',
      title: 'Growth Lead, ScaleUp Agency',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
      initials: 'ER',
    },
  },
]

export const Testimonials = () => {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-flex px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">
              TESTIMONIALS
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light"
          >
            <span className="text-white/90">Teams that </span>
            <span className="text-white/50 italic">stopped guessing</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-white/40 max-w-lg mx-auto"
          >
            See how marketing teams are using Revenify to finally know
            where their revenue comes from.
          </motion.p>
        </div>

        {/* Main Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="p-8 bg-[#0D0D0D] border border-white/10 rounded-2xl">
            {/* Stats Row */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-light text-white">3.2</span>
                <span className="text-2xl text-white/50">x</span>
              </div>
              <p className="text-sm text-white/40">
                Average ROAS improvement after 90 days.
              </p>
            </div>

            {/* Quote */}
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              "Revenify showed us that 60% of our revenue came from organic search, not paid ads. We reallocated $50K/month and increased ROI by 3x. The clarity was immediate."
            </p>

            {/* Author Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" />
                  <AvatarFallback className="bg-gradient-to-br from-gray-600 to-gray-800 text-white text-sm">JM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-white/80 font-medium">James Mitchell</p>
                  <p className="text-xs text-white/40">CMO, Elevate Commerce</p>
                </div>
              </div>
              <Settings className="w-5 h-5 text-white/20" />
            </div>
          </div>
        </motion.div>

        {/* Small Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {smallTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="p-6 bg-[#0D0D0D] border border-white/10 rounded-2xl"
            >
              {/* Quote */}
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={testimonial.author.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-gray-600 to-gray-800 text-white text-xs">
                    {testimonial.author.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-white/80 font-medium">
                    {testimonial.author.name}
                  </p>
                  <p className="text-xs text-white/40">
                    {testimonial.author.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer with avatars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center"
        >
          {/* Stacked Avatars */}
          <div className="flex -space-x-3">
            <Avatar className="w-8 h-8 border-2 border-black ring ring-black">
              <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback className="bg-gradient-to-br from-gray-600 to-gray-800 text-white text-xs">1</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-black ring ring-black">
              <AvatarImage src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback className="bg-gradient-to-br from-gray-600 to-gray-800 text-white text-xs">2</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-black ring ring-black">
              <AvatarImage src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback className="bg-gradient-to-br from-gray-600 to-gray-800 text-white text-xs">3</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-black ring ring-black">
              <AvatarImage src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback className="bg-gradient-to-br from-gray-600 to-gray-800 text-white text-xs">4</AvatarFallback>
            </Avatar>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
