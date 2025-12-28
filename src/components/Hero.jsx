import React, { useState, useEffect } from 'react'
import hero from '../assets/hero.jpeg'

const Hero = () => {
  const [btcData, setBtcData] = useState({
    price: '0.00',
    change: 0,
    loading: true
  })

  useEffect(() => {
    const fetchBTCPrice = async () => {
      try {
        const response = await fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT')
        const data = await response.json()
        
        setBtcData({
          price: parseFloat(data.lastPrice).toLocaleString('en-US', { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
          }),
          change: parseFloat(data.priceChangePercent).toFixed(2),
          loading: false
        })
      } catch (error) {
        console.error('Error fetching BTC price:', error)
        setBtcData(prev => ({ ...prev, loading: false }))
      }
    }

    // Fetch immediately
    fetchBTCPrice()

    // Update every 10 seconds
    const interval = setInterval(fetchBTCPrice, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative pt-48 pb-32 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-black">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#bd0404] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="text-left md:text-left">
            <div className="inline-block px-4 py-2 bg-[#bd0404]/10 border border-[#bd0404]/30 rounded-full mb-6">
              <span className="text-[#bd0404] text-sm font-semibold">🚀 Revolutionary Trading Platform</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              One Platform. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bd0404] to-red-600">
                All Markets.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              TriXchange is a next-generation centralized exchange designed to unify
              cryptocurrency, forex, and commodities trading into a single,
              high-performance ecosystem.
            </p>

            <div className="mt-10 flex gap-4">
           <a
  href="https://trixchange.s3.ap-southeast-1.amazonaws.com/TriXchange_WhitePaper.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-4 bg-[#bd0404] text-white rounded-lg font-semibold hover:bg-[#9a0303] transition-all shadow-lg shadow-[#bd0404]/30 hover:shadow-[#bd0404]/50 hover:scale-105"
>
  Read Whitepaper
</a>
            </div>
          </div>

          {/* Right side - Image/Visual */}
          <div className="relative">
            {/* Glowing effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#bd0404]/20 to-blue-600/20 blur-3xl"></div>
            
            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <img 
                src={hero} 
                alt="Trading Dashboard" 
                className="w-full h-auto"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Floating card elements */}
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-xl min-w-[140px]">
              {btcData.loading ? (
                <p className="text-gray-400 text-sm">Loading...</p>
              ) : (
                <>
                  <p className={`text-sm font-semibold ${btcData.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {btcData.change >= 0 ? '↗' : '↘'} {btcData.change >= 0 ? '+' : ''}{btcData.change}%
                  </p>
                  <p className="text-white text-xs mt-1">BTC/USDT</p>
                  <p className="text-gray-300 text-xs mt-1">${btcData.price}</p>
                </>
              )}
            </div>

            <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-xl">
              <p className="text-blue-400 text-sm font-semibold">⚡ Ultra Fast</p>
              <p className="text-white text-xs">0.01s Execution</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero