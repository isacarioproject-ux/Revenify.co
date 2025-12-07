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
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'description', title: '2. Description of Service' },
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
                title="Terms of Service"
                description="Read Revenify's terms of service. Understand your rights and responsibilities when using our revenue attribution platform."
                url="https://revenify.co/terms"
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
                                    Terms of Service
                                </h1>
                                <p className="mt-4 text-sm text-gray-500">
                                    Last updated: December 2024
                                </p>

                                <div className="mt-12 prose prose-gray max-w-none">
                                    <p className="text-lg text-gray-600">
                                        Welcome to Revenify. By using our services, you agree to be bound by these Terms of Service.
                                    </p>

                                    <section id="acceptance" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            1. Acceptance of Terms
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
                                            <p>
                                                By accessing or using Revenify's services, you agree to be bound by these Terms of Service 
                                                and all applicable laws and regulations. If you do not agree with any of these terms, 
                                                you are prohibited from using or accessing our services.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="description" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            2. Description of Service
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
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

                                    <section id="accounts" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            3. User Accounts
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
                                            <p>When you create an account with us, you must:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Provide accurate, current, and complete information</li>
                                                <li>Maintain the security of your password</li>
                                                <li>Accept responsibility for all activities under your account</li>
                                                <li>Notify us immediately of any unauthorized access</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="acceptable-use" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            4. Acceptable Use
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
                                            <p>You agree not to:</p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Use our services for any illegal purposes</li>
                                                <li>Attempt to gain unauthorized access to our systems</li>
                                                <li>Interfere with or disrupt our services</li>
                                                <li>Collect data from other users without consent</li>
                                                <li>Use our services to send spam or malicious content</li>
                                                <li>Reverse engineer or attempt to extract source code</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="payment" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            5. Payment Terms
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
                                            <p><strong>Billing:</strong> Paid plans are billed monthly or annually in advance.</p>
                                            <p><strong>Free Trial:</strong> We offer a 14-day free trial on paid plans. No credit card required.</p>
                                            <p><strong>Cancellation:</strong> You may cancel your subscription at any time. Access continues until the end of the billing period.</p>
                                            <p><strong>Refunds:</strong> We offer refunds within 30 days of purchase if you're not satisfied.</p>
                                            <p><strong>Price Changes:</strong> We may change prices with 30 days notice.</p>
                                        </div>
                                    </section>

                                    <section id="intellectual-property" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            6. Intellectual Property
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
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

                                    <section id="limitation" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            7. Limitation of Liability
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
                                            <p>
                                                To the maximum extent permitted by law, Revenify shall not be liable for any indirect, 
                                                incidental, special, consequential, or punitive damages, including loss of profits, data, 
                                                or other intangible losses.
                                            </p>
                                            <p>
                                                Our total liability for any claims under these terms shall not exceed the amount 
                                                you paid us in the past 12 months.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="termination" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            8. Termination
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
                                            <p>
                                                We may terminate or suspend your account immediately, without prior notice, for any 
                                                reason, including breach of these Terms. Upon termination:
                                            </p>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Your right to use our services will cease immediately</li>
                                                <li>You may request a copy of your data within 30 days</li>
                                                <li>We will delete your data after 90 days unless legally required to retain it</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="governing-law" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            9. Governing Law
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
                                            <p>
                                                These Terms shall be governed by and construed in accordance with the laws of Brazil, 
                                                without regard to its conflict of law provisions.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="contact" className="mt-12">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            10. Contact
                                        </h2>
                                        <div className="mt-4 space-y-4 text-gray-600">
                                            <p>
                                                If you have any questions about these Terms, please contact us at:{' '}
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
