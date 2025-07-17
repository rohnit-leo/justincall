-- First, let's ensure the table exists and has the right structure
CREATE TABLE IF NOT EXISTS gallery_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  url TEXT NOT NULL,
  name TEXT,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add unique constraint if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'unique_gallery_image_url'
    ) THEN
        ALTER TABLE gallery_images ADD CONSTRAINT unique_gallery_image_url UNIQUE (url);
    END IF;
END $$;

-- Clear existing data and insert fresh images
DELETE FROM gallery_images;

-- Insert gallery images with proper paths
INSERT INTO gallery_images (url, name, uploaded_at) VALUES
('/images/packing-red-shirts.jpeg', 'Professional Packing of Clothes', NOW()),
('/images/packing-blue-sofa.jpeg', 'Expert Sofa Wrapping Service', NOW()),
('/images/loading-truck-yellow-vests.jpeg', 'Efficient Truck Loading Process', NOW()),
('/images/carrying-box-blue-uniforms.jpeg', 'Team Carrying Boxes Safely', NOW()),
('/images/delivery-exchange.jpeg', 'Smooth Delivery Handover', NOW()),
('/images/packing-living-room-blue.jpeg', 'Complete Living Room Packing', NOW()),
('/images/unloading-house.jpeg', 'Careful Unloading at New Home', NOW()),
('/images/wrapped-living-room.jpeg', 'Furniture Protection with Quality Wrapping', NOW()),
('/images/movers-plant-box.jpeg', 'Handling Plants and Fragile Items', NOW()),
('/images/loading-truck-inside.jpeg', 'Inside View of Loaded Moving Truck', NOW());
