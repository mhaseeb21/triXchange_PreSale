import React, { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("Please enter an email");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://trix-be.vercel.app/api/presale/subscribe",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setStatus(res.data.message);
      setEmail(""); // clear input after success
    } catch (error) {
      setStatus(error.response?.data?.message || "Something went wrong");
    }
    setLoading(false);
  };

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Tokenomics", href: "#tokenomics" },
      { name: "Presale", href: "#presale" },
      { name: "Roadmap", href: "#roadmap" },
    ],
    resources: [
      { name: "Whitepaper", href: "#" },
      { name: "FAQ", href: "#faq" },
    ],
    legal: [{ name: "Disclaimer", href: "#disclaimer" }],
  };

  const socialLinks = [
    { name: "X (Twitter)", icon: "𝕏", href: "https://x.com/tri_xchange?s=21", color: "hover:text-black dark:hover:text-white" },
    { name: "Telegram", icon: "✈", href: "https://t.me/trixchangecommunity", color: "hover:text-[#0088cc]" },
    { name: "Discord", icon: "💬", href: "https://discord.com/", color: "hover:text-[#5865F2]" },
    { name: "Medium", icon: "M", href: "https://medium.com/", color: "hover:text-black dark:hover:text-white" },
    { name: "GitHub", icon: "⚡", href: "https://github.com/", color: "hover:text-black dark:hover:text-white" },
  ];

  return (
    <footer id="footer" className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#bd0404] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Tri<span className="text-[#bd0404]">X</span>change
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              Next-generation centralized exchange unifying cryptocurrency, forex, and commodities.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all hover:scale-110 hover:shadow-lg`}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-black dark:text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#bd0404] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-black dark:text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#bd0404] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-black dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#bd0404] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} TriXchange. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#disclaimer" className="hover:text-[#bd0404]">
              Disclaimer
            </a>
          </div>
        </div>

        {/* Newsletter / Subscribe */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <h3 className="font-bold text-black dark:text-white mb-2">Stay Updated</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Subscribe for presale and platform updates.
          </p>
          <form onSubmit={handleSubscribe} className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-[#bd0404] text-white rounded-lg font-semibold hover:bg-[#9a0303] disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Subscribe"}
            </button>
          </form>
          {status && <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{status}</p>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
