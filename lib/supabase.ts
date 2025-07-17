import { createClient } from "@supabase/supabase-js"

// Create a single Supabase client for interacting with your database
// This is for client-side usage (e.g., image upload in admin panel)
const supabaseUrl = "https://xgcuxggijtfvzbqlwivy.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnY3V4Z2dpanRmdnpicWx3aXZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3NTE3NjUsImV4cCI6MjA2ODMyNzc2NX0.DojVXdDFcxm3n651ZSA5la9klD7XMqGSBBPtvGQi4a0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// For server-side usage (e.g., fetching images in gallery page)
// This approach ensures a fresh client for each request, which is safer for server components
export function createServerSupabaseClient() {
  return createClient(supabaseUrl, supabaseAnonKey)
}
