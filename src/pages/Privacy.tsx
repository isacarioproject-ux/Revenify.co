import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import FooterSection from '@/components/footer-section'
import { APP_URL, CONTACT_EMAIL } from '@/lib/constants'

const menuItems = [
    { name: 'Integrations', to: '/integrations' },
    { name: 'Blog', to: '/blog' },
    { name: 'Docs', to: '/docs' },
    { name: 'Pricing', to: '/pricing' },
]

const sections = [
    { id: 'information', title: '1. Information We Collect' },
    { id: 'how-we-use', title: '2. How We Use Your Information' },
    { id: 'data-sharing', title: '3. Data Sharing' },
    { id: 'data-security', title: '4. Data Security' },
    { id: 'your-rights', title: '5. Your Rights' },
    { id: 'cookies', title: '6. Cookies' },
    { id: 'changes', title: '7. Changes to Privacy Policy' },
    { id: 'contact', title: '8. Contact Us' },
]

export default function Privacy() {
    const [menuState, setMenuState] = useState(false)

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

            {/* Header */}
            <header>
                <nav className="fixed z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <Link to="/" className="flex items-center">
                                <Logo />
                            </Link>

                            <div className="hidden lg:flex lg:items-center lg:gap-8">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            <div className="hidden lg:flex lg:items-center lg:gap-4">
                                <Button variant="ghost" size="sm" asChild>
                                    <a href={APP_URL}>Sign in</a>
                                </Button>
                                <Button size="sm" asChild>
                                    <a href={APP_URL}>Start Free</a>
                                </Button>
                            </div>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                className="lg:hidden p-2 text-gray-600"
                            >
                                {menuState ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {menuState && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="lg:hidden border-t border-gray-200 bg-white px-4 py-4"
                        >
                            <div className="space-y-2">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        onClick={() => setMenuState(false)}
                                        className="block py-2 text-base font-medium text-gray-600 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </nav>
            </header>

            <main className="pt-24 pb-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-4 lg:gap-12">
                        {/* Sidebar */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-24">
                                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                                    Table of Contents
                                </h3>
                                <nav className="space-y-2">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className="block text-sm text-gray-600 hover:text-blue-600 transition-colors text-left"
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
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                    Privacy Policy
                                </h1>
                                <p className="mt-4 text-sm text-gray-500">
                                    Last updated: December 2024
                                </p>

                                <div className="mt-12 prose prose-gray max-w-none">
                                    <p className="text-lg text-gray-600">
                                        At Revenify, we take your privacy seriously. This Privacy Policy explains how we 
                                        collect, use, disclose, and safeguard your information when you use our platform.
                                    </p>

                                    <section id="information" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            1. Information We Collect
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
                                            <p><strong>Personal Information:</strong> Name, email address, company name, and billing information when you create an account.</p>
                                            <p><strong>Usage Data:</strong> Information about how you use our platform, including pages visited, features used, and time spent.</p>
                                            <p><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</p>
                                            <p><strong>Tracking Data:</strong> Data collected through our tracking pixel on your websites, including visitor behavior and conversion events.</p>
                                        </div>
                                    </section>

                                    <section id="how-we-use" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            2. How We Use Your Information
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
                                            <p>We use the information we collect to:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Provide, maintain, and improve our services</li>
                                                <li>Process transactions and send related information</li>
                                                <li>Send administrative information, updates, and security alerts</li>
                                                <li>Respond to your comments, questions, and requests</li>
                                                <li>Analyze usage patterns to improve user experience</li>
                                                <li>Detect, prevent, and address technical issues</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="data-sharing" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            3. Data Sharing
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
                                            <p>We do not sell your personal information. We may share your information with:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li><strong>Service Providers:</strong> Third-party companies that help us operate our platform (hosting, payment processing, analytics)</li>
                                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="data-security" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            4. Data Security
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
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

                                    <section id="your-rights" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            5. Your Rights
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
                                            <p>Depending on your location, you may have the following rights:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li><strong>Access:</strong> Request a copy of your personal data</li>
                                                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                                                <li><strong>Erasure:</strong> Request deletion of your data</li>
                                                <li><strong>Portability:</strong> Request transfer of your data</li>
                                                <li><strong>Objection:</strong> Object to certain processing activities</li>
                                            </ul>
                                            <p>We comply with GDPR, CCPA, and LGPD requirements.</p>
                                        </div>
                                    </section>

                                    <section id="cookies" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            6. Cookies
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
                                            <p>We use cookies and similar technologies to:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Keep you logged in</li>
                                                <li>Remember your preferences</li>
                                                <li>Understand how you use our platform</li>
                                                <li>Improve our services</li>
                                            </ul>
                                            <p>You can control cookies through your browser settings.</p>
                                        </div>
                                    </section>

                                    <section id="changes" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            7. Changes to Privacy Policy
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
                                            <p>
                                                We may update this Privacy Policy from time to time. We will notify you of any 
                                                changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="contact" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            8. Contact Us
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
                                            <p>
                                                If you have any questions about this Privacy Policy, please contact us at:{' '}
                                                <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:text-blue-700">
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

            <FooterSection />
        </>
    )
}
