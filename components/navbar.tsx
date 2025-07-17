"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" }, // Added Contact Us link
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-jic-black/90 backdrop-blur-sm dark:bg-gray-950/90 dark:border-gray-800">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image
            src="/jic-logo.png"
            alt="Just In Call Packers and Movers Logo"
            width={150}
            height={40}
            className="h-auto w-auto max-h-10"
            priority
          />
          <span className="sr-only">Just In Call Packers and Movers</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white transition-colors hover:text-jic-red dark:text-gray-300 dark:hover:text-jic-red"
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            className="bg-jic-red hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
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
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-gray-950">
            <Link href="/" className="flex items-center gap-2 mb-6" prefetch={false} onClick={() => setIsOpen(false)}>
              <Image
                src="/jic-logo.png"
                alt="Just In Call Packers and Movers Logo"
                width={150}
                height={40}
                className="h-auto w-auto max-h-10"
              />
            </Link>
            <nav className="grid gap-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium text-jic-black transition-colors hover:bg-gray-100 hover:text-jic-red dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-jic-red"
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-jic-red hover:bg-red-700 text-white mt-4 px-6 py-2 rounded-full shadow-md"
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
