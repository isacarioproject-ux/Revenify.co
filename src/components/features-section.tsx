import { motion } from 'framer-motion'
import { Activity, GitBranch, DollarSign, Tag, Target, Puzzle } from 'lucide-react'

const features = [
    {
        icon: Activity,
        title: 'Real-time Tracking',
        description: 'Capture every visitor interaction instantly with our lightweight pixel tracker.',
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
    },
    {
        icon: GitBranch,
        title: 'Multi-touch Attribution',
        description: 'Understand the complete customer journey with first-touch, last-touch, and linear models.',
        color: 'text-cyan-500',
        bgColor: 'bg-cyan-50',
    },
    {
        icon: DollarSign,
        title: 'Revenue Analytics',
        description: 'Track conversions to actual revenue and calculate ROI by marketing source.',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
    },
    {
        icon: Tag,
        title: 'UTM Management',
        description: 'Automatic UTM parameter tracking and campaign performance analysis.',
        color: 'text-purple-500',
        bgColor: 'bg-purple-50',
    },
    {
        icon: Target,
        title: 'Lead Scoring',
        description: 'Qualify leads by behavior and predict conversion probability.',
        color: 'text-orange-500',
        bgColor: 'bg-orange-50',
    },
    {
        icon: Puzzle,
        title: 'Integrations',
        description: 'Connect with Stripe, Shopify, HubSpot, Salesforce, and more.',
        color: 'text-indigo-500',
        bgColor: 'bg-indigo-50',
    },
]

export default function FeaturesSection() {
    return (
        <section id="features" className="py-24 sm:py-32 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
                    >
                        Everything you need to track revenue
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-lg leading-8 text-gray-600"
                    >
                        Powerful features to help you understand exactly where your revenue
                        comes from and how to optimize your marketing spend.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className={`inline-flex rounded-lg p-3 ${feature.bgColor} mb-4`}>
                                <feature.icon className={`h-6 w-6 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
