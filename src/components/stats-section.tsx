import { motion } from 'framer-motion'

const stats = [
    { label: 'Companies', value: '1,000+' },
    { label: 'Events tracked', value: '10M+' },
    { label: 'Revenue attributed', value: '$50M+' },
    { label: 'Uptime', value: '99.9%' },
]

export default function StatsSection() {
    return (
        <section className="py-16 sm:py-20 bg-white border-y border-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <p className="text-4xl sm:text-5xl font-bold text-gray-900">{stat.value}</p>
                            <p className="mt-2 text-sm font-medium text-gray-600">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
