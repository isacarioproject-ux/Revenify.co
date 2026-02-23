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
    const fullTitle = `${title} — Revenify Blog`
    const defaultImage = 'https://revenify.co/og-image.png'
    const ogImage = image || defaultImage

    // JSON-LD Article schema for Google rich snippets
    const articleSchema = type === 'article' && publishedAt ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: ogImage,
        url: url,
        datePublished: formatDateISO(publishedAt),
        dateModified: formatDateISO(publishedAt),
        author: {
            '@type': 'Person',
            name: author || 'Revenify Team',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Revenify',
            url: 'https://revenify.co',
            logo: {
                '@type': 'ImageObject',
                url: 'https://revenify.co/favicon.svg',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
    } : null

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

            {/* JSON-LD Structured Data */}
            {articleSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
            )}
        </Helmet>
    )
}

