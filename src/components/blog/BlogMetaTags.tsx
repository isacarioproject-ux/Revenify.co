import { Helmet } from 'react-helmet-async'
import { formatDateISO } from '@/lib/markdown-utils'

interface BlogMetaTagsProps {
    title: string
    description: string
    image?: string
    url: string
    type?: 'website' | 'article'
    publishedAt?: string | null
    author?: string
}

export function BlogMetaTags({
    title,
    description,
    image,
    url,
    type = 'website',
    publishedAt,
    author,
}: BlogMetaTagsProps) {
    const fullTitle = `${title} | Revenify Blog`
    const defaultImage = 'https://revenify.co/og-image.png'
    const ogImage = image || defaultImage

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Article specific */}
            {type === 'article' && publishedAt && (
                <>
                    <meta property="article:published_time" content={formatDateISO(publishedAt)} />
                    {author && <meta property="article:author" content={author} />}
                </>
            )}

            {/* Canonical URL */}
            <link rel="canonical" href={url} />
        </Helmet>
    )
}
