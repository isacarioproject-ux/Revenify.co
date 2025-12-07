import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, animate } from 'framer-motion'
import { ArrowRight, Menu, X, Key, Webhook, CreditCard, Code2, BarChart3, Zap, ChevronRight, Sparkles } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { APP_URL } from '@/lib/constants'
import SEO from '@/components/SEO'
import FooterSection from '@/components/footer-section'
import IntegrationsSection from '@/components/integrations-8'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Integrations', to: '/integrations' },
    { name: 'Blog', to: '/blog' },
    { name: 'Docs', to: '/docs' },
    { name: 'Pricing', to: '/pricing' },
]

// Main integrations (the real ones we have)
const mainIntegrations = [
    { name: 'Stripe', description: 'Auto-track payments and attribute revenue', logo: 'stripe' },
    { name: 'REST API', description: 'Full programmatic access with SDK', logo: 'api' },
    { name: 'Webhooks', description: 'Real-time events for leads and revenue', logo: 'webhook' },
    { name: 'Pixel Tracking', description: 'JS snippet for visitor tracking', logo: 'pixel' },
    { name: 'Analytics Export', description: 'Export data to BI tools', logo: 'analytics' },
    { name: 'Zapier', description: 'Connect to 5,000+ apps (coming soon)', logo: 'zapier', soon: true },
]


// Stripe Logo
const StripeLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 28 28" className={cn("h-7 w-7", className)}>
        <rect fill="#635BFF" width="28" height="28" rx="6"/>
        <path fill="#fff" d="M13.3 11.5c0-.8.7-1.1 1.7-1.1 1.5 0 3.5.5 5 1.3V7.9c-1.7-.7-3.3-.9-5-.9-4.1 0-6.8 2.1-6.8 5.7 0 5.5 7.6 4.6 7.6 7 0 .9-.8 1.2-1.9 1.2-1.6 0-3.8-.7-5.5-1.6v3.9c1.9.8 3.7 1.1 5.5 1.1 4.2 0 7-2.1 7-5.7-.1-6-7.6-4.9-7.6-7.1z"/>
    </svg>
)

// Revenify Logo
const RevenifyLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 40 40" className={cn("h-8 w-8", className)}>
        <rect fill="#3b82f6" width="40" height="40" rx="8" />
        <path fill="#fff" d="M12 28V12h8c4 0 6 2 6 5s-2 5-6 5h-4v6h-4zm4-10h4c1.5 0 2-.5 2-1.5S21.5 15 20 15h-4v3z" />
    </svg>
)

// AI Card Skeleton with animations - shows real integration icons
const AICardSkeleton = () => {
    const scale = [1, 1.1, 1]
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"]

    useEffect(() => {
        const sequence = [
            [".circle-1", { scale, transform }, { duration: 0.8 }],
            [".circle-2", { scale, transform }, { duration: 0.8 }],
            [".circle-3", { scale, transform }, { duration: 0.8 }],
            [".circle-4", { scale, transform }, { duration: 0.8 }],
            [".circle-5", { scale, transform }, { duration: 0.8 }],
        ]
        // @ts-ignore
        animate(sequence, { repeat: Infinity, repeatDelay: 1 })
    }, [])

    return (
        <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
            <div className="flex flex-row shrink-0 justify-center items-center gap-2">
                <Container className="h-8 w-8 circle-1">
                    <CreditCard className="h-4 w-4 text-[#635BFF]" />
                </Container>
                <Container className="h-12 w-12 circle-2">
                    <Key className="h-6 w-6 text-emerald-600" />
                </Container>
                <Container className="circle-3">
                    <RevenifyLogo className="h-8 w-8" />
                </Container>
                <Container className="h-12 w-12 circle-4">
                    <Webhook className="h-6 w-6 text-orange-600" />
                </Container>
                <Container className="h-8 w-8 circle-5">
                    <Code2 className="h-4 w-4 text-blue-600" />
                </Container>
            </div>

            <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse">
                <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
                    <AISparkles />
                </div>
            </div>
        </div>
    )
}

const AISparkles = () => {
    const randomMove = () => Math.random() * 2 - 1
    const randomOpacity = () => Math.random()
    const random = () => Math.random()

    return (
        <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
                <motion.span
                    key={`star-${i}`}
                    animate={{
                        top: `calc(${random() * 100}% + ${randomMove()}px)`,
                        left: `calc(${random() * 100}% + ${randomMove()}px)`,
                        opacity: randomOpacity(),
                        scale: [1, 1.2, 0],
                    }}
                    transition={{
                        duration: random() * 2 + 4,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        top: `${random() * 100}%`,
                        left: `${random() * 100}%`,
                        width: `2px`,
                        height: `2px`,
                        borderRadius: "50%",
                        zIndex: 1,
                    }}
                    className="inline-block bg-blue-600"
                />
            ))}
        </div>
    )
}

