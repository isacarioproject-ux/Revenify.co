import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PricingToggle from './PricingToggle'
import { PRICING_PLANS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function PricingCards() {
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
        <section className="py-16 sm:py-20 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Toggle */}
                <div className="mb-16">
                    <PricingToggle interval={interval} onIntervalChange={setInterval} />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    {PRICING_PLANS.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                'relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm',
                                plan.highlighted
                                    ? 'border-2 border-blue-600 shadow-xl lg:scale-105'
                                    : 'border-gray-200'
                            )}
                        >
                            {/* Popular badge */}
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                                    <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="flex-1">
                                {/* Plan name */}
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {plan.name}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    {plan.description}
                                </p>

                                {/* Price */}
                                <div className="mt-6">
                                    <span className="text-5xl font-bold text-gray-900">
                                        {formatCurrency(plan.price[interval])}
                                    </span>
                                    {plan.price[interval] > 0 && (
                                        <span className="text-gray-600">
                                            /{interval === 'monthly' ? 'mo' : 'yr'}
                                        </span>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="mt-8 space-y-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 flex-shrink-0 text-blue-600" />
                                            <span className="text-sm text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-8">
                                <Button
                                    className="w-full"
                                    variant={plan.highlighted ? 'default' : 'outline'}
                                    asChild
                                >
                                    <a href={plan.ctaUrl}>{plan.cta}</a>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
