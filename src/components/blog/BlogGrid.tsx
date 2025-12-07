import { BlogCard } from './BlogCard'
import type { BlogPostCard } from '@/types/blog'

interface BlogGridProps {
    posts: BlogPostCard[]
}

export function BlogGrid({ posts }: BlogGridProps) {
    if (posts.length === 0) {
        return (
            <div className="text-center py-16">
                <p className="text-gray-500 text-lg">
                    Nenhum post encontrado nesta categoria.
                </p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    )
}
