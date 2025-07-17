import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Linkedin, PinIcon as Pinterest } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-jic-black text-gray-300 py-12 md:py-16">
      <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Image
              src="/jic-logo.png"
              alt="Just In Call Packers and Movers Logo"
              width={180}
              height={50}
              className="h-auto w-auto max-h-12"
            />
            <span className="sr-only">Just In Call Packers and Movers</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Just In Call is your trusted partner for safe, fast, and affordable relocation services in Tirupati and
            beyond. We ensure a stress-free moving experience every time.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.instagram.com/justincallpackersandmovers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-jic-red transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/justiincallpackersandmovers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-jic-red transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/just-in-call-packers-and-movers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-jic-red transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.pinterest.com/justtincall/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-jic-red transition-colors"
            >
              <Pinterest className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <nav className="space-y-2">
            <Link href="/" className="block text-sm hover:text-jic-red transition-colors" prefetch={false}>
              Home
            </Link>
            <Link href="/services" className="block text-sm hover:text-jic-red transition-colors" prefetch={false}>
              Services
            </Link>
            <Link href="/pricing" className="block text-sm hover:text-jic-red transition-colors" prefetch={false}>
              Pricing
            </Link>
            <Link href="/gallery" className="block text-sm hover:text-jic-red transition-colors" prefetch={false}>
              Gallery
            </Link>
            <Link href="/contact" className="block text-sm hover:text-jic-red transition-colors" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-jic-red" />
              <a href="mailto:justtincall@gmail.com" className="hover:text-jic-red transition-colors">
                justtincall@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-jic-red" />
              <a href="tel:+919989113003" className="hover:text-jic-red transition-colors">
                9989113003
              </a>
              ,{" "}
              <a href="tel:+919908181947" className="hover:text-jic-red transition-colors">
                9908181947
              </a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-jic-red mt-1" />
              <span>7-71, MR Palli Rd, Vasavinagar, Sri Krishna Nagar, Tirupati, Andhra Pradesh 517501</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-jic-red" />
              <span>Working Hours: 24x7</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Find Us</h3>
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-700">
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
      <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Just In Call Packers and Movers. All rights reserved.{" "}
        <span className="block mt-2 md:inline-block md:mt-0">
          Developed by{" "}
          <a
            href="https://nexturex.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold nexturex-gradient hover:opacity-80 transition-opacity"
          >
            NextureX
          </a>
        </span>
      </div>
    </footer>
  )
}
