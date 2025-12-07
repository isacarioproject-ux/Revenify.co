import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Target, BarChart3, Users, Zap, ArrowRight, Globe, Sparkles } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Timeline } from '@/components/ui/timeline'
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect'
import WorldMap from '@/components/ui/world-map'
import CTASection from '@/components/cta-section'
import FooterSection from '@/components/footer-section'
import { APP_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Integrations', to: '/integrations' },
    { name: 'Blog', to: '/blog' },
    { name: 'Docs', to: '/docs' },
    { name: 'Pricing', to: '/pricing' },
]

const values = [
    {
        icon: Target,
        title: 'Transparency',
        description: 'Clear, honest data you can trust. No hidden metrics or confusing dashboards.',
        color: 'bg-blue-600',
        canvasColors: [[59, 130, 246]],
    },
    {
        icon: BarChart3,
        title: 'Data-Driven',
        description: 'Every decision backed by real numbers. We believe in the power of accurate analytics.',
        color: 'bg-emerald-600',
        canvasColors: [[16, 185, 129]],
    },
    {
        icon: Users,
        title: 'Customer First',
        description: 'Your success is our success. We build features that solve real problems.',
        color: 'bg-purple-600',
        canvasColors: [[147, 51, 234]],
    },
    {
        icon: Zap,
        title: 'Innovation',
        description: 'Constantly improving our platform to give you the best attribution insights.',
        color: 'bg-amber-500',
        canvasColors: [[245, 158, 11]],
    },
]

// Timeline data with correct dates
const timelineData = [
    {
        title: "2025",
        content: (
            <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">The Idea</h4>
                <p className="text-gray-600 mb-4">
                    Frustrated with existing analytics tools that only show clicks and views, 
                    we started building something better - a platform that connects every dollar 
                    of revenue to its original marketing source.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Research</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Planning</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Prototyping</span>
                </div>
            </div>
        ),
    },
    {
        title: "2025",
        content: (
            <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Launch</h4>
                <p className="text-gray-600 mb-4">
                    Revenify officially launched with a mission to democratize revenue attribution. 
                    Making powerful analytics accessible to businesses of all sizes.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Beta Launch</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">First Users</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Core Features</span>
                </div>
            </div>
        ),
    },
    {
        title: "2026",
        content: (
            <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">10,000 Users Goal</h4>
                <p className="text-gray-600 mb-4">
                    Our goal is to help 10,000 businesses track their revenue with precision. 
                    Building a community of data-driven marketers who make smarter decisions.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Scale</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Community</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Partnerships</span>
                </div>
            </div>
        ),
    },
    {
        title: "2026",
        content: (
            <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">The Future</h4>
                <p className="text-gray-600 mb-4">
                    Expanding our platform with AI-powered insights, advanced attribution models, 
                    and deeper integrations. The future of marketing analytics starts here.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">AI Insights</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Advanced Models</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Global Expansion</span>
                </div>
            </div>
        ),
    },
]

const mapDots = [
    {
        start: { lat: -3.1190, lng: -60.0217, label: "Manaus" },
        end: { lat: 40.7128, lng: -74.0060, label: "New York" },
    },
    {
        start: { lat: -3.1190, lng: -60.0217 },
        end: { lat: 51.5074, lng: -0.1278, label: "London" },
    },
    {
        start: { lat: -3.1190, lng: -60.0217 },
        end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
    },
    {
        start: { lat: 51.5074, lng: -0.1278 },
        end: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
    },
]

const ValueCard = ({
    title,
    description,
    icon: Icon,
    color,
    canvasColors,
}: {
    title: string
    description: string
    icon: React.ElementType
    color: string
    canvasColors: number[][]
}) => {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative flex h-[20rem] w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-500 hover:border-gray-300 hover:shadow-2xl"
        >
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                    >
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName={color}
                            colors={canvasColors}
                            dotSize={2}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20 flex flex-col items-center">
                <div
                    className={cn(
                        'mb-4 rounded-2xl p-4 transition-all duration-300',
                        hovered ? 'bg-white/20' : 'bg-gray-100'
                    )}
                >
                    <Icon
                        className={cn(
                            'h-8 w-8 transition-colors duration-300',
                            hovered ? 'text-white' : 'text-gray-700'
                        )}
                    />
                </div>
                <h3
                    className={cn(
                        'text-xl font-bold transition-colors duration-300',
                        hovered ? 'text-white' : 'text-gray-900'
                    )}
                >
                    {title}
                </h3>
                <p
                    className={cn(
                        'mt-2 text-center text-sm transition-colors duration-300',
                        hovered ? 'text-white/80' : 'text-gray-600'
                    )}
                >
                    {description}
                </p>
            </div>
        </div>
    )
}