const Container = ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <div className={cn(
        "h-16 w-16 rounded-full flex items-center justify-center bg-white shadow-[0px_0px_8px_0px_rgba(59,130,246,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.20)]",
        className
    )}>
        {children}
    </div>
)

// Card component for integration list
const IntegrationCard = ({ name, description, logo, soon }: { name: string; description: string; logo: string; soon?: boolean }) => {
    const getIcon = () => {
        switch (logo) {
            case 'stripe': return <StripeLogo />
            case 'api': return <Key className="h-6 w-6 text-emerald-600" />
            case 'webhook': return <Webhook className="h-6 w-6 text-orange-600" />
            case 'pixel': return <Code2 className="h-6 w-6 text-blue-600" />
            case 'analytics': return <BarChart3 className="h-6 w-6 text-purple-600" />
            case 'zapier': return <Zap className="h-6 w-6 text-yellow-600" />
            default: return <div className="h-6 w-6 rounded bg-gradient-to-br from-blue-500 to-cyan-500" />
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "group relative rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-all",
                logo === 'stripe' ? "border-[#635BFF]/30 hover:border-[#635BFF]/50" : "border-gray-200 hover:border-blue-200",
                soon && "opacity-60"
            )}
        >
            <div className="flex items-start gap-4">
                <div className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-lg transition-colors",
                    logo === 'stripe' ? "bg-[#635BFF]/10" : "bg-gray-50 group-hover:bg-blue-50"
                )}>
                    {getIcon()}
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                        {name}
                        {soon && <span className="text-[10px] bg-gray-200 px-1.5 py-0.5 rounded">Soon</span>}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{description}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
            </div>
        </motion.div>
    )
}


export default function Integrations() {
    const [menuState, setMenuState] = useState(false)

    return (
        <>
            <SEO
                title="Integrations"
                description="Connect Revenify with your favorite tools. Integrate with Stripe, Shopify, HubSpot, Salesforce, and 50+ more platforms for complete revenue attribution."
                url="https://revenify.co/integrations"
            />

            {/* Header */}
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
                {/* Hero Section with Tailark Integration Component */}
                <div className="pt-16">
                    <IntegrationsSection />
                </div>

                {/* Integration Cards Section */}
                <section className="py-24 sm:py-32 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Available Integrations
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Everything you need to track revenue attribution
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                            {mainIntegrations.map((item) => (
                                <IntegrationCard key={item.name} {...item} />
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Button variant="outline" size="lg" asChild>
                                <Link to="/docs">
                                    View Documentation
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* AI Features Section with Animated Card */}
                <section className="py-24 sm:py-32 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                AI-Powered Revenue Intelligence
                            </h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                                Revenify uses AI to give you unprecedented visibility into your revenue streams
                            </p>
                        </div>

                        {/* AI Card with Animation */}
                        <div className="max-w-sm mx-auto mb-16">
                            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
                                <div className="h-[15rem] rounded-xl bg-gray-50 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]">
                                    <AICardSkeleton />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 py-2">
                                    Universal Integration Hub
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Connect all your tools through Revenify's intelligent hub to unlock 
                                    predictive analytics and automated revenue attribution.
                                </p>
                            </div>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {[
                                { title: 'Predictive Attribution', desc: 'AI predicts which channels will drive conversions' },
                                { title: 'Automated Insights', desc: 'Get actionable recommendations automatically' },
                                { title: 'Smart Alerts', desc: 'Real-time notifications when metrics change' },
                            ].map((feature) => (
                                <div key={feature.title} className="text-left p-6 rounded-xl bg-white border shadow-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Sparkles className="h-5 w-5 text-blue-600" />
                                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Button size="lg" asChild>
                                <a href={APP_URL}>
                                    Try AI Analytics
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 sm:py-32 bg-blue-600">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to connect your tools?
                        </h2>
                        <p className="mt-4 text-lg text-blue-100">
                            Start your free trial today and integrate in minutes
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" variant="secondary" asChild>
                                <a href={APP_URL}>
                                    Start Free Trial
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                                <Link to="/docs">Read the Docs</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    )
}
