import Image from "next/image"
import Link from "next/link"
import {
  Home,
  Building,
  Truck,
  Package,
  Star,
  Phone,
  Lightbulb,
  Handshake,
  Clock,
  ShieldCheck,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import AnnouncementBar from "@/components/announcement-bar"

export default function HomePage() {
  const services = [
    {
      icon: Home,
      title: "Home Relocation",
      description: "End-to-end residential shifting service: packing, loading, transport, unloading, and unpacking.",
    },
    {
      icon: Building,
      title: "Office Shifting",
      description: "Well-coordinated business/office relocation with minimal downtime and safe equipment handling.",
    },
    {
      icon: Truck,
      title: "Local & Outstation Moving",
      description: "Within Tirupati or long-distance moves across Andhra Pradesh and beyond.",
    },
    {
      icon: Package,
      title: "Packing & Unpacking",
      description:
        "Use of durable, high-grade materials to pack everything from furniture to electronics and fragile items.",
    },
  ]

  const howItWorksSteps = [
    {
      step: "1",
      title: "Get a Free Quote",
      description:
        "Contact us via phone or WhatsApp with your moving details to receive a transparent and competitive quote.",
      icon: Phone,
    },
    {
      step: "2",
      title: "Pre-Move Survey",
      description:
        "Our experts conduct a thorough survey to assess your belongings and plan the logistics for a smooth move.",
      icon: Lightbulb,
    },
    {
      step: "3",
      title: "Professional Packing",
      description:
        "Our trained staff uses high-quality materials to securely pack all your items, from fragile to bulky.",
      icon: Package,
    },
    {
      step: "4",
      title: "Safe Transportation",
      description:
        "Your belongings are loaded onto well-maintained vehicles and transported safely to your new destination.",
      icon: Truck,
    },
    {
      step: "5",
      title: "Unpacking & Arrangement",
      description:
        "Upon arrival, we carefully unload, unpack, and assist with arranging your items as per your instructions.",
      icon: Home,
    },
  ]

  const whyChooseUsFeatures = [
    { icon: ShieldCheck, text: "Experienced & trained staff" },
    { icon: DollarSign, text: "Affordable & transparent pricing" },
    { icon: Handshake, text: "Customized moving plans" },
    { icon: Clock, text: "Timely pickup and delivery" },
    { icon: Package, text: "Full-service solutions with premium packing material" },
    { icon: Star, text: "Trusted by homeowners, professionals, and businesses" },
  ]

  const testimonials = [
    {
      quote: "Handled our entire 3BHK move, including fragile items – not a single scratch!",
      author: "Anil Joshi",
    },
    {
      quote: "Used for office relocation – fast, efficient, and cost-effective.",
      author: "Sneha Reddy, Axis Bank",
    },
    {
      quote: "Excellent packing quality and on-time delivery. Stress-free!",
      author: "Karthik M.",
    },
    {
      quote: "Polite and professional team – shifted our home perfectly.",
      author: "Priya Latha",
    },
    {
      quote: "House shifting was smooth. Highly recommend them!",
      author: "Ravi Kumar",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-jic-black text-white overflow-hidden">
        <Image
          src="/images/unloading-house.jpeg"
          alt="Moving truck and boxes"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          priority
        />
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in-up">
              Your Stress-Free Move Starts Here
            </h1>
            <p className="text-lg md:text-xl text-gray-200 animate-fade-in-up delay-200">
              Best Packers and Movers in Tirupati – Safe. Fast. Affordable. Just One Call Away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in-up delay-400">
              <Button
                asChild
                className="bg-jic-red text-white hover:bg-red-700 px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <a
                  href="https://wa.me/919989113003?text=Hello%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20my%20move."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Free Quote
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-jic-red px-8 py-3 text-lg font-semibold rounded-full shadow-lg bg-transparent transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Announcement Bar */}
      <AnnouncementBar
        messages={[
          "🎉 LIMITED TIME: Get 20% OFF on your first home relocation booking this month!",
          "⚡ INSTANT QUOTE: WhatsApp us your requirements and get pricing in under 5 minutes!",
          "🏆 AWARD WINNING: Rated #1 Packers & Movers in Tirupati by 5000+ satisfied customers!",
          "🔒 100% SAFE: Zero damage guarantee with comprehensive insurance coverage!",
          "🚀 LIGHTNING FAST: Same-day local shifting available - book now!",
          "💎 PREMIUM SERVICE: Professional team with 10+ years of moving expertise!",
        ]}
        bgColor="bg-gradient-to-r from-jic-red to-red-600"
        textColor="text-white"
        duration="35s"
      />

      {/* Company Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jic-beige dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-jic-black dark:text-white">
                Your Trusted Relocation Partner in Tirupati
              </h2>
              <p className="max-w-[600px] text-jic-gray md:text-lg dark:text-gray-300 leading-relaxed">
                Just In Call is a trusted name for reliable and professional packers and movers services in Tirupati.
                Whether it's a home or office move, local or outstation relocation, we ensure that your belongings are
                packed securely, transported safely, and delivered on time — all with a stress-free experience.
              </p>
              <p className="max-w-[600px] text-jic-gray md:text-lg dark:text-gray-300 leading-relaxed">
                Our trained staff, high-quality packing materials, and fleet of well-maintained vehicles ensure a smooth
                relocation every time. We are committed to providing affordable and transparent pricing with customized
                moving plans to suit your specific needs.
              </p>
              <Button
                asChild
                className="bg-jic-red hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Link href="/pricing">View Our Pricing</Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/movers-plant-box.jpeg"
                alt="Packers and Movers at work"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-jic-black dark:text-white">
              Our Comprehensive Services
            </h2>
            <p className="max-w-[900px] mx-auto text-jic-gray md:text-xl dark:text-gray-300">
              We offer a wide range of relocation and logistics services tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800"
              >
                <div className="bg-jic-red/10 text-jic-red p-4 rounded-full mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 text-jic-black dark:text-white">
                  {service.title}
                </CardTitle>
                <CardContent className="text-jic-gray text-sm dark:text-gray-400 p-0">
                  {service.description}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <Button
              asChild
              className="bg-jic-red hover:bg-red-700 text-white px-8 py-3 text-lg rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dynamic Announcement Bar */}
      <AnnouncementBar
        messages={[
          "📦 EXPERT PACKING: Specialized bubble wrap & custom crates for your precious belongings!",
          "🏢 OFFICE RELOCATION: Minimize downtime with our strategic business moving solutions!",
          "🌍 LONG DISTANCE: Moving to another city? We cover all major routes across India!",
          "🔧 FURNITURE ASSEMBLY: Professional dismantling and reassembly of all furniture types!",
          "📋 FREE SURVEY: Get a detailed pre-move assessment at absolutely no cost!",
          "🎯 CUSTOM SOLUTIONS: Tailored moving plans designed specifically for your unique needs!",
        ]}
        bgColor="bg-gradient-to-r from-jic-blue to-blue-600"
        textColor="text-white"
        duration="40s"
      />

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jic-dark-bg text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Our Process Works</h2>
            <p className="max-w-[900px] mx-auto text-gray-300 md:text-xl">
              We follow a simple, efficient, and transparent process to ensure your move is seamless.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative flex items-center justify-center w-16 h-16 bg-jic-red rounded-full text-white text-2xl font-bold border-4 border-gray-700">
                  {step.step}
                  <div className="absolute -bottom-2 -right-2 bg-jic-red p-2 rounded-full">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jic-blue-light dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/carrying-box-blue-uniforms.jpeg"
                alt="Happy customer with moving boxes"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-jic-black dark:text-white">
                Why Choose Just In Call?
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-jic-gray md:text-lg dark:text-gray-300">
                {whyChooseUsFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
                  >
                    <feature.icon className="h-6 w-6 text-jic-red flex-shrink-0 mt-1" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-jic-black dark:text-white">
              What Our Customers Say
            </h2>
            <p className="max-w-[900px] mx-auto text-jic-gray md:text-xl dark:text-gray-300">
              Hear from our satisfied clients about their stress-free moving experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center bg-jic-light-gray dark:bg-gray-800"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardContent className="text-jic-gray italic mb-4 p-0 leading-relaxed dark:text-gray-300">
                  &quot;{testimonial.quote}&quot;
                </CardContent>
                <CardTitle className="text-lg font-semibold text-jic-red">- {testimonial.author}</CardTitle>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Announcement Bar */}
      <AnnouncementBar
        messages={[
          "🌟 CUSTOMER SATISFACTION: 99.8% customer satisfaction rate - your happiness is our priority!",
          "🚛 MODERN FLEET: GPS-tracked vehicles with real-time location updates for peace of mind!",
          "💰 BEST PRICES: Compare our rates - we guarantee the most competitive pricing in Tirupati!",
          "🛡️ FULLY INSURED: Complete protection for your belongings during transit and handling!",
          "⏰ 24/7 SUPPORT: Round-the-clock customer service for all your moving queries and concerns!",
          "🏅 CERTIFIED TEAM: All our staff are background-verified and professionally trained!",
        ]}
        bgColor="bg-gradient-to-r from-jic-yellow-accent to-yellow-500"
        textColor="text-jic-black"
        duration="45s"
      />

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jic-black text-white text-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Make Your Move?</h2>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Visit our contact page to get a free quote or reach out to us directly.
          </p>
          <Button
            asChild
            className="bg-jic-red hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold mt-8 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
