import React from 'react'

const Tokenomics = () => {
  const allocations = [
    { category: "Presale (3 Phases)", allocation: "25%", tokens: "75,000,000", color: "bg-[#bd0404]" },
    { category: "Liquidity", allocation: "12%", tokens: "45,000,000", color: "bg-blue-500" },
    { category: "Team & Founders", allocation: "15%", tokens: "36,000,000", color: "bg-purple-500" },
    { category: "Marketing & Partnerships", allocation: "10%", tokens: "30,000,000", color: "bg-emerald-500" },
    { category: "Airdrops & Community Rewards", allocation: "10%", tokens: "30,000,000", color: "bg-yellow-500" },
    { category: "Ecosystem / Staking", allocation: "18%", tokens: "54,000,000", color: "bg-pink-500" },
    { category: "Treasury / Reserve", allocation: "10%", tokens: "30,000,000", color: "bg-cyan-500" }
  ]

  const objectives = [
    {
      icon: "⚖️",
      title: "Fair Distribution",
      description: "Balanced allocation between early supporters, ecosystem growth, and long-term sustainability.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "💧",
      title: "Liquidity Support",
      description: "Dedicated liquidity allocation ensures market stability and smooth trading conditions.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "🤝",
      title: "Team Alignment",
      description: "Team and founder tokens are structured to support long-term commitment and platform success.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "📈",
      title: "Growth Enablement",
      description: "Marketing, partnerships, and ecosystem funding drive adoption and platform expansion.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "🎁",
      title: "Community Incentives",
      description: "Airdrops and reward programs encourage user engagement and long-term retention.",
      gradient: "from-[#bd0404] to-red-600"
    }
  ]

  return (
    <section id="tokenomics" className="py-28 bg-white dark:bg-black relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-[#bd0404] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#bd0404]/10 border border-[#bd0404]/30 rounded-full mb-4">
            <span className="text-[#bd0404] text-sm font-semibold">📊 Token Distribution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            TRIX <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bd0404] to-red-600">Tokenomics</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            TriXchange follows a transparent and balanced tokenomics model designed
            to support sustainable growth, liquidity, and long-term ecosystem
            development.
          </p>
        </div>

        {/* TOTAL SUPPLY CARD */}
        <div className="mb-16 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-[#bd0404] to-red-600 rounded-2xl p-8 text-center shadow-2xl shadow-[#bd0404]/20">
            <p className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-2">Total Supply</p>
            <p className="text-5xl md:text-6xl font-bold text-white mb-2">300,000,000</p>
            <p className="text-white/90 text-lg font-semibold">TRIX Tokens</p>
          </div>
        </div>

        {/* ALLOCATION GRID */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-8 text-center">Token Allocation Breakdown</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allocations.map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-[#bd0404]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Color indicator */}
                <div className={`w-12 h-2 ${item.color} rounded-full mb-4`}></div>
                
                {/* Category */}
                <h4 className="text-lg font-bold text-black dark:text-white mb-3">
                  {item.category}
                </h4>
                
                {/* Stats */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Allocation:</span>
                    <span className="text-[#bd0404] font-bold text-xl">{item.allocation}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Tokens:</span>
                    <span className="text-black dark:text-white font-semibold">{item.tokens}</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} transition-all duration-500`}
                    style={{ width: item.allocation }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Summary */}
          <div className="mt-8 bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border-2 border-[#bd0404]/30">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
              <span className="text-xl font-bold text-black dark:text-white">Total</span>
              <div className="flex gap-12">
                <div className="text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Allocation</p>
                  <p className="text-2xl font-bold text-[#bd0404]">100%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Tokens</p>
                  <p className="text-2xl font-bold text-black dark:text-white">300,000,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OBJECTIVES */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-black dark:text-white mb-12 text-center">
            Tokenomics <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bd0404] to-red-600">Objectives</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-[#bd0404]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${objective.gradient} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {objective.icon}
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-[#bd0404] transition-colors">
                  {objective.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default Tokenomics