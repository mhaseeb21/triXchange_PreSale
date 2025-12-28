import React, { useState } from "react";
import axios from "axios";

const PresaleDetails = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const phases = [
    {
      phase: "Phase 1",
      badge: "Early Bird",
      description:
        "Early access phase offering the most favorable conditions for early supporters of the TriXchange ecosystem.",
      allocation: "10%",
      tokens: "30,000,000",
      price: "TBA",
      gradient: "from-emerald-500 to-teal-500",
      icon: "🚀",
      features: ["Lowest Price", "Maximum Bonus", "Priority Access"],
    },
    {
      phase: "Phase 2",
      badge: "Growth",
      description:
        "Expansion phase focused on growing the community and increasing ecosystem participation ahead of platform launch.",
      allocation: "10%",
      tokens: "30,000,000",
      price: "TBA",
      gradient: "from-blue-500 to-purple-500",
      icon: "📈",
      features: ["Competitive Price", "Bonus Rewards", "Early Access"],
    },
    {
      phase: "Phase 3",
      badge: "Final Round",
      description:
        "Final presale phase ahead of exchange listing, designed to finalize distribution and strengthen liquidity preparation.",
      allocation: "5%",
      tokens: "15,000,000",
      price: "TBA",
      gradient: "from-[#bd0404] to-orange-500",
      icon: "🎯",
      features: ["Pre-Listing Price", "Launch Bonus", "Immediate Access"],
    },
  ];

  const handleGetNotified = async () => {
    if (!email) {
      setStatus("Please enter your email");
      return;
    }

    setLoading(true);
    setStatus("");

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
      setEmail(""); // clear input
    } catch (error) {
      setStatus(error.response?.data?.message || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section
      id="presale-details"
      className="py-28 bg-gray-50 dark:bg-neutral-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#bd0404] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#bd0404]/10 border border-[#bd0404]/30 rounded-full mb-4">
            <span className="text-[#bd0404] text-sm font-semibold">
              🎉 Limited Opportunity
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            TRIX{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bd0404] to-red-600">
              Presale Details
            </span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            The TRIX presale is structured in three phases to ensure fair access,
            reward early supporters, and support sustainable ecosystem growth.
            A total of{" "}
            <span className="font-semibold text-[#bd0404]">25%</span> of the
            total token supply is allocated to the presale.
          </p>
        </div>

        {/* PHASE CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-[#bd0404]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#bd0404]/10 hover:-translate-y-2"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#bd0404]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

              {/* Badge */}
              <div
                className={`absolute -top-3 -right-3 px-4 py-1 bg-gradient-to-r ${phase.gradient} text-white text-xs font-bold rounded-full shadow-lg`}
              >
                {phase.badge}
              </div>

              {/* Icon & Phase */}
              <div className="relative flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center text-2xl shadow-lg`}
                >
                  {phase.icon}
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {phase.phase}
                </h3>
              </div>

              {/* Description */}
              <p className="relative text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {phase.description}
              </p>

              {/* Stats */}
              <div className="relative space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Allocation
                  </span>
                  <span className="text-lg font-bold text-[#bd0404]">
                    {phase.allocation}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Tokens
                  </span>
                  <span className="text-lg font-bold text-black dark:text-white">
                    {phase.tokens} TRIX
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Price
                  </span>
                  <span className="text-lg font-bold text-black dark:text-white">
                    {phase.price}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="relative space-y-2 mb-6">
                {phase.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#bd0404]"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY CARD with GET NOTIFIED */}
        <div className="bg-gradient-to-br from-[#bd0404] to-red-600 rounded-2xl p-10 text-center shadow-2xl shadow-[#bd0404]/20">
          <h3 className="text-white text-2xl font-bold mb-4">
            Get Notified About Presale
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg text-black flex-1"
            />
            <button
              onClick={handleGetNotified}
              disabled={loading}
              className="px-8 py-3 bg-white text-[#bd0404] rounded-lg font-bold hover:bg-gray-100 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Get Notified"}
            </button>
          </div>

          {status && (
            <p className="mt-4 text-white/90 font-medium">{status}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PresaleDetails;
