"use client"

import { Award, Users, Zap, Globe, Shield, Play } from "lucide-react"

export function WhatMakesUsDifferentSection() {
  const features = [
    {
      icon: Zap,
      title: "Rapid-Fire Delivery",
      description: "Get your polished content in 48-72 hours, not weeks. We turn around projects faster without compromising quality.",
      stats: "48-72 Hours",
      number: "01"
    },
    {
      icon: Award,
      title: "Industry-Leading Talent",
      description: "Our team includes editors from Netflix, Disney, and viral YouTube channels with millions of views.",
      stats: "Hollywood-Grade",
      number: "02"
    },
    {
      icon: Users,
      title: "Personal Creative Partner",
      description: "You get a dedicated editor who learns your style and becomes an extension of your creative vision.",
      stats: "Dedicated Editor",
      number: "03"
    },
    {
      icon: Globe,
      title: "Always-On Production",
      description: "While you sleep, our global team works. Projects move forward 24/7 across multiple time zones.",
      stats: "24/7 Progress",
      number: "04"
    },
    {
      icon: Shield,
      title: "Risk-Free Promise",
      description: "Love it or we'll make it right. Unlimited revisions until you're thrilled, or get your money back.",
      stats: "100% Guaranteed",
      number: "05"
    },
    {
      icon: Play,
      title: "Next-Gen Workflow",
      description: "AI-powered organization meets human storytelling genius. The future of video editing is here.",
      stats: "AI-Powered",
      number: "06"
    }
  ]

  return (
    <section className="py-20 bg-[#1a1a1a]/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#d4af37] mb-6">
            Why Choose EditHive
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Six game-changing advantages that make us the obvious choice for creators who demand excellence
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
            <span className="text-[#d4af37] font-semibold">The EditHive advantage</span> - where creativity meets cutting-edge efficiency
          </p>
        </div>
      </div>
    </section>
  )
}