export default function About() {
    const [menuState, setMenuState] = useState(false)

    return (
        <>
            <SEO
                title="About"
                description="Learn about Revenify's mission to help businesses understand their marketing ROI through powerful revenue attribution analytics."
                url="https://revenify.co/about"
            />

            {/* Header - Same as other pages */}
            <header>
                <nav className="fixed z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <Link to="/" className="flex items-center">
                                <Logo />
                            </Link>

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

                            <div className="hidden lg:flex lg:items-center lg:gap-4">
                                <Button variant="ghost" size="sm" asChild>
                                    <a href={APP_URL}>Sign in</a>
                                </Button>
                                <Button size="sm" asChild>
                                    <a href={APP_URL}>Start Free</a>
                                </Button>
                            </div>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                className="lg:hidden p-2 text-gray-600"
                            >
                                {menuState ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

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

            <main>
                {/* Hero Section - White with gradient */}
                <section className="relative min-h-[70vh] w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-32 pb-20">
                    <div
                        className={cn(
                            "pointer-events-none absolute inset-0 select-none",
                            "[background-size:40px_40px]",
                            "[background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]",
                            "opacity-50"
                        )}
                    />

                    <div className="relative z-10 mx-auto w-full max-w-7xl px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                                <Sparkles className="h-4 w-4" />
                                About Revenify
                            </span>

                            <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                                We're on a Mission to
                                <br />
                                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                    Democratize Analytics
                                </span>
                            </h1>

                            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
                                Every business deserves to know exactly where their revenue comes from.
                                We're building the future of revenue attribution.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button size="lg" className="group" asChild>
                                    <a href={APP_URL}>
                                        Get Started Free
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link to="/pricing">View Pricing</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* World Map Section */}
                <section className="relative bg-white py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="text-center mb-12">
                                <p className="text-2xl font-bold text-gray-900 md:text-4xl">
                                    Global{" "}
                                    <span className="text-blue-600">Connectivity</span>
                                </p>
                                <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto mt-2">
                                    From Manaus to the world. Helping businesses everywhere track their revenue with precision.
                                </p>
                            </div>
                            <WorldMap dots={mapDots} />
                        </motion.div>
                    </div>
                </section>

                {/* Mission Section - No grid background */}
                <section className="relative overflow-hidden bg-white py-24 sm:py-32">
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                                    <Globe className="h-4 w-4" />
                                    Our Mission
                                </span>

                                <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                    Making Revenue Attribution
                                    <br />
                                    <span className="text-blue-600">Accessible to Everyone</span>
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    We believe that understanding where your revenue comes from shouldn't 
                                    require a team of data scientists or enterprise-level budgets. Our mission 
                                    is to make revenue attribution accessible, accurate, and actionable for 
                                    companies of all sizes.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Timeline Section - Same background throughout */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                                <Sparkles className="h-4 w-4" />
                                Our Journey
                            </span>
                            <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                From Idea to Impact
                            </h2>
                        </motion.div>
                    </div>
                    
                    <div className="w-full overflow-clip bg-white">
                        <Timeline data={timelineData} />
                    </div>
                </section>

                {/* Values with Canvas Reveal Effect */}
                <section className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
                                <Sparkles className="h-4 w-4" />
                                Our Values
                            </span>
                            <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                What Drives Us Forward
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                                These core values guide every decision we make and every feature we build.
                            </p>
                        </motion.div>

                        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {values.map((value) => (
                                <ValueCard key={value.title} {...value} />
                            ))}
                        </div>
                    </div>
                </section>

                <CTASection />
            </main>

            <FooterSection />
        </>
    )
}
