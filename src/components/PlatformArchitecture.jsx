import React from 'react'

const PlatformArchitecture = () => {
  return (
    <section id="architecture" className="py-28 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Platform Architecture
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            TriXchange is built on a modular, multi-layer architecture designed
            for scalability, security, and high-performance trading across
            multiple asset classes.
          </p>
        </div>

        {/* ARCHITECTURE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* CARD */}
          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl transition hover:border-[#bd0404]">
            <div className="flex justify-center mb-6 text-[#bd0404]">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M8 20h8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4 text-center">
              User Interface Layer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              A unified web-based dashboard providing access to spot markets,
              P2P trading, portfolio management, and account controls.
            </p>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl transition hover:border-[#bd0404]">
            <div className="flex justify-center mb-6 text-[#bd0404]">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 3v18M3 12h18" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4 text-center">
              Trading Engine Layer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Manages centralized order books, trade execution, and real-time
              pricing for crypto, forex, and commodity spot markets.
            </p>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl transition hover:border-[#bd0404]">
            <div className="flex justify-center mb-6 text-[#bd0404]">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Z" />
                <path d="M8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Z" />
                <path d="M2 21c0-2.5 3-4 6-4s6 1.5 6 4" />
                <path d="M10 21c0-2.5 3-4 6-4s6 1.5 6 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4 text-center">
              P2P Trading Layer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Facilitates direct user-to-user transactions with escrow,
              intelligent order matching, and dispute management.
            </p>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl transition hover:border-[#bd0404]">
            <div className="flex justify-center mb-6 text-[#bd0404]">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M3 10l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4 text-center">
              Asset & Custody Layer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Handles centralized custodial wallets, balances, deposits,
              withdrawals, and settlement of spot and P2P trades.
            </p>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl transition hover:border-[#bd0404]">
            <div className="flex justify-center mb-6 text-[#bd0404]">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 3l8 4v5c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V7l8-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4 text-center">
              Risk, Compliance & Escrow Layer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Enforces KYC/AML, transaction monitoring, risk controls, and
              escrow safeguards for secure trading.
            </p>
          </div>

          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl transition hover:border-[#bd0404]">
            <div className="flex justify-center mb-6 text-[#bd0404]">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 2l6 4v6l-6 4-6-4V6l6-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4 text-center">
              Blockchain Integration Layer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Supports the TRIX token, staking contracts, rewards distribution,
              and ecosystem incentives.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PlatformArchitecture
