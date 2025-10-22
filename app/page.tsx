"use client";

import StoreInsights from "../components/StoreInsights";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <header className={`sticky top-0 z-10 p-6 shadow-lg border-b flex flex-row justify-between items-center backdrop-blur-sm transition-colors ${theme === "light"
        ? "bg-white border-[#00FE5D]/20"
        : "bg-[#0a1612] border-[#00FE5D]/10"
        }`}>
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Galio Logo" className="w-8 h-8" />
          <div>
            <h1 className={`text-2xl font-bold ${theme === "light" ? "text-[#013213]" : "text-[#E6FEF9]"
              }`}>
              <span className={`galio-brand ${theme === "light" ? "text-[#013213]" : "text-[#E6FEF9]"}`}>Galio Dashboard</span>
            </h1>
            <p className={`text-xs ${theme === "light" ? "text-[#013213]/50" : "text-[#E6FEF9]/50"
              }`}>
              AI-Powered Email Marketing
            </p>
          </div>
        </div>
        <ThemeToggle />
      </header>
      <main className={`min-h-screen py-8 transition-colors ${theme === "light"
        ? "bg-[#F0FFF4]"
        : "bg-gradient-to-br from-[#0a1612] via-[#050d0a] to-[#0a1612]"
        }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className={`text-3xl font-bold mb-2 ${theme === "light" ? "text-[#013213]" : "text-[#E6FEF9]"
              }`}>
              Store Insights
            </h2>
            <p className={theme === "light" ? "text-[#013213]/50" : "text-[#E6FEF9]/50"}>
              Real-time metrics and performance data for your email campaigns
            </p>
          </div>
          <StoreInsights />
        </div>
      </main>
    </>
  );
}

