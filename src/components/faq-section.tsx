import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
    {
        question: 'What happens after my free trial ends?',
        answer: "Your free trial lasts 14 days. After that, you'll need to choose a paid plan to continue using Revenify. We'll send you reminders before your trial ends.",
    },
    {
        question: 'Can I change plans later?',
        answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate the difference.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and debit cards. Enterprise customers can also pay by invoice.',
    },
    {
        question: 'Is there a long-term contract?',
        answer: 'No! All our plans are month-to-month or annual. You can cancel anytime with no penalties or hidden fees.',
    },
    {
        question: 'What happens if I exceed my event limit?',
        answer: "We'll notify you when you reach 80% of your limit. You can upgrade at any time to increase your limit. We'll never charge overage fees without your approval.",
    },
    {
        question: 'Do you offer discounts for startups or non-profits?',
        answer: 'Yes! We offer special pricing for early-stage startups and non-profit organizations. Contact our sales team for details.',
    },
]

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Can't find the answer you're looking for? Contact our support team.
                    </p>
                </div>

                <dl className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-lg border border-gray-200 bg-white overflow-hidden"
                        >
                            <dt>
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="flex w-full items-start justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-base font-semibold text-gray-900">
                                        {faq.question}
                                    </span>
                                    <span className="ml-6 flex h-7 items-center">
                                        <ChevronDown
                                            className={cn(
                                                'h-5 w-5 text-gray-600 transition-transform duration-200',
                                                openIndex === index && 'rotate-180'
                                            )}
                                        />
                                    </span>
                                </button>
                            </dt>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.dd
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-4">
                                            <p className="text-base text-gray-600">{faq.answer}</p>
                                        </div>
                                    </motion.dd>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
