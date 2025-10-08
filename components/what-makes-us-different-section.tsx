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
        
        {/* Hexagonal Grid Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="relative flex flex-col items-center">
            {/* Top row - 1 hexagon */}
            <div className="mb-8">
              <div className="group relative">
                <div className="hexagon bg-gradient-to-br from-[#d4af37]/20 to-[#f5e08e]/10 group-hover:from-[#d4af37]/40 group-hover:to-[#f5e08e]/20 transition-all duration-500 cursor-pointer">
                  <div className="hexagon-inner flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                      {differences[0].icon}
                    </div>
                    <div className="text-xs font-bold text-[#d4af37] mb-1">{differences[0].number}</div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                      {differences[0].title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-tight group-hover:text-white transition-colors duration-300">
                      {differences[0].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle row - 2 hexagons */}
            <div className="flex gap-4 mb-8">
              {[1, 2].map((i) => (
                <div key={i} className="group relative">
                  <div className="hexagon bg-gradient-to-br from-[#d4af37]/20 to-[#f5e08e]/10 group-hover:from-[#d4af37]/40 group-hover:to-[#f5e08e]/20 transition-all duration-500 cursor-pointer">
                    <div className="hexagon-inner flex flex-col items-center justify-center p-6 text-center">
                      <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                        {differences[i].icon}
                      </div>
                      <div className="text-xs font-bold text-[#d4af37] mb-1">{differences[i].number}</div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                        {differences[i].title}
                      </h3>
                      <p className="text-xs text-gray-300 leading-tight group-hover:text-white transition-colors duration-300">
                        {differences[i].description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom row - 2 hexagons */}
            <div className="flex gap-4">
              {[3, 4].map((i) => (
                <div key={i} className="group relative">
                  <div className="hexagon bg-gradient-to-br from-[#d4af37]/20 to-[#f5e08e]/10 group-hover:from-[#d4af37]/40 group-hover:to-[#f5e08e]/20 transition-all duration-500 cursor-pointer">
                    <div className="hexagon-inner flex flex-col items-center justify-center p-6 text-center">
                      <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                        {differences[i].icon}
                      </div>
                      <div className="text-xs font-bold text-[#d4af37] mb-1">{differences[i].number}</div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                        {differences[i].title}
                      </h3>
                      <p className="text-xs text-gray-300 leading-tight group-hover:text-white transition-colors duration-300">
                        {differences[i].description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
