import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const storeInsightsFields = {
  storeName: v.string(),
  totalCampaigns: v.number(),
  avgOpenRate: v.number(),
  deliverabilityScore: v.number(),
  revenueGenerated: v.number(),
  timeSavedHours: v.number(),
  lastCampaignDate: v.number(),
  activeEmailsThisMonth: v.number(),
  chartData: v.optional(
    v.array(
      v.object({
        month: v.string(),
        campaigns: v.number(),
        openRate: v.number(),
        revenue: v.number(),
      }),
    ),
  ),
};

export default defineSchema({
  storeInsights: defineTable(storeInsightsFields),
});
