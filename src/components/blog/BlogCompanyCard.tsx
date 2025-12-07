import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Building2, Globe, Users, Calendar } from 'lucide-react'

interface BlogCompanyCardProps {
    companyName?: string | null
    companyLogo?: string | null
    companyWebsite?: string | null
    companyIndustry?: string | null
    companySize?: string | null
    companyFounded?: string | null
    companyAbout?: string | null
}

export function BlogCompanyCard({
    companyName,
    companyLogo,
    companyWebsite,
    companyIndustry,
    companySize,
    companyFounded,
    companyAbout,
}: BlogCompanyCardProps) {
    // Don't render if no company info provided
    if (!companyName && !companyLogo && !companyAbout) {
        return null
    }

    return (
        <Card className="border-2">
            <CardHeader>
                {companyLogo && (
                    <div className="flex justify-center mb-4">
                        <img
                            src={companyLogo}
                            alt={companyName || 'Company logo'}
                            className="h-16 w-auto object-contain"
                        />
                    </div>
                )}
                {companyName && <CardTitle className="text-center text-xl">{companyName}</CardTitle>}
            </CardHeader>
            <CardContent className="space-y-4">
                {companyAbout && (
                    <p className="text-sm text-gray-600 leading-relaxed">{companyAbout}</p>
                )}

                <div className="space-y-3 pt-4 border-t">
                    {companyWebsite && (
                        <div className="flex items-start gap-3">
                            <Globe className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-gray-500 mb-1">Website</p>
                                <a
                                    href={companyWebsite.startsWith('http') ? companyWebsite : `https://${companyWebsite}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-600 hover:underline break-all"
                                >
                                    {companyWebsite.replace(/^https?:\/\//, '')}
                                </a>
                            </div>
                        </div>
                    )}

                    {companyIndustry && (
                        <div className="flex items-start gap-3">
                            <Building2 className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                                <p className="text-xs text-gray-500 mb-1">Industry</p>
                                <p className="text-sm text-gray-900">{companyIndustry}</p>
                            </div>
                        </div>
                    )}

                    {companySize && (
                        <div className="flex items-start gap-3">
                            <Users className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                                <p className="text-xs text-gray-500 mb-1">Company Size</p>
                                <p className="text-sm text-gray-900">{companySize}</p>
                            </div>
                        </div>
                    )}

                    {companyFounded && (
                        <div className="flex items-start gap-3">
                            <Calendar className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                                <p className="text-xs text-gray-500 mb-1">Founded</p>
                                <p className="text-sm text-gray-900">{companyFounded}</p>
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
