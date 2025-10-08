"use client"

export function EditingArsenalSection() {
  const tools = [
    {
      name: "Adobe Premiere Pro",
      description: "for precise and fast video editing.",
      color: "from-purple-600 to-blue-600",
      icon: "🎬"
    },
    {
      name: "After Effects", 
      description: "for motion graphics and visual effects.",
      color: "from-blue-600 to-purple-800",
      icon: "✨"
    },
    {
      name: "DaVinci Resolve",
      description: "for professional color grading and finishing.",
      color: "from-red-600 to-orange-600", 
      icon: "🎨"
    },
    {
      name: "Photoshop",
      description: "for thumbnail, poster, and content design.",
      color: "from-blue-500 to-cyan-500",
      icon: "🖼️"
    },
    {
      name: "Illustrator",
      description: "for custom vector graphics and branding.",
      color: "from-orange-500 to-yellow-500",
      icon: "🎯"
    },
    {
      name: "Audition", 
      description: "for sound mixing and noise cleanup.",
      color: "from-green-600 to-teal-600",
      icon: "🎵"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a1a]/80 to-[#0d0d0d]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#d4af37] mb-16">
          Our Editing Arsenal
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-[#1a1a1a]/90 to-[#0d0d0d]/90 backdrop-blur-sm p-8 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/25"
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold text-[#d4af37] mb-3 text-center group-hover:text-[#f5e08e] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors">
                  {tool.description}
                </p>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Powered by industry-leading tools to deliver 
            <span className="text-[#d4af37] font-semibold"> exceptional results</span>
          </p>
        </div>
      </div>
    </section>
  )
}