import Image from "next/image"
import {
  Home,
  Building,
  Truck,
  Package,
  Box,
  Users,
  MapPin,
  CalendarCheck,
  ShieldCheck,
  FileText,
  Tag,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import AnnouncementBar from "@/components/announcement-bar"

export const metadata = {
  title: "Our Services | Just In Call Packers and Movers",
  description:
    "Explore comprehensive home relocation, office shifting, local & outstation moving, and professional packing & unpacking services by Just In Call Packers and Movers in Tirupati.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Home Relocation",
      description:
        "Our end-to-end residential shifting service ensures a smooth transition to your new home. We handle everything from meticulous packing and careful loading to secure transport, efficient unloading, and precise unpacking. Your household items, from delicate decor to bulky furniture, are treated with the utmost care.",
      image: "/images/packing-living-room-blue.jpeg",
      features: [
        { icon: CalendarCheck, text: "Pre-move survey and planning" },
        { icon: Box, text: "High-quality packing materials" },
        { icon: Users, text: "Careful handling of fragile items" },
        { icon: Package, text: "Disassembly and reassembly of furniture" },
        { icon: Truck, text: "Safe and timely transportation" },
        { icon: Home, text: "Unpacking and arrangement at the new location" },
      ],
    },
    {
      icon: Building,
      title: "Office Shifting",
      description:
        "Minimize downtime and ensure the safe transfer of your business assets with our professional office shifting services. We understand the complexities of commercial moves and work efficiently to relocate your office equipment, documents, and furniture with precision and security.",
      image: "/images/loading-truck-yellow-vests.jpeg",
      features: [
        { icon: CalendarCheck, text: "Strategic planning to minimize business disruption" },
        { icon: ShieldCheck, text: "Secure packing for electronics and sensitive documents" },
        { icon: Truck, text: "Specialized equipment for heavy machinery" },
        { icon: Package, text: "Efficient loading and unloading" },
        { icon: Building, text: "Systematic unpacking and setup at the new office" },
        { icon: Users, text: "Dedicated project manager for coordination" },
      ],
    },
    {
      icon: Truck,
      title: "Local & Outstation Moving",
      description:
        "Whether you're moving within Tirupati or across states, Just In Call provides reliable local and outstation moving solutions. Our fleet of well-maintained vehicles and experienced drivers ensure your belongings reach their destination safely and on schedule, no matter the distance.",
      image: "/images/carrying-box-blue-uniforms.jpeg",
      features: [
        { icon: CalendarCheck, text: "Flexible scheduling for local moves" },
        { icon: FileText, text: "Inter-state permits and documentation handling" },
        { icon: MapPin, text: "GPS-enabled vehicles for real-time tracking" },
        { icon: Users, text: "Experienced long-haul drivers" },
        { icon: ShieldCheck, text: "Transit insurance options" },
        { icon: Home, text: "Door-to-door delivery" },
      ],
    },
    {
      icon: Package,
      title: "Packing & Unpacking",
      description:
        "The foundation of a successful move lies in superior packing. We use durable, high-grade packing materials and proven techniques to protect everything from your most fragile heirlooms to large furniture and electronics. Our team also offers professional unpacking services to help you settle in quickly.",
      image: "/images/packing-red-shirts.jpeg",
      features: [
        { icon: Box, text: "Customized packing solutions for all items" },
        { icon: Package, text: "Bubble wrap, corrugated sheets, moving blankets" },
        { icon: ShieldCheck, text: "Special crates for delicate and valuable items" },
        { icon: Tag, text: "Labeling and inventory management" },
        { icon: Home, text: "Systematic unpacking and debris removal" },
        { icon: Users, text: "Assistance with basic arrangement" },
      ],
    },
  ]

  return (
    <div className="bg-jic-light-gray dark:bg-gray-900">
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-jic-black text-white text-center overflow-hidden">
        <Image
          src="/images/loading-truck-inside.jpeg"
          alt="Our Services"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          priority
        />
        <div className="container relative z-10 px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-fade-in-up">
            Our Professional Services
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300 animate-fade-in-up delay-200">
            Comprehensive relocation solutions designed to make your move effortless and secure.
          </p>
        </div>
      </section>

      {/* Enhanced Announcement Bar for Services */}
      <AnnouncementBar
        messages={[
          "🏡 HOME EXPERTS: Specialized residential moving with 15+ years of experience!",
          "🏢 BUSINESS SOLUTIONS: Corporate relocations with minimal downtime guarantee!",
          "🚚 DISTANCE NO BARRIER: Local to international moves - we handle it all!",
          "📦 PACKING MASTERS: Custom packaging solutions for every item type!",
          "🛡️ DAMAGE-FREE PROMISE: Zero tolerance policy for damaged goods!",
          "⚡ RAPID RESPONSE: Emergency moving services available 24/7!",
        ]}
        bgColor="bg-gradient-to-r from-indigo-600 to-purple-600"
        textColor="text-white"
        duration="30s"
      />

      {services.map((service, index) => (
        <section
          key={index}
          className={`w-full py-12 md:py-24 lg:py-32 ${index % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-jic-blue-light dark:bg-gray-900"}`}
        >
          <div className="container px-4 md:px-6">
            <div
              className={`grid gap-8 lg:grid-cols-2 lg:gap-12 items-center ${index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`space-y-6 ${index % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center gap-3 text-jic-red dark:text-jic-red">
                  <service.icon className="h-8 w-8" />
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-jic-black dark:text-white">
                    {service.title}
                  </h2>
                </div>
                <p className="text-jic-gray md:text-lg dark:text-gray-300 leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <Card
                      key={i}
                      className="p-4 flex items-start gap-3 bg-white dark:bg-gray-800 shadow-md rounded-lg transform hover:scale-105 transition-transform duration-300"
                    >
                      <feature.icon className="h-5 w-5 text-jic-red flex-shrink-0 mt-1" />
                      <span className="text-jic-gray dark:text-gray-300 text-sm">{feature.text}</span>
                    </Card>
                  ))}
                </div>
                <Button
                  asChild
                  className="bg-jic-red hover:bg-red-700 text-white mt-6 px-6 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <a
                    href={`https://wa.me/919989113003?text=Hello%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get a Quote for {service.title}
                  </a>
                </Button>
              </div>
              <div
                className={`relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl ${index % 2 !== 0 ? "lg:col-start-1" : ""}`}
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="w-full py-12 md:py-24 lg:py-32 bg-jic-black text-white text-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Move?</h2>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Contact us today for a free consultation and let us handle your next move with expertise and care.
          </p>
          <Button
            asChild
            className="bg-white text-jic-red hover:bg-gray-100 px-8 py-3 text-lg font-semibold mt-8 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <a
              href="https://wa.me/919989113003?text=Hello%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20my%20move."
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Your Free Quote
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
