import React from 'react'

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Tokenomics', href: '#tokenomics' },
      { name: 'Presale', href: '#presale' },
      { name: 'Roadmap', href: '#roadmap' }
    ],
    resources: [
      { name: 'Whitepaper', href: '#' },
      { name: 'FAQ', href: '#faq' },
    ],
    legal: [
      { name: 'Disclaimer', href: '#disclaimer' },
    ]
  }

  const socialLinks = [
    { name: 'X (Twitter)', icon: '𝕏', href: 'https://x.com/tri_xchange?s=21', color: 'hover:text-black dark:hover:text-white' },
    { name: 'Telegram', icon: '✈', href: 'https://t.me/trixchangecommunity', color: 'hover:text-[#0088cc]' },
    { name: 'Facebook', icon: 'f', href: 'https://www.facebook.com/share/16nJsKsLmj/?mibextid=wwXIfr', color: 'hover:text-[#1877F2]' },
    { name: 'Instagram', icon: '📷', href: 'https://www.instagram.com/trixchange?utm_source=qr&igsh=NGJlNmZiYXgzd2Z5', color: 'hover:text-[#E4405F]' }
  ]

  return (
    <footer id="footer" className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#bd0404] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">

        {/* TOP SECTION */}
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 mb-8 sm:mb-12">
          
          {/* Brand */}
          <div className="sm:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 sm:mb-4">
              Tri<span className="text-[#bd0404]">X</span>change
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 sm:mb-6">
              Next-generation centralized exchange unifying cryptocurrency, forex, and commodities.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                 <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all hover:scale-110 hover:shadow-lg text-base sm:text-lg`}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-black dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-[#bd0404] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-black dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-[#bd0404] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-black dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-[#bd0404] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 mb-6 sm:mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} TriXchange. All rights reserved.
          </p>

          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#disclaimer" className="text-gray-600 dark:text-gray-400 hover:text-[#bd0404] transition-colors">
              Disclaimer
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <h3 className="font-bold text-black dark:text-white mb-2 text-base sm:text-lg">Stay Updated</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
            Subscribe for presale and platform updates.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white text-xs sm:text-sm focus:outline-none focus:border-[#bd0404]"
            />
            <button className="px-4 sm:px-6 py-2 bg-[#bd0404] text-white rounded-lg font-semibold hover:bg-[#9a0303] transition-all text-xs sm:text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer