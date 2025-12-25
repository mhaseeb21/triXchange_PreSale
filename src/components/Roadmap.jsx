import React from 'react'

const Roadmap = () => {
  return (
    <section id="roadmap"className="py-28 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Roadmap & Development Phases
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            TriXchange follows a phased development roadmap designed to ensure
            steady progress, platform stability, and long-term sustainability.
            Each phase aligns technical development with ecosystem growth.
          </p>
        </div>

        {/* PHASES */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* PHASE 1 */}
          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              Phase 1 – Foundation
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>• Concept development and market research</li>
              <li>• White paper release</li>
              <li>• TRIX token creation</li>
              <li>• Presale launch</li>
              <li>• Community building and early partnerships</li>
            </ul>
          </div>

          {/* PHASE 2 */}
          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              Phase 2 – Platform Development
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>• Core centralized exchange infrastructure development</li>
              <li>• Spot trading for crypto, forex, and commodities</li>
              <li>• P2P trading module implementation</li>
              <li>• Custodial wallet integration</li>
              <li>• Initial liquidity provisioning</li>
            </ul>
          </div>

          {/* PHASE 3 */}
          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              Phase 3 – Expansion & Optimization
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>• Platform optimization and performance upgrades</li>
              <li>• Staking and ecosystem rewards launch</li>
              <li>• Advanced trading tools and analytics</li>
              <li>• Strategic partnerships and marketing expansion</li>
            </ul>
          </div>

          {/* PHASE 4 */}
          <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              Phase 4 – Maturity & Ecosystem Growth
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>• Platform scaling and global user expansion</li>
              <li>• Additional market listings and asset support</li>
              <li>• Governance features exploration</li>
              <li>• Long-term ecosystem and treasury optimization</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Roadmap
