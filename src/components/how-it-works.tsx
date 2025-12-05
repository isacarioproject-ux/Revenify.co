import { motion } from 'framer-motion'
import { Code2, LineChart, DollarSign } from 'lucide-react'

const steps = [
    {
        icon: Code2,
        title: 'Install the pixel',
        description: 'Add one line of code to your website. Our lightweight pixel tracks all visitor interactions automatically.',
        code: '<script src="https://cdn.revenify.co/pixel.js"></script>',
    },
    {
        icon: LineChart,
        title: 'Track conversions',
        description: 'Connect your revenue sources (Stripe, Shopify, etc). We automatically attribute each conversion to its marketing source.',
        metrics: ['First-touch', 'Last-touch', 'Linear', 'Time-decay'],
    },
    {
        icon: DollarSign,
        title: 'Optimize your spend',
        description: 'See which channels drive the most revenue. Make data-driven decisions about where to invest your marketing budget.',
        stats: [
            { label: 'ROI by channel', value: '+234%' },
            { label: 'Cost per acquisition', value: '-42%' },
        ],
    },
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
                    >
                        How it works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-lg leading-8 text-gray-600"
                    >
                        Get started in minutes. No complex setup or technical knowledge required.
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                        >
                            {/* Step number */}
                            <div className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg">
                                {index + 1}
                            </div>

                            <div className="rounded-2xl border border-gray-200 bg-white p-8 pt-12 shadow-sm">
                                <div className="inline-flex rounded-lg bg-blue-50 p-3 mb-4">
                                    <step.icon className="h-6 w-6 text-blue-600" />
                                </div>
                                
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {step.description}
                                </p>

                                {/* Optional code snippet */}
                                {step.code && (
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                                        <code>{step.code}</code>
                                    </pre>
                                )}

                                {/* Optional metrics */}
                                {step.metrics && (
                                    <div className="flex flex-wrap gap-2">
                                        {step.metrics.map((metric) => (
                                            <span
                                                key={metric}
                                                className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
                                            >
                                                {metric}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Optional stats */}
                                {step.stats && (
                                    <div className="grid grid-cols-2 gap-4">
                                        {step.stats.map((stat) => (
                                            <div key={stat.label}>
                                                <p className="text-2xl font-bold text-green-600">
                                                    {stat.value}
                                                </p>
                                                <p className="text-sm text-gray-600">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
