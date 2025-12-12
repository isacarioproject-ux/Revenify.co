import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    Search,
    BookOpen,
    Code,
    Zap,
    ArrowRight,
    ExternalLink,
    ChevronRight,
    Copy,
    Check,
    MousePointerClick,
    UserPlus,
    Link2,
    LayoutDashboard,
    Globe,
    Route,
    Key,
    Webhook,
    LineChart,
} from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { APP_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { AnimatedBorderButton } from '@/components/ui/moving-border'

const docsNavigation = {
    'Getting Started': [
        { name: 'Introduction', id: 'introduction', icon: BookOpen },
        { name: 'Quick Start', id: 'quick-start', icon: Zap },
        { name: 'Installation', id: 'installation', icon: Code },
    ],
    'Pixel Tracking': [
        { name: 'JavaScript SDK', id: 'javascript-sdk', icon: Code },
        { name: 'Track Events', id: 'track-events', icon: MousePointerClick },
        { name: 'Track Leads', id: 'track-leads', icon: UserPlus },
        { name: 'UTM Attribution', id: 'utm-attribution', icon: Link2 },
    ],
    'Dashboard': [
        { name: 'Analytics', id: 'analytics', icon: LayoutDashboard },
        { name: 'Sources', id: 'sources', icon: Globe },
        { name: 'Customer Journey', id: 'customer-journey', icon: Route },
    ],
    'API Reference': [
        { name: 'Authentication', id: 'authentication', icon: Key },
        { name: 'Events API', id: 'events-api', icon: Webhook },
        { name: 'Analytics API', id: 'analytics-api', icon: LineChart },
    ],
}

function CodeBlock({ code }: { code: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative group">
            <button
                onClick={handleCopy}
                className="absolute right-2 sm:right-3 top-2 sm:top-3 rounded-md bg-white/10 p-1.5 sm:p-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity"
            >
                {copied ? (
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-400" />
                ) : (
                    <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/60" />
                )}
            </button>
            <pre className="bg-[#0D0D0D] border border-white/10 text-white/80 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto max-w-full">
                <code className="break-all sm:break-normal whitespace-pre-wrap sm:whitespace-pre">{code}</code>
            </pre>
        </div>
    )
}

export default function Docs() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('introduction')
    const [searchQuery, setSearchQuery] = useState('')

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = Object.values(docsNavigation)
                .flat()
                .map((item) => item.id)

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top >= 0 && rect.top <= 200) {
                        setActiveSection(sectionId)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = 100
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
        }
        setSidebarOpen(false)
    }

    // Filter navigation items based on search query
    const filteredNavigation = Object.entries(docsNavigation).reduce(
        (acc, [category, items]) => {
            const filteredItems = items.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            if (filteredItems.length > 0) {
                acc[category as keyof typeof docsNavigation] = filteredItems
            }
            return acc
        },
        {} as typeof docsNavigation
    )

    return (
        <>
            <Header />

            <main className="pt-20 sm:pt-24 bg-black min-h-screen">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex min-h-screen gap-12">
                        {/* Sidebar - Desktop */}
                        <aside className="hidden lg:block w-56 flex-shrink-0">
                            <div className="sticky top-28 h-[calc(100vh-8rem)]">
                                <ScrollArea className="h-full py-8 pr-4">
                                {/* Search */}
                                <div className="mb-6">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                                        <input
                                            type="text"
                                            placeholder="Search docs..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:border-white/20 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Navigation */}
                                <nav className="space-y-6">
                                    {Object.entries(filteredNavigation).map(([category, items]) => (
                                        <div key={category}>
                                            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                                                {category}
                                            </h3>
                                            <ul className="space-y-1">
                                                {items.map((item) => {
                                                    const Icon = item.icon
                                                    const isActive = activeSection === item.id
                                                    return (
                                                        <li key={item.name}>
                                                            <button
                                                                onClick={() => scrollToSection(item.id)}
                                                                className={cn(
                                                                    'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-left',
                                                                    isActive
                                                                        ? 'bg-white/10 text-white'
                                                                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                                                                )}
                                                            >
                                                                <Icon className="h-4 w-4 flex-shrink-0" />
                                                                {item.name}
                                                            </button>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    ))}
                                </nav>
                                </ScrollArea>
                            </div>
                        </aside>

                        {/* Sidebar - Mobile */}
                        {sidebarOpen && (
                            <>
                                {/* Backdrop */}
                                <div
                                    className="fixed inset-0 z-40 bg-black/80 lg:hidden"
                                    onClick={() => setSidebarOpen(false)}
                                />

                                {/* Sidebar */}
                                <motion.aside
                                    initial={{ x: '-100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '-100%' }}
                                    className="fixed inset-y-0 left-0 z-50 w-64 border-r border-white/10 bg-black pt-24 lg:hidden"
                                >
                                    <ScrollArea className="h-full px-4 py-8">
                                        {/* Search */}
                                        <div className="mb-6">
                                            <div className="relative">
                                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                                                <input
                                                    type="text"
                                                    placeholder="Search docs..."
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                    className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:border-white/20 focus:outline-none"
                                                />
                                            </div>
                                        </div>

                                        {/* Navigation */}
                                        <nav className="space-y-6">
                                            {Object.entries(filteredNavigation).map(([category, items]) => (
                                                <div key={category}>
                                                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                                                        {category}
                                                    </h3>
                                                    <ul className="space-y-1">
                                                        {items.map((item) => {
                                                            const Icon = item.icon
                                                            const isActive = activeSection === item.id
                                                            return (
                                                                <li key={item.name}>
                                                                    <button
                                                                        onClick={() => scrollToSection(item.id)}
                                                                        className={cn(
                                                                            'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-left',
                                                                            isActive
                                                                                ? 'bg-white/10 text-white'
                                                                                : 'text-white/60 hover:bg-white/5 hover:text-white'
                                                                        )}
                                                                    >
                                                                        <Icon className="h-4 w-4 flex-shrink-0" />
                                                                        {item.name}
                                                                    </button>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            ))}
                                        </nav>
                                    </ScrollArea>
                                </motion.aside>
                            </>
                        )}

                        {/* Mobile sidebar toggle */}
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="lg:hidden fixed bottom-4 right-4 z-30 rounded-full bg-white/10 border border-white/20 p-4 text-white shadow-lg hover:bg-white/20 transition-colors"
                        >
                            <BookOpen className="h-6 w-6" />
                        </button>

                        {/* Main Content */}
                        <div className="flex-1 min-w-0 py-8 sm:py-12">
                            {/* Hero */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-12"
                            >
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight pb-2">
                                    <span className="bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent">
                                        Documentation
                                    </span>
                                </h1>
                                <p className="mt-3 sm:mt-4 text-base sm:text-xl text-white/40">
                                    Everything you need to integrate Revenify and start tracking
                                    revenue attribution.
                                </p>
                            </motion.div>

                            {/* Quick Start Cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="mb-16 grid gap-6 sm:grid-cols-2"
                            >
                                <div className="p-6 bg-[#0D0D0D] border border-white/10 rounded-xl hover:border-white/20 transition-all cursor-pointer" onClick={() => scrollToSection('quick-start')}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="rounded-lg bg-blue-500/10 p-2">
                                            <Zap className="h-5 w-5 text-blue-400" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white">
                                            Quick Start
                                        </h3>
                                    </div>
                                    <p className="text-sm text-white/50 mb-4">
                                        Get up and running in less than 5 minutes with our quick
                                        start guide.
                                    </p>
                                    <div className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300">
                                        Get started
                                        <ArrowRight className="ml-1 h-4 w-4" />
                                    </div>
                                </div>

                                <div className="p-6 bg-[#0D0D0D] border border-white/10 rounded-xl hover:border-white/20 transition-all cursor-pointer" onClick={() => scrollToSection('events-api')}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="rounded-lg bg-cyan-500/10 p-2">
                                            <Code className="h-5 w-5 text-cyan-400" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white">
                                            API Reference
                                        </h3>
                                    </div>
                                    <p className="text-sm text-white/50 mb-4">
                                        Explore our REST API and learn how to integrate with your
                                        backend.
                                    </p>
                                    <div className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300">
                                        View API docs
                                        <ArrowRight className="ml-1 h-4 w-4" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Introduction Section */}
                            <section id="introduction" className="mb-16 scroll-mt-32">
                                <h2 className="mb-4 text-3xl font-bold text-white">
                                    Introduction
                                </h2>
                                <div className="prose prose-invert max-w-none space-y-4">
                                    <p className="text-lg text-white/60">
                                        Revenify is a powerful revenue attribution analytics platform
                                        that helps you understand which marketing channels drive the
                                        most revenue for your business.
                                    </p>
                                    <p className="text-white/60">
                                        With Revenify, you can:
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-white/60">
                                            <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                            <span>
                                                Track every visitor interaction with our lightweight
                                                pixel tracker (&lt;2KB)
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2 text-white/60">
                                            <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                            <span>
                                                Attribute revenue using first-touch and last-touch
                                                attribution models
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2 text-white/60">
                                            <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                            <span>
                                                Capture leads automatically with UTM attribution
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2 text-white/60">
                                            <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                            <span>
                                                Access real-time analytics dashboards with visitor
                                                charts and conversion funnels
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <Separator className="my-12" />

                            {/* Quick Start Section */}
                            <section id="quick-start" className="mb-16 scroll-mt-24">
                                <h2 className="mb-4 text-3xl font-bold text-white">
                                    Quick Start
                                </h2>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-white/60 mb-6">
                                        Get started with Revenify in just a few minutes by following
                                        these simple steps:
                                    </p>

                                    <div className="space-y-8">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                                                    1
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-white mb-2">
                                                    Create an account
                                                </h3>
                                                <p className="text-white/60 mb-3">
                                                    Sign up for a free Revenify account to get your
                                                    project key.
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
                                                <h3 className="text-xl font-semibold text-white mb-2">
                                                    Install the tracking pixel
                                                </h3>
                                                <p className="text-white/60 mb-3">
                                                    Add our lightweight tracking script to your
                                                    website's &lt;head&gt; section.
                                                </p>
                                                <CodeBlock
                                                    code={`<script>
  window.revenify = { projectKey: 'YOUR_PROJECT_KEY' };
</script>
<script src="https://cdn.revenify.co/pixel.js" async></script>`}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                                                    3
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-white mb-2">
                                                    Start tracking
                                                </h3>
                                                <p className="text-white/60 mb-3">
                                                    The pixel automatically tracks page views. Add
                                                    custom events as needed.
                                                </p>
                                                <CodeBlock
                                                    code={`// Track custom event
window.revenify.track('button_click', {
  button_id: 'cta-hero',
  page: '/landing'
});

// Track lead capture
window.revenify.trackLead({
  email: 'user@example.com',
  name: 'John Doe'
});`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <Separator className="my-12" />

                            {/* Installation */}
                            <section id="installation" className="mb-16 scroll-mt-24">
                                <h2 className="mb-4 text-3xl font-bold text-white">
                                    Installation
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            Via CDN (Recommended)
                                        </h3>
                                        <p className="text-white/60 mb-4">
                                            The simplest way to get started. Just add the script tag
                                            to your HTML:
                                        </p>
                                        <CodeBlock
                                            code={`<script>
  window.revenify = {
    projectKey: 'YOUR_PROJECT_KEY',
    debug: false // Set to true for development
  };
</script>
<script src="https://cdn.revenify.co/pixel.js" async></script>`}
                                            
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            NPM Package (Coming Soon)
                                        </h3>
                                        <p className="text-white/60 mb-4">
                                            For React, Vue, or other modern frameworks:
                                        </p>
                                        <CodeBlock
                                            code={`npm install @revenify/pixel

import { init, track } from '@revenify/pixel'

init({ projectKey: 'YOUR_PROJECT_KEY' })
track('page_view')`}
                                        />
                                    </div>
                                </div>
                            </section>

                            <Separator className="my-12" />

                            {/* JavaScript SDK */}
                            <section id="javascript-sdk" className="mb-16 scroll-mt-24">
                                <h2 className="mb-4 text-3xl font-bold text-white">
                                    JavaScript SDK
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-white/60">
                                        The Revenify pixel is a lightweight (&lt;2KB gzipped)
                                        JavaScript SDK that automatically tracks visitor behavior
                                        and UTM parameters.
                                    </p>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            Features
                                        </h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2 text-white/60">
                                                <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                                <span>Automatic page view tracking</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-white/60">
                                                <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                                <span>UTM parameter capture and persistence</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-white/60">
                                                <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                                <span>Cross-domain tracking support</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-white/60">
                                                <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                                <span>Fingerprint-based visitor identification</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-white/60">
                                                <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                                <span>Device and browser detection</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <Separator className="my-12" />

                            {/* Track Events */}
                            <section id="track-events" className="mb-16 scroll-mt-24">
                                <h2 className="mb-4 text-3xl font-bold text-white">
                                    Track Events
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-white/60">
                                        Track custom events to understand user behavior beyond page
                                        views.
                                    </p>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            Basic Usage
                                        </h3>
                                        <CodeBlock
                                            code={`// Track a simple event
window.revenify.track('button_click');

// Track event with properties
window.revenify.track('product_viewed', {
  product_id: 'prod_123',
  product_name: 'Premium Plan',
  price: 99.00,
  currency: 'USD'
});

// Track event with revenue
window.revenify.track('purchase', {
  order_id: 'order_456',
  revenue: 299.00,
  currency: 'USD',
  products: ['prod_123', 'prod_456']
});`}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            Common Events
                                        </h3>
                                        <div className="rounded-lg border border-white/10 overflow-hidden">
                                            <table className="min-w-full divide-y divide-white/10">
                                                <thead className="bg-white/5">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase">
                                                            Event
                                                        </th>
                                                        <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase">
                                                            Description
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white/[0.02] divide-y divide-white/10">
                                                    <tr>
                                                        <td className="px-4 py-3 text-sm font-mono text-white/80">
                                                            page_view
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-white/60">
                                                            Automatically tracked on each page load
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 text-sm font-mono text-white/80">
                                                            button_click
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-white/60">
                                                            User clicked a button or CTA
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 text-sm font-mono text-white/80">
                                                            form_submit
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-white/60">
                                                            User submitted a form
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 text-sm font-mono text-white/80">
                                                            purchase
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-white/60">
                                                            User completed a purchase
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <Separator className="my-12" />

                            {/* Track Leads */}
                            <section id="track-leads" className="mb-16 scroll-mt-24">
                                <h2 className="mb-4 text-3xl font-bold text-white">
                                    Track Leads
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-white/60">
                                        Capture leads and automatically attribute them to their
                                        marketing source.
                                    </p>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            Basic Lead Tracking
                                        </h3>
                                        <CodeBlock
                                            code={`// Track a lead (signup, newsletter, contact form, etc.)
window.revenify.trackLead({
  email: 'user@example.com',
  name: 'John Doe',
  phone: '+1234567890', // optional
  company: 'Acme Inc' // optional
});`}
                                        />
                                        <p className="text-sm text-white/60 mt-3">
                                            The lead will be automatically attributed to the UTM
                                            source that brought the visitor to your site.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            Lead with Custom Properties
                                        </h3>
                                        <CodeBlock
                                            code={`window.revenify.trackLead({
  email: 'user@example.com',
  name: 'John Doe',
  properties: {
    plan_interest: 'Pro',
    employees: '10-50',
    industry: 'SaaS'
  }
});`}
                                        />
                                    </div>
                                </div>
                            </section>

                            <Separator className="my-12" />

                            {/* UTM Attribution */}
                            <section id="utm-attribution" className="mb-16 scroll-mt-24">
                                <h2 className="mb-4 text-3xl font-bold text-white">
                                    UTM Attribution
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-white/60">
                                        Revenify automatically captures and persists UTM parameters
                                        for accurate attribution.
                                    </p>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            Supported Parameters
                                        </h3>
                                        <div className="rounded-lg border border-white/10 overflow-hidden">
                                            <table className="min-w-full divide-y divide-white/10">
                                                <thead className="bg-white/5">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase">
                                                            Parameter
                                                        </th>
                                                        <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase">
                                                            Description
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white/[0.02] divide-y divide-white/10">
                                                    <tr>
                                                        <td className="px-4 py-3 text-sm font-mono text-white/80">
                                                            utm_source
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-white/60">
                                                            Traffic source (e.g., google, facebook)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 text-sm font-mono text-white/80">
                                                            utm_medium
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-white/60">
                                                            Marketing medium (e.g., cpc, email)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 text-sm font-mono text-white/80">
                                                            utm_campaign
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-white/60">
                                                            Campaign name
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 text-sm font-mono text-white/80">
                                                            utm_term
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-white/60">
                                                            Paid keywords
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-3 text-sm font-mono text-white/80">
                                                            utm_content
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-white/60">
                                                            Ad variation
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            Example URL
                                        </h3>
                                        <CodeBlock
                                            code={`https://yoursite.com?utm_source=google&utm_medium=cpc&utm_campaign=summer_sale&utm_term=analytics&utm_content=ad_variant_a`}
                                            
                                        />
                                    </div>

                                    <div className="rounded-lg bg-blue-500/10 border border-blue-500/20 p-4">
                                        <p className="text-sm text-blue-300">
                                            <strong>Note:</strong> UTM parameters are stored in
                                            localStorage and persist across sessions. Both first-touch
                                            and last-touch attribution are tracked.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <Separator className="my-12" />

                            {/* Analytics */}
                            <section id="analytics" className="mb-16 scroll-mt-24">
                                <h2 className="mb-4 text-3xl font-bold text-white">
                                    Analytics Dashboard
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-white/60">
                                        Access your analytics dashboard to view real-time metrics and
                                        insights.
                                    </p>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            Key Metrics
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-white">
                                                        Total Visitors
                                                    </p>
                                                    <p className="text-sm text-white/60">
                                                        Unique visitors tracked across all pages
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-white">
                                                        Leads Captured
                                                    </p>
                                                    <p className="text-sm text-white/60">
                                                        Total leads with source attribution
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-white">
                                                        Conversion Rate
                                                    </p>
                                                    <p className="text-sm text-white/60">
                                                        Percentage of visitors that convert to leads
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-white">
                                                        Top Sources
                                                    </p>
                                                    <p className="text-sm text-white/60">
                                                        Traffic sources ranked by performance
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <Separator className="my-12" />

                            {/* Sources */}
                            <section id="sources" className="mb-16 scroll-mt-24">
                                <h2 className="mb-4 text-3xl font-bold text-white">Sources</h2>
                                <div className="space-y-6">
                                    <p className="text-white/60">
                                        View all traffic sources and their performance metrics.
                                    </p>
                                    <p className="text-white/60">
                                        The Sources page shows you where your visitors are coming
                                        from, including:
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-white/60">
                                            <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                            <span>UTM campaign performance</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-white/60">
                                            <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                            <span>Visitor count per source</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-white/60">
                                            <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                            <span>Lead conversion rates</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-white/60">
                                            <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                            <span>First-touch vs last-touch attribution</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <Separator className="my-12" />

                            {/* Customer Journey */}
                            <section id="customer-journey" className="mb-16 scroll-mt-24">
                                <h2 className="mb-4 text-3xl font-bold text-white">
                                    Customer Journey
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-white/60">
                                        Visualize the complete customer journey from first visit to
                                        conversion.
                                    </p>
                                    <p className="text-white/60">
                                        Track how visitors interact with your site across multiple
                                        sessions and touchpoints.
                                    </p>
                                </div>
                            </section>

                            <Separator className="my-12" />

                            {/* API Reference */}
                            <section id="authentication" className="mb-16 scroll-mt-24">
                                <h2 className="mb-4 text-3xl font-bold text-white">
                                    Authentication
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-white/60">
                                        All API requests require authentication using your secret API
                                        key.
                                    </p>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            API Keys
                                        </h3>
                                        <p className="text-white/60 mb-4">
                                            You can find your API keys in your project settings.
                                            There are two types:
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2 text-white/60">
                                                <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                                <span>
                                                    <strong className="text-white">Project Key (pk_live_...)</strong> - Used
                                                    in the browser pixel
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2 text-white/60">
                                                <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-400" />
                                                <span>
                                                    <strong className="text-white">Secret Key (sk_live_...)</strong> - Used
                                                    for server-side API calls
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            Authorization Header
                                        </h3>
                                        <CodeBlock
                                            code={`curl https://api.revenify.io/v1/events \\
  -H "Authorization: Bearer sk_live_your_secret_key"`}
                                            
                                        />
                                    </div>
                                </div>
                            </section>

                            <Separator className="my-12" />

                            {/* Events API */}
                            <section id="events-api" className="mb-16 scroll-mt-24">
                                <h2 className="mb-4 text-3xl font-bold text-white">
                                    Events API
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-white/60">
                                        Server-side API for tracking events directly from your
                                        backend.
                                    </p>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            Create Event
                                        </h3>
                                        <div className="mb-4">
                                            <span className="inline-flex items-center gap-2 rounded-md bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-400">
                                                POST
                                                <code className="text-xs">/v1/events</code>
                                            </span>
                                        </div>
                                        <CodeBlock
                                            code={`curl -X POST https://api.revenify.io/v1/events \\
  -H "Authorization: Bearer sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "event_type": "purchase",
    "visitor_id": "vis_123",
    "properties": {
      "order_id": "order_456",
      "revenue": 299.00,
      "currency": "USD"
    }
  }'`}
                                            
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            List Events
                                        </h3>
                                        <div className="mb-4">
                                            <span className="inline-flex items-center gap-2 rounded-md bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-400">
                                                GET
                                                <code className="text-xs">/v1/events</code>
                                            </span>
                                        </div>
                                        <CodeBlock
                                            code={`curl https://api.revenify.io/v1/events?limit=100 \\
  -H "Authorization: Bearer sk_live_..."`}
                                            
                                        />
                                    </div>
                                </div>
                            </section>

                            <Separator className="my-12" />

                            {/* Analytics API */}
                            <section id="analytics-api" className="mb-16 scroll-mt-24">
                                <h2 className="mb-4 text-3xl font-bold text-white">
                                    Analytics API
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-white/60">
                                        Retrieve analytics data programmatically.
                                    </p>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            Get Analytics
                                        </h3>
                                        <div className="mb-4">
                                            <span className="inline-flex items-center gap-2 rounded-md bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-400">
                                                GET
                                                <code className="text-xs">/v1/analytics</code>
                                            </span>
                                        </div>
                                        <CodeBlock
                                            code={`curl https://api.revenify.io/v1/analytics?start=2024-01-01&end=2024-01-31 \\
  -H "Authorization: Bearer sk_live_..."`}
                                            
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* CTA Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="rounded-2xl border border-white/10 bg-[#0D0D0D] p-8 text-center"
                            >
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Need help getting started?
                                </h3>
                                <p className="text-white/50 mb-6">
                                    Our team is here to help you integrate Revenify into your
                                    product.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <AnimatedBorderButton as={Link} to="/contact" className="px-6 py-3 text-sm">
                                        Contact Support
                                    </AnimatedBorderButton>
                                    <Link
                                        to="/pricing"
                                        className="inline-flex items-center justify-center px-6 py-3 text-white/60 hover:text-white transition-colors text-sm"
                                    >
                                        View Pricing
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
