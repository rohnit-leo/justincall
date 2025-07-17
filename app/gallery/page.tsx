import Image from "next/image"
import { createServerSupabaseClient } from "@/lib/supabase"
import { Card } from "@/components/ui/card"
import AnnouncementBar from "@/components/announcement-bar"

export const metadata = {
  title: "Gallery | Just In Call Packers and Movers",
  description:
    "View images of our professional packing, moving vehicles, and successful relocations. See Just In Call Packers and Movers in action.",
}

interface GalleryImage {
  id: string
  url: string
  name: string
}

// Fallback gallery images if database is empty
const fallbackImages = [
  { id: "1", url: "/images/packing-red-shirts.jpeg", name: "Careful Packing of Clothes" },
  { id: "2", url: "/images/packing-blue-sofa.jpeg", name: "Professional Sofa Wrapping" },
  { id: "3", url: "/images/loading-truck-yellow-vests.jpeg", name: "Efficient Truck Loading" },
  { id: "4", url: "/images/carrying-box-blue-uniforms.jpeg", name: "Team Carrying Boxes" },
  { id: "5", url: "/images/delivery-exchange.jpeg", name: "Smooth Delivery Handover" },
  { id: "6", url: "/images/packing-living-room-blue.jpeg", name: "Living Room Packing Service" },
  { id: "7", url: "/images/unloading-house.jpeg", name: "Unloading at New Home" },
  { id: "8", url: "/images/wrapped-living-room.jpeg", name: "Furniture Wrapped for Protection" },
  { id: "9", url: "/images/movers-plant-box.jpeg", name: "Handling Plants and Boxes" },
  { id: "10", url: "/images/loading-truck-inside.jpeg", name: "Inside a Loaded Moving Truck" },
]

export default async function GalleryPage() {
  const supabase = createServerSupabaseClient()

  let images: GalleryImage[] = []
  let error = null

  try {
    const { data, error: fetchError } = await supabase
      .from("gallery_images")
      .select("id, url, name")
      .order("uploaded_at", { ascending: false })

    if (fetchError) {
      console.error("Error fetching gallery images:", fetchError)
      error = fetchError
    } else {
      images = data || []
    }
  } catch (e) {
    console.error("Database connection error:", e)
    error = e
  }

  // Use fallback images if database is empty or has errors
  const displayImages = images.length > 0 ? images : fallbackImages

  return (
    <div className="bg-jic-light-gray dark:bg-gray-900">
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-jic-black text-white text-center overflow-hidden">
        <Image
          src="/images/wrapped-living-room.jpeg"
          alt="Our Gallery"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          priority
        />
        <div className="container relative z-10 px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-fade-in-up">
            Our Gallery
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300 animate-fade-in-up delay-200">
            See our team in action, from careful packing to secure transportation.
          </p>
        </div>
      </section>

      {/* Enhanced Announcement Bar for Gallery */}
      <AnnouncementBar
        messages={[
          "📸 REAL WORK: Authentic photos from actual customer relocations - no stock images!",
          "✨ QUALITY SHOWCASE: See our premium packing materials and professional techniques!",
          "🚚 FLEET DISPLAY: Modern trucks equipped with GPS tracking and safety features!",
          "⭐ SUCCESS STORIES: Over 10,000 successful relocations captured in our gallery!",
          "🔍 TRANSPARENCY: What you see is what you get - honest documentation of our services!",
          "🏆 AWARD WINNING: Gallery featuring our certified team and award-winning service quality!",
        ]}
        bgColor="bg-gradient-to-r from-purple-600 to-pink-600"
        textColor="text-white"
        duration="190s"
      />

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          {error && (
            <div className="mb-8 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
              <p className="text-sm">
                Note: Using sample images as database connection is not available. In production, these would be loaded
                from your gallery database.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayImages.map((image) => (
              <Card
                key={image.id}
                className="relative group overflow-hidden rounded-lg shadow-lg aspect-video bg-white dark:bg-gray-800 transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={image.url || "/placeholder.svg"}
                  alt={image.name || "Gallery image"}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-jic-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <p className="text-white text-lg font-semibold text-center">{image.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Announcement Bar */}
      <AnnouncementBar
        messages={[
          "📱 SHARE YOUR EXPERIENCE: Tag us on social media and get featured in our gallery!",
          "🎥 VIDEO TESTIMONIALS: Watch customer reviews and moving day highlights on our social channels!",
          "📅 BOOK NOW: Schedule your move and become our next success story!",
          "🎁 REFERRAL REWARDS: Refer friends and get exclusive discounts on your next move!",
        ]}
        bgColor="bg-gradient-to-r from-green-500 to-teal-600"
        textColor="text-white"
        duration="150s"
      />
    </div>
  )
}
