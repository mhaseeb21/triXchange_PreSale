import React from 'react'

const LegalDisclaimer = () => {
  return (
    <section
      id="disclaimer"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black border-t border-gray-200 dark:border-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#bd0404] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Icon and Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#bd0404] to-red-600 rounded-2xl mb-4 shadow-lg">
            <span className="text-3xl">⚖️</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bd0404] to-red-600">Disclaimer</span>
          </h2>
        </div>

        {/* Content Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-800 shadow-xl">
          
          {/* Warning Banner */}
          <div className="flex items-start gap-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 mb-6">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-1">Important Notice</h3>
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                Please read this disclaimer carefully before participating in the TRIX token presale or using TriXchange services.
              </p>
            </div>
          </div>

          {/* Disclaimer Points */}
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-black dark:text-white mb-2 flex items-center gap-2">
                <span className="text-[#bd0404]">•</span> No Financial Advice
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-5">
                The information provided on this website is for informational purposes only
                and does not constitute financial, investment, legal, or trading advice.
                TriXchange and the TRIX token are not intended to be offered or sold in
                jurisdictions where such activities are prohibited by law.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-black dark:text-white mb-2 flex items-center gap-2">
                <span className="text-[#bd0404]">•</span> Investment Risks
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-5">
                Participation in token sales and blockchain-based assets involves significant risk.
                Users should conduct their own research and consult with professional
                advisors before making any investment decisions. Past performance does
                not guarantee future results.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-black dark:text-white mb-2 flex items-center gap-2">
                <span className="text-[#bd0404]">•</span> Regulatory Compliance
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-5">
                It is the responsibility of each participant to ensure compliance with their local
                laws and regulations. TriXchange reserves the right to restrict access to users
                from jurisdictions where participation is prohibited.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-black dark:text-white mb-2 flex items-center gap-2">
                <span className="text-[#bd0404]">•</span> No Guarantees
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-5">
                No guarantees are made regarding the future value, utility, or performance of
                TRIX tokens. The cryptocurrency market is highly volatile and subject to
                significant fluctuations.
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
              By accessing this website or participating in the TRIX presale, you acknowledge that you have read,
              understood, and agree to be bound by this disclaimer.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center mt-8">
          © {new Date().getFullYear()} TriXchange. All rights reserved.
        </p>

      </div>
    </section>
  )
}

export default LegalDisclaimer