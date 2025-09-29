"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const workItems = [
  {
    id: 1,
    title: "Epic Explosion VFX",
    description: "A high-energy special effects sequence for an action scene.",
    category: "vfx",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Smooth Video Cut",
    description: "Crisp, seamless transitions that enhance storytelling.",
    category: "editing",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Color Transformation",
    description: "Before & after color grading showcasing mood shifts.",
    category: "color",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Futuristic City VFX",
    description: "Advanced visual effects for a sci-fi urban environment.",
    category: "vfx",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Timeline Mastery",
    description: "Expert video cutting and scene pacing for impact.",
    category: "editing",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Rich Color Grading",
    description: "Enhancing emotional tone through expert grading.",
    category: "color",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
  },
]

const filters = [
  { id: "all", label: "All" },
  { id: "vfx", label: "VFX" },
  { id: "editing", label: "Editing" },
  { id: "color", label: "Color Grading" },
]

export function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredWork = activeFilter === "all" ? workItems : workItems.filter((item) => item.category === activeFilter)

  return (
    <section id="our-work" className="py-20 bg-[#0d0d0d]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#d4af37] mb-12">Our Work</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-[#d4af37] text-black shadow-lg"
                  : "border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWork.map((item) => (
            <div
              key={item.id}
              className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-[#d4af37]/20 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-[#d4af37]/10"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#d4af37] mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
