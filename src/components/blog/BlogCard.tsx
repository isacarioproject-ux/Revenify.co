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
            <Card className="group overflow-hidden transition-all border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20">
                <CardContent className="p-0">
                    {/* Cover Image */}
                    <AspectRatio ratio={16 / 9} className="bg-white/5">
                        {post.coverImage ? (
                            <img
                                src={post.coverImage}
                                alt={post.title}
                                className="object-cover w-full h-full transition-transform group-hover:scale-105"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full bg-gradient-to-br from-white/5 to-white/10">
                                <span className="text-4xl font-bold text-white/10">
                                    Revenify
                                </span>
                            </div>
                        )}
                    </AspectRatio>

                    {/* Content */}
                    <div className="p-6">
                        {/* Category Badge */}
                        <Badge variant="secondary" className="mb-3 bg-white/10 text-white/70 border-white/10">
                            {post.categoryName}
                        </Badge>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                            {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-white/60 text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {/* Author */}
                                <Avatar className="h-8 w-8 border border-white/10">
                                    <AvatarImage src={post.authorAvatar || undefined} />
                                    <AvatarFallback className="bg-white/10 text-white/60">
                                        {post.authorName?.charAt(0)?.toUpperCase() || 'A'}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-white">
                                        {post.authorName}
                                    </span>
                                    <span className="text-xs text-white/40">
                                        {formatDate(post.publishedAt)}
                                    </span>
                                </div>
                            </div>

                            {/* Reading Time */}
                            <div className="flex items-center gap-1 text-white/40">
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
