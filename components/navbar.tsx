"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/20 bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-md shadow-2xl">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <div className="logo-container">
            <Image
              src="/jic-logo.png"
              alt="Just In Call Packers and Movers Logo"
              width={160}
              height={45}
              className="h-auto w-auto max-h-12"
              priority
            />
          </div>
          <span className="sr-only">Just In Call Packers and Movers</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-all duration-300 hover:text-jic-red hover:scale-105 relative group"
              prefetch={false}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-jic-red to-red-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Button
            asChild
            className="btn-primary text-white px-8 py-3 rounded-full font-semibold text-sm shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 animate-pulse-glow"
          >
            <a
              href="https://wa.me/919989113003?text=Hello%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20my%20move."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="mr-2 h-4 w-4" /> Get a Quote
            </a>
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
          >
            <Link href="/" className="flex items-center gap-2 mb-8" prefetch={false} onClick={() => setIsOpen(false)}>
              <div className="logo-container bg-white">
                <Image
                  src="/jic-logo.png"
                  alt="Just In Call Packers and Movers Logo"
                  width={150}
                  height={40}
                  className="h-auto w-auto max-h-10"
                />
              </div>
            </Link>
            <nav className="grid gap-6 py-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-jic-black transition-all duration-300 hover:bg-gradient-to-r hover:from-jic-red/10 hover:to-red-100 hover:text-jic-red transform hover:scale-105 animate-slide-in-left dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-jic-red"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="w-full btn-primary text-white mt-6 px-6 py-3 rounded-full font-semibold shadow-lg animate-bounce-in"
              >
                <a
                  href="https://wa.me/919989113003?text=Hello%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20my%20move."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="mr-2 h-4 w-4" /> Get a Quote
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
