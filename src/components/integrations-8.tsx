import { Button } from '@/components/ui/button'
import { APP_URL } from '@/lib/constants'
import { Key, Webhook, Code2, BarChart3, Zap } from 'lucide-react'

// Logo Stripe completo e correto
const StripeLogo = () => (
    <svg viewBox="0 0 28 28" className="h-7 w-7">
        <rect fill="#635BFF" width="28" height="28" rx="6"/>
        <path fill="#fff" d="M13.3 11.5c0-.8.7-1.1 1.7-1.1 1.5 0 3.5.5 5 1.3V7.9c-1.7-.7-3.3-.9-5-.9-4.1 0-6.8 2.1-6.8 5.7 0 5.5 7.6 4.6 7.6 7 0 .9-.8 1.2-1.9 1.2-1.6 0-3.8-.7-5.5-1.6v3.9c1.9.8 3.7 1.1 5.5 1.1 4.2 0 7-2.1 7-5.7-.1-6-7.6-4.9-7.6-7.1z"/>
    </svg>
)

// Logo Revenify
const RevenifyLogo = () => (
    <svg viewBox="0 0 40 40" className="h-10 w-10">
        <rect fill="#3b82f6" width="40" height="40" rx="8" />
        <path fill="#fff" d="M12 28V12h8c4 0 6 2 6 5s-2 5-6 5h-4v6h-4zm4-10h4c1.5 0 2-.5 2-1.5S21.5 15 20 15h-4v3z" />
    </svg>
)

export default function IntegrationsSection() {
    return (
        <section className="bg-gray-50 py-24 md:py-32">
            <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
                <div className="order-last mt-6 flex flex-col gap-12 md:order-first">
                    <div className="space-y-6">
                        <h2 className="text-balance text-3xl font-semibold text-gray-900 md:text-4xl lg:text-5xl">
                            Powerful Integrations for Revenue Attribution
                        </h2>
                        <p className="text-gray-600">
                            Connect Stripe to track payments, use our REST API for custom integrations, 
                            and receive real-time webhooks for every revenue event.
                        </p>
                        <Button size="sm" asChild>
                            <a href={APP_URL}>Get Started Free</a>
                        </Button>
                    </div>

                    <div className="mt-auto grid grid-cols-[auto_1fr] gap-3">
                        <div className="flex aspect-square size-14 items-center justify-center rounded-full overflow-hidden border shadow-sm">
                            <img src="/testigo1.png" alt="@kleoveY" className="w-full h-full object-cover" />
                        </div>
                        <blockquote>
                            <p className="text-gray-700">"Integration in 2 minutes. Now we see exactly which campaigns drive revenue."</p>
                            <div className="mt-2 flex gap-2 text-sm">
                                <cite className="font-medium text-gray-900">@kleoveY</cite>
                                <span className="text-gray-500">Founder, Revenify</span>
                            </div>
                        </blockquote>
                    </div>
                </div>

                <div className="-mx-6 px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0">
                    <div className="bg-white rounded-2xl border p-3 shadow-lg md:pb-12">
                        <div className="grid grid-cols-2 gap-2">
                            <Integration
                                icon={<StripeLogo />}
                                name="Stripe"
                                description="Auto-track payments and attribute revenue to sources"
                                highlight
                            />
                            <Integration
                                icon={<Key className="h-6 w-6 text-emerald-600" />}
                                name="REST API"
                                description="Full programmatic access with SDK support"
                            />
                            <Integration
                                icon={<Webhook className="h-6 w-6 text-orange-600" />}
                                name="Webhooks"
                                description="Real-time events for leads and revenue"
                            />
                            <Integration
                                icon={<Code2 className="h-6 w-6 text-blue-600" />}
                                name="Pixel Tracking"
                                description="Lightweight JS snippet for visitor tracking"
                            />
                            <Integration
                                icon={<BarChart3 className="h-6 w-6 text-purple-600" />}
                                name="Analytics Export"
                                description="Export data to your BI tools"
                            />
                            <Integration
                                icon={<Zap className="h-6 w-6 text-yellow-600" />}
                                name="Zapier"
                                description="Connect to 5,000+ apps (coming soon)"
                                comingSoon
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Integration = ({ 
    icon, 
    name, 
    description,
    highlight,
    comingSoon
}: { 
    icon: React.ReactNode
    name: string
    description: string
    highlight?: boolean
    comingSoon?: boolean
}) => {
    return (
        <div className={`space-y-4 rounded-lg border p-4 transition-colors cursor-pointer ${
            highlight ? 'bg-[#635BFF]/5 border-[#635BFF]/20 hover:bg-[#635BFF]/10' : 'hover:bg-gray-50'
        } ${comingSoon ? 'opacity-60' : ''}`}>
            <div className="flex size-fit items-center justify-center">{icon}</div>
            <div className="space-y-1">
                <h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
                    {name}
                    {comingSoon && <span className="text-[10px] bg-gray-200 px-1.5 py-0.5 rounded">Soon</span>}
                </h3>
                <p className="text-gray-500 line-clamp-2 text-sm">{description}</p>
            </div>
        </div>
    )
}
