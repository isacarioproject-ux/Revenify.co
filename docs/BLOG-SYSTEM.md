# Revenify Blog System

## 📖 Overview

Complete blog system inspired by [dub.co/blog](https://dub.co/blog) with:
- Category tabs (Visão Geral, Company News, Education, Customer Stories, Engineering)
- Responsive grid layout (3 → 2 → 1 columns)
- Individual post pages with sidebar
- Supabase-powered CMS (no code editing required)
- SEO-optimized meta tags
- Automatic reading time calculation

## 🏗️ Architecture

### Frontend Stack
- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS** for styling
- **shadcn/ui** components (Radix UI)
- **Framer Motion** for animations
- **React Router v7** for routing
- **react-helmet-async** for SEO

### Backend
- **Supabase** (PostgreSQL + Storage)
- Row Level Security (RLS) enabled
- Automatic triggers for reading time
- Public read access for published posts

## 📂 Project Structure

```
src/
├── components/blog/
│   ├── BlogAuthorCard.tsx      # Author info sidebar widget
│   ├── BlogCard.tsx             # Post card component
│   ├── BlogCTACard.tsx          # Sidebar CTA
│   ├── BlogGrid.tsx             # Responsive grid layout
│   ├── BlogHeader.tsx           # Blog navigation header
│   ├── BlogMarkdown.tsx         # Markdown renderer
│   ├── BlogMetaTags.tsx         # SEO meta tags
│   ├── BlogRelatedPosts.tsx     # Related posts section
│   ├── BlogSidebar.tsx          # Sidebar container
│   ├── BlogTableOfContents.tsx  # TOC widget
│   ├── BlogTabs.tsx             # Category tabs
│   └── index.ts                 # Barrel export
├── hooks/
│   ├── useBlogCategories.ts     # Fetch categories
│   ├── useBlogPost.ts           # Fetch single post + related
│   ├── useBlogPosts.ts          # Fetch posts list
│   └── useTableOfContents.ts    # Extract TOC from markdown
├── lib/
│   ├── blog-queries.ts          # Supabase queries
│   ├── markdown-utils.ts        # Markdown parser & formatters
│   ├── supabase.ts              # Supabase client
│   └── utils.ts                 # General utilities
├── pages/
│   ├── Blog.tsx                 # Blog listing page
│   └── BlogPost.tsx             # Individual post page
└── types/
    └── blog.ts                  # TypeScript interfaces

docs/
└── supabase/
    └── schema.sql               # Database schema

BLOG-CMS-GUIDE.md                # Complete CMS guide
```

## 🚀 Getting Started

### 1. Install Dependencies

All dependencies are already installed. If needed:

```bash
npm install
```

### 2. Setup Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** → **New Query**
3. Run `docs/supabase/schema.sql`
4. Go to **Storage** → Create bucket `blog-images` (public)

### 3. Configure Environment

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Update with your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run Development Server

```bash
npm run dev
```

Visit:
- Blog listing: `http://localhost:5173/blog`
- Individual post: `http://localhost:5173/blog/introducing-revenify`

## 📝 Managing Content

### Quick Start

1. Go to **Supabase Dashboard** → **Table Editor** → `blog_posts`
2. Click **Insert row**
3. Fill in:
   - `title`: Your post title
   - `slug`: URL-friendly version (e.g., `my-awesome-post`)
   - `excerpt`: Short description
   - `content`: Full post in Markdown
   - `cover_image`: Image URL (optional)
   - `author_name`: Your name
   - `category_id`: Select from dropdown
   - `status`: `published`
   - `published_at`: Current timestamp
4. Click **Save**

**For complete instructions:** See [BLOG-CMS-GUIDE.md](../BLOG-CMS-GUIDE.md)

## 🎨 Design System

### Colors
- Primary: Blue (`#2563eb`)
- Accent: Cyan (`#06b6d4`)
- Neutral: Gray scales

### Typography
- Headings: System font stack (sans-serif)
- Body: 16px base, 1.5 line-height
- Code: Monospace

### Components
All components use shadcn/ui with Tailwind CSS:
- `Tabs` - Category navigation
- `Badge` - Category labels
- `Card` - Post containers
- `Avatar` - Author images
- `AspectRatio` - Image containers
- `Skeleton` - Loading states

## 🔧 Customization

### Add New Category

```sql
INSERT INTO blog_categories (name, slug, description)
VALUES ('Product Updates', 'product-updates', 'Latest features and improvements');
```

### Change Grid Columns

Edit `BlogGrid.tsx`:

```tsx
// Current: 3 → 2 → 1
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// Change to 4 → 2 → 1
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
```

### Custom Markdown Styles

Edit `BlogMarkdown.tsx`:

```tsx
<div className="prose prose-lg prose-blue ...">
```

Add custom Tailwind prose classes.

## 📊 Database Schema

### `blog_categories`
```sql
id              UUID (PK)
name            TEXT
slug            TEXT (UNIQUE)
description     TEXT
created_at      TIMESTAMPTZ
updated_at      TIMESTAMPTZ
```

### `blog_posts`
```sql
id              UUID (PK)
title           TEXT
slug            TEXT (UNIQUE)
excerpt         TEXT
content         TEXT (Markdown)
cover_image     TEXT (URL)
author_name     TEXT
author_avatar   TEXT (URL)
category_id     UUID (FK)
status          TEXT (draft|published)
published_at    TIMESTAMPTZ
reading_time    INTEGER (auto-calculated)
created_at      TIMESTAMPTZ
updated_at      TIMESTAMPTZ
```

## 🔍 SEO Features

### Meta Tags
- Dynamic titles: `Post Title | Revenify Blog`
- Descriptions from `excerpt` field
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs

### Structured Data
- Article metadata (published date, author)
- ISO 8601 timestamps

### Performance
- Image lazy loading
- Route-based code splitting
- Optimized bundle size

## 🧪 Testing Checklist

- [ ] Blog listing loads
- [ ] Category tabs work
- [ ] Posts filter by category
- [ ] Individual post pages load
- [ ] Markdown renders correctly
- [ ] Images display properly
- [ ] Table of contents navigates
- [ ] Related posts appear
- [ ] SEO meta tags present
- [ ] Mobile responsive
- [ ] Loading states show

## 🚢 Deployment

### Environment Variables

Ensure production `.env` has:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-production-anon-key
```

### Build

```bash
npm run build
```

### Deploy

Deploy the `dist/` folder to your hosting provider.

## 🐛 Troubleshooting

### Posts not showing

**Check:**
- Post status is `published`
- `published_at` is in the past
- Category exists
- RLS policies enabled

### Images not loading

**Check:**
- Bucket `blog-images` is public
- Image URLs are correct
- Storage policies configured

### TypeScript errors

**Run:**
```bash
npm run type-check
```

## 📚 Resources

- [Supabase Documentation](https://supabase.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [Markdown Guide](https://www.markdownguide.org)

## 🎯 Future Enhancements

Potential improvements:
- [ ] Search functionality (full-text)
- [ ] Pagination / infinite scroll
- [ ] Newsletter signup
- [ ] Comments system
- [ ] Tags (in addition to categories)
- [ ] Author profiles
- [ ] RSS feed
- [ ] Multi-language support
- [ ] Visual markdown editor
- [ ] Analytics dashboard

## 📄 License

Part of the Revenify project.

---

**Need help?** Check [BLOG-CMS-GUIDE.md](../BLOG-CMS-GUIDE.md) or contact the development team.
