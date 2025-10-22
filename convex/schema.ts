import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  storeInsights: defineTable({
    storeName: v.string(),
    totalCampaigns: v.number(),
    avgOpenRate: v.number(),
    deliverabilityScore: v.number(),
    revenueGenerated: v.number(),
    timeSavedHours: v.number(),
    lastCampaignDate: v.number(),
    activeEmailsThisMonth: v.number(),
  }),
});
