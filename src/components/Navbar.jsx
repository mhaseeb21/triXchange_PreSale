import React, { useState } from 'react'

const Navbar = ({ toggleTheme, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-[42px] w-full z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Tri<span className="text-[#bd0404]">X</span>change
        </h1>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center space-x-8 text-sm">
          {[
            ['Features', '#features'],
            ['Use Cases', '#use-cases'],
            ['Tokenomics', '#tokenomics'],
            ['Presale', '#presale'],
            ['Architecture', '#architecture'],
            ['Roadmap', '#roadmap'],
            ['FAQ', '#faq'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-gray-600 dark:text-gray-400 hover:text-[#bd0404]"
            >
              {label}
            </a>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center space-x-4">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`relative w-12 h-6 rounded-full transition ${
              theme === 'dark' ? 'bg-[#bd0404]' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                theme === 'dark' ? 'translate-x-6' : ''
              }`}
            />
          </button>

          {/* Presale Link */}
          <a
            href="#presale"
            className="px-5 py-2 border border-[#bd0404] text-[#bd0404] rounded-lg hover:bg-[#bd0404] hover:text-white transition"
          >
            Presale
          </a>

        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-2xl text-black dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          <div className="px-6 py-6 flex flex-col space-y-5 text-sm">

            {[
              ['Features', '#features'],
              ['Use Cases', '#use-cases'],
              ['Tokenomics', '#tokenomics'],
              ['Presale', '#presale'],
              ['Architecture', '#architecture'],
              ['Roadmap', '#roadmap'],
              ['FAQ', '#faq'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-[#bd0404]"
              >
                {label}
              </a>
            ))}

            {/* MOBILE ACTIONS */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-4">

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-lg ${
                  theme === 'dark'
                    ? 'bg-[#bd0404] text-white'
                    : 'bg-gray-200 text-black'
                }`}
              >
                <span>Theme</span>
                <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
              </button>

              {/* Presale Link */}
              <a
                href="#presale"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center px-4 py-2 border border-[#bd0404] text-[#bd0404] rounded-lg hover:bg-[#bd0404] hover:text-white transition"
              >
                Presale
              </a>

            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
