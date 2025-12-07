import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'

interface BlogQuoteProps {
    quote: string
    authorName?: string
    authorTitle?: string
    authorAvatar?: string
    companyLogo?: string
}

export function BlogQuote({
    quote,
    authorName,
    authorTitle,
    authorAvatar,
    companyLogo,
}: BlogQuoteProps) {
    return (
        <div className="my-12 relative">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Quote icon */}
                <Quote className="absolute top-6 left-6 h-8 w-8 text-blue-200" />

                {/* Quote text */}
                <blockquote className="text-lg md:text-xl italic text-gray-900 leading-relaxed mb-6 relative z-10">
                    "{quote}"
                </blockquote>

                {/* Author info */}
                {(authorName || companyLogo) && (
                    <div className="flex items-center gap-4 pt-4 border-t border-blue-100">
                        {authorAvatar && (
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={authorAvatar} />
                                <AvatarFallback>
                                    {authorName?.charAt(0).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                        )}
                        <div className="flex-1">
                            {authorName && (
                                <p className="font-semibold text-gray-900">{authorName}</p>
                            )}
                            {authorTitle && (
                                <p className="text-sm text-gray-600">{authorTitle}</p>
                            )}
                        </div>
                        {companyLogo && (
                            <img
                                src={companyLogo}
                                alt="Company logo"
                                className="h-8 w-auto object-contain opacity-60"
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
