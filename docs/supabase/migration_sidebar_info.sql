-- ================================================
-- Migration: Add Sidebar Information Fields
-- ================================================
-- This migration adds fields to store sidebar company/customer info
-- Like Dub.co's customer case studies
-- Run this in your Supabase SQL Editor AFTER the main schema

-- Add new columns to blog_posts table
ALTER TABLE public.blog_posts
ADD COLUMN IF NOT EXISTS sidebar_company_name TEXT,
ADD COLUMN IF NOT EXISTS sidebar_company_logo TEXT,
ADD COLUMN IF NOT EXISTS sidebar_company_website TEXT,
ADD COLUMN IF NOT EXISTS sidebar_company_industry TEXT,
ADD COLUMN IF NOT EXISTS sidebar_company_size TEXT,
ADD COLUMN IF NOT EXISTS sidebar_company_founded TEXT,
ADD COLUMN IF NOT EXISTS sidebar_company_about TEXT;

-- Create index for company name lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_sidebar_company_name
ON public.blog_posts(sidebar_company_name);

COMMENT ON COLUMN public.blog_posts.sidebar_company_name IS 'Company/Customer name displayed in sidebar';
COMMENT ON COLUMN public.blog_posts.sidebar_company_logo IS 'URL to company logo image';
COMMENT ON COLUMN public.blog_posts.sidebar_company_website IS 'Company website URL';
COMMENT ON COLUMN public.blog_posts.sidebar_company_industry IS 'Industry (e.g., "SaaS", "E-commerce")';
COMMENT ON COLUMN public.blog_posts.sidebar_company_size IS 'Company size (e.g., "1-10 employees", "50-200 employees")';
COMMENT ON COLUMN public.blog_posts.sidebar_company_founded IS 'Year founded (e.g., "2023")';
COMMENT ON COLUMN public.blog_posts.sidebar_company_about IS 'Short description about the company';
