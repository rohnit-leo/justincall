import { createClient } from "@supabase/supabase-js"

// Create a single Supabase client for interacting with your database
// This is for client-side usage (e.g., image upload in admin panel)
const supabaseUrl = "https://umdshlbjsyhqkdaofhwh.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtZHNobGJqc3locWtkYW9maHdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3NTI1OTMsImV4cCI6MjA2ODMyODU5M30.uejbwL7ZmNVGcfmX-yd2oSm2erQxnmJj9k3a_9AyBzM"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// For server-side usage (e.g., fetching images in gallery page)
// This approach ensures a fresh client for each request, which is safer for server components
export function createServerSupabaseClient() {
  return createClient(supabaseUrl, supabaseAnonKey)
}
