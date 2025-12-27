import { SEO } from '@/components/SEO'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { 
    Hero, 
    PainSection, 
    SolutionSection, 
    HowItWorks, 
    AdvancedFeatures,
    FeatureCards, 
    APIIntegration, 
    Dashboard, 
    Comparison, 
    Testimonials, 
    CTA 
} from '@/components/home'

export default function Home() {
    return (
        <>
            <SEO />
            <Header />
            <main>
                <Hero />
                <PainSection />
                <SolutionSection />
                <HowItWorks />
                <AdvancedFeatures />
                <APIIntegration />
                <FeatureCards />
                <Dashboard />
                <Comparison />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
        </>
    )
}
