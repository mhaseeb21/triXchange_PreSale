import React from 'react'

const TopBar = () => {
  return (
    <div className="fixed top-0 w-full z-[60] bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

        <p className="text-gray-300">
          Official Channels
        </p>

        <div className="flex items-center space-x-4"> 
          <a href="https://x.com/tri_xchange?s=21" className="hover:text-[#bd0404] transition">Twitter</a>
          <a href="https://www.facebook.com/share/16nJsKsLmj/?mibextid=wwXIfr" className="hover:text-[#bd0404] transition">Facebook</a>
          <a href="https://t.me/trixchangecommunity" className="hover:text-[#bd0404] transition">Telegram</a>
          <a href="#" className="hover:text-[#bd0404] transition">Discord</a>
          <a href="https://www.instagram.com/trixchange?igsh=aGRibjQzN2pxaTZh" className="hover:text-[#bd0404] transition">Instagram</a>
        </div>

      </div>
    </div>
  )
}

export default TopBar