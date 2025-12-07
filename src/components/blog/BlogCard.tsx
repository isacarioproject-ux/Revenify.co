import { Link } from 'react-router-dom'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { formatDate } from '@/lib/markdown-utils'
import type { BlogPostCard } from '@/types/blog'
import { Clock } from 'lucide-react'

interface BlogCardProps {
    post: BlogPostCard
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <Link to={`/blog/${post.slug}`}>
            <Card className="group overflow-hidden transition-all hover:shadow-lg hover:bg-neutral-50">
                <CardContent className="p-0">
                    {/* Cover Image */}
                    <AspectRatio ratio={16 / 9} className="bg-gray-200">
                        {post.coverImage ? (
                            <img
                                src={post.coverImage}
                                alt={post.title}
                                className="object-cover w-full h-full transition-transform group-hover:scale-105"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-cyan-100">
                                <span className="text-4xl font-bold text-blue-600/20">
                                    Revenify
                                </span>
                            </div>
                        )}
                    </AspectRatio>

                    {/* Content */}
                    <div className="p-6">
                        {/* Category Badge */}
                        <Badge variant="secondary" className="mb-3">
                            {post.categoryName}
                        </Badge>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {/* Author */}
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={post.authorAvatar || undefined} />
                                    <AvatarFallback>
                                        {post.authorName.charAt(0).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-gray-900">
                                        {post.authorName}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        {formatDate(post.publishedAt)}
                                    </span>
                                </div>
                            </div>

                            {/* Reading Time */}
                            <div className="flex items-center gap-1 text-gray-500">
                                <Clock className="h-4 w-4" />
                                <span className="text-xs">{post.readingTime} min</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
