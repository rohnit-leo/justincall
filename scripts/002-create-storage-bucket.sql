-- Create a storage bucket for gallery images
INSERT INTO storage.buckets (id, name, public)
VALUES ('gallery-images', 'gallery-images', TRUE)
ON CONFLICT (id) DO NOTHING;

-- Optional: Add a policy to allow authenticated users to upload to this bucket
-- This assumes you have a 'service_role' key or similar for backend operations
-- For client-side upload with anon key, you might need a different policy or rely on RLS on the bucket itself.
-- For simplicity, the client-side upload will work with the public bucket and anon key.
-- If you want to restrict uploads to authenticated users, you'd need to set up Supabase Auth and use a signed URL or server action.
-- For this demo, the client-side upload will work with the public bucket and anon key.
