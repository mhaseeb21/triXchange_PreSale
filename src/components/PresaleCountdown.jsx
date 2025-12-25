import React, { useEffect, useState } from 'react'

// Presale starts on 10 Feb 2026, 18:00 PKT (13:00 UTC)
const PRESALE_START = '2026-02-10T13:00:00Z'

const PresaleCountdown = () => {
  const calculateTimeLeft = () => {
    const diff = new Date(PRESALE_START).getTime() - new Date().getTime()

    if (diff <= 0) return null

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="presale"
      className="py-28 bg-black text-white relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#bd0404] rounded-full blur-[150px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <span className="inline-block mb-4 px-4 py-2 bg-[#bd0404]/10 border border-[#bd0404]/30 rounded-full text-sm font-semibold text-[#bd0404]">
          🚀 Presale Countdown
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          TRIX Token Presale
        </h2>

        {timeLeft ? (
          <>
            <p className="text-gray-400 mb-10">
              Presale begins in:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-10">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div
                  key={label}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
                >
                  <p className="text-4xl font-bold text-[#bd0404]">
                    {value.toString().padStart(2, '0')}
                  </p>
                  <p className="text-sm text-gray-400 uppercase mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 bg-[#bd0404] text-white rounded-lg font-semibold hover:bg-[#9a0303] transition shadow-lg shadow-[#bd0404]/30">
              Presale Starts Soon
            </button>
          </>
        ) : (
          <>
            <p className="text-xl text-green-400 font-semibold mb-6">
              🎉 Presale is LIVE!
            </p>
            <button className="px-8 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition">
              Buy TRIX Now
            </button>
          </>
        )}

      </div>
    </section>
  )
}

export default PresaleCountdown
