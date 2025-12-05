import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Check } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import FAQSection from '@/components/faq-section'
import CTASection from '@/components/cta-section'
import FooterSection from '@/components/footer-section'
import { APP_URL, PRICING_PLANS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Features', to: '/#features' },
    { name: 'How it Works', to: '/#how-it-works' },
    { name: 'Pricing', to: '/pricing' },
]

export default function Pricing() {
    const [menuState, setMenuState] = useState(false)
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
            {/* Header */}
            <header>
                <nav className="fixed z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <Link to="/" className="flex items-center">
                                    <Logo />
                                </Link>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden lg:flex lg:items-center lg:gap-8">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Desktop CTA */}
                            <div className="hidden lg:flex lg:items-center lg:gap-4">
                                <Button variant="ghost" size="sm" asChild>
                                    <a href={`${APP_URL}/signin`}>Sign in</a>
                                </Button>
                                <Button size="sm" asChild>
                                    <a href={`${APP_URL}/signup`}>Start Free</a>
                                </Button>
                            </div>

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setMenuState(!menuState)}
                                className="lg:hidden p-2 text-gray-600"
                            >
                                {menuState ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {menuState && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="lg:hidden border-t border-gray-200 bg-white px-4 py-4"
                        >
                            <div className="space-y-2">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        onClick={() => setMenuState(false)}
                                        className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <div className="pt-4 space-y-2">
                                    <Button variant="outline" className="w-full" asChild>
                                        <a href={`${APP_URL}/signin`}>Sign in</a>
                                    </Button>
                                    <Button className="w-full" asChild>
                                        <a href={`${APP_URL}/signup`}>Start Free</a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </nav>
            </header>

            <main>
                {/* Pricing Hero */}
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

                {/* Pricing Cards */}
                <section className="py-16 sm:py-20 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {/* Toggle */}
                        <div className="flex items-center justify-center gap-4 mb-16">
                            <span className={cn(
                                'text-sm font-medium transition-colors',
                                interval === 'monthly' ? 'text-gray-900' : 'text-gray-500'
                            )}>
                                Monthly
                            </span>

                            <button
                                onClick={() => setInterval(interval === 'monthly' ? 'yearly' : 'monthly')}
                                className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors"
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
                                    interval === 'yearly' ? 'text-gray-900' : 'text-gray-500'
                                )}>
                                    Yearly
                                </span>
                                {interval === 'yearly' && (
                                    <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                                        Save 20%
                                    </span>
                                )}
                            </div>
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

                <FAQSection />
                <CTASection />
            </main>

            <FooterSection />
        </>
    )
}
