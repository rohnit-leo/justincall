"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export default function WhatsAppContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const { name, phone, email, service, message } = formData
    const whatsappNumber = "919989113003" // +91 9989113003

    let prefilledMessage = `Hello Just In Call Packers and Movers,`
    if (name) prefilledMessage += `\nMy name is: ${name}`
    if (phone) prefilledMessage += `\nMy phone number is: ${phone}`
    if (email) prefilledMessage += `\nMy email is: ${email}`
    if (service) prefilledMessage += `\nI am interested in: ${service}`
    if (message) prefilledMessage += `\nMy message: ${message}`
    else prefilledMessage += `\nI would like to inquire about your services.`

    const encodedMessage = encodeURIComponent(prefilledMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Simulate a small delay for better UX before redirecting
    setTimeout(() => {
      window.open(whatsappUrl, "_blank")

      toast({
        title: "Redirecting to WhatsApp!",
        description: "Your message details have been pre-filled.",
      })

      // Optionally clear form after submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 500) // 0.5 second delay
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email (Optional)</Label>
        <Input id="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="service">Interested Service (e.g., Home Relocation)</Label>
        <Input
          id="service"
          placeholder="e.g., 2 BHK Home Relocation"
          value={formData.service}
          onChange={handleChange}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us more about your moving needs..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
        />
      </div>
      <Button type="submit" className="w-full bg-jic-red hover:bg-red-700 text-white" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Redirecting...
          </>
        ) : (
          "Get a Quote on WhatsApp"
        )}
      </Button>
    </form>
  )
}
