CREATE TABLE IF NOT EXISTS gallery_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  url TEXT NOT NULL,
  name TEXT,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- Policy for public read access (anyone can view images)
CREATE POLICY "Enable read access for all users" ON gallery_images
FOR SELECT USING (TRUE);

-- Policy for authenticated users to insert (admin can upload)
CREATE POLICY "Enable insert for authenticated users only" ON gallery_images
FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Policy for authenticated users to delete (admin can delete)
CREATE POLICY "Enable delete for authenticated users only" ON gallery_images
FOR DELETE USING (auth.role() = 'authenticated');
