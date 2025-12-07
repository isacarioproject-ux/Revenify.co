-- ================================================
-- Revenify Blog Schema
-- ================================================
-- This schema creates the database structure for the blog system
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ================================================
-- Table: blog_categories
-- ================================================
CREATE TABLE IF NOT EXISTS public.blog_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON public.blog_categories(slug);

-- ================================================
-- Table: blog_posts
-- ================================================
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    cover_image TEXT,
    author_name TEXT NOT NULL,
    author_avatar TEXT,
    category_id UUID NOT NULL REFERENCES public.blog_categories(id) ON DELETE CASCADE,
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
    published_at TIMESTAMPTZ,
    reading_time INTEGER DEFAULT 5,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category_id ON public.blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON public.blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON public.blog_posts(published_at DESC);

-- ================================================
-- Row Level Security (RLS) Policies
-- ================================================

-- Enable RLS on tables
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Categories: Public read, authenticated write
CREATE POLICY "Categories are viewable by everyone"
    ON public.blog_categories FOR SELECT
    USING (true);

CREATE POLICY "Categories are editable by authenticated users"
    ON public.blog_categories FOR ALL
    USING (auth.role() = 'authenticated');

-- Posts: Public read (published only), authenticated write
CREATE POLICY "Published posts are viewable by everyone"
    ON public.blog_posts FOR SELECT
    USING (status = 'published');

CREATE POLICY "Posts are editable by authenticated users"
    ON public.blog_posts FOR ALL
    USING (auth.role() = 'authenticated');

-- ================================================
-- Function: Update reading_time automatically
-- ================================================
CREATE OR REPLACE FUNCTION public.calculate_reading_time()
RETURNS TRIGGER AS $$
BEGIN
    -- Calculate reading time based on content (200 words per minute)
    NEW.reading_time := GREATEST(1, CEIL(
        array_length(regexp_split_to_array(NEW.content, '\s+'), 1) / 200.0
    ));
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to calculate reading_time on insert/update
DROP TRIGGER IF EXISTS trigger_calculate_reading_time ON public.blog_posts;
CREATE TRIGGER trigger_calculate_reading_time
    BEFORE INSERT OR UPDATE OF content ON public.blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION public.calculate_reading_time();

-- ================================================
-- Function: Update updated_at timestamp
-- ================================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
DROP TRIGGER IF EXISTS trigger_update_categories_updated_at ON public.blog_categories;
CREATE TRIGGER trigger_update_categories_updated_at
    BEFORE UPDATE ON public.blog_categories
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS trigger_update_posts_updated_at ON public.blog_posts;
CREATE TRIGGER trigger_update_posts_updated_at
    BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- ================================================
-- Seed Data: Default Categories
-- ================================================
INSERT INTO public.blog_categories (name, slug, description) VALUES
    ('Company News', 'company-news', 'Updates and announcements from Revenify'),
    ('Education', 'education', 'Learn about revenue attribution and analytics'),
    ('Customer Stories', 'customer-stories', 'Success stories from our customers'),
    ('Engineering', 'engineering', 'Technical insights and product updates')
ON CONFLICT (slug) DO NOTHING;

-- ================================================
-- Seed Data: Example Posts
-- ================================================
-- Get category IDs for seed posts
DO $$
DECLARE
    category_news_id UUID;
    category_education_id UUID;
BEGIN
    SELECT id INTO category_news_id FROM public.blog_categories WHERE slug = 'company-news' LIMIT 1;
    SELECT id INTO category_education_id FROM public.blog_categories WHERE slug = 'education' LIMIT 1;

    -- Insert example posts
    INSERT INTO public.blog_posts (
        title,
        slug,
        excerpt,
        content,
        cover_image,
        author_name,
        author_avatar,
        category_id,
        status,
        published_at
    ) VALUES
    (
        'Introducing Revenify: Revenue Attribution Made Simple',
        'introducing-revenify',
        'Today we''re excited to announce Revenify, a powerful revenue attribution platform that helps you track every conversion back to its marketing source.',
        '# Introducing Revenify

Today we''re excited to announce **Revenify**, a powerful revenue attribution platform that helps you track every conversion back to its marketing source.

## The Problem

Many businesses struggle to understand which marketing channels drive actual revenue. Traditional analytics tell you about traffic, but not about the money.

## Our Solution

Revenify bridges this gap by:

* **Pixel Tracking** - Install once, track forever
* **UTM Attribution** - First-touch and last-touch
* **Real-time Dashboard** - See your metrics instantly

## Getting Started

Sign up today and start tracking your revenue attribution in minutes.

```javascript
// Install the pixel
window.revenify = { projectKey: "pk_live_..." };
```

Try it now at [revenify.co](https://revenify.co)',
        NULL,
        'Team Revenify',
        NULL,
        category_news_id,
        'published',
        NOW() - INTERVAL '7 days'
    ),
    (
        'Understanding First-Touch vs Last-Touch Attribution',
        'first-touch-vs-last-touch-attribution',
        'Learn the difference between first-touch and last-touch attribution models and when to use each one.',
        '# Understanding First-Touch vs Last-Touch Attribution

Attribution models help you understand which marketing touchpoints deserve credit for a conversion.

## First-Touch Attribution

First-touch attribution gives **100% credit to the first interaction** a customer has with your brand.

### When to use:
* Measuring brand awareness campaigns
* Understanding initial discovery channels
* Optimizing top-of-funnel spend

## Last-Touch Attribution

Last-touch attribution gives **100% credit to the last interaction** before conversion.

### When to use:
* Measuring conversion efficiency
* Optimizing bottom-of-funnel spend
* Understanding closing channels

## Multi-Touch Attribution

Revenify tracks both models, giving you complete visibility into your customer journey.

### Benefits:
1. See the full customer path
2. Optimize every stage
3. Make data-driven decisions

Start tracking today with Revenify.',
        NULL,
        'Sarah Johnson',
        NULL,
        category_education_id,
        'published',
        NOW() - INTERVAL '3 days'
    )
    ON CONFLICT (slug) DO NOTHING;
END $$;

-- ================================================
-- Storage Bucket Setup Instructions
-- ================================================
-- Run these commands in the Supabase Storage section:
--
-- 1. Create a bucket named "blog-images"
-- 2. Make it public
-- 3. Set the following policy:
--
-- CREATE POLICY "Public Access"
-- ON storage.objects FOR SELECT
-- USING (bucket_id = 'blog-images');
--
-- CREATE POLICY "Authenticated users can upload"
-- ON storage.objects FOR INSERT
-- WITH CHECK (bucket_id = 'blog-images' AND auth.role() = 'authenticated');
