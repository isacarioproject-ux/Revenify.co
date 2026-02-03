import { createClient, SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '@/types/blog'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase: SupabaseClient<Database> | null = null

if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
} else {
    console.warn('Supabase environment variables not configured. Blog features will be disabled.')
}

export { supabase }
