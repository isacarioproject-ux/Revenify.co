import { ArrowRight } from 'lucide-react'
import { APP_URL } from '@/lib/constants'

interface BlogSidebarProps {
    // Company/Customer info (optional)
    companyName?: string | null
    companyLogo?: string | null
    companyWebsite?: string | null
    companyIndustry?: string | null
    companySize?: string | null
    companyFounded?: string | null
    companyAbout?: string | null
}

export function BlogSidebar({
    companyName,
    companyLogo,
    companyWebsite,
    companyIndustry,
    companySize,
    companyFounded,
    companyAbout,
}: BlogSidebarProps) {
    return (
        <aside className="sticky top-24 space-y-6">
            <div className="space-y-4 py-4 p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                {/* Company Logo */}
                {companyLogo && (
                    <div>
                        <img
                            src={companyLogo}
                            alt={companyName || 'Company'}
                            className="h-12 w-12 rounded-full border border-white/10"
                        />
                    </div>
                )}

                {/* About Section */}
                {companyAbout && (
                    <div>
                        <h3 className="text-xs font-semibold text-white uppercase tracking-wide mb-2">
                            About
                        </h3>
                        <p className="text-sm text-white/60 leading-relaxed">
                            {companyAbout}
                        </p>
                    </div>
                )}

                {/* Industry */}
                {companyIndustry && (
                    <div>
                        <h3 className="text-xs font-semibold text-white uppercase tracking-wide mb-2">
                            Industry
                        </h3>
                        <p className="text-sm text-white/60">
                            {companyIndustry}
                        </p>
                    </div>
                )}

                {/* Company Size */}
                {companySize && (
                    <div>
                        <h3 className="text-xs font-semibold text-white uppercase tracking-wide mb-2">
                            Company Size
                        </h3>
                        <p className="text-sm text-white/60">
                            {companySize}
                        </p>
                    </div>
                )}

                {/* Founded */}
                {companyFounded && (
                    <div>
                        <h3 className="text-xs font-semibold text-white uppercase tracking-wide mb-2">
                            Founded
                        </h3>
                        <p className="text-sm text-white/60">
                            {companyFounded}
                        </p>
                    </div>
                )}

                {/* Website */}
                {companyWebsite && (
                    <div>
                        <h3 className="text-xs font-semibold text-white uppercase tracking-wide mb-2">
                            Website
                        </h3>
                        <a
                            href={companyWebsite.startsWith('http') ? companyWebsite : `https://${companyWebsite}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-400 hover:underline"
                        >
                            {companyWebsite.replace(/^https?:\/\//, '')}
                        </a>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <h3 className="text-sm font-semibold text-white mb-3">
                    Ready to track your revenue?
                </h3>
                <a
                    href={`${APP_URL}/auth`}
                    className="text-sm text-blue-400 hover:text-blue-300 hover:underline inline-flex items-center gap-1"
                >
                    Start Free Trial
                    <ArrowRight className="h-3 w-3" />
                </a>
            </div>
        </aside>
    )
}
