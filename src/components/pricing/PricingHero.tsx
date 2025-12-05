import { motion } from 'framer-motion'

export default function PricingHero() {
    return (
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                            Simple, transparent pricing
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                    >
                        Choose the right plan for your business
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
                    >
                        Start free, then scale as you grow. All plans include a 14-day free trial.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
