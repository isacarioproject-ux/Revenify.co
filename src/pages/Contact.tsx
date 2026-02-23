import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock } from 'lucide-react'
import { toast } from 'sonner'
import { SEO } from '@/components/SEO'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { supabase } from '@/lib/supabase'
import { CONTACT_EMAIL } from '@/lib/constants'

interface ContactFormData {
    name: string
    email: string
    company: string
    message: string
}

export default function Contact() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        company: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            if (!supabase) {
                throw new Error('Service unavailable')
            }

            const { error } = await supabase
                .from('contact_submissions')
                .insert([formData] as any)

            if (error) throw error

            toast.success('Message sent successfully! We\'ll get back to you soon.')
            setFormData({ name: '', email: '', company: '', message: '' })
        } catch (error) {
            console.error('Error submitting form:', error)
            toast.error('Failed to send message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <SEO
                title="Contact Revenify — Get Help with Revenue Attribution & Link Tracking"
                description="Questions about Revenify? Contact our team for support with pixel installation, API integration, custom domain setup, or enterprise plans. We respond within 24 hours."
                url="https://revenify.co/contact"
            />

            <Header />

            <main className="bg-black min-h-screen">
                {/* Hero */}
                <section className="pt-32 pb-8 sm:pt-36 sm:pb-12">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6"
                            >
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">
                                    CONTACT
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl lg:text-5xl font-light"
                            >
                                <span className="text-white/90">Get in </span>
                                <span className="text-white/50 italic">touch</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-6 text-white/40 max-w-lg mx-auto"
                            >
                                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-12">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="lg:col-span-2"
                            >
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border border-white/10 bg-neutral-800 px-4 py-3 text-white placeholder-white/30 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border border-white/10 bg-neutral-800 px-4 py-3 text-white placeholder-white/30 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-white/10 bg-neutral-800 px-4 py-3 text-white placeholder-white/30 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
                                            placeholder="Acme Inc."
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-white/10 bg-neutral-800 px-4 py-3 text-white placeholder-white/30 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 resize-none"
                                            placeholder="How can we help?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-8 py-3 bg-neutral-800 border border-white/10 rounded-lg text-white font-medium hover:bg-neutral-700 transition-colors disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-6"
                            >
                                <div className="bg-[#0D0D0D] border border-white/10 rounded-2xl p-6">
                                    <h3 className="text-lg font-medium text-white mb-6">
                                        Contact Information
                                    </h3>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="rounded-lg bg-white/5 p-2">
                                                <Mail className="h-5 w-5 text-white/50" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-white/80">Email</p>
                                                <a
                                                    href={`mailto:${CONTACT_EMAIL}`}
                                                    className="text-sm text-white/50 hover:text-white/70"
                                                >
                                                    {CONTACT_EMAIL}
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="rounded-lg bg-white/5 p-2">
                                                <MapPin className="h-5 w-5 text-white/50" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-white/80">Location</p>
                                                <p className="text-sm text-white/50">
                                                    Manaus, Amazonas<br />
                                                    Brazil
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="rounded-lg bg-white/5 p-2">
                                                <Clock className="h-5 w-5 text-white/50" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-white/80">Response Time</p>
                                                <p className="text-sm text-white/50">
                                                    Within 24 hours
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
