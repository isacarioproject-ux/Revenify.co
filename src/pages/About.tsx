import { motion } from 'framer-motion'
import { Target, BarChart3, Users, Zap, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CTA } from '@/components/home/CTA'
import { APP_URL } from '@/lib/constants'
import { AnimatedBorderButton } from '@/components/ui/moving-border'

const values = [
    {
        icon: Target,
        title: 'Transparency',
        description: 'Clear and honest data you can trust. No hidden metrics.',
    },
    {
        icon: BarChart3,
        title: 'Data-Driven',
        description: 'Every decision backed by real numbers. We believe in the power of accurate analysis.',
    },
    {
        icon: Users,
        title: 'Customer First',
        description: 'Your success is our success. We build features that solve real problems.',
    },
    {
        icon: Zap,
        title: 'Innovation',
        description: 'Constantly improving our platform to deliver the best insights.',
    },
]

const timeline = [
    { year: '2025', title: 'The Idea', description: 'We started building a platform that connects every revenue dollar to its original source.' },
    { year: '2025', title: 'Launch', description: 'Revenify officially launched with the mission to democratize revenue attribution.' },
    { year: '2026', title: '10K Goal', description: 'Our goal is to help 10,000 businesses track their revenue accurately.' },
    { year: '2026', title: 'The Future', description: 'Expanding with AI insights, advanced models, and deeper integrations.' },
]

export default function About() {
    return (
        <>
            <SEO
                title="About Revenify — The Revenue Attribution Platform for Modern Marketers"
                description="Revenify was built for marketers, founders, and creators who need to know exactly which channel drives revenue. From vibe coders building with AI tools to agencies managing multi-channel campaigns."
                url="https://revenify.co/about"
            />

            <Header />

            <main className="bg-black min-h-screen">
                {/* Hero */}
                <section className="pt-32 pb-16 sm:pt-36 sm:pb-20">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6"
                            >
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">
                                    ABOUT US
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl lg:text-5xl font-light"
                            >
                                <span className="text-white/90">We're on a mission to </span>
                                <span className="text-white/50 italic">democratize analytics</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-6 text-white/40 max-w-lg mx-auto"
                            >
                                Every business deserves to know exactly where their revenue comes from.
                                We're building the future of revenue attribution.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-10"
                            >
                                <AnimatedBorderButton as="a" href={APP_URL} className="px-8 py-4 text-sm tracking-widest uppercase">
                                    Start Free
                                    <ArrowRight className="w-4 h-4" />
                                </AnimatedBorderButton>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Mission */}
                <section className="py-20">
                    <div className="mx-auto max-w-4xl px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">
                                OUR MISSION
                            </span>

                            <h2 className="mt-6 text-3xl lg:text-4xl font-light">
                                <span className="text-white/90">Making revenue attribution </span>
                                <span className="text-white/50 italic">accessible to everyone</span>
                            </h2>

                            <p className="mt-6 text-white/40 max-w-2xl mx-auto">
                                We believe understanding where your revenue comes from shouldn't
                                require a team of data scientists or enterprise budgets.
                                Our mission is to make revenue attribution accessible, accurate, and
                                actionable for businesses of all sizes.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Timeline - Minimalista */}
                <section className="py-20">
                    <div className="mx-auto max-w-4xl px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">
                                OUR JOURNEY
                            </span>
                            <h2 className="mt-6 text-3xl lg:text-4xl font-light">
                                <span className="text-white/90">From idea to </span>
                                <span className="text-white/50 italic">impact</span>
                            </h2>
                        </motion.div>

                        <div className="space-y-8">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-6"
                                >
                                    <div className="flex flex-col items-center">
                                        <div className="w-3 h-3 rounded-full bg-white/20" />
                                        {index < timeline.length - 1 && (
                                            <div className="w-px h-full bg-white/10 mt-2" />
                                        )}
                                    </div>
                                    <div className="pb-8">
                                        <span className="text-xs text-white/30">{item.year}</span>
                                        <h3 className="text-lg font-medium text-white/80 mt-1">{item.title}</h3>
                                        <p className="text-sm text-white/40 mt-2">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-20">
                    <div className="mx-auto max-w-4xl px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">
                                OUR VALUES
                            </span>
                            <h2 className="mt-6 text-3xl lg:text-4xl font-light">
                                <span className="text-white/90">What </span>
                                <span className="text-white/50 italic">drives us</span>
                            </h2>
                        </motion.div>

                        <div className="grid gap-4 md:grid-cols-2">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 bg-[#0D0D0D] border border-white/10 rounded-2xl"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                                        <value.icon className="w-5 h-5 text-white/50" />
                                    </div>
                                    <h3 className="text-lg font-medium text-white/80">{value.title}</h3>
                                    <p className="text-sm text-white/40 mt-2">{value.description}</p>
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
