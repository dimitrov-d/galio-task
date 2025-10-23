"use client";

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useTheme } from "../contexts/ThemeContext";

interface ChartData {
  month: string;
  campaigns: number;
  openRate: number;
  revenue: number;
}

interface PerformanceChartProps {
  data: ChartData[];
}

export default function PerformanceChart({ data }: PerformanceChartProps) {
  const { theme } = useTheme();

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={`rounded-lg border p-4 shadow-lg ${theme === "light"
          ? "bg-white border-[#00FE5D]/20"
          : "bg-[#013213] border-[#00FE5D]/20"
          }`}>
          <p className={`font-semibold mb-2 ${theme === "light" ? "text-[#013213]" : "text-[#E6FEF9]"
            }`}>
            {label}
          </p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className={`text-sm ${theme === "light" ? "text-[#013213]/70" : "text-[#E6FEF9]/70"
              }`}>
              <span style={{ color: entry.color }} className="font-medium">
                {entry.dataKey === 'campaigns' ? 'Campaigns' :
                  entry.dataKey === 'openRate' ? 'Open Rate' : 'Revenue'}:
              </span>
              {entry.dataKey === 'revenue' ? formatCurrency(entry.value) :
                entry.dataKey === 'openRate' ? `${entry.value}%` : entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`rounded-xl p-6 border shadow-sm ${theme === "light"
      ? "bg-white border-[#00FE5D]/20"
      : "bg-[#013213] border-[#00FE5D]/10"
      }`}>
      <div className="mb-6">
        <h3 className={`text-xl font-bold mb-2 ${theme === "light" ? "text-[#013213]" : "text-[#E6FEF9]"
          }`}>
          Campaign Performance Trends
        </h3>
        <p className={`text-sm ${theme === "light" ? "text-[#013213]/50" : "text-[#E6FEF9]/50"
          }`}>
          Monthly performance metrics over the past year
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={theme === "light" ? "#E5E7EB" : "#374151"}
            />
            <XAxis
              dataKey="month"
              tick={{
                fill: theme === "light" ? "#013213" : "#E6FEF9",
                fontSize: 12
              }}
              axisLine={{ stroke: theme === "light" ? "#E5E7EB" : "#374151" }}
            />
            <YAxis
              yAxisId="left"
              tick={{
                fill: theme === "light" ? "#013213" : "#E6FEF9",
                fontSize: 12
              }}
              axisLine={{ stroke: theme === "light" ? "#E5E7EB" : "#374151" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{
                fill: theme === "light" ? "#013213" : "#E6FEF9",
                fontSize: 12
              }}
              axisLine={{ stroke: theme === "light" ? "#E5E7EB" : "#374151" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="campaigns"
              stroke="#00FE5D"
              strokeWidth={3}
              dot={{ fill: "#00FE5D", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: "#00FE5D", strokeWidth: 2 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="openRate"
              stroke="#013213"
              strokeWidth={3}
              dot={{ fill: "#013213", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: "#013213", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#00FE5D]" />
          <span className={`text-sm ${theme === "light" ? "text-[#013213]/70" : "text-[#E6FEF9]/70"
            }`}>
            Campaigns
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#013213]" />
          <span className={`text-sm ${theme === "light" ? "text-[#013213]/70" : "text-[#E6FEF9]/70"
            }`}>
            Open Rate (%)
          </span>
        </div>
      </div>
    </div>
  );
}
