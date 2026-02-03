import { useParams, useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import {
    BlogMarkdown,
    BlogSidebar,
    BlogRelatedPosts,
    BlogMetaTags,
} from '@/components/blog'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { useBlogPost } from '@/hooks/useBlogPost'
import { formatDate } from '@/lib/markdown-utils'
import { Calendar, Clock, ChevronLeft } from 'lucide-react'

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>()
    const navigate = useNavigate()
    const { post, relatedPosts, loading, error } = useBlogPost(slug || '')

    useEffect(() => {
        if (!loading && !post) {
            navigate('/blog', { replace: true })
        }
    }, [loading, post, navigate])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    if (loading) {
        return (
            <>
                <Header />
                <main className="min-h-screen bg-black pt-24">
                    <div className="max-w-4xl mx-auto px-6 py-8">
                        <Skeleton className="h-10 w-32 mb-8 bg-white/10" />
                        <div className="max-w-6xl mx-auto">
                            <div className="mb-8 space-y-4">
                                <Skeleton className="h-6 w-32 bg-white/10" />
                                <Skeleton className="h-12 w-3/4 bg-white/10" />
                                <Skeleton className="h-4 w-1/2 bg-white/10" />
                            </div>
                            <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
                                <Skeleton className="h-96 w-full bg-white/10" />
                                <Skeleton className="h-64 w-full bg-white/10" />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        )
    }

    if (error || !post) {
        return null
    }

    return (
        <>
            <BlogMetaTags
                title={post.title}
                description={post.excerpt}
                image={post.coverImage || undefined}
                url={`https://revenify.co/blog/${post.slug}`}
                type="article"
                publishedAt={post.publishedAt}
                author={post.authorName}
            />

            <Header />

            <main className="min-h-screen bg-black pt-24">
                {/* Back Button */}
                <div className="max-w-4xl mx-auto px-6 pt-4">
                    <Link to="/blog">
                        <Button variant="ghost" size="sm" className="gap-2 text-white/60 hover:text-white hover:bg-white/10">
                            <ChevronLeft className="h-4 w-4" />
                            All Posts
                        </Button>
                    </Link>
                </div>

                <article className="max-w-4xl mx-auto px-6 py-8 lg:py-12">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <motion.header
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8"
                        >
                            <Badge variant="secondary" className="mb-3 bg-white/10 text-white/70 border-white/10">
                                {post.category?.name || 'Uncategorized'}
                            </Badge>
                            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                {post.title}
                            </h1>
                            <p className="text-lg lg:text-xl text-white/60 mb-4 leading-relaxed">
                                {post.excerpt}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-white/40">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <time dateTime={post.publishedAt || undefined}>
                                        {formatDate(post.publishedAt)}
                                    </time>
                                </div>
                                <span>•</span>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span>{post.readingTime} min read</span>
                                </div>
                            </div>
                        </motion.header>

                        {/* 2-Column Layout: Image+Content | Sidebar */}
                        <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12">
                            {/* Left Column: Image + Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="min-w-0"
                            >
                                {/* Hero Image */}
                                {post.coverImage && (
                                    <div className="mb-8">
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="w-full h-auto rounded-xl shadow-md border border-white/10"
                                            style={{ aspectRatio: '1200/630' }}
                                        />
                                    </div>
                                )}

                                {/* Article Content */}
                                <div>
                                    <BlogMarkdown content={post.content} />
                                </div>

                                {/* Author Footer */}
                                <div className="mt-12 pt-8 border-t border-white/10">
                                    <div className="flex items-center gap-4">
                                        {post.authorAvatar && (
                                            <img
                                                src={post.authorAvatar}
                                                alt={post.authorName}
                                                className="w-12 h-12 rounded-full border border-white/10"
                                            />
                                        )}
                                        <div>
                                            <p className="text-sm text-white/40">Written by</p>
                                            <p className="font-semibold text-white">
                                                {post.authorName}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Column: Sidebar */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <BlogSidebar
                                    companyName={post.sidebarCompanyName}
                                    companyLogo={post.sidebarCompanyLogo}
                                    companyWebsite={post.sidebarCompanyWebsite}
                                    companyIndustry={post.sidebarCompanyIndustry}
                                    companySize={post.sidebarCompanySize}
                                    companyFounded={post.sidebarCompanyFounded}
                                    companyAbout={post.sidebarCompanyAbout}
                                />
                            </motion.div>
                        </div>

                        {/* Related Posts */}
                        {relatedPosts.length > 0 && (
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-16 pt-12 border-t border-white/10"
                            >
                                <BlogRelatedPosts posts={relatedPosts} />
                            </motion.section>
                        )}
                    </div>
                </article>
            </main>

            <Footer />
        </>
    )
}
