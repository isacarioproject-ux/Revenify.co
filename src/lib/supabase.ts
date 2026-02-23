import { createClient, SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '@/types/blog'

// These are public anon keys (VITE_ prefix = exposed in browser bundle)
// Hardcoded fallbacks ensure blog works in production without .env on server
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://gyqohtqfyzzifxjkuuiz.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5cW9odHFmeXp6aWZ4amt1dWl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NDMxMzYsImV4cCI6MjA4MDIxOTEzNn0.gvOPxR3nbQJn1nU46ObZoMXKX9HCZINjH2Jb1Jgzvv8'

let supabase: SupabaseClient<Database> | null = null

if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
} else {
    console.warn('Supabase environment variables not configured. Blog features will be disabled.')
}

export { supabase }

