import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    Menu,
    X,
    Search,
    Book,
    Code,
    Zap,
    BarChart,
    Settings,
    Users,
    ArrowRight,
    ExternalLink,
    ChevronRight,
} from 'lucide-react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import FooterSection from '@/components/footer-section'
import { APP_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Features', to: '/#features' },
    { name: 'How it Works', to: '/#how-it-works' },
    { name: 'Pricing', to: '/pricing' },
]

const docsNavigation = {
    'Getting Started': [
        { name: 'Introduction', href: '#introduction', icon: Book },
        { name: 'Quick Start', href: '#quick-start', icon: Zap },
        { name: 'Installation', href: '#installation', icon: Code },
    ],
    'Core Concepts': [
        { name: 'Event Tracking', href: '#event-tracking', icon: BarChart },
        { name: 'Attribution Models', href: '#attribution-models', icon: Users },
        { name: 'Revenue Analytics', href: '#revenue-analytics', icon: BarChart },
    ],
    'Integrations': [
        { name: 'JavaScript SDK', href: '#javascript-sdk', icon: Code },
        { name: 'React SDK', href: '#react-sdk', icon: Code },
        { name: 'Node.js SDK', href: '#nodejs-sdk', icon: Code },
        { name: 'Stripe', href: '#stripe', icon: Settings },
        { name: 'Shopify', href: '#shopify', icon: Settings },
    ],
    'API Reference': [
        { name: 'Authentication', href: '#authentication', icon: Settings },
        { name: 'Events API', href: '#events-api', icon: Code },
        { name: 'Analytics API', href: '#analytics-api', icon: BarChart },
    ],
}

export default function Docs() {
    const [menuState, setMenuState] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)

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

            <main className="pt-16">
                <div className="flex">
                    {/* Sidebar */}
                    <aside
                        className={cn(
                            'fixed inset-y-0 left-0 z-40 w-64 transform border-r border-gray-200 bg-white pt-16 transition-transform lg:translate-x-0 lg:static lg:inset-auto',
                            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        )}
                    >
                        <div className="h-full overflow-y-auto px-4 py-8">
                            {/* Search */}
                            <div className="mb-6">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search docs..."
                                        className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Navigation */}
                            <nav className="space-y-6">
                                {Object.entries(docsNavigation).map(([category, items]) => (
                                    <div key={category}>
                                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                            {category}
                                        </h3>
                                        <ul className="space-y-1">
                                            {items.map((item) => {
                                                const Icon = item.icon
                                                return (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                                        >
                                                            <Icon className="h-4 w-4" />
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Mobile sidebar toggle */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="lg:hidden fixed bottom-4 right-4 z-50 rounded-full bg-blue-600 p-3 text-white shadow-lg"
                    >
                        <Menu className="h-6 w-6" />
                    </button>

                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                            {/* Hero */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-12"
                            >
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                    Documentation
                                </h1>
                                <p className="mt-4 text-xl text-gray-600">
                                    Everything you need to integrate Revenify into your product and
                                    start tracking revenue attribution.
                                </p>
                            </motion.div>

                            {/* Quick Start Cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="mb-16 grid gap-6 sm:grid-cols-2"
                            >
                                <Card className="p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="rounded-lg bg-blue-100 p-2">
                                            <Zap className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Quick Start
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Get up and running in less than 5 minutes with our quick
                                        start guide.
                                    </p>
                                    <a
                                        href="#quick-start"
                                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                                    >
                                        Get started
                                        <ArrowRight className="ml-1 h-4 w-4" />
                                    </a>
                                </Card>

                                <Card className="p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="rounded-lg bg-cyan-100 p-2">
                                            <Code className="h-5 w-5 text-cyan-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            API Reference
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Explore our REST API and learn how to integrate with your
                                        backend.
                                    </p>
                                    <a
                                        href="#api-reference"
                                        className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-700"
                                    >
                                        View API docs
                                        <ArrowRight className="ml-1 h-4 w-4" />
                                    </a>
                                </Card>
                            </motion.div>

                            {/* Introduction Section */}
                            <motion.section
                                id="introduction"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mb-16 scroll-mt-24"
                            >
                                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                                    Introduction
                                </h2>
                                <div className="prose prose-gray max-w-none">
                                    <p className="text-lg text-gray-600">
                                        Revenify is a powerful revenue attribution analytics platform
                                        that helps you understand which marketing channels drive the
                                        most revenue for your business.
                                    </p>
                                    <p className="text-gray-600">
                                        With Revenify, you can:
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-gray-600">
                                            <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600" />
                                            <span>
                                                Track every visitor interaction with our lightweight
                                                pixel tracker
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2 text-gray-600">
                                            <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600" />
                                            <span>
                                                Attribute revenue to specific marketing campaigns
                                                using multiple attribution models
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2 text-gray-600">
                                            <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600" />
                                            <span>
                                                Integrate with popular tools like Stripe, Shopify,
                                                and more
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2 text-gray-600">
                                            <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600" />
                                            <span>
                                                Access real-time analytics dashboards to make
                                                data-driven decisions
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.section>

                            {/* Quick Start Section */}
                            <motion.section
                                id="quick-start"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mb-16 scroll-mt-24"
                            >
                                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                                    Quick Start
                                </h2>
                                <div className="prose prose-gray max-w-none">
                                    <p className="text-gray-600 mb-6">
                                        Get started with Revenify in just a few minutes by following
                                        these simple steps:
                                    </p>

                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                                                    1
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                    Create an account
                                                </h3>
                                                <p className="text-gray-600 mb-3">
                                                    Sign up for a free Revenify account to get your
                                                    API keys.
                                                </p>
                                                <Button size="sm" asChild>
                                                    <a href={`${APP_URL}/signup`}>
                                                        Sign up free
                                                        <ExternalLink className="ml-2 h-4 w-4" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                                                    2
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                    Install the tracking script
                                                </h3>
                                                <p className="text-gray-600 mb-3">
                                                    Add our lightweight tracking script to your
                                                    website.
                                                </p>
                                                <div className="rounded-lg bg-gray-900 p-4 overflow-x-auto">
                                                    <code className="text-sm text-gray-100">
                                                        {`<script>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://cdn.revenify.co/tracker.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','revenify','YOUR_PROJECT_ID');
</script>`}
                                                    </code>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                                                    3
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                    Track your first event
                                                </h3>
                                                <p className="text-gray-600 mb-3">
                                                    Start tracking custom events with a simple API
                                                    call.
                                                </p>
                                                <div className="rounded-lg bg-gray-900 p-4 overflow-x-auto">
                                                    <code className="text-sm text-gray-100">
                                                        {`revenify.track('purchase', {
  revenue: 99.99,
  currency: 'USD',
  product_id: 'prod_123'
});`}
                                                    </code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.section>

                            {/* CTA Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 text-center"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Need help getting started?
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Our team is here to help you integrate Revenify into your
                                    product.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button asChild>
                                        <a href="/contact">Contact Support</a>
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <a href="/help">Visit Help Center</a>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>

            <FooterSection />
        </>
    )
}
