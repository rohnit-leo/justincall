import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnnouncementBar from "@/components/announcement-bar"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Just In Call Packers and Movers – Safe. Fast. Affordable.",
  description:
    "Best Packers and Movers in Tirupati for home relocation, office shifting, local & outstation moving. Get a stress-free moving experience with Just In Call.",
  keywords:
    "packers and movers, Tirupati, home relocation, office shifting, local moving, outstation moving, affordable packers, reliable movers, logistics, Andhra Pradesh",
  openGraph: {
    title: "Just In Call Packers and Movers – Safe. Fast. Affordable.",
    description:
      "Best Packers and Movers in Tirupati for home relocation, office shifting, local & outstation moving. Get a stress-free moving experience with Just In Call.",
    url: "https://www.justincallpackers.com", // Replace with your actual domain
    siteName: "Just In Call Packers and Movers",
    images: [
      {
        url: "/jic-logo.png", // Using the actual logo for Open Graph
        width: 1200,
        height: 630,
        alt: "Just In Call Packers and Movers Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Just In Call Packers and Movers – Safe. Fast. Affordable.",
    description:
      "Best Packers and Movers in Tirupati for home relocation, office shifting, local & outstation moving. Get a stress-free moving experience with Just In Call.",
    images: ["/jic-logo.png"], // Using the actual logo for Twitter card
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
        <Toaster />
      </body>
    </html>
  )
}
