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
        
        {/* Alternating List Layout */}
        <div className="max-w-4xl mx-auto space-y-16">
          {differences.map((item, index) => (
            <div 
              key={index}
              className={`group flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Icon Circle */}
              <div className="flex-shrink-0 relative">
                <div className="w-32 h-32 lg:w-40 lg:h-40 relative">
                  {/* Rotating outer ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#d4af37]/30 group-hover:border-[#d4af37]/60 transition-all duration-700 group-hover:rotate-180"></div>
                  
                  {/* Inner circle */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#f5e08e]/10 group-hover:from-[#d4af37]/40 group-hover:to-[#f5e08e]/20 transition-all duration-500">
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl lg:text-5xl group-hover:scale-125 transition-transform duration-300">
                        {item.icon}
                      </span>
                    </div>
                    
                    {/* Number */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#d4af37] text-black font-bold rounded-full flex items-center justify-center text-sm group-hover:bg-[#f5e08e] group-hover:scale-110 transition-all duration-300">
                      {item.number}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className={`flex-1 text-center lg:text-left ${
                index % 2 === 1 ? 'lg:text-right' : ''
              }`}>
                {/* Decorative line */}
                <div className={`h-0.5 w-24 bg-gradient-to-r from-[#d4af37] to-transparent group-hover:w-32 transition-all duration-500 mb-6 ${
                  index % 2 === 1 ? 'lg:ml-auto lg:bg-gradient-to-l' : 'mx-auto lg:mx-0'
                }`}></div>
                
                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-lg lg:text-xl leading-relaxed group-hover:text-white transition-colors duration-300 max-w-md mx-auto lg:mx-0">
                  {item.description}
                </p>
                
                {/* Quote decoration */}
                <div className={`mt-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300 ${
                  index % 2 === 1 ? 'lg:text-right' : ''
                }`}>
                  <span className="text-6xl text-[#d4af37] font-serif">“</span>
                </div>
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
