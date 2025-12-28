import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [

    {
      question: "How can I participate in the presale?",
      answer: "Presale participation details, supported networks, and accepted payment methods will be provided before the presale launch. Typically, you'll need a compatible crypto wallet and accepted cryptocurrencies like ETH, USDT, or BNB.",
      icon: "🎯"
    },
    {
      question: "Will TRIX be listed on exchanges?",
      answer: "Exchange listings are planned following the presale and platform launch, subject to market and regulatory considerations. We are actively pursuing listings on major centralized and decentralized exchanges.",
      icon: "📈"
    },
    {
      question: "Is KYC required?",
      answer: "KYC and AML procedures will be implemented in line with regulatory requirements and platform policies. The level of KYC required may vary depending on your contribution amount and jurisdiction.",
      icon: "🔐"
    },
    {
      question: "What utilities does the TRIX token have?",
      answer: "TRIX tokens provide multiple utilities including trading fee discounts (up to 50%), staking rewards, governance rights, access to exclusive features, and participation in ecosystem programs and airdrops.",
      icon: "💎"
    },
    {
      question: "Which blockchain will TRIX be on?",
      answer: "Trix will be deployed on BSC network.",
      icon: "⛓️"
    },
    {
      question: "How is the platform secured?",
      answer: "TriXchange employs multiple security measures including smart contract audits by leading firms, cold storage for majority of funds, multi-signature wallets, insurance coverage, and continuous security monitoring.",
      icon: "🛡️"
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-28 bg-white dark:bg-black relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#bd0404] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#bd0404]/10 border border-[#bd0404]/30 rounded-full mb-4">
            <span className="text-[#bd0404] text-sm font-semibold">❓ Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bd0404] to-red-600">Questions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about the TRIX token presale and TriXchange platform
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:border-[#bd0404]/50 hover:shadow-lg"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#bd0404] to-red-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {faq.icon}
                  </div>
                  <h3 className="font-bold text-black dark:text-white text-lg group-hover:text-[#bd0404] transition-colors">
                    {faq.question}
                  </h3>
                </div>
                
                {/* Arrow Icon */}
                <div className={`ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-[#bd0404]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pl-[88px]">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 text-center">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
  href="mailto:info@trixchange.com"
  className="inline-block px-8 py-3 bg-[#bd0404] text-white rounded-lg font-semibold hover:bg-[#9a0303] transition-all shadow-lg shadow-[#bd0404]/30"
>
  Contact Support
</a>
       <a
  href="https://t.me/trixchangecommunity"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
>
  Join Community
</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <a
            href="#"
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[#bd0404]/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              📄
            </div>
            <div>
              <p className="font-semibold text-black dark:text-white text-sm">Read Whitepaper</p>
              <p className="text-xs text-gray-500">Detailed documentation</p>
            </div>
          </a>

          <a
            href="https://t.me/trixchangecommunity"
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[#bd0404]/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              💬
            </div>
            <div>
              <p className="font-semibold text-black dark:text-white text-sm">Join Telegram</p>
              <p className="text-xs text-gray-500">Community chat</p>
            </div>
          </a>

          <a
            href="mailto:info@trixchange.com"
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[#bd0404]/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              📧
            </div>
            <div>
              <p className="font-semibold text-black dark:text-white text-sm">Email Support</p>
              <p className="text-xs text-gray-500">Direct assistance</p>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}

export default FAQ