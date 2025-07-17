import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Linkedin, PinIcon as Pinterest } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-300 py-16 md:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-jic-red/20 to-transparent"></div>
      </div>

      <div className="container grid grid-cols-1 gap-12 px-4 md:grid-cols-2 lg:grid-cols-4 md:px-6 relative z-10">
        <div className="space-y-6 animate-slide-in-left">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <div className="logo-container">
              <Image
                src="/jic-logo.png"
                alt="Just In Call Packers and Movers Logo"
                width={180}
                height={50}
                className="h-auto w-auto max-h-12"
              />
            </div>
            <span className="sr-only">Just In Call Packers and Movers</span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Just In Call is your trusted partner for safe, fast, and affordable relocation services in Tirupati and
            beyond. We ensure a stress-free moving experience every time.
          </p>
          <div className="flex space-x-4 mt-6">
            {[
              {
                href: "https://www.instagram.com/justincallpackersandmovers/",
                icon: Instagram,
                color: "hover:text-pink-400",
              },
              {
                href: "https://www.facebook.com/justiincallpackersandmovers/",
                icon: Facebook,
                color: "hover:text-blue-400",
              },
              {
                href: "https://www.linkedin.com/in/just-in-call-packers-and-movers/",
                icon: Linkedin,
                color: "hover:text-blue-300",
              },
              { href: "https://www.pinterest.com/justtincall/", icon: Pinterest, color: "hover:text-red-400" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-xl font-bold text-white bg-gradient-to-r from-jic-red to-red-400 bg-clip-text text-transparent">
            Quick Links
          </h3>
          <nav className="space-y-3">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "Pricing", href: "/pricing" },
              { name: "Gallery", href: "/gallery" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-sm hover:text-jic-red transition-all duration-300 hover:translate-x-2 hover:font-medium"
                prefetch={false}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-6 animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-xl font-bold text-white bg-gradient-to-r from-jic-red to-red-400 bg-clip-text text-transparent">
            Contact Us
          </h3>
          <div className="space-y-4 text-sm">
            {[
              {
                icon: Mail,
                content: (
                  <a href="mailto:justtincall@gmail.com" className="hover:text-jic-red transition-colors">
                    justtincall@gmail.com
                  </a>
                ),
              },
              {
                icon: Phone,
                content: (
                  <>
                    <a href="tel:+919989113003" className="hover:text-jic-red transition-colors">
                      9989113003
                    </a>
                    {", "}
                    <a href="tel:+919908181947" className="hover:text-jic-red transition-colors">
                      9908181947
                    </a>
                  </>
                ),
              },
              {
                icon: MapPin,
                content: "7-71, MR Palli Rd, Vasavinagar, Sri Krishna Nagar, Tirupati, Andhra Pradesh 517501",
              },
              { icon: Clock, content: "Working Hours: 24x7" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                <item.icon className="h-5 w-5 text-jic-red mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{item.content}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 animate-slide-in-right" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-xl font-bold text-white bg-gradient-to-r from-jic-red to-red-400 bg-clip-text text-transparent">
            Find Us
          </h3>
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-gray-700 shadow-2xl hover:shadow-jic-red/20 transition-all duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.9800000000002!2d79.41000000000001!3d13.630000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0b0b0b0b0b%3A0x0b0b0b0b0b0b0b0b!2sMR%20Palli%20Rd%2C%20Vasavinagar%2C%20Sri%20Krishna%20Nagar%2C%20Tirupati%2C%20Andhra%20Pradesh%20517501!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Just In Call Packers and Movers Location"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-800 pt-8 text-center text-sm text-gray-500 relative z-10">
        <div className="container px-4 md:px-6">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Just In Call Packers and Movers. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>Developed with ❤️ by</span>
            <a
              href="https://nexturex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold nexturex-gradient hover:opacity-80 transition-all duration-300 transform hover:scale-105"
            >
              NextureX
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
