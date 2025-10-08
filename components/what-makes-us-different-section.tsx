"use client"

export function WhatMakesUsDifferentSection() {
  const differences = [
    {
      icon: "🎬",
      title: "Story-Driven Editing",
      description: "We don't just cut clips — we craft narratives."
    },
    {
      icon: "⚙️", 
      title: "Custom Workflows",
      description: "Each project gets a personalized color grade, sound design, and pacing style."
    },
    {
      icon: "🧑‍💻",
      title: "Collaboration-Ready", 
      description: "We work smoothly with your footage, scripts, or even raw ideas."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "From content creators to production studios — we deliver across time zones."
    },
    {
      icon: "🔒",
      title: "Reliable & Transparent",
      description: "You'll always know your project's progress and delivery timeline."
    }
  ]

  return (
    <section className="py-20 bg-[#1a1a1a]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#d4af37] mb-16">
          What Makes Us Different
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {differences.map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#0d0d0d]/90 to-[#2a2a2a]/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-[#d4af37]/30 hover:border-[#f5e08e] transition-all duration-500 hover:transform hover:translateY-[-8px] hover:shadow-2xl hover:shadow-[#d4af37]/30 group"
            >
              <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#d4af37] mb-4 text-center group-hover:text-[#f5e08e] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 text-center text-sm leading-relaxed group-hover:text-white transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}