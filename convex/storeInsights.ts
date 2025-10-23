import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { storeInsightsFields } from "./schema";

export const getStoreInsights = query({
  returns: v.union(
    v.object({
      ...storeInsightsFields,
      _id: v.id("storeInsights"),
      _creationTime: v.number(),
    }),
    v.null(),
  ),
  handler: async (ctx) => await ctx.db.query("storeInsights").first(),
});

const chartData = [
  { month: "Jan", campaigns: 8, openRate: 5.2, revenue: 3200 },
  { month: "Feb", campaigns: 12, openRate: 6.1, revenue: 4800 },
  { month: "Mar", campaigns: 15, openRate: 6.8, revenue: 6200 },
  { month: "Apr", campaigns: 18, openRate: 7.2, revenue: 7800 },
  { month: "May", campaigns: 22, openRate: 6.9, revenue: 9200 },
  { month: "Jun", campaigns: 19, openRate: 7.5, revenue: 8500 },
  { month: "Jul", campaigns: 25, openRate: 8.1, revenue: 11200 },
  { month: "Aug", campaigns: 28, openRate: 7.8, revenue: 12800 },
  { month: "Sep", campaigns: 31, openRate: 8.3, revenue: 14500 },
  { month: "Oct", campaigns: 35, openRate: 8.7, revenue: 16800 },
  { month: "Nov", campaigns: 38, openRate: 9.1, revenue: 19200 },
  { month: "Dec", campaigns: 42, openRate: 8.9, revenue: 21500 },
];

export const seedDemoData = mutation({
  returns: v.null(),
  handler: async (ctx) => {
    const existing = await ctx.db.query("storeInsights").first();

    if (existing) {
      console.log("Demo data already exists");
      return null;
    }

    await ctx.db.insert("storeInsights", {
      storeName: "BeautyLux Store",
      totalCampaigns: 47,
      avgOpenRate: 6.8,
      deliverabilityScore: 98.5,
      revenueGenerated: 24750.5,
      timeSavedHours: 156,
      lastCampaignDate: Date.now() - 2 * 60 * 60 * 1000,
      activeEmailsThisMonth: 12,
      chartData,
    });

    console.log("Demo data seeded successfully");
    return null;
  },
});

export const updateExistingData = mutation({
  returns: v.null(),
  handler: async (ctx) => {
    const existing = await ctx.db.query("storeInsights").first();

    if (existing && !existing.chartData) {
      await ctx.db.patch(existing._id, { chartData });
      console.log("Updated existing data with chart data");
    }

    return null;
  },
});
