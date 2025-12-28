import React from 'react'

const UseCases = () => {
  const useCases = [
    {
      icon: "💰",
      title: "Trading Fee Utility",
      description:
        "TRIX can be used to pay trading fees across spot and P2P markets, enabling discounted fees and improved cost efficiency for active traders.",
      benefits: ["Up to 50% Fee Discount", "Cross-Market Usage", "VIP Tier Access"],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: "🔒",
      title: "Staking & Rewards",
      description:
        "Holders can stake TRIX to earn platform rewards, participate in ecosystem incentives, and benefit from long-term token utility.",
      benefits: ["Passive Income", "APY Rewards", "Loyalty Bonuses"],
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: "🌟",
      title: "Ecosystem Participation",
      description:
        "TRIX enables participation in ecosystem programs including airdrops, community rewards, and future governance-related initiatives.",
      benefits: ["Exclusive Airdrops", "Governance Rights", "Community Events"],
      gradient: "from-[#bd0404] to-orange-500",
    },
  ]

  return (
    <section
      id="use-cases"
      className="py-16 sm:py-20 md:py-28 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-40 left-10 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#bd0404] rounded-full blur-[100px] sm:blur-[150px]" />
        <div className="absolute bottom-40 right-10 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-purple-600 rounded-full blur-[100px] sm:blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#bd0404]/10 border border-[#bd0404]/30 rounded-full mb-3 sm:mb-4">
            <span className="text-[#bd0404] text-xs sm:text-sm font-semibold">
              💎 Token Utility
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white px-4">
            TRIX Token{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bd0404] to-red-600">
              Use Cases
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed px-4">
            The TRIX token is designed as a core utility asset within the TriXchange
            ecosystem, supporting platform operations, user incentives, and long-term
            value creation.
          </p>
        </div>

        {/* Use Case Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 hover:border-[#bd0404]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#bd0404]/10 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#bd0404]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              <div
                className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform`}
              >
                {useCase.icon}
              </div>

              <h3 className="relative text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 sm:mb-4 group-hover:text-[#bd0404] transition-colors">
                {useCase.title}
              </h3>

              <p className="relative text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
                {useCase.description}
              </p>

              <div className="relative space-y-2 sm:space-y-3">
                {useCase.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${useCase.gradient} flex-shrink-0`}
                    />
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-800">
                <a
                  href="#"
                  className="inline-flex items-center text-[#bd0404] font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all"
                >
                  Learn More <span className="ml-1 group-hover:ml-0 transition-all">→</span>
                </a>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#bd0404] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-gray-200 dark:border-gray-700">
          
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between gap-12">
            <div className="flex-1 max-w-xl">
              <h3 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4 leading-tight">
                Maximize Your TRIX Benefits
              </h3>
              <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Hold and utilize TRIX tokens to unlock exclusive benefits, participate in
                platform governance, and earn rewards as the ecosystem grows.
              </p>
              <a
                href="#presale"
                className="inline-block px-8 py-4 bg-[#bd0404] text-white rounded-lg font-semibold hover:bg-[#9a0303] transition-all shadow-lg shadow-[#bd0404]/30 hover:shadow-[#bd0404]/50 hover:scale-105"
              >
                Get TRIX Tokens
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 flex-shrink-0">
              {[
                ["50%", "Max Fee Discount"],
                ["APY", "Staking Rewards"],
                ["3+", "Market Types"],
                ["24/7", "Support Access"],
              ].map(([value, label], i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-[#bd0404]/50 transition-all hover:shadow-lg min-w-[160px]"
                >
                  <p className="text-4xl font-bold text-[#bd0404] mb-2">{value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="md:hidden">
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 sm:mb-4">
                Maximize Your TRIX Benefits
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
                Hold and utilize TRIX tokens to unlock exclusive benefits, participate in
                platform governance, and earn rewards as the ecosystem grows.
              </p>
              <a
                href="#presale"
                className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-[#bd0404] text-white rounded-lg font-semibold hover:bg-[#9a0303] transition-all shadow-lg shadow-[#bd0404]/30 text-sm sm:text-base"
              >
                Get TRIX Tokens
              </a>
            </div>

            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-3 sm:gap-4 mt-6">
              {[
                ["50%", "Max Fee Discount"],
                ["APY", "Staking Rewards"],
                ["3+", "Market Types"],
                ["24/7", "Support Access"],
              ].map(([value, label], i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-gray-200 dark:border-gray-700"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-[#bd0404] mb-1">{value}</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default UseCases
