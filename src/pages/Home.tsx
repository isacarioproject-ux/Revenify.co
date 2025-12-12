import { SEO } from '@/components/SEO'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero, FeatureCards, APIIntegration, Dashboard, Testimonials, CTA } from '@/components/home'

export default function Home() {
    return (
        <>
            <SEO />
            <Header />
            <main>
                <Hero />
                <APIIntegration />
                <FeatureCards />
                <Dashboard />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
        </>
    )
}
