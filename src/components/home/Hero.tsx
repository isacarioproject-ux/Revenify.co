// src/components/home/Hero.tsx
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { APP_URL } from '@/lib/constants'
import { AnimatedBorderButton } from '@/components/ui/moving-border'


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

            {/* Text Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-3 sm:px-8 xl:px-12 pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-24">
                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-[2.5rem] leading-[1.15] font-bold italic text-left sm:not-italic sm:text-left sm:text-[4rem] md:text-[5rem] lg:text-[6.5rem] sm:font-bold sm:leading-[1.05] tracking-tight sm:tracking-[-0.03em] max-w-4xl"
                    style={{ textShadow: '0 4px 60px rgba(0,0,0,0.5)' }}
                >
                    <span className="text-white">Rastreie cada </span>
                    <span className="text-white/90">dólar </span>
                    <span className="text-white">até </span>
                    <span className="text-white/90">sua origem.</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 sm:mt-10 max-w-2xl sm:max-w-[36rem] text-[1rem] leading-relaxed sm:text-[1.3rem] text-white/60 sm:text-white/60 text-left font-medium sm:font-normal"
                >
                    Saiba exatamente quais canais de marketing geram receita.
                    Pare de adivinhar. Comece a melhorar.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 sm:mt-14 flex items-center justify-start sm:justify-start"
                >
                    <AnimatedBorderButton as="a" href={`${APP_URL}/auth?mode=signup`} className="px-8 py-3.5 text-xs sm:px-10 sm:py-5 sm:text-[0.95rem] tracking-[0.15em] sm:tracking-[0.2em] font-semibold uppercase">
                        COMECE GRÁTIS
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </AnimatedBorderButton>
                </motion.div>
            </div>

            {/* Dashboard Preview & Marquee Constrained */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative z-20 w-full mt-12 sm:mt-0 px-3 sm:px-8 xl:px-12 max-w-7xl mx-auto"
            >
                {/* Dashboard Outer Glowing Border Container (Animated Conic Gradient) */}
                <div className="relative rounded-[14px] pt-[2px] pr-[2px] shadow-[30px_-30px_80px_-20px_rgba(26,75,140,0.5)] bg-[#050505] overflow-hidden">
                    {/* Animated moving gradient, similar to buttons but constrained to top/right exposed padding */}
                    <motion.div
                        className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#020617_0%,#3b82f6_50%,#020617_100%)] opacity-100 z-10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    <div
                        className="relative overflow-hidden rounded-[13px] bg-black z-20"
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
                </div>
            </motion.div>

            {/* Bottom gradient fade — Section Level (z-30) - covers the bottom of the dashboard image to create a smooth transition */}
            <div
                className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none"
                style={{ height: '250px', background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)' }}
            />

            {/* Animated Feature Marquee Strip — (z-40) - Sitting perfectly on top of the section gradient, horizontally constrained to exactly match the dashboard image width */}
            <div className="absolute bottom-6 left-0 right-0 z-40 w-full pointer-events-none">
                <div className="w-full max-w-7xl mx-auto px-3 sm:px-8 xl:px-12">
                    <div className="relative overflow-hidden bg-transparent pointer-events-auto">
                        <div className="relative py-3 sm:py-4">
                            {/* Side gradient fades specific to the marquee text */}
                            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, rgb(0,0,0), transparent)' }} />
                            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, rgb(0,0,0), transparent)' }} />

                            {/* Scrolling content */}
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
