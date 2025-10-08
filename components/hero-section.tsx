"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const logoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.style.opacity = "0"
      logoRef.current.style.transform = "translateX(-200px)"

      setTimeout(() => {
        if (logoRef.current) {
          logoRef.current.style.transition = "all 2s cubic-bezier(0.50, -0.45, 0.255, 1.45)"
          logoRef.current.style.opacity = "1"
          logoRef.current.style.transform = "translateX(0)"
        }
      }, 500)
    }
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center ">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap justify-between items-start gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 min-w-[300px] flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <h1 className="text-4xl lg:text-5xl font-bold text-[#facc15] mb-6 font-lequire">EditHive</h1>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#facc15] mb-6 font-lequire">Productions</h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-[#d4af37] hover:bg-[#f5e08e] text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-[#d4af37]/30 transition-all duration-300"
              >
                <a href="#our-work">View Our Work</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300"
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Promises Box */}
          <div className="flex-1 min-w-[300px] bg-[#1a1a1a]/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-[#d4af37]/20">
            <h3 className="text-2xl font-bold text-[#d4af37] mb-6">Our Promises</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✅</span>
                On time delivery
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✅</span>
                100% customer satisfaction
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✅</span>
                100% refund if you&apos;re not satisfied
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
