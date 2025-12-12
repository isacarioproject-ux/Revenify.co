import { motion } from 'framer-motion'
import { SEO } from '@/components/SEO'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CONTACT_EMAIL } from '@/lib/constants'

const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'description', title: '2. Service Description' },
    { id: 'accounts', title: '3. User Accounts' },
    { id: 'acceptable-use', title: '4. Acceptable Use' },
    { id: 'payment', title: '5. Payment Terms' },
    { id: 'intellectual-property', title: '6. Intellectual Property' },
    { id: 'limitation', title: '7. Limitation of Liability' },
    { id: 'termination', title: '8. Termination' },
    { id: 'governing-law', title: '9. Governing Law' },
    { id: 'contact', title: '10. Contact' },
]

export default function Terms() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = 100
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
    }

    return (
        <>
            <SEO
                title="Terms of Service"
                description="Read Revenify's terms of service. Understand your rights and responsibilities when using our revenue attribution platform."
                url="https://revenify.co/terms"
            />

            <Header />

            <main className="bg-black min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-16">
                <div className="mx-auto max-w-4xl px-4 sm:px-6">
                    <div className="lg:grid lg:grid-cols-4 lg:gap-12">
                        {/* Sidebar */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-32">
                                <h3 className="text-sm font-medium text-white/80 mb-4">
                                    Contents
                                </h3>
                                <nav className="space-y-2">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className="block text-sm text-white/40 hover:text-white/70 transition-colors text-left"
                                        >
                                            {section.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Content */}
                        <div className="lg:col-span-3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/50 mb-6">
                                    LEGAL
                                </span>
                                <h1 className="text-4xl lg:text-5xl font-light">
                                    <span className="text-white/90">Terms of </span>
                                    <span className="text-white/50 italic">Service</span>
                                </h1>
                                <p className="mt-4 text-sm text-white/40">
                                    Last updated: December 2024
                                </p>

                                <div className="mt-12 space-y-12">
                                    <p className="text-white/60">
                                        Welcome to Revenify. By using our services, you agree to be bound by these Terms of Service.
                                    </p>

                                    <section id="acceptance">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            1. Acceptance of Terms
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p>
                                                By accessing or using Revenify's services, you agree to be bound by these Terms of Service 
                                                and all applicable laws and regulations. If you do not agree with any of these terms, 
                                                you are prohibited from using or accessing our services.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="description">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            2. Service Description
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p>
                                                Revenify provides a revenue attribution analytics platform that helps businesses track 
                                                and attribute revenue to marketing channels. Our services include:
                                            </p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Website visitor tracking via our JavaScript pixel</li>
                                                <li>Revenue attribution analytics and reporting</li>
                                                <li>Lead capture and conversion tracking</li>
                                                <li>UTM parameter management</li>
                                                <li>API access for integrations</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="accounts">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            3. User Accounts
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p>When creating an account with us, you must:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Provide accurate, current, and complete information</li>
                                                <li>Maintain the security of your password</li>
                                                <li>Accept responsibility for all activities on your account</li>
                                                <li>Notify us immediately of any unauthorized access</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="acceptable-use">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            4. Acceptable Use
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p>You agree not to:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Use our services for illegal purposes</li>
                                                <li>Attempt to gain unauthorized access to our systems</li>
                                                <li>Interfere with or disrupt our services</li>
                                                <li>Collect data from other users without consent</li>
                                                <li>Use our services to send spam or malicious content</li>
                                                <li>Reverse engineer or attempt to extract source code</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="payment">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            5. Payment Terms
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p><span className="text-white/70">Billing:</span> Paid plans are billed monthly or annually in advance.</p>
                                            <p><span className="text-white/70">Free Trial:</span> We offer a 14-day free trial on paid plans. No credit card required.</p>
                                            <p><span className="text-white/70">Cancellation:</span> You can cancel your subscription at any time. Access continues until the end of the billing period.</p>
                                            <p><span className="text-white/70">Refunds:</span> We offer refunds within 30 days of purchase if you're not satisfied.</p>
                                            <p><span className="text-white/70">Price Changes:</span> We may change prices with 30 days notice.</p>
                                        </div>
                                    </section>

                                    <section id="intellectual-property">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            6. Intellectual Property
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p>
                                                Revenify and its original content, features, and functionality are owned by Revenify 
                                                and are protected by international copyright, trademark, and other intellectual property laws.
                                            </p>
                                            <p>
                                                You retain ownership of all data you upload to our platform. You grant us a license to 
                                                use this data solely to provide our services to you.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="limitation">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            7. Limitation of Liability
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p>
                                                To the maximum extent permitted by law, Revenify shall not be liable for any indirect, 
                                                incidental, special, consequential, or punitive damages, including loss of profits, data, 
                                                or other intangible losses.
                                            </p>
                                            <p>
                                                Our total liability for any claims under these terms shall not exceed the amount 
                                                you paid us in the last 12 months.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="termination">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            8. Termination
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p>
                                                We may terminate or suspend your account immediately, without prior notice, for any 
                                                reason, including violation of these Terms. Upon termination:
                                            </p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Your right to use our services will cease immediately</li>
                                                <li>You may request a copy of your data within 30 days</li>
                                                <li>We will delete your data after 90 days unless legally required to retain it</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="governing-law">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            9. Governing Law
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p>
                                                These Terms shall be governed and construed in accordance with the laws of Brazil, 
                                                without regard to its conflict of law provisions.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="contact">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            10. Contact
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p>
                                                If you have any questions about these Terms, please contact us at:{' '}
                                                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/70 hover:text-white underline">
                                                    {CONTACT_EMAIL}
                                                </a>
                                            </p>
                                        </div>
                                    </section>
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
