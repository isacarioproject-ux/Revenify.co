import { useState } from 'react'
import { motion } from 'framer-motion'
import { Skeleton } from '@/components/ui/skeleton'
import {
    BlogTabs,
    BlogGrid,
    BlogMetaTags,
} from '@/components/blog'
import { useBlogCategories } from '@/hooks/useBlogCategories'
import { useBlogPosts } from '@/hooks/useBlogPosts'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState('all')
    const { categories, loading: categoriesLoading } = useBlogCategories()
    const { posts, loading: postsLoading } = useBlogPosts(activeCategory)

    return (
        <>
            <BlogMetaTags
                title="Blog"
                description="Insights, news, and best practices for revenue attribution and analytics"
                url="https://revenify.co/blog"
                type="website"
            />

            <Header />

            <main className="min-h-screen bg-black">
                {/* Hero Section */}
                <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6"
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">
                                BLOG
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.2] pb-2"
                        >
                            <span className="block bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent pb-1">
                                Revenify Blog
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-white/40 max-w-2xl mx-auto"
                        >
                            Insights, news, and best practices for revenue attribution
                            and analytics
                        </motion.p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                    {/* Tabs */}
                    <div className="flex justify-center mb-12">
                        {categoriesLoading ? (
                            <Skeleton className="h-12 w-96 bg-white/10" />
                        ) : (
                            <BlogTabs
                                categories={categories}
                                activeCategory={activeCategory}
                                onCategoryChange={setActiveCategory}
                            />
                        )}
                    </div>

                    {/* Posts Grid */}
                    {postsLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="space-y-4">
                                    <Skeleton className="h-48 w-full bg-white/10 rounded-xl" />
                                    <Skeleton className="h-4 w-24 bg-white/10" />
                                    <Skeleton className="h-6 w-full bg-white/10" />
                                    <Skeleton className="h-4 w-full bg-white/10" />
                                    <Skeleton className="h-4 w-3/4 bg-white/10" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <BlogGrid posts={posts} />
                    )}
                </section>
            </main>

            <Footer />
        </>
    )
}
