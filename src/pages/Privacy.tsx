import { motion } from 'framer-motion'
import { SEO } from '@/components/SEO'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CONTACT_EMAIL } from '@/lib/constants'

const sections = [
    { id: 'information', title: '1. Information We Collect' },
    { id: 'how-we-use', title: '2. How We Use Your Information' },
    { id: 'data-sharing', title: '3. Data Sharing' },
    { id: 'data-security', title: '4. Data Security' },
    { id: 'your-rights', title: '5. Your Rights' },
    { id: 'cookies', title: '6. Cookies' },
    { id: 'changes', title: '7. Policy Changes' },
    { id: 'contact', title: '8. Contact' },
]

export default function Privacy() {
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
                title="Privacy Policy"
                description="Learn how Revenify collects, uses, and protects your data. We are committed to your privacy and GDPR/CCPA compliance."
                url="https://revenify.co/privacy"
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
                                    <span className="text-white/90">Privacy </span>
                                    <span className="text-white/50 italic">Policy</span>
                                </h1>
                                <p className="mt-4 text-sm text-white/40">
                                    Last updated: December 2024
                                </p>

                                <div className="mt-12 space-y-12">
                                    <p className="text-white/60">
                                        At Revenify, we take your privacy seriously. This Privacy Policy explains how 
                                        we collect, use, disclose, and protect your information when you use our platform.
                                    </p>

                                    <section id="information">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            1. Information We Collect
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p><span className="text-white/70">Personal Information:</span> Name, email address, company name, and billing information when creating an account.</p>
                                            <p><span className="text-white/70">Usage Data:</span> Information about how you use our platform, including pages visited, features used, and time spent.</p>
                                            <p><span className="text-white/70">Device Information:</span> IP address, browser type, operating system, and device identifiers.</p>
                                            <p><span className="text-white/70">Tracking Data:</span> Data collected through our tracking pixel on your websites, including visitor behavior and conversion events.</p>
                                        </div>
                                    </section>

                                    <section id="how-we-use">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            2. How We Use Your Information
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p>We use the information we collect to:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Provide, maintain, and improve our services</li>
                                                <li>Process transactions and send related information</li>
                                                <li>Send administrative information, updates, and security alerts</li>
                                                <li>Respond to your comments, questions, and requests</li>
                                                <li>Analyze usage patterns to improve user experience</li>
                                                <li>Detect, prevent, and resolve technical issues</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="data-sharing">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            3. Data Sharing
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p>We do not sell your personal information. We may share your information with:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li><span className="text-white/70">Service Providers:</span> Third-party companies that help us operate our platform</li>
                                                <li><span className="text-white/70">Legal Requirements:</span> When required by law or to protect our rights</li>
                                                <li><span className="text-white/70">Business Transfers:</span> In connection with merger, acquisition, or sale of assets</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="data-security">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            4. Data Security
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p>We implement appropriate technical and organizational measures to protect your data:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>End-to-end encryption for data in transit</li>
                                                <li>Encryption at rest for stored data</li>
                                                <li>Regular security audits and penetration testing</li>
                                                <li>Access controls and authentication measures</li>
                                                <li>SOC 2 Type II compliance</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="your-rights">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            5. Your Rights
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p>Depending on your location, you may have the following rights:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li><span className="text-white/70">Access:</span> Request a copy of your personal data</li>
                                                <li><span className="text-white/70">Rectification:</span> Request correction of inaccurate data</li>
                                                <li><span className="text-white/70">Deletion:</span> Request deletion of your data</li>
                                                <li><span className="text-white/70">Portability:</span> Request transfer of your data</li>
                                                <li><span className="text-white/70">Objection:</span> Object to certain processing activities</li>
                                            </ul>
                                            <p>We comply with GDPR, CCPA, and LGPD requirements.</p>
                                        </div>
                                    </section>

                                    <section id="cookies">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            6. Cookies
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p>We use cookies and similar technologies to:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Keep you signed in</li>
                                                <li>Remember your preferences</li>
                                                <li>Understand how you use our platform</li>
                                                <li>Improve our services</li>
                                            </ul>
                                            <p>You can control cookies through your browser settings.</p>
                                        </div>
                                    </section>

                                    <section id="changes">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            7. Changes to Privacy Policy
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p>
                                                We may update this Privacy Policy from time to time. We will notify you of any 
                                                changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="contact">
                                        <h2 className="text-xl font-medium text-white/90 mb-4">
                                            8. Contact
                                        </h2>
                                        <div className="space-y-3 text-white/50 text-sm">
                                            <p>
                                                If you have any questions about this Privacy Policy, please contact us at:{' '}
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
