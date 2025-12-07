import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { APP_URL } from '@/lib/constants'

const menuItems = [
    { name: 'Integrations', to: '/integrations' },
    { name: 'Blog', to: '/blog' },
    { name: 'Docs', to: '/docs' },
    { name: 'Pricing', to: '/pricing' },
]

export default function HeroSection() {
    const [menuState, setMenuState] = useState(false)

    return (
        <>
            <header>
                {/* Skip link for accessibility */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
                >
                    Skip to main content
                </a>
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
                                    <a href={APP_URL}>Sign in</a>
                                </Button>
                                <Button size="sm" asChild>
                                    <a href={APP_URL}>Start Free</a>
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
                                        <a href={APP_URL}>Sign in</a>
                                    </Button>
                                    <Button className="w-full" asChild>
                                        <a href={APP_URL}>Start Free</a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </nav>
            </header>

            <main id="main-content">
                <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                                    Trusted by 1,000+ companies worldwide
                                </span>
                            </motion.div>

                            {/* Heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mt-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
                            >
                                Track Every Dollar{' '}
                                <span className="text-blue-600">Back to Its Source</span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
                            >
                                Know exactly which marketing channels drive revenue. Revenify
                                provides real-time attribution analytics so you can optimize your
                                marketing spend with confidence.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                            >
                                <Button size="lg" asChild>
                                    <a href={APP_URL}>
                                        Start Free Trial
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link to="/pricing">View Pricing</Link>
                                </Button>
                            </motion.div>

                            {/* Trust indicators */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500"
                            >
                                <div className="flex items-center gap-x-2">
                                    <Check className="h-4 w-4 text-green-600" />
                                    No credit card required
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <Check className="h-4 w-4 text-green-600" />
                                    14-day free trial
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <Check className="h-4 w-4 text-green-600" />
                                    Cancel anytime
                                </div>
                            </motion.div>
                        </div>

                        {/* Stats Preview */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="mt-16 sm:mt-20"
                        >
                            <div className="relative rounded-2xl border border-gray-200 bg-gray-50 p-2 shadow-2xl">
                                <div className="rounded-xl bg-white p-8">
                                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                                        <div className="text-center">
                                            <p className="text-4xl font-bold text-gray-900">$12.4M</p>
                                            <p className="mt-1 text-sm text-gray-500">Revenue Tracked</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-4xl font-bold text-blue-600">+234%</p>
                                            <p className="mt-1 text-sm text-gray-500">ROI Improvement</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-4xl font-bold text-gray-900">2.8M</p>
                                            <p className="mt-1 text-sm text-gray-500">Events Today</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-4xl font-bold text-green-600">-42%</p>
                                            <p className="mt-1 text-sm text-gray-500">CAC Reduction</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    )
}
