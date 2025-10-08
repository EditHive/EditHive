"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const heroSlides = [
  {
    id: 1,
    title: "Professional Video Editing",
    subtitle: "Transform your raw footage into cinematic masterpieces",
    description: "From concept to completion, we bring your vision to life with professional video editing services.",
    cta: "Get Started",
    image: "/api/placeholder/1200/600",
  },
  {
    id: 2,
    title: "3D Animation & Motion Graphics",
    subtitle: "Create stunning visual experiences",
    description: "Bring your ideas to life with cutting-edge 3D animation and motion graphics that captivate your audience.",
    cta: "View Portfolio",
    image: "/api/placeholder/1200/600",
  },
  {
    id: 3,
    title: "Content Creation & Strategy",
    subtitle: "Elevate your brand with compelling content",
    description: "Strategic content creation that resonates with your audience and drives meaningful engagement.",
    cta: "Learn More",
    image: "/api/placeholder/1200/600",
  },
]

export default function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-full">
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="relative h-full">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                
                {/* Content */}
                <div className="relative h-full flex items-center justify-center">
                  <div className="container mx-auto px-4 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                      {slide.title}
                    </h1>
                    <h2 className="text-xl md:text-2xl mb-6 text-gray-200 animate-fade-in animation-delay-200">
                      {slide.subtitle}
                    </h2>
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
                      {slide.description}
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in animation-delay-600">
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation */}
        <CarouselPrevious className="left-8 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="right-8 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        
        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full bg-white/50 cursor-pointer transition-all duration-300 hover:bg-white/80"
            />
          ))}
        </div>
      </Carousel>
    </div>
  )
}