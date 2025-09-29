"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Instagram } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for contacting Edithive. We will get back to you shortly.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-[#0d0d0d]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#d4af37] mb-16">Contact Us</h2>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-[#0d0d0d] border-2 border-[#d4af37] text-white placeholder:text-gray-400 focus:border-[#f5e08e] focus:bg-[#0D002B] rounded-lg p-4 text-lg"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[#0d0d0d] border-2 border-[#d4af37] text-white placeholder:text-gray-400 focus:border-[#f5e08e] focus:bg-[#0D002B] rounded-lg p-4 text-lg"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="bg-[#0d0d0d] border-2 border-[#d4af37] text-white placeholder:text-gray-400 focus:border-[#f5e08e] focus:bg-[#0D002B] rounded-lg p-4 text-lg resize-vertical"
            />
            <Button
              type="submit"
              className="w-full bg-[#d4af37] hover:bg-[#f5e08e] text-black font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-[#d4af37]/30 transition-all duration-300"
            >
              Send Message
            </Button>
          </form>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-8 mt-12">
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:text-[#f5e08e] transition-colors duration-300"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.684l-8.739 10.914 10.518 11.532H13.75L6.103 12.097 1.153 1.153h5.086l5.526 7.664L18.901 1.153zm-.332 18.067L5.597 2.8H3.324l13.682 18.42h2.096z" />
              </svg>
            </a>
            <a
              href="mailto:edithiveproductions09@gmail.com"
              className="text-[#d4af37] hover:text-[#f5e08e] transition-colors duration-300"
            >
              <Mail size={32} />
            </a>
            <a
              href="https://instagram.com/edithive_productions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:text-[#f5e08e] transition-colors duration-300"
            >
              <Instagram size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
