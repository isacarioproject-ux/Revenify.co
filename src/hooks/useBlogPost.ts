import { useState, useEffect } from 'react'
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/blog-queries'
import type { BlogPost, BlogPostCard } from '@/types/blog'

export function useBlogPost(slug: string) {
    const [post, setPost] = useState<BlogPost | null>(null)
    const [relatedPosts, setRelatedPosts] = useState<BlogPostCard[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        async function fetchPost() {
            try {
                setLoading(true)

                // Fetch post and related posts in parallel
                const postData = await getBlogPostBySlug(slug)

                if (postData) {
                    setPost(postData)

                    // Fetch related posts only if category exists
                    if (postData.category?.id) {
                        const related = await getRelatedPosts(
                            postData.category.id,
                            postData.slug,
                            3
                        )
                        setRelatedPosts(related)
                    } else {
                        setRelatedPosts([])
                    }
                } else {
                    setPost(null)
                    setRelatedPosts([])
                }
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchPost()
    }, [slug])

    return { post, relatedPosts, loading, error }
}
