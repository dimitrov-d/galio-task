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
    });

    console.log("Demo data seeded successfully");
    return null;
  },
});
