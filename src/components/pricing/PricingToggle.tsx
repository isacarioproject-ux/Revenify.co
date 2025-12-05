import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PricingToggleProps {
    interval: 'monthly' | 'yearly'
    onIntervalChange: (interval: 'monthly' | 'yearly') => void
}

export default function PricingToggle({ interval, onIntervalChange }: PricingToggleProps) {
    return (
        <div className="flex items-center justify-center gap-4">
            <span
                className={cn(
                    'text-sm font-medium transition-colors',
                    interval === 'monthly' ? 'text-gray-900' : 'text-gray-500'
                )}
            >
                Monthly
            </span>

            <button
                onClick={() => onIntervalChange(interval === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
                <motion.span
                    layout
                    className="inline-block h-4 w-4 rounded-full bg-white shadow-sm"
                    animate={{
                        x: interval === 'yearly' ? 24 : 4,
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
            </button>

            <div className="flex items-center gap-2">
                <span
                    className={cn(
                        'text-sm font-medium transition-colors',
                        interval === 'yearly' ? 'text-gray-900' : 'text-gray-500'
                    )}
                >
                    Yearly
                </span>
                {interval === 'yearly' && (
                    <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                        Save 20%
                    </span>
                )}
            </div>
        </div>
    )
}
