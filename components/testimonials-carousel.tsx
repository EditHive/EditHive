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

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content: "EditHive transformed our content creation process. The quality and speed of delivery exceeded our expectations.",
    avatar: "/api/placeholder/150/150",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Content Creator",
    company: "Creative Studios",
    content: "Working with EditHive has been a game-changer. Their attention to detail and creative vision is unmatched.",
    avatar: "/api/placeholder/150/150",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Brand Manager",
    company: "Fashion Forward",
    content: "The team at EditHive understands our brand perfectly. Every project is delivered with precision and creativity.",
    avatar: "/api/placeholder/150/150",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "YouTube Creator",
    company: "Independent",
    content: "EditHive helped me scale my content production while maintaining the highest quality standards.",
    avatar: "/api/placeholder/150/150",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Social Media Manager",
    company: "Global Brands",
    content: "The turnaround time and quality of work from EditHive is exceptional. They're our go-to editing partner.",
    avatar: "/api/placeholder/150/150",
  },
]

export default function TestimonialsCarousel() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                          <span className="text-sm font-semibold text-gray-600">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <blockquote className="text-gray-700 dark:text-gray-300 italic flex-grow">
                        &ldquo;{testimonial.content}&rdquo;
                      </blockquote>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}