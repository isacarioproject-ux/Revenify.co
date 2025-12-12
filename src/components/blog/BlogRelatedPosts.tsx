import { BlogCard } from './BlogCard'
import type { BlogPostCard } from '@/types/blog'

interface BlogRelatedPostsProps {
    posts: BlogPostCard[]
}

export function BlogRelatedPosts({ posts }: BlogRelatedPostsProps) {
    if (posts.length === 0) return null

    return (
        <section className="mt-16 pt-16 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8">Read more</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    )
}
