import { Helmet } from 'react-helmet-async'

interface SEOProps {
    title?: string
    description?: string
    image?: string
    url?: string
    type?: string
}

export const SEO = ({
    title = 'Revenify — Track Every Click, Attribute Every Sale',
    description = 'Revenify is the all-in-one link shortener, tracking pixel, and revenue attribution platform. Branded short links with custom domain, real-time conversion tracking, link cloaking, and AI-powered analytics. The smarter alternative to dub.co and Bitly.',
    image = 'https://revenify.co/images/og/og-image.png',
    url = 'https://revenify.co',
    type = 'website',
}: SEOProps) => {
    const fullTitle = title === 'Revenify — Track Every Click, Attribute Every Sale'
        ? title
        : `${title} — Revenify`

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
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Additional */}
            <link rel="canonical" href={url} />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Revenify",
                    "url": "https://revenify.co",
                    "description": description,
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://revenify.co/blog?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                })}
            </script>
        </Helmet>
    )
}

export default SEO
