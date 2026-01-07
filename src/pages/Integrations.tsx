import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Key, Webhook, Code2, BarChart3, Zap, Database, MousePointerClick, Link2, Globe } from 'lucide-react'
import { APP_URL } from '@/lib/constants'
import SEO from '@/components/SEO'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CTA } from '@/components/home/CTA'
import { cn } from '@/lib/utils'
import { AnimatedBorderButton } from '@/components/ui/moving-border'


export default function Integrations() {
    return (
        <>
            <SEO
                title="Integrations"
                description="Connect Revenify with your favorite tools. Use our Pixel Tracking, REST API, Webhooks and more for complete revenue attribution."
                url="https://revenify.co/integrations"
            />

            <Header />

            <main className="bg-black">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6"
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">
                                INTEGRATIONS
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.2] pb-2"
                        >
                            <span className="block bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent pb-1">
                                Connect your
                            </span>
                            <span className="block bg-gradient-to-b from-white/70 via-white/50 to-white/30 bg-clip-text text-transparent">
                                favorite tools
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 text-lg text-white/40 max-w-2xl mx-auto"
                        >
                            Use our Pixel Tracking, REST API, Webhooks and more for complete revenue attribution.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <AnimatedBorderButton as="a" href={`${APP_URL}/auth?mode=signup`} className="px-8 py-4 text-sm tracking-wide">
                                START INTEGRATING
                                <ArrowRight className="w-4 h-4" />
                            </AnimatedBorderButton>
                            <Link
                                to="/docs"
                                className="inline-flex items-center gap-2 px-6 py-4 text-white/40 hover:text-white/60 transition-colors text-sm"
                            >
                                View Docs
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* How it Works Section - Layout like image */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Left side - Title and CTA */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:sticky lg:top-32"
                            >
                                <h2 className="text-4xl lg:text-5xl font-light leading-tight">
                                    <span className="text-white/90">Integrate with your </span>
                                    <span className="text-white/50 italic">favorite tools</span>
                                </h2>
                                
                                <p className="mt-6 text-white/40 max-w-md">
                                    Seamlessly connect with popular platforms and services to enhance your workflow.
                                </p>

                                <div className="mt-8">
                                    <AnimatedBorderButton as="a" href={`${APP_URL}/auth?mode=signup`} className="px-6 py-3 text-sm">
                                        Get Started
                                    </AnimatedBorderButton>
                                </div>

                                {/* Testimonial */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="mt-16 flex items-start gap-4"
                                >
                                    <img 
                                        src="/testigo1.png" 
                                        alt="KleoveY" 
                                        className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                                    />
                                    <div>
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            "The integration was incredibly simple. In less than 10 minutes we were already tracking all our revenue."
                                        </p>
                                        <p className="mt-3 text-sm">
                                            <span className="text-white/80 font-medium">@KleoveY</span>
                                            <span className="text-white/40 ml-2">CEO, Revenify.co</span>
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Right side - Integration cards grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: Key, name: 'REST API', description: 'Full programmatic access with SDKs', color: 'text-emerald-400' },
                                    { icon: Webhook, name: 'Webhooks', description: 'Real-time events for leads', color: 'text-blue-400' },
                                    { icon: Code2, name: 'Pixel Tracking', description: 'JS snippet for tracking', color: 'text-cyan-400' },
                                    { icon: BarChart3, name: 'Analytics', description: 'Export data to BI tools', color: 'text-purple-400' },
                                    { icon: Database, name: 'Data Sync', description: 'Sync with your CRM', color: 'text-orange-400' },
                                    { icon: Zap, name: 'Zapier', description: 'Connect to 5,000+ apps', color: 'text-yellow-400' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group p-5 bg-[#0D0D0D] border border-white/10 rounded-xl hover:border-white/20 transition-all cursor-pointer"
                                    >
                                        <item.icon className={cn("w-5 h-5 mb-3", item.color)} />
                                        <h3 className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs text-white/40 mt-1 line-clamp-2">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration Features - Bento Grid */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-6"
                            >
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">
                                    KEY FEATURES
                                </span>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl lg:text-4xl font-light"
                            >
                                <span className="text-white/90">Built for </span>
                                <span className="text-white/50 italic">developers</span>
                            </motion.h2>
                        </div>

                        {/* Bento Grid Layout - 4 columns on desktop */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Pixel Tracking - Large Card (3 cols on lg) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="sm:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0D] p-6 hover:border-cyan-500/30 transition-all"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                                        <MousePointerClick className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <h3 className="text-lg font-medium text-white/90 mb-2">Pixel Tracking</h3>
                                    <p className="text-sm text-white/50 mb-4">
                                        Lightweight JavaScript snippet that tracks page views, sessions, UTM parameters, and cross-domain attribution automatically.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-white/5 rounded text-xs text-white/40">Page Views</span>
                                        <span className="px-2 py-1 bg-white/5 rounded text-xs text-white/40">Sessions</span>
                                        <span className="px-2 py-1 bg-white/5 rounded text-xs text-white/40">UTM Params</span>
                                        <span className="px-2 py-1 bg-white/5 rounded text-xs text-white/40">Cross-Domain</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Webhooks */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.05 }}
                                className="lg:col-span-1 group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0D] p-6 hover:border-blue-500/30 transition-all"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                                        <Webhook className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <h3 className="text-lg font-medium text-white/90 mb-2">Webhooks</h3>
                                    <p className="text-sm text-white/50">
                                        Real-time notifications with HMAC signatures and automatic retries.
                                    </p>
                                </div>
                            </motion.div>

                            {/* REST API */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="lg:col-span-1 group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0D] p-6 hover:border-emerald-500/30 transition-all"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                                        <Key className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <h3 className="text-lg font-medium text-white/90 mb-2">REST API</h3>
                                    <p className="text-sm text-white/50">
                                        Full programmatic access with API keys and OAuth 2.0.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Short Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="lg:col-span-1 group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0D] p-6 hover:border-purple-500/30 transition-all"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                                        <Link2 className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <h3 className="text-lg font-medium text-white/90 mb-2">Short Links</h3>
                                    <p className="text-sm text-white/50">
                                        Custom domains, A/B testing, and geo targeting built-in.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Custom Domains - Large Card (2 cols on lg) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="sm:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0D] p-6 hover:border-orange-500/30 transition-all"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                                        <Globe className="w-5 h-5 text-orange-400" />
                                    </div>
                                    <h3 className="text-lg font-medium text-white/90 mb-2">Custom Domains</h3>
                                    <p className="text-sm text-white/50 mb-4">
                                        Use your own domain for short links via Cloudflare Workers. Full SSL support and easy setup with our documentation.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-white/5 rounded text-xs text-white/40">Cloudflare Workers</span>
                                        <span className="px-2 py-1 bg-white/5 rounded text-xs text-white/40">SSL/TLS</span>
                                        <span className="px-2 py-1 bg-white/5 rounded text-xs text-white/40">Pro & Business</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Zapier */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 }}
                                className="lg:col-span-1 group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0D] p-6 hover:border-yellow-500/30 transition-all"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                                        <Zap className="w-5 h-5 text-yellow-400" />
                                    </div>
                                    <h3 className="text-lg font-medium text-white/90 mb-2">Zapier</h3>
                                    <p className="text-sm text-white/50">
                                        Connect to 5,000+ apps without code.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Analytics Export */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="lg:col-span-1 group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0D] p-6 hover:border-indigo-500/30 transition-all"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                                        <BarChart3 className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <h3 className="text-lg font-medium text-white/90 mb-2">Analytics Export</h3>
                                    <p className="text-sm text-white/50">
                                        Export data to your BI tools in CSV or JSON.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Data Sync - spans 2 cols to fill the row */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35 }}
                                className="sm:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0D] p-6 hover:border-pink-500/30 transition-all"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4">
                                        <Database className="w-5 h-5 text-pink-400" />
                                    </div>
                                    <h3 className="text-lg font-medium text-white/90 mb-2">Data Sync</h3>
                                    <p className="text-sm text-white/50">
                                        Sync attribution data with your CRM. Keep your sales team updated with real-time lead information.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <CTA />
            </main>

            <Footer />
        </>
    )
}
