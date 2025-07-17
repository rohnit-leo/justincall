-- This script inserts initial images into the gallery_images table.
-- It uses ON CONFLICT DO NOTHING to prevent errors if the script is run multiple times
-- and the images (based on URL) already exist.

INSERT INTO gallery_images (url, name) VALUES
('/images/packing-red-shirts.jpeg', 'Careful Packing of Clothes'),
('/images/packing-blue-sofa.jpeg', 'Professional Sofa Wrapping'),
('/images/loading-truck-yellow-vests.jpeg', 'Efficient Truck Loading'),
('/images/carrying-box-blue-uniforms.jpeg', 'Team Carrying Boxes'),
('/images/delivery-exchange.jpeg', 'Smooth Delivery Handover'),
('/images/packing-living-room-blue.jpeg', 'Living Room Packing Service'),
('/images/unloading-house.jpeg', 'Unloading at New Home'),
('/images/wrapped-living-room.jpeg', 'Furniture Wrapped for Protection'),
('/images/movers-plant-box.jpeg', 'Handling Plants and Boxes'),
('/images/loading-truck-inside.jpeg', 'Inside a Loaded Moving Truck')
ON CONFLICT (url) DO NOTHING;
