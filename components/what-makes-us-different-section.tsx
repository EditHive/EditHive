"use client"

export function WhatMakesUsDifferentSection() {
  const differences = [
    {
      icon: "🎬",
      title: "Story-Driven Editing",
      description: "We don't just cut clips — we craft narratives.",
      number: "01"
    },
    {
      icon: "⚙️", 
      title: "Custom Workflows",
      description: "Each project gets a personalized color grade, sound design, and pacing style.",
      number: "02"
    },
    {
      icon: "🧑‍💻",
      title: "Collaboration-Ready", 
      description: "We work smoothly with your footage, scripts, or even raw ideas.",
      number: "03"
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "From content creators to production studios — we deliver across time zones.",
      number: "04"
    },
    {
      icon: "🔒",
      title: "Reliable & Transparent",
      description: "You'll always know your project's progress and delivery timeline.",
      number: "05"
    }
  ]

  return (
    <section className="py-20 bg-[#1a1a1a]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#d4af37] mb-16">
          What Makes Us Different
        </h2>
        
        {/* Horizontal Feature List */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differences.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-[#0d0d0d]/90 to-[#1a1a1a]/90 backdrop-blur-sm p-6 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/20"
              >
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#d4af37] text-black font-bold rounded-full flex items-center justify-center text-sm group-hover:bg-[#f5e08e] group-hover:scale-125 transition-all duration-300">
                  {item.number}
                </div>
                
                {/* Icon */}
                <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-[#d4af37] mb-3 text-center group-hover:text-[#f5e08e] transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            ))}
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
            <span className="text-[#d4af37] font-semibold">Five key differences</span> that set us apart from the competition
          </p>
        </div>
      </div>
    </section>
  )
}
