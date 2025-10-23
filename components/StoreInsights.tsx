"use client";

import { useMutation, useQuery } from "convex/react";
import { useTheme } from "../contexts/ThemeContext";
import { api } from "../convex/_generated/api";

export default function StoreInsights() {
  const insights = useQuery(api.storeInsights.getStoreInsights);
  const seedDemoData = useMutation(api.storeInsights.seedDemoData);
  const { theme } = useTheme();

  if (!insights) {
    return (
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className={`rounded-2xl shadow-xl border p-8 transition-colors ${theme === "light"
          ? "bg-white border-[#00FE5D]/20"
          : "bg-[#0a1612] border-[#00FE5D]/10"
          }`}>
          <div className="text-center py-12">
            <h3 className={`text-2xl font-bold mb-4 ${theme === "light" ? "text-[#013213]" : "text-[#E6FEF9]"
              }`}>
              No Store Data Yet
            </h3>
            <p className={`mb-6 ${theme === "light" ? "text-[#013213]/50" : "text-[#E6FEF9]/50"
              }`}>
              Load demo data to see your Store Insights Dashboard
            </p>
            <button
              onClick={() => seedDemoData()}
              className="bg-[#00FE5D] hover:bg-[#00FE5D]/90 text-[#013213] font-bold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-[#00FE5D]/10 hover:shadow-[#00FE5D]/20"
            >
              Load Demo Data
            </button>
          </div>
        </div>
      </div>
    );
  }

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

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
                {insights.storeName}
              </h2>
              <p className={`text-sm ${theme === "light" ? "text-[#013213]/50" : "text-[#E6FEF9]/50"
                }`}>
                Last campaign: {formatDate(insights.lastCampaignDate)}
              </p>
            </div>
            <div className={`px-4 py-2 rounded-lg border transition-colors ${theme === "light"
              ? "bg-[#013213] border-[#00FE5D]/30"
              : "bg-[#013213] border-[#00FE5D]/20"
              }`}>
              <p className={`text-xs uppercase tracking-wide font-medium ${theme === "light" ? "text-[#E6FEF9]/50" : "text-[#E6FEF9]/50"
                }`}>
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
            <MetricCard
              icon="📧"
              label="Total Campaigns"
              value={insights.totalCampaigns.toString()}
              subtext={`${insights.activeEmailsThisMonth} this month`}
              highlight={false}
            />

            <MetricCard
              icon="📈"
              label="Avg Open Rate"
              value={`${insights.avgOpenRate}%`}
              subtext="Above industry avg"
              highlight={insights.avgOpenRate > 5}
            />

            <MetricCard
              icon="✓"
              label="Deliverability"
              value={`${insights.deliverabilityScore}%`}
              subtext="Excellent score"
              highlight={insights.deliverabilityScore > 95}
            />

            <MetricCard
              icon="💰"
              label="Revenue Generated"
              value={formatCurrency(insights.revenueGenerated)}
              subtext="From email campaigns"
              highlight={false}
            />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`rounded-xl p-6 border shadow-sm hover:border-[#00FE5D]/30 transition-all ${theme === "light"
              ? "bg-white border-[#00FE5D]/20"
              : "bg-[#0a1612] border-[#00FE5D]/10"
              }`}>
              <div className="flex items-center gap-4">
                <div className={`border border-[#00FE5D]/30 p-4 rounded-xl text-3xl ${theme === "light" ? "bg-gray-50" : "bg-[#013213]"
                  }`}>
                  ⚡
                </div>
                <div>
                  <p className={`text-sm font-medium ${theme === "light" ? "text-[#013213]/50" : "text-[#E6FEF9]/50"
                    }`}>
                    Time Saved
                  </p>
                  <p className={`text-3xl font-bold ${theme === "light" ? "text-[#013213]" : "text-[#E6FEF9]"
                    }`}>
                    {insights.timeSavedHours}
                    <span className={`text-lg ml-1 ${theme === "light" ? "text-[#013213]/50" : "text-[#E6FEF9]/50"
                      }`}>
                      hours
                    </span>
                  </p>
                  <p className={`text-xs mt-1 font-semibold ${theme === "light" ? "text-[#013213]" : "text-[#00FE5D]"
                    }`}>
                    10x faster than manual creation
                  </p>
                </div>
              </div>
            </div>

            <div className={`rounded-xl p-6 border shadow-sm hover:border-[#00FE5D]/30 transition-all ${theme === "light"
              ? "bg-white border-[#00FE5D]/20"
              : "bg-[#0a1612] border-[#00FE5D]/10"
              }`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${theme === "light" ? "text-[#013213]/50" : "text-[#E6FEF9]/50"
                    }`}>
                    Performance Status
                  </p>
                  <p className={`text-3xl font-bold mt-1 ${theme === "light" ? "text-[#013213]" : "text-[#E6FEF9]"
                    }`}>
                    Excellent
                  </p>
                  <p className={`text-sm mt-2 ${theme === "light" ? "text-[#013213]/50" : "text-[#E6FEF9]/50"
                    }`}>
                    Your campaigns are performing above average
                  </p>
                </div>
                <div className="text-6xl">🏆</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className={`font-medium px-6 py-3 rounded-lg border transition-all duration-200 ${theme === "light"
              ? "bg-white hover:bg-gray-50 text-[#013213] border-gray-200 hover:border-gray-300"
              : "bg-[#0a1612] hover:bg-[#013213] text-[#E6FEF9] border-[#00FE5D]/10 hover:border-[#00FE5D]/30"
              }`}>
              <span className="flex items-center gap-2">
                📊 View Analytics
              </span>
            </button>
            <button className={`font-bold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg ${theme === "light"
              ? "bg-[#013213] hover:bg-[#013213]/90 text-[#E6FEF9] shadow-[#013213]/10 hover:shadow-[#013213]/20"
              : "bg-[#00FE5D] hover:bg-[#00FE5D]/90 text-[#013213] shadow-[#00FE5D]/10 hover:shadow-[#00FE5D]/20"
              }`}>
              ✨ Create Campaign
            </button>
            <button className={`font-medium px-6 py-3 rounded-lg border transition-all duration-200 ${theme === "light"
              ? "bg-white hover:bg-gray-50 text-[#013213] border-gray-200 hover:border-gray-300"
              : "bg-[#0a1612] hover:bg-[#013213] text-[#E6FEF9] border-[#00FE5D]/10 hover:border-[#00FE5D]/30"
              }`}>
              <span className="flex items-center gap-2">
                ⚙️ Settings
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
  subtext,
  highlight = false,
}: {
  icon: string;
  label: string;
  value: string;
  subtext: string;
  highlight?: boolean;
}) {
  const { theme } = useTheme();

  const isDeliverability = label === "Deliverability";
  const iconColor = isDeliverability && theme === "light" ? "text-[#003213]" : "";

  return (
    <div
      className={`rounded-xl p-6 border shadow-sm transition-all duration-200 hover:shadow-md ${theme === "light"
        ? "bg-white border-[#00FE5D]/20"
        : "bg-[#013213] border-[#00FE5D]/10"
        } ${highlight
          ? "border-[#00FE5D]/40 ring-1 ring-[#00FE5D]/20"
          : "hover:border-[#00FE5D]/30"
        }`}
    >
      <div
        className={`border border-[#00FE5D]/20 w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 ${theme === "light" ? "bg-gray-50" : "bg-[#013213]"
          } ${iconColor}`}
      >
        {icon}
      </div>
      <p className={`text-sm font-medium mb-1 ${theme === "light" ? "text-[#013213]/50" : "text-[#E6FEF9]/50"
        }`}>
        {label}
      </p>
      <p className={`text-3xl font-bold mb-1 ${theme === "light" ? "text-[#013213]" : "text-[#E6FEF9]"
        }`}>
        {value}
      </p>
      <p className={`text-xs ${theme === "light" ? "text-[#013213]/40" : "text-[#E6FEF9]/40"
        }`}>
        {subtext}
      </p>
      {highlight && (
        <div className={`mt-3 text-xs font-bold px-2 py-1 rounded inline-block border ${theme === "light"
          ? "bg-[#013213] text-[#E6FEF9] border-[#013213]"
          : "bg-[#00FE5D]/10 text-[#00FE5D] border-[#00FE5D]/30"
          }`}>
          ⭐ Top Performer
        </div>
      )}
    </div>
  );
}

