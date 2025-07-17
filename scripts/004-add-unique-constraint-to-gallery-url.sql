-- Add a unique constraint to the 'url' column in the gallery_images table.
-- This is required for the ON CONFLICT clause in subsequent insert statements to work correctly.
ALTER TABLE gallery_images
ADD CONSTRAINT unique_gallery_image_url UNIQUE (url);
