import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnnouncementBar from "@/components/announcement-bar"
import StickyCTAButton from "@/components/sticky-cta-button"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Just In Call Packers and Movers Tirupati - Best Moving Services in Andhra Pradesh",
  description:
    "Professional Packers and Movers in Tirupati offering safe, fast & affordable home relocation, office shifting, local & outstation moving services. Get free quotes! Call 9989113003",
  keywords:
    "packers and movers Tirupati, home relocation Tirupati, office shifting Tirupati, local moving Andhra Pradesh, outstation moving, affordable packers, reliable movers, logistics Tirupati, best movers Tirupati, household shifting, furniture moving",
  openGraph: {
    title: "Just In Call Packers and Movers Tirupati - Best Moving Services in Andhra Pradesh",
    description:
      "Professional Packers and Movers in Tirupati offering safe, fast & affordable home relocation, office shifting, local & outstation moving services. Get free quotes! Call 9989113003",
    url: "https://www.justincallpackers.com",
    siteName: "Just In Call Packers and Movers",
    images: [
      {
        url: "/jic-logo.png",
        width: 1200,
        height: 630,
        alt: "Just In Call Packers and Movers Tirupati - Professional Moving Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Just In Call Packers and Movers Tirupati - Best Moving Services in Andhra Pradesh",
    description:
      "Professional Packers and Movers in Tirupati offering safe, fast & affordable home relocation, office shifting, local & outstation moving services. Get free quotes! Call 9989113003",
    images: ["/jic-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://www.justincallpackers.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCTAButton />
        <Toaster />
      </body>
    </html>
  )
}
