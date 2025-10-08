"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Play } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Brand Commercial",
    category: "Video Editing",
    description: "A stunning commercial for a luxury fashion brand featuring dynamic cuts and color grading.",
    thumbnail: "/api/placeholder/600/400",
    duration: "2:30",
    tags: ["Commercial", "Color Grading", "Motion Graphics"],
  },
  {
    id: 2,
    title: "Product Showcase",
    category: "3D Animation",
    description: "3D product visualization with smooth animations and realistic lighting.",
    thumbnail: "/api/placeholder/600/400",
    duration: "1:45",
    tags: ["3D Animation", "Product Viz", "Rendering"],
  },
  {
    id: 3,
    title: "Documentary Edit",
    category: "Long-form Content",
    description: "A compelling documentary edit with seamless storytelling and audio design.",
    thumbnail: "/api/placeholder/600/400",
    duration: "45:00",
    tags: ["Documentary", "Storytelling", "Audio Design"],
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "Social Content",
    description: "Engaging short-form content optimized for various social media platforms.",
    thumbnail: "/api/placeholder/600/400",
    duration: "0:30",
    tags: ["Social Media", "Short-form", "Viral Content"],
  },
  {
    id: 5,
    title: "Corporate Training",
    category: "Educational",
    description: "Professional training video with clear explanations and visual aids.",
    thumbnail: "/api/placeholder/600/400",
    duration: "15:20",
    tags: ["Corporate", "Training", "Educational"],
  },
  {
    id: 6,
    title: "Music Video",
    category: "Creative",
    description: "Artistic music video with creative transitions and visual effects.",
    thumbnail: "/api/placeholder/600/400",
    duration: "3:45",
    tags: ["Music Video", "VFX", "Creative"],
  },
]

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className || ""}`}
    {...props}
  />
))
Badge.displayName = "Badge"

export default function PortfolioCarousel() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Recent Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore our portfolio of creative projects and professional edits
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {portfolioItems.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full group overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <div className="aspect-video bg-gray-200 dark:bg-gray-800 relative group-hover:scale-105 transition-transform duration-300">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center">
                              <Play className="w-6 h-6 text-white ml-1" />
                            </div>
                          </div>
                          <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                            {item.duration}
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 mb-2">
                              {item.category}
                            </Badge>
                          </div>
                          <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {item.tags.map((tag, index) => (
                              <Badge 
                                key={index}
                                className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}