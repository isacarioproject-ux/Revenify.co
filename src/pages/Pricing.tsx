import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CTA } from '@/components/home/CTA'
import { PRICING_PLANS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { AnimatedBorderCard } from '@/components/ui/moving-border'

export default function Pricing() {
    const [interval, setInterval] = useState<'monthly' | 'yearly'>('monthly')

    const formatCurrency = (amount: number) => {
        if (amount === 0) return '$0'
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        }).format(amount)
    }

    return (
        <>
            <SEO
                title="Pricing — Plans Starting at $0, 3x Cheaper Than dub.co"
                description="Compare Revenify pricing plans. Free tier available. Starter at $8/mo includes branded links, A/B testing, and UTM tracking. Pro at $24/mo adds link cloaking, deep links, and geo targeting. 3x cheaper than dub.co, 4x cheaper than Bitly."
                url="https://revenify.co/pricing"
            />
            <Header />

            <main className="bg-black">
                {/* Pricing Hero */}
                <section className="pt-32 pb-8 sm:pt-36 sm:pb-12">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6"
                            >
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">
                                    PRICING
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl lg:text-5xl font-light"
                            >
                                <span className="text-white/90">Choose the plan </span>
                                <span className="text-white/50 italic">that's right for you</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-6 text-white/40 max-w-lg mx-auto"
                            >
                                Start free, then scale as you grow. All plans include a 14-day free trial.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="py-12 sm:py-16">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        {/* Toggle */}
                        <div className="flex items-center justify-center gap-4 mb-12">
                            <span className={cn(
                                'text-sm font-medium transition-colors',
                                interval === 'monthly' ? 'text-white' : 'text-white/50'
                            )}>
                                Monthly
                            </span>

                            <button
                                onClick={() => setInterval(interval === 'monthly' ? 'yearly' : 'monthly')}
                                className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-700 transition-colors"
                            >
                                <motion.span
                                    layout
                                    className="inline-block h-4 w-4 rounded-full bg-white shadow-sm"
                                    animate={{ x: interval === 'yearly' ? 24 : 4 }}
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                />
                            </button>

                            <div className="flex items-center gap-2">
                                <span className={cn(
                                    'text-sm font-medium transition-colors',
                                    interval === 'yearly' ? 'text-white' : 'text-white/50'
                                )}>
                                    Yearly
                                </span>
                                {interval === 'yearly' && (
                                    <span className="rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-400">
                                        -20%
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {PRICING_PLANS.map((plan, index) => (
                                <motion.div
                                    key={plan.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="h-full"
                                >
                                    {plan.highlighted ? (
                                        <AnimatedBorderCard className="h-full flex flex-col min-h-[520px]">
                                            {/* Popular badge */}
                                            <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                                                <span className="rounded-full bg-neutral-700 border border-white/20 px-4 py-1 text-sm font-medium text-white">
                                                    Most Popular
                                                </span>
                                            </div>

                                            <div className="flex-1">
                                                {/* Plan name */}
                                                <h3 className="text-xl font-semibold text-white">
                                                    {plan.name}
                                                </h3>
                                                <p className="mt-2 text-sm text-white/50">
                                                    {plan.description}
                                                </p>

                                                {/* Price */}
                                                <div className="mt-6">
                                                    <span className="text-4xl font-bold text-white">
                                                        {formatCurrency(plan.price[interval])}
                                                    </span>
                                                    {plan.price[interval] > 0 && (
                                                        <span className="text-white/50">
                                                            /{interval === 'monthly' ? 'mo' : 'yr'}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Features */}
                                                <ul className="mt-8 space-y-3">
                                                    {plan.features.map((feature) => (
                                                        <li key={feature} className="flex items-start gap-3">
                                                            <Check className="h-5 w-5 flex-shrink-0 text-white/50" />
                                                            <span className="text-sm text-white/60">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* CTA Button */}
                                            <div className="mt-auto pt-8">
                                                <a
                                                    href={plan.ctaUrl}
                                                    className="block w-full text-center px-4 py-3 rounded-lg font-medium text-sm transition-colors bg-white text-black hover:bg-white/90"
                                                >
                                                    {plan.cta}
                                                </a>
                                            </div>
                                        </AnimatedBorderCard>
                                    ) : (
                                        <div className="h-full flex flex-col min-h-[520px] p-6 bg-[#0D0D0D] border border-white/10 rounded-2xl">
                                            <div className="flex-1">
                                                {/* Plan name */}
                                                <h3 className="text-xl font-semibold text-white">
                                                    {plan.name}
                                                </h3>
                                                <p className="mt-2 text-sm text-white/50">
                                                    {plan.description}
                                                </p>

                                                {/* Price */}
                                                <div className="mt-6">
                                                    <span className="text-4xl font-bold text-white">
                                                        {formatCurrency(plan.price[interval])}
                                                    </span>
                                                    {plan.price[interval] > 0 && (
                                                        <span className="text-white/50">
                                                            /{interval === 'monthly' ? 'mo' : 'yr'}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Features */}
                                                <ul className="mt-8 space-y-3">
                                                    {plan.features.map((feature) => (
                                                        <li key={feature} className="flex items-start gap-3">
                                                            <Check className="h-5 w-5 flex-shrink-0 text-white/50" />
                                                            <span className="text-sm text-white/60">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* CTA Button */}
                                            <div className="mt-auto pt-8">
                                                <a
                                                    href={plan.ctaUrl}
                                                    className="block w-full text-center px-4 py-3 rounded-lg font-medium text-sm transition-colors border border-white/20 text-white hover:bg-white/5"
                                                >
                                                    {plan.cta}
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTA />
            </main>

            <Footer />
        </>
    )
}
