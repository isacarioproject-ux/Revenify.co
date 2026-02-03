import { supabase } from './supabase'
import type { BlogCategory, BlogPost, BlogPostCard } from '@/types/blog'

// Fetch all categories
export async function getBlogCategories(): Promise<BlogCategory[]> {
    if (!supabase) {
        console.warn('Supabase not configured')
        return []
    }

    const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name')

    if (error) {
        console.error('Error fetching categories:', error)
        return []
    }

    return (data as any[]) || []
}

// Fetch posts with optional category filter
export async function getBlogPosts(
    categorySlug?: string,
    limit?: number
): Promise<BlogPostCard[]> {
    if (!supabase) {
        console.warn('Supabase not configured')
        return []
    }

    let query = supabase
        .from('blog_posts')
        .select(`
            id,
            title,
            slug,
            excerpt,
            cover_image,
            author_name,
            author_avatar,
            published_at,
            reading_time,
            category_id,
            blog_categories (
                name,
                slug
            )
        `)
        .eq('status', 'published')
        .order('published_at', { ascending: false })

    if (categorySlug) {
        // First get the category ID
        const { data: category } = await supabase
            .from('blog_categories')
            .select('id')
            .eq('slug', categorySlug)
            .single()

        if (category) {
            query = query.eq('category_id', (category as any).id)
        }
    }

    if (limit) {
        query = query.limit(limit)
    }

    const { data, error } = await query

    if (error) {
        console.error('Error fetching posts:', error)
        return []
    }

    // Transform to BlogPostCard format
    return ((data as any[]) || []).map((post) => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        coverImage: post.cover_image,
        authorName: post.author_name,
        authorAvatar: post.author_avatar,
        categoryName: post.blog_categories?.name || '',
        categorySlug: post.blog_categories?.slug || '',
        publishedAt: post.published_at,
        readingTime: post.reading_time,
    }))
}

// Fetch a single post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    if (!supabase) {
        console.warn('Supabase not configured')
        return null
    }

    const { data, error } = await supabase
        .from('blog_posts')
        .select(`
            *,
            blog_categories (
                id,
                name,
                slug,
                description
            )
        `)
        .eq('slug', slug)
        .eq('status', 'published')
        .single()

    if (error) {
        if (error.code === 'PGRST116') {
            // Not found
            return null
        }
        console.error('Error fetching post:', error)
        return null
    }

    if (!data) return null

    const postData = data as any

    // Transform to BlogPost format
    return {
        id: postData.id,
        title: postData.title,
        slug: postData.slug,
        excerpt: postData.excerpt,
        content: postData.content,
        coverImage: postData.cover_image,
        authorName: postData.author_name,
        authorAvatar: postData.author_avatar,
        category: postData.blog_categories as BlogCategory,
        status: postData.status,
        publishedAt: postData.published_at,
        readingTime: postData.reading_time,
        createdAt: postData.created_at,
        // Sidebar company info
        sidebarCompanyName: postData.sidebar_company_name,
        sidebarCompanyLogo: postData.sidebar_company_logo,
        sidebarCompanyWebsite: postData.sidebar_company_website,
        sidebarCompanyIndustry: postData.sidebar_company_industry,
        sidebarCompanySize: postData.sidebar_company_size,
        sidebarCompanyFounded: postData.sidebar_company_founded,
        sidebarCompanyAbout: postData.sidebar_company_about,
    }
}

// Fetch related posts (same category, different slug)
export async function getRelatedPosts(
    categoryId: string,
    currentSlug: string,
    limit: number = 3
): Promise<BlogPostCard[]> {
    if (!supabase) {
        console.warn('Supabase not configured')
        return []
    }

    const { data, error } = await supabase
        .from('blog_posts')
        .select(`
            id,
            title,
            slug,
            excerpt,
            cover_image,
            author_name,
            author_avatar,
            published_at,
            reading_time,
            blog_categories (
                name,
                slug
            )
        `)
        .eq('status', 'published')
        .eq('category_id', categoryId)
        .neq('slug', currentSlug)
        .order('published_at', { ascending: false })
        .limit(limit)

    if (error) {
        console.error('Error fetching related posts:', error)
        return []
    }

    return ((data as any[]) || []).map((post) => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        coverImage: post.cover_image,
        authorName: post.author_name,
        authorAvatar: post.author_avatar,
        categoryName: post.blog_categories?.name || '',
        categorySlug: post.blog_categories?.slug || '',
        publishedAt: post.published_at,
        readingTime: post.reading_time,
    }))
}
