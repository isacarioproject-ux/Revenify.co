// Database types for Supabase
export interface Database {
    public: {
        Tables: {
            blog_categories: {
                Row: BlogCategoryRow
                Insert: BlogCategoryInsert
                Update: BlogCategoryUpdate
            }
            blog_posts: {
                Row: BlogPostRow
                Insert: BlogPostInsert
                Update: BlogPostUpdate
            }
        }
    }
}

export interface BlogCategoryRow {
    id: string
    name: string
    slug: string
    description: string | null
    created_at: string
    updated_at: string
}

export type BlogCategoryInsert = Omit<BlogCategoryRow, 'id' | 'created_at' | 'updated_at'>
export type BlogCategoryUpdate = Partial<BlogCategoryInsert>

export interface BlogPostRow {
    id: string
    title: string
    slug: string
    excerpt: string
    content: string
    cover_image: string | null
    author_name: string
    author_avatar: string | null
    category_id: string
    status: 'draft' | 'published'
    published_at: string | null
    reading_time: number
    created_at: string
    updated_at: string
    // Sidebar company/customer info
    sidebar_company_name: string | null
    sidebar_company_logo: string | null
    sidebar_company_website: string | null
    sidebar_company_industry: string | null
    sidebar_company_size: string | null
    sidebar_company_founded: string | null
    sidebar_company_about: string | null
}

export type BlogPostInsert = Omit<BlogPostRow, 'id' | 'created_at' | 'updated_at'>
export type BlogPostUpdate = Partial<BlogPostInsert>

// Frontend-friendly types
export interface BlogCategory {
    id: string
    name: string
    slug: string
    description: string | null
}

export interface BlogPost {
    id: string
    title: string
    slug: string
    excerpt: string
    content: string
    coverImage: string | null
    authorName: string
    authorAvatar: string | null
    category: BlogCategory
    status: 'draft' | 'published'
    publishedAt: string | null
    readingTime: number
    createdAt: string
    // Sidebar company info
    sidebarCompanyName?: string | null
    sidebarCompanyLogo?: string | null
    sidebarCompanyWebsite?: string | null
    sidebarCompanyIndustry?: string | null
    sidebarCompanySize?: string | null
    sidebarCompanyFounded?: string | null
    sidebarCompanyAbout?: string | null
}

export interface BlogPostCard {
    id: string
    title: string
    slug: string
    excerpt: string
    coverImage: string | null
    authorName: string
    authorAvatar: string | null
    categoryName: string
    categorySlug: string
    publishedAt: string | null
    readingTime: number
}
