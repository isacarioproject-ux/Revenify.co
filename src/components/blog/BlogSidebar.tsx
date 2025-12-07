import { ArrowRight } from 'lucide-react'

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
            <div className="space-y-4 py-4">
                {/* Company Logo */}
                {companyLogo && (
                    <div>
                        <img
                            src={companyLogo}
                            alt={companyName || 'Company'}
                            className="h-12 w-12 rounded-full border border-neutral-200"
                        />
                    </div>
                )}

                {/* About Section */}
                {companyAbout && (
                    <div>
                        <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-2">
                            About
                        </h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            {companyAbout}
                        </p>
                    </div>
                )}

                {/* Industry */}
                {companyIndustry && (
                    <div>
                        <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-2">
                            Industry
                        </h3>
                        <p className="text-sm text-neutral-600">
                            {companyIndustry}
                        </p>
                    </div>
                )}

                {/* Company Size */}
                {companySize && (
                    <div>
                        <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-2">
                            Company Size
                        </h3>
                        <p className="text-sm text-neutral-600">
                            {companySize}
                        </p>
                    </div>
                )}

                {/* Founded */}
                {companyFounded && (
                    <div>
                        <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-2">
                            Founded
                        </h3>
                        <p className="text-sm text-neutral-600">
                            {companyFounded}
                        </p>
                    </div>
                )}

                {/* Website */}
                {companyWebsite && (
                    <div>
                        <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-2">
                            Website
                        </h3>
                        <a
                            href={companyWebsite.startsWith('http') ? companyWebsite : `https://${companyWebsite}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            {companyWebsite.replace(/^https?:\/\//, '')}
                        </a>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="pt-2">
                <h3 className="text-sm font-semibold text-neutral-900 mb-3">
                    Ready to track your revenue?
                </h3>
                <a
                    href="/auth"
                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
                >
                    Start Free Trial
                    <ArrowRight className="h-3 w-3" />
                </a>
            </div>
        </aside>
    )
}
