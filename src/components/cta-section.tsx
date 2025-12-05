import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { APP_URL } from '@/lib/constants'

export default function CTASection() {
    return (
        <section className="py-24 sm:py-32 bg-blue-600">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        Ready to track your revenue?
                    </h2>
                    <p className="mt-6 text-xl text-blue-100">
                        Join 1,000+ companies already using Revenify to optimize their
                        marketing spend.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" variant="secondary" asChild>
                            <a href={`${APP_URL}/signup`}>
                                Start Free Trial
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="border-white text-white hover:bg-white/10 bg-transparent"
                            asChild
                        >
                            <Link to="/pricing">View Pricing</Link>
                        </Button>
                    </div>

                    <p className="mt-6 text-sm text-blue-100">
                        No credit card required • 14-day free trial • Cancel anytime
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
