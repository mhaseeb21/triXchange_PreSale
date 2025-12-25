import React from 'react'

const UseCases = () => {
  const useCases = [
    {
      icon: "💰",
      title: "Trading Fee Utility",
      description: "TRIX can be used to pay trading fees across spot and P2P markets, enabling discounted fees and improved cost efficiency for active traders.",
      benefits: ["Up to 50% Fee Discount", "Cross-Market Usage", "VIP Tier Access"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: "🔒",
      title: "Staking & Rewards",
      description: "Holders can stake TRIX to earn platform rewards, participate in ecosystem incentives, and benefit from long-term token utility.",
      benefits: ["Passive Income", "APY Rewards", "Loyalty Bonuses"],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: "🌟",
      title: "Ecosystem Participation",
      description: "TRIX enables participation in ecosystem programs including airdrops, community rewards, and future governance-related initiatives.",
      benefits: ["Exclusive Airdrops", "Governance Rights", "Community Events"],
      gradient: "from-[#bd0404] to-orange-500"
    }
  ]

  return (
    <section id="use-cases" className="py-28 bg-white dark:bg-black relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-[#bd0404] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-40 right-10 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#bd0404]/10 border border-[#bd0404]/30 rounded-full mb-4">
            <span className="text-[#bd0404] text-sm font-semibold">💎 Token Utility</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            TRIX Token <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bd0404] to-red-600">Use Cases</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            The TRIX token is designed as a core utility asset within the TriXchange
            ecosystem, supporting platform operations, user incentives, and long-term
            value creation.
          </p>
        </div>

        {/* Use Case Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-[#bd0404]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#bd0404]/10 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#bd0404]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

              {/* Icon */}
              <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {useCase.icon}
              </div>

              {/* Title */}
              <h3 className="relative text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-[#bd0404] transition-colors">
                {useCase.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {useCase.description}
              </p>

              {/* Benefits List */}
              <div className="relative space-y-3">
                {useCase.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCase.gradient}`}></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Learn More Link */}
              <div className="relative mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <a
                  href="#"
                  className="inline-flex items-center text-[#bd0404] font-semibold text-sm group-hover:gap-2 transition-all"
                >
                  Learn More
                  <span className="ml-1 group-hover:ml-0 transition-all">→</span>
                </a>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#bd0404] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-12 border border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Info */}
            <div>
              <h3 className="text-3xl font-bold text-black dark:text-white mb-4">
                Maximize Your TRIX Benefits
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Hold and utilize TRIX tokens to unlock exclusive benefits, participate in platform governance, and earn rewards as the ecosystem grows.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-[#bd0404] text-white rounded-lg font-semibold hover:bg-[#9a0303] transition-all shadow-lg shadow-[#bd0404]/30">
                  Get TRIX Tokens
                </button>
                <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                  View Documentation
                </button>
              </div>
            </div>

            {/* Right side - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-4xl font-bold text-[#bd0404] mb-2">50%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Max Fee Discount</p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-4xl font-bold text-[#bd0404] mb-2">APY</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Staking Rewards</p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-4xl font-bold text-[#bd0404] mb-2">3+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Market Types</p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-4xl font-bold text-[#bd0404] mb-2">24/7</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Support Access</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default UseCases
