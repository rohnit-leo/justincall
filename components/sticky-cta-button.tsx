"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StickyCTAButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        asChild
        className="bg-jic-red hover:bg-red-700 text-white px-6 py-4 rounded-full shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 border-2 border-white"
      >
        <a
          href="tel:+919989113003"
          className="flex items-center gap-3 text-lg font-bold"
          aria-label="Call Just In Call Packers and Movers"
        >
          <Phone className="h-6 w-6" />
          <span className="hidden sm:inline">Call Now</span>
          <span className="sm:hidden">Call</span>
        </a>
      </Button>
    </div>
  )
}
