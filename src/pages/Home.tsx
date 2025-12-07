import { SEO } from '@/components/SEO'
import HeroSection from '@/components/hero-section'
import StatsSection from '@/components/stats-section'
import FeaturesSection from '@/components/features-section'
import HowItWorks from '@/components/how-it-works'
import TestimonialsSection from '@/components/testimonials-section'
import CTASection from '@/components/cta-section'
import FooterSection from '@/components/footer-section'

export default function Home() {
    return (
        <>
            <SEO />
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
            <HowItWorks />
            <TestimonialsSection />
            <CTASection />
            <FooterSection />
        </>
    )
}
