"use client"

export function EditingArsenalSection() {
  const tools = [
    {
      name: "Adobe Premiere Pro",
      description: "for precise and fast video editing.",
      color: "from-purple-600 to-blue-600",
      icon: "🎬",
      number: "01"
    },
    {
      name: "After Effects", 
      description: "for motion graphics and visual effects.",
      color: "from-blue-600 to-purple-800",
      icon: "✨",
      number: "02"
    },
    {
      name: "DaVinci Resolve",
      description: "for professional color grading and finishing.",
      color: "from-red-600 to-orange-600", 
      icon: "🎨",
      number: "03"
    },
    {
      name: "Photoshop",
      description: "for thumbnail, poster, and content design.",
      color: "from-blue-500 to-cyan-500",
      icon: "🖼️",
      number: "04"
    },
    {
      name: "Illustrator",
      description: "for custom vector graphics and branding.",
      color: "from-orange-500 to-yellow-500",
      icon: "🎯",
      number: "05"
    },
    {
      name: "Audition", 
      description: "for sound mixing and noise cleanup.",
      color: "from-green-600 to-teal-600",
      icon: "🎵",
      number: "06"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a1a]/80 to-[#0d0d0d]/80 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#d4af37] mb-16">
          Our Editing Arsenal
        </h2>
        
        {/* Horizontal Timeline Layout */}
        <div className="relative max-w-7xl mx-auto">
          {/* Central connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent transform -translate-y-1/2 hidden lg:block"></div>
          
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-8 lg:space-y-0">
            {tools.map((tool, index) => (
              <div key={index} className="group relative flex-1 max-w-sm mx-auto lg:mx-0">
                {/* Timeline dot/connector */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 w-4 h-4 bg-[#d4af37] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 group-hover:scale-150 group-hover:bg-[#f5e08e] transition-all duration-300"></div>
                
                {/* Tool showcase item */}
                <div className={`relative p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a]/90 to-[#0d0d0d]/90 backdrop-blur-sm border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/25 ${index % 2 === 0 ? 'lg:mb-20' : 'lg:mt-20'}`}>
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#d4af37] text-black font-bold rounded-full flex items-center justify-center text-sm group-hover:bg-[#f5e08e] group-hover:scale-110 transition-all duration-300">
                    {tool.number}
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#d4af37] mb-3 group-hover:text-[#f5e08e] transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                      {tool.description}
                    </p>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-2xl"></div>
                </div>
                
                {/* Connection line to next item (mobile) */}
                {index < tools.length - 1 && (
                  <div className="lg:hidden w-0.5 h-8 bg-[#d4af37]/30 mx-auto mt-4"></div>
                )}
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
            Powered by industry-leading tools to deliver 
            <span className="text-[#d4af37] font-semibold"> exceptional results</span>
          </p>
        </div>
      </div>
    </section>
  )
}
