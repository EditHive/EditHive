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
        
        {/* Vertical Timeline Design */}
        <div className="max-w-5xl mx-auto relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d4af37] via-[#f5e08e] to-[#d4af37] transform -translate-x-1/2 hidden md:block"></div>
          
          {differences.map((item, index) => (
            <div key={index} className="relative mb-20 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-8 w-6 h-6 bg-[#d4af37] rounded-full border-4 border-[#0d0d0d] transform -translate-x-1/2 z-10 hidden md:block group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="group flex flex-col md:flex-row items-start gap-8">
                {/* Left side content (odd items) */}
                {index % 2 === 0 && (
                  <div className="md:w-1/2 md:pr-16 md:text-right">
                    <div className="bg-gradient-to-l from-[#d4af37]/10 to-transparent p-6 rounded-r-2xl border-r-4 border-[#d4af37]/30 group-hover:border-[#d4af37] transition-all duration-300">
                      <div className="flex items-center justify-end gap-4 mb-4">
                        <div>
                          <span className="text-[#d4af37]/60 text-sm font-semibold">{item.number}</span>
                          <h3 className="text-2xl font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">
                            {item.title}
                          </h3>
                        </div>
                        <div className="text-3xl group-hover:scale-125 transition-transform duration-300">
                          {item.icon}
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Spacer for right-side items */}
                {index % 2 === 1 && <div className="md:w-1/2"></div>}
                
                {/* Right side content (even items) */}
                {index % 2 === 1 && (
                  <div className="md:w-1/2 md:pl-16">
                    <div className="bg-gradient-to-r from-[#d4af37]/10 to-transparent p-6 rounded-l-2xl border-l-4 border-[#d4af37]/30 group-hover:border-[#d4af37] transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-3xl group-hover:scale-125 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <span className="text-[#d4af37]/60 text-sm font-semibold">{item.number}</span>
                          <h3 className="text-2xl font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
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
