import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
    {
        content: "Revenify helped us increase our marketing ROI by 3x. We finally know which channels actually drive revenue.",
        author: 'Sarah Johnson',
        role: 'CMO at TechStartup',
        avatar: 'SJ',
        rating: 5,
    },
    {
        content: 'The attribution models are incredibly accurate. We cut our customer acquisition cost by 40% in the first month.',
        author: 'Michael Chen',
        role: 'Head of Growth at E-commerce Co',
        avatar: 'MC',
        rating: 5,
    },
    {
        content: "Best analytics tool we've ever used. The setup took less than 5 minutes and the insights are game-changing.",
        author: 'Emily Rodriguez',
        role: 'Marketing Director at SaaS Inc',
        avatar: 'ER',
        rating: 5,
    },
]

export default function TestimonialsSection() {
    return (
        <section className="py-24 sm:py-32 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
                    >
                        Loved by marketers
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-lg leading-8 text-gray-600"
                    >
                        See what our customers have to say about Revenify.
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
                        >
                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-600 leading-relaxed mb-6">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
