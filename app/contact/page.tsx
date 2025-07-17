import type { Metadata } from "next"
import { Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsAppContactForm from "@/components/whatsapp-contact-form"
import Image from "next/image"
import AnnouncementBar from "@/components/announcement-bar"

export const metadata: Metadata = {
  title: "Contact Us | Just In Call Packers and Movers",
  description:
    "Get in touch with Just In Call Packers and Movers for a free quote or any inquiries. Contact us via WhatsApp, phone, or email.",
}

export default function ContactPage() {
  return (
    <div className="bg-jic-light-gray dark:bg-gray-900">
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-jic-black text-white text-center overflow-hidden">
        <Image
          src="/images/packing-blue-sofa.jpeg"
          alt="Get in Touch"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          priority
        />
        <div className="container relative z-10 px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-fade-in-up">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300 animate-fade-in-up delay-200">
            We're here to help with all your moving needs. Contact us for a free quote or any questions.
          </p>
        </div>
      </section>

      {/* Enhanced Announcement Bar for Contact */}
      <AnnouncementBar
        messages={[
          "📞 INSTANT RESPONSE: Call us now and speak to a moving expert within 30 seconds!",
          "💬 WHATSAPP READY: Chat with us 24/7 for immediate quotes and booking assistance!",
          "📧 EMAIL SUPPORT: Detailed queries answered within 2 hours during business days!",
          "📍 VISIT US: Drop by our Tirupati office for face-to-face consultation!",
          "🎯 PERSONALIZED SERVICE: Every customer gets dedicated attention and custom solutions!",
          "⚡ EMERGENCY MOVES: Last-minute relocations? We're your rapid response team!",
        ]}
        bgColor="bg-gradient-to-r from-orange-500 to-red-500"
        textColor="text-white"
        duration="170s"
      />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-jic-black dark:text-white">
                Contact Information
              </h2>
              <p className="text-jic-gray md:text-lg dark:text-gray-300 leading-relaxed">
                Reach out to us through any of the following channels. Our team is available 24x7 to assist you.
              </p>
              <div className="space-y-4 text-jic-gray dark:text-gray-300">
                <div className="flex items-center gap-3 p-4 bg-jic-blue-light/50 dark:bg-gray-800 rounded-lg shadow-md">
                  <Phone className="h-6 w-6 text-jic-red flex-shrink-0" />
                  <span>
                    Call Us:{" "}
                    <a href="tel:+919989113003" className="hover:underline font-medium">
                      9989113003
                    </a>
                    ,{" "}
                    <a href="tel:+919908181947" className="hover:underline font-medium">
                      9908181947
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-jic-blue-light/50 dark:bg-gray-800 rounded-lg shadow-md">
                  <Mail className="h-6 w-6 text-jic-red flex-shrink-0" />
                  <span>
                    Email:{" "}
                    <a href="mailto:justtincall@gmail.com" className="hover:underline font-medium">
                      justtincall@gmail.com
                    </a>
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-jic-blue-light/50 dark:bg-gray-800 rounded-lg shadow-md">
                  <MapPin className="h-6 w-6 text-jic-red flex-shrink-0 mt-1" />
                  <span>
                    Address: 7-71, MR Palli Rd, Vasavinagar, Sri Krishna Nagar, Tirupati, Andhra Pradesh 517501
                  </span>
                </div>
              </div>
            </div>
            <Card className="p-6 shadow-xl bg-jic-beige dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-jic-black dark:text-white">
                  Request a Quote on WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <WhatsAppContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jic-black text-white text-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Find Our Location</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-700 shadow-xl">
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
      </section>
    </div>
  )
}
