// src/components/home/Hero.tsx
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { APP_URL } from '@/lib/constants'
import { AnimatedBorderButton } from '@/components/ui/moving-border'
import { UnicornEffect } from '@/components/UnicornEffect'

const features = [
    'A/B Testing',
    'Deep Links',
    'Geo Targeting',
    'Device Targeting',
    'Link Cloaking',
    'AI Chat',
    'White-label',
    'Customer Journey',
    'Revenue Attribution',
]

export const Hero = () => {
    return (
        <section className="relative pb-16 sm:pb-0 sm:min-h-screen flex flex-col items-center justify-start text-center bg-black overflow-hidden">
            {/* Unicorn Studio Effect Background */}
            <div className="absolute inset-0 z-0" style={{ height: '100%' }}>
                <UnicornEffect
                    projectId="JtvvoAbLWNMzlkLcKTRz"
                    className="w-full h-full"
                />
            </div>

            {/* Text Content */}
            <div className="relative z-20 w-full max-w-6xl mx-auto px-5 sm:px-6 pt-28 sm:pt-28 pb-4 sm:pb-12">
                {/* Tag/Badge — hidden on mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hidden sm:block mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        NOVO: Atribuição de Múltiplas Fontes
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-[2.5rem] leading-[1.08] font-bold text-left sm:text-center sm:text-5xl md:text-6xl lg:text-7xl sm:font-light sm:leading-[1.1] tracking-tight"
                    style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)' }}
                >
                    <span className="text-white">Rastreie cada </span>
                    <span className="text-white/90">dólar</span>
                    <br />
                    <span className="text-white">até </span>
                    <span className="text-white/90">sua origem.</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4 sm:mt-6 max-w-2xl sm:mx-auto text-base leading-relaxed sm:text-lg text-white/70 text-left sm:text-center"
                    style={{ textShadow: '0 2px 15px rgba(0,0,0,0.7), 0 4px 30px rgba(0,0,0,0.5)' }}
                >
                    Saiba exatamente quais canais de marketing geram receita.
                    Pare de adivinhar. Comece a otimizar.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-6 sm:mt-10 flex items-center sm:justify-center"
                >
                    <AnimatedBorderButton as="a" href={`${APP_URL}/auth?mode=signup`} className="px-8 py-4 text-sm tracking-widest uppercase">
                        COMECE GRÁTIS
                        <ArrowRight className="w-4 h-4" />
                    </AnimatedBorderButton>
                </motion.div>
            </div>

            {/* Dashboard Preview */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative z-20 w-full mt-12 sm:mt-0 px-3 sm:px-0 sm:max-w-[90vw] lg:max-w-[80vw] xl:max-w-[75vw] mx-auto"
            >
                <div
                    className="relative overflow-hidden rounded-xl"
                    style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 80px rgba(100,60,200,0.08)' }}
                >
                    {/* Desktop image */}
                    <img
                        src="/Desktop.png"
                        alt="Revenify Dashboard - Revenue Attribution Analytics"
                        className="hidden sm:block w-full h-auto object-cover object-top"
                        loading="eager"
                        decoding="async"
                    />
                    {/* Mobile image */}
                    <img
                        src="/Mobile.png"
                        alt="Revenify Dashboard"
                        className="sm:hidden w-full h-auto object-cover object-top"
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </motion.div>

            {/* Bottom gradient fade */}
            <div
                className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none"
                style={{ height: '30%', background: 'linear-gradient(to top, #000000 0%, #000000 25%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0) 100%)' }}
            />

            {/* Animated Feature Marquee Strip — in flow, not absolute */}
            <div className="relative z-40 w-full overflow-hidden bg-black">
                <div className="relative py-3 sm:py-4">
                    {/* Side gradient fades */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #000000, transparent)' }} />
                    <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #000000, transparent)' }} />

                    {/* Scrolling content (duplicated for seamless loop) */}
                    <div className="flex whitespace-nowrap" style={{ animation: 'marquee 25s linear infinite', willChange: 'transform', backfaceVisibility: 'hidden' }}>
                        {[0, 1].map((i) => (
                            <div key={i} className="flex items-center shrink-0">
                                {features.map((feature) => (
                                    <span key={`${i}-${feature}`} className="flex items-center">
                                        <span className="text-sm sm:text-base font-semibold tracking-tight text-white/60 mx-4 sm:mx-6">{feature}</span>
                                        <span className="text-white/20 text-xs">●</span>
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
        </section>
    )
}
