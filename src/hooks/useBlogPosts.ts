import { useState, useEffect } from 'react'
import { getBlogPosts } from '@/lib/blog-queries'
import type { BlogPostCard } from '@/types/blog'

export function useBlogPosts(categorySlug?: string, limit?: number) {
    const [posts, setPosts] = useState<BlogPostCard[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        async function fetchPosts() {
            try {
                setLoading(true)

                // If categorySlug is 'all', fetch all posts
                const slug = categorySlug === 'all' ? undefined : categorySlug
                const data = await getBlogPosts(slug, limit)

                setPosts(data)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [categorySlug, limit])

    return { posts, loading, error }
}
