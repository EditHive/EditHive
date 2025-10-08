"use client"

import { useState } from "react"
import { Play, Award, Clock, Users, Zap, Globe, Shield } from "lucide-react"

export function WhatMakesUsDifferentSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const features = [
    {
      icon: Zap,
      title: "Lightning-Fast Turnaround",
      subtitle: "24-48 Hour Delivery",
      description: "While others take weeks, we deliver professional-grade edits in days. Our streamlined workflow ensures you never miss a deadline.",
      stats: "3x Faster",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Award,
      title: "Award-Winning Quality",
      subtitle: "Industry Recognition",
      description: "Our editors have worked on Emmy-nominated projects and viral campaigns with millions of views. Quality that speaks for itself.",
      stats: "50+ Awards",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Users,
      title: "White-Glove Service",
      subtitle: "Dedicated Project Manager",
      description: "Every project gets a dedicated manager who understands your vision and ensures seamless communication throughout.",
      stats: "1:1 Support",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Globe,
      title: "Global Creative Network",
      subtitle: "Best Talent Worldwide",
      description: "Access to specialized editors across time zones means your project is always moving forward, 24/7.",
      stats: "15+ Countries",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Shield,
      title: "100% Satisfaction Guarantee",
      subtitle: "Risk-Free Partnership",
      description: "Not happy? We&apos;ll revise until perfect or refund completely. Your success is our reputation.",
      stats: "0% Risk",
      color: "from-red-400 to-rose-500",
      bgColor: "bg-gradient-to-br from-red-500/20 to-rose-500/20"
    },
    {
      icon: Play,
      title: "Cutting-Edge Technology",
      subtitle: "Latest AI-Assisted Tools",
      description: "We combine human creativity with AI efficiency, delivering results that are both innovative and cost-effective.",
      stats: "AI-Enhanced",
      color: "from-indigo-400 to-violet-500",
      bgColor: "bg-gradient-to-br from-indigo-500/20 to-violet-500/20"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 text-[#d4af37] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            Why Choose EditHive
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            What Makes Us
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f5e08e]">
              Extraordinary
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;re not just another editing service. We&apos;re your creative partners in bringing impossible visions to life.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const isActive = activeCard === index
              
              return (
                <div
                  key={index}
                  className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:border-white/20 cursor-pointer ${
                    isActive ? 'ring-2 ring-[#d4af37]/50 bg-white/10' : ''
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${feature.bgColor}`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Stats */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                          {feature.stats}
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">
                          Advantage
                        </div>
                      </div>
                    </div>

                    {/* Title and Subtitle */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                        {feature.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Hover Effect Line */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`}></div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#d4af37] text-black font-bold text-sm rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#d4af37]/20 to-[#f5e08e]/20 rounded-3xl p-8 max-w-4xl mx-auto border border-[#d4af37]/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Join hundreds of satisfied clients who chose excellence over ordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#d4af37] to-[#f5e08e] text-black font-bold px-8 py-4 rounded-xl hover:from-[#f5e08e] hover:to-[#d4af37] transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-[#d4af37] text-[#d4af37] font-bold px-8 py-4 rounded-xl hover:bg-[#d4af37] hover:text-black transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
