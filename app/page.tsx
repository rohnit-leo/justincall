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
  Award,
  Users,
  MapPin,
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
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Building,
      title: "Office Shifting",
      description: "Well-coordinated business/office relocation with minimal downtime and safe equipment handling.",
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: Truck,
      title: "Local & Outstation Moving",
      description: "Within Tirupati or long-distance moves across Andhra Pradesh and beyond.",
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: Package,
      title: "Packing & Unpacking",
      description:
        "Use of durable, high-grade materials to pack everything from furniture to electronics and fragile items.",
      gradient: "from-pink-500 to-rose-600",
    },
  ]

  const howItWorksSteps = [
    {
      step: "1",
      title: "Get a Free Quote",
      description:
        "Contact us via phone or WhatsApp with your moving details to receive a transparent and competitive quote.",
      icon: Phone,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      step: "2",
      title: "Pre-Move Survey",
      description:
        "Our experts conduct a thorough survey to assess your belongings and plan the logistics for a smooth move.",
      icon: Lightbulb,
      color: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
    {
      step: "3",
      title: "Professional Packing",
      description:
        "Our trained staff uses high-quality materials to securely pack all your items, from fragile to bulky.",
      icon: Package,
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      step: "4",
      title: "Safe Transportation",
      description:
        "Your belongings are loaded onto well-maintained vehicles and transported safely to your new destination.",
      icon: Truck,
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
    {
      step: "5",
      title: "Unpacking & Arrangement",
      description:
        "Upon arrival, we carefully unload, unpack, and assist with arranging your items as per your instructions.",
      icon: Home,
      color: "bg-gradient-to-br from-pink-500 to-red-600",
    },
  ]

  const whyChooseUsFeatures = [
    { icon: ShieldCheck, text: "Experienced & trained staff", color: "text-blue-600" },
    { icon: DollarSign, text: "Affordable & transparent pricing", color: "text-green-600" },
    { icon: Handshake, text: "Customized moving plans", color: "text-purple-600" },
    { icon: Clock, text: "Timely pickup and delivery", color: "text-orange-600" },
    { icon: Package, text: "Full-service solutions with premium packing material", color: "text-pink-600" },
    { icon: Star, text: "Trusted by homeowners, professionals, and businesses", color: "text-yellow-600" },
  ]

  const stats = [
    { icon: Users, number: "10,000+", label: "Happy Customers", color: "from-blue-500 to-cyan-500" },
    { icon: Truck, number: "50+", label: "Moving Vehicles", color: "from-green-500 to-emerald-500" },
    { icon: Award, number: "15+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
    { icon: MapPin, number: "100+", label: "Cities Covered", color: "from-orange-500 to-red-500" },
  ]

  const testimonials = [
    {
      quote: "Handled our entire 3BHK move, including fragile items – not a single scratch!",
      author: "Anil Joshi",
      rating: 5,
      avatar: "AJ",
    },
    {
      quote: "Used for office relocation – fast, efficient, and cost-effective.",
      author: "Sneha Reddy, Axis Bank",
      rating: 5,
      avatar: "SR",
    },
    {
      quote: "Excellent packing quality and on-time delivery. Stress-free!",
      author: "Karthik M.",
      rating: 5,
      avatar: "KM",
    },
    {
      quote: "Polite and professional team – shifted our home perfectly.",
      author: "Priya Latha",
      rating: 5,
      avatar: "PL",
    },
    {
      quote: "House shifting was smooth. Highly recommend them!",
      author: "Ravi Kumar",
      rating: 5,
      avatar: "RK",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
        <Image
          src="/images/unloading-house.jpeg"
          alt="Moving truck and boxes"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          priority
        />

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-jic-red/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight animate-slide-in-left bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Your Stress-Free Move Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 animate-slide-in-right max-w-3xl mx-auto leading-relaxed">
              Best Packers and Movers in Tirupati – Safe. Fast. Affordable. Just One Call Away!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-bounce-in">
              <Button
                asChild
                className="btn-primary text-white px-10 py-4 text-lg font-bold rounded-full shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110"
              >
                <a
                  href="https://wa.me/919989113003?text=Hello%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20my%20move."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Get a Free Quote
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 text-lg font-bold rounded-full shadow-2xl bg-transparent transition-all duration-300 ease-in-out transform hover:scale-110"
              >
                <Link href="/services">
                  <Package className="mr-3 h-5 w-5" />
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Announcement Bar - Slower and Continuous */}
      <AnnouncementBar
        messages={[
          "🎉 LIMITED TIME: Get 20% OFF on your first home relocation booking this month!",
          "⚡ INSTANT QUOTE: WhatsApp us your requirements and get pricing in under 5 minutes!",
          "🏆 AWARD WINNING: Rated #1 Packers & Movers in Tirupati by 5000+ satisfied customers!",
          "🔒 100% SAFE: Zero damage guarantee with comprehensive insurance coverage!",
          "🚀 LIGHTNING FAST: Same-day local shifting available - book now!",
          "💎 PREMIUM SERVICE: Professional team with 10+ years of moving expertise!",
        ]}
        bgColor="bg-gradient-to-r from-jic-red via-red-600 to-jic-red"
        textColor="text-white"
        duration="150s"
      />

      {/* Stats Section */}
      <section className="w-full py-16 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-jic-black dark:text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-jic-beige to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-jic-black dark:text-white">
                Your Trusted Relocation Partner in{" "}
                <span className="bg-gradient-to-r from-jic-red to-red-600 bg-clip-text text-transparent">Tirupati</span>
              </h2>
              <p className="text-lg md:text-xl text-jic-gray dark:text-gray-300 leading-relaxed">
                Just In Call is a trusted name for reliable and professional packers and movers services in Tirupati.
                Whether it's a home or office move, local or outstation relocation, we ensure that your belongings are
                packed securely, transported safely, and delivered on time — all with a stress-free experience.
              </p>
              <p className="text-lg md:text-xl text-jic-gray dark:text-gray-300 leading-relaxed">
                Our trained staff, high-quality packing materials, and fleet of well-maintained vehicles ensure a smooth
                relocation every time. We are committed to providing affordable and transparent pricing with customized
                moving plans to suit your specific needs.
              </p>
              <Button
                asChild
                className="btn-primary text-white px-8 py-4 text-lg rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Link href="/pricing">
                  <DollarSign className="mr-2 h-5 w-5" />
                  View Our Pricing
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl animate-slide-in-right">
              <Image
                src="/images/movers-plant-box.jpeg"
                alt="Packers and Movers at work"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-6 mb-16">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-jic-black dark:text-white">
              Our Comprehensive{" "}
              <span className="bg-gradient-to-r from-jic-red to-red-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-jic-gray dark:text-gray-300">
              We offer a wide range of relocation and logistics services tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="enhanced-card flex flex-col items-center p-8 text-center group animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`bg-gradient-to-r ${service.gradient} text-white p-6 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <service.icon className="h-10 w-10" />
                </div>
                <CardTitle className="text-xl font-bold mb-4 text-jic-black dark:text-white group-hover:text-jic-red transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardContent className="text-jic-gray text-sm dark:text-gray-400 p-0 leading-relaxed">
                  {service.description}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16">
            <Button
              asChild
              className="btn-primary text-white px-10 py-4 text-lg rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href="/services">
                <Package className="mr-2 h-5 w-5" />
                Explore All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dynamic Announcement Bar - Slower and Continuous */}
      <AnnouncementBar
        messages={[
          "📦 EXPERT PACKING: Specialized bubble wrap & custom crates for your precious belongings!",
          "🏢 OFFICE RELOCATION: Minimize downtime with our strategic business moving solutions!",
          "🌍 LONG DISTANCE: Moving to another city? We cover all major routes across India!",
          "🔧 FURNITURE ASSEMBLY: Professional dismantling and reassembly of all furniture types!",
          "📋 FREE SURVEY: Get a detailed pre-move assessment at absolutely no cost!",
          "🎯 CUSTOM SOLUTIONS: Tailored moving plans designed specifically for your unique needs!",
        ]}
        bgColor="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
        textColor="text-white"
        duration="180s"
      />

      {/* How It Works Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-jic-red/20 to-transparent"></div>
        </div>

        <div className="container px-4 md:px-6 text-center relative z-10">
          <div className="space-y-6 mb-16">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              How Our{" "}
              <span className="bg-gradient-to-r from-jic-red to-red-400 bg-clip-text text-transparent">Process</span>{" "}
              Works
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
              We follow a simple, efficient, and transparent process to ensure your move is seamless.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-6 p-8 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl shadow-2xl backdrop-blur-sm border border-gray-700/50 group hover:border-jic-red/50 transition-all duration-300 animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <div
                    className={`flex items-center justify-center w-20 h-20 ${step.color} rounded-full text-white text-2xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {step.step}
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-full shadow-lg">
                    <step.icon className="h-6 w-6 text-jic-red" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-jic-red transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-jic-blue-light to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl animate-slide-in-left">
              <Image
                src="/images/carrying-box-blue-uniforms.jpeg"
                alt="Happy customer with moving boxes"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="space-y-8 animate-slide-in-right">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-jic-black dark:text-white">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-jic-red to-red-600 bg-clip-text text-transparent">
                  Just In Call?
                </span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUsFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-bounce-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <feature.icon className={`h-8 w-8 ${feature.color} flex-shrink-0 mt-1`} />
                    <span className="text-jic-gray dark:text-gray-300 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-6 mb-16">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-jic-black dark:text-white">
              What Our{" "}
              <span className="bg-gradient-to-r from-jic-red to-red-600 bg-clip-text text-transparent">Customers</span>{" "}
              Say
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-jic-gray dark:text-gray-300">
              Hear from our satisfied clients about their stress-free moving experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="enhanced-card p-8 flex flex-col items-center text-center group animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-jic-red to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  {testimonial.avatar}
                </div>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardContent className="text-jic-gray italic mb-6 p-0 leading-relaxed dark:text-gray-300 text-lg">
                  &quot;{testimonial.quote}&quot;
                </CardContent>
                <CardTitle className="text-lg font-bold text-jic-red">- {testimonial.author}</CardTitle>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Announcement Bar - Slower and Continuous */}
      <AnnouncementBar
        messages={[
          "🌟 CUSTOMER SATISFACTION: 99.8% customer satisfaction rate - your happiness is our priority!",
          "🚛 MODERN FLEET: GPS-tracked vehicles with real-time location updates for peace of mind!",
          "💰 BEST PRICES: Compare our rates - we guarantee the most competitive pricing in Tirupati!",
          "🛡️ FULLY INSURED: Complete protection for your belongings during transit and handling!",
          "⏰ 24/7 SUPPORT: Round-the-clock customer service for all your moving queries and concerns!",
          "🏅 CERTIFIED TEAM: All our staff are background-verified and professionally trained!",
        ]}
        bgColor="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"
        textColor="text-white"
        duration="200s"
      />

      {/* Contact Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-jic-red/20 to-transparent"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Ready to Make Your{" "}
            <span className="bg-gradient-to-r from-jic-red to-red-400 bg-clip-text text-transparent">Move?</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-10 leading-relaxed">
            Visit our contact page to get a free quote or reach out to us directly. Your stress-free move is just one
            call away!
          </p>
          <Button
            asChild
            className="btn-primary text-white px-12 py-4 text-xl font-bold rounded-full shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <Link href="/contact">
              <Phone className="mr-3 h-6 w-6" />
              Contact Us Now
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
