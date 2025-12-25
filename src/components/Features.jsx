import React from 'react'

const Features = () => {
  const features = [
    {
      icon: "🌐",
      title: "Unified Market Access",
      description: "Trade cryptocurrencies, forex pairs, and commodities through a single centralized exchange without platform fragmentation.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "⚡",
      title: "High-Performance Trading Engine",
      description: "Institutional-grade matching engine with deep liquidity, low-latency execution, and real-time pricing across markets.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "💎",
      title: "TRIX Utility Token",
      description: "Power the ecosystem with trading fee discounts, staking rewards, liquidity incentives, and governance participation.",
      gradient: "from-[#bd0404] to-orange-500"
    }
  ]

  return (
    <section id="features" className="py-24 bg-white dark:bg-black relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#bd0404] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#bd0404]/10 border border-[#bd0404]/30 rounded-full mb-4">
            <span className="text-[#bd0404] text-sm font-semibold">🚀 Core Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bd0404] to-red-600">Modern Traders</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience the next generation of trading with cutting-edge technology and seamless market access
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-[#bd0404]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#bd0404]/10 hover:-translate-y-2"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#bd0404]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              
              {/* Icon with gradient background */}
              <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="relative text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-[#bd0404] transition-colors">
                {feature.title}
              </h3>
              <p className="relative text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#bd0404] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

    

      </div>
    </section>
  )
}

export default Features