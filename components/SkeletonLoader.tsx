"use client";

import { useTheme } from "../contexts/ThemeContext";

interface SkeletonCardProps {
  className?: string;
}

export function SkeletonCard({ className = "" }: SkeletonCardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-xl p-6 border shadow-sm animate-pulse ${theme === "light"
        ? "bg-white border-[#00FE5D]/20"
        : "bg-[#013213] border-[#00FE5D]/10"
        } ${className}`}
    >
      <div className={`border border-[#00FE5D]/20 w-12 h-12 rounded-lg mb-4 ${theme === "light" ? "bg-gray-100" : "bg-[#0a1612]"
        }`} />
      <div className={`h-4 w-24 rounded mb-2 ${theme === "light" ? "bg-gray-200" : "bg-[#0a1612]"
        }`} />
      <div className={`h-8 w-16 rounded mb-1 ${theme === "light" ? "bg-gray-200" : "bg-[#0a1612]"
        }`} />
      <div className={`h-3 w-20 rounded ${theme === "light" ? "bg-gray-200" : "bg-[#0a1612]"
        }`} />
    </div>
  );
}

export function SkeletonChart({ className = "" }: SkeletonCardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-xl p-6 border shadow-sm animate-pulse ${theme === "light"
        ? "bg-white border-[#00FE5D]/20"
        : "bg-[#013213] border-[#00FE5D]/10"
        } ${className}`}
    >
      <div className={`h-6 w-32 rounded mb-4 ${theme === "light" ? "bg-gray-200" : "bg-[#0a1612]"
        }`} />
      <div className="h-64 w-full rounded">
        <div className={`h-full w-full rounded ${theme === "light" ? "bg-gray-100" : "bg-[#0a1612]"
          }`} />
      </div>
    </div>
  );
}

export function SkeletonInsights({ storeName, lastCampaignDate }: { storeName?: string; lastCampaignDate?: number }) {
  const { theme } = useTheme();

  const formatDate = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (hours < 1) return "Just now";
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className={`rounded-2xl shadow-2xl border overflow-hidden transition-colors ${theme === "light"
        ? "bg-white border-[#00FE5D]/20"
        : "bg-[#0a1612] border-[#00FE5D]/10"
        }`}>
        <div className={`p-8 border-b transition-colors ${theme === "light"
          ? "bg-gradient-to-br from-white to-[#F0FFF4] border-[#00FE5D]/20"
          : "bg-gradient-to-br from-[#0a1612] to-[#013213] border-[#00FE5D]/10"
          }`}>
          <div className="flex justify-between items-start">
            <div>
              <h2 className={`text-3xl font-bold mb-2 ${theme === "light" ? "text-[#013213]" : "text-[#E6FEF9]"
                }`}>
                {storeName || "Loading..."}
              </h2>
              <p className={`text-sm ${theme === "light" ? "text-[#013213]/50" : "text-[#E6FEF9]/50"
                }`}>
                Last campaign: {lastCampaignDate ? formatDate(lastCampaignDate) : "Loading..."}
              </p>
            </div>
            <div className={`px-4 py-2 rounded-lg border transition-colors ${theme === "light"
              ? "bg-[#013213] border-[#00FE5D]/30"
              : "bg-[#013213] border-[#00FE5D]/20"
              }`}>
              <p className={`text-xs uppercase tracking-wide font-medium text-[#E6FEF9]/50`}>
                Powered by
              </p>
              <p className={`text-xl font-bold text-[#E6FEF9]`}>
                <span className="galio-brand" style={{ color: '#E6FEF9' }}>Galio</span>
              </p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkeletonCard />
            <SkeletonCard />
          </div>

          <div className="mt-8">
            <SkeletonChart />
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <div className={`h-12 w-32 rounded-lg ${theme === "light" ? "bg-gray-200" : "bg-[#0a1612]"
              }`} />
            <div className={`h-12 w-40 rounded-lg ${theme === "light" ? "bg-gray-200" : "bg-[#0a1612]"
              }`} />
            <div className={`h-12 w-28 rounded-lg ${theme === "light" ? "bg-gray-200" : "bg-[#0a1612]"
              }`} />
          </div>
        </div>
      </div>
    </div>
  );
}
