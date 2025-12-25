import React from 'react'

const SecurityAudit = () => {
  const securityFeatures = [
    {
      icon: "🔍",
      title: "Audit Planning",
      description: "Engagement with reputable blockchain security firms is planned to ensure best-in-class auditing standards.",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Third-party verification", "Industry standards", "Comprehensive testing"]
    },
    {
      icon: "📋",
      title: "Scope Coverage",
      description: "Token contracts, staking contracts, and core on-chain components will be reviewed for vulnerabilities and logic flaws.",
      gradient: "from-purple-500 to-pink-500",
      features: ["Smart contract review", "Logic verification", "Vulnerability assessment"]
    },
    {
      icon: "📢",
      title: "Transparency",
      description: "Audit reports will be publicly shared upon completion to maintain transparency and user confidence.",
      gradient: "from-emerald-500 to-teal-500",
      features: ["Public reports", "Open communication", "Community trust"]
    }
  ]

  const securityMeasures = [
    { icon: "🔐", title: "Multi-Signature Wallets", description: "Enhanced security for fund management" },
    { icon: "❄️", title: "Cold Storage", description: "Majority of funds stored offline" },
    { icon: "🛡️", title: "Insurance Coverage", description: "Protection against security breaches" },
    { icon: "👁️", title: "24/7 Monitoring", description: "Continuous security surveillance" },
    { icon: "🔄", title: "Regular Updates", description: "Ongoing security improvements" },
    { icon: "⚡", title: "Bug Bounty Program", description: "Community-driven security" }
  ]

  return (
    <section id="security-audit" className="py-28 bg-gray-50 dark:bg-neutral-900 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-[500px] h-[500px] bg-[#bd0404] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#bd0404]/10 border border-[#bd0404]/30 rounded-full mb-4">
            <span className="text-[#bd0404] text-sm font-semibold">🔒 Trust & Security</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bd0404] to-red-600">Smart Contract Audits</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Security is a top priority for the TriXchange ecosystem. All smart contracts,
            including the TRIX token and staking mechanisms, are planned to undergo
            independent third-party security audits prior to full public deployment.
          </p>
        </div>

        {/* Main Security Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-[#bd0404]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#bd0404]/10 hover:-translate-y-2"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#bd0404]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

              {/* Icon */}
              <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="relative text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-[#bd0404] transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Features List */}
              <div className="relative space-y-2">
                {feature.features.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#bd0404]"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Security Measures Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
            Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bd0404] to-red-600">Security Measures</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityMeasures.map((measure, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[#bd0404]/50 transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#bd0404] to-red-600 flex items-center justify-center text-2xl flex-shrink-0">
                  {measure.icon}
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-white mb-1">{measure.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{measure.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Partners Section */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 border border-gray-200 dark:border-gray-800 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
              Partnering with Leading Security Firms
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We're in discussions with top-tier blockchain security auditors
            </p>
          </div>

          {/* Placeholder for audit partner logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-20 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700"
              >
                <span className="text-gray-400 dark:text-gray-600 font-semibold">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="text-4xl font-bold text-[#bd0404] mb-2">100%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Code Coverage</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="text-4xl font-bold text-[#bd0404] mb-2">0</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Critical Issues (Target)</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="text-4xl font-bold text-[#bd0404] mb-2">24/7</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Security Monitoring</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#bd0404] to-red-600 rounded-2xl p-10 text-center shadow-2xl shadow-[#bd0404]/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Security is Our Foundation
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            We're committed to providing the highest level of security for our users. 
            Audit reports will be publicly available once completed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all">
              Report Vulnerability
            </button>
          </div>
        </div>

        {/* Note */}
        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-600">
          <span className="inline-flex items-center gap-2">
            <span>ℹ️</span>
            Note: Audit partners will be announced once engagements are finalized.
          </span>
        </p>

      </div>
    </section>
  )
}

export default SecurityAudit