"use client"

import { Award, Users, Zap, Globe, Shield, Play } from "lucide-react"

export function WhatMakesUsDifferentSection() {
  const features = [
    {
      icon: Zap,
      title: "Lightning-Fast Turnaround",
      description: "While others take weeks, we deliver professional-grade edits in days.",
      stats: "3x Faster",
      number: "01"
    },
    {
      icon: Award,
      title: "Award-Winning Quality",
      description: "Our editors have worked on Emmy-nominated projects and viral campaigns.",
      stats: "50+ Awards",
      number: "02"
    },
    {
      icon: Users,
      title: "White-Glove Service",
      description: "Every project gets a dedicated manager who understands your vision.",
      stats: "1:1 Support",
      number: "03"
    },
    {
      icon: Globe,
      title: "Global Creative Network",
      description: "Access to specialized editors across time zones means 24/7 progress.",
      stats: "15+ Countries",
      number: "04"
    },
    {
      icon: Shield,
      title: "100% Satisfaction Guarantee",
      description: "Not happy? We&apos;ll revise until perfect or refund completely.",
      stats: "0% Risk",
      number: "05"
    },
    {
      icon: Play,
      title: "Cutting-Edge Technology",
      description: "We combine human creativity with AI efficiency for innovative results.",
      stats: "AI-Enhanced",
      number: "06"
    }
  ]

  return (
    <section className="py-20 bg-[#1a1a1a]/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#d4af37] mb-6">
            What Makes Us Different
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Six key advantages that set us apart from the competition
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#d4af37]/10 to-[#f5e08e]/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-full aspect-square flex flex-col items-center justify-center p-8 text-center hover:from-[#d4af37]/20 hover:to-[#f5e08e]/10 hover:border-[#d4af37]/40 transition-all duration-500 cursor-pointer hover:scale-105"
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#d4af37] text-black font-bold text-sm rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    {feature.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4 p-3 rounded-full bg-[#d4af37]/20 group-hover:bg-[#d4af37]/30 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-[#d4af37]" />
                  </div>
                  
                  {/* Stats */}
                  <div className="text-2xl font-bold text-[#d4af37] mb-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.stats}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-0.5 w-16 bg-[#d4af37]/50"></div>
            <div className="mx-4 w-2 h-2 bg-[#d4af37] rounded-full"></div>
            <div className="h-0.5 w-16 bg-[#d4af37]/50"></div>
          </div>
          <p className="text-gray-400 text-lg">
            <span className="text-[#d4af37] font-semibold">Six key differences</span> that set us apart from the competition
          </p>
        </div>
      </div>
    </section>
  )
}
