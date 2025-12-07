import { useState } from 'react'
import { motion } from 'framer-motion'
import { Skeleton } from '@/components/ui/skeleton'
import {
    BlogHeader,
    BlogTabs,
    BlogGrid,
    BlogMetaTags,
} from '@/components/blog'
import { useBlogCategories } from '@/hooks/useBlogCategories'
import { useBlogPosts } from '@/hooks/useBlogPosts'
import FooterSection from '@/components/footer-section'

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

            <BlogHeader />

            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-blue-50 to-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
                        >
                            Revenify Blog
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 max-w-2xl mx-auto"
                        >
                            Insights, news, and best practices for revenue attribution
                            and analytics
                        </motion.p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="container mx-auto px-4 py-12">
                    {/* Tabs */}
                    <div className="flex justify-center mb-12">
                        {categoriesLoading ? (
                            <Skeleton className="h-12 w-96" />
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
                                    <Skeleton className="h-48 w-full" />
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-6 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-3/4" />
                                    <div className="flex items-center gap-3">
                                        <Skeleton className="h-8 w-8 rounded-full" />
                                        <div className="space-y-2">
                                            <Skeleton className="h-3 w-24" />
                                            <Skeleton className="h-3 w-20" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <BlogGrid posts={posts} />
                    )}
                </section>
            </main>

            <FooterSection />
        </>
    )
}
