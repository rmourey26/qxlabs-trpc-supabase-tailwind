import { router, protectedProcedure } from "../trpc"
import { isDemoMode, simulateAsync } from "@/utils/demo-mode"

const mockAnalyticsData = {
  overview: {
    totalRequests: 145682,
    avgLatency: 127,
    uptime: 99.97,
    activeNodes: 24,
  },
  performance: [
    { date: "2024-01-15", latency: 145, throughput: 8200, requests: 12400 },
    { date: "2024-01-16", latency: 138, throughput: 8500, requests: 13200 },
    { date: "2024-01-17", latency: 132, throughput: 8800, requests: 14100 },
    { date: "2024-01-18", latency: 127, throughput: 9200, requests: 15300 },
    { date: "2024-01-19", latency: 125, throughput: 9600, requests: 16200 },
    { date: "2024-01-20", latency: 122, throughput: 10100, requests: 17800 },
    { date: "2024-01-21", latency: 118, throughput: 10500, requests: 18900 },
  ],
  nodePerformance: [
    { node: "Node-US-East-1", latency: 98, uptime: 99.99, requests: 24500 },
    { node: "Node-US-West-1", latency: 112, uptime: 99.98, requests: 22300 },
    { node: "Node-EU-Central", latency: 145, uptime: 99.95, requests: 19800 },
    { node: "Node-Asia-Pacific", latency: 167, uptime: 99.92, requests: 18200 },
  ],
  topPaths: [
    { path: "/api/transactions", requests: 45200, avgLatency: 89 },
    { path: "/api/blocks", requests: 38900, avgLatency: 102 },
    { path: "/api/validators", requests: 32100, avgLatency: 78 },
    { path: "/api/checkpoints", requests: 29400, avgLatency: 134 },
  ],
}

export const analyticsRouter = router({
  getOverview: protectedProcedure.query(async ({ ctx }) => {
    if (isDemoMode()) {
      console.log("[v0] Analytics - Returning mock overview data")
      return simulateAsync(mockAnalyticsData.overview)
    }

    // In production, query from database or analytics service
    const { data, error } = await ctx.supabase
      .from("analytics_overview")
      .select("*")
      .eq("user_id", ctx.user.id)
      .single()

    if (error) throw error
    return data
  }),

  getPerformance: protectedProcedure.query(async ({ ctx }) => {
    if (isDemoMode()) {
      console.log("[v0] Analytics - Returning mock performance data")
      return simulateAsync(mockAnalyticsData.performance)
    }

    const { data, error } = await ctx.supabase
      .from("analytics_performance")
      .select("*")
      .eq("user_id", ctx.user.id)
      .order("date", { ascending: true })
      .limit(30)

    if (error) throw error
    return data
  }),

  getNodePerformance: protectedProcedure.query(async ({ ctx }) => {
    if (isDemoMode()) {
      console.log("[v0] Analytics - Returning mock node performance data")
      return simulateAsync(mockAnalyticsData.nodePerformance)
    }

    const { data, error } = await ctx.supabase
      .from("node_performance")
      .select("*")
      .eq("user_id", ctx.user.id)
      .order("requests", { ascending: false })

    if (error) throw error
    return data
  }),

  getTopPaths: protectedProcedure.query(async ({ ctx }) => {
    if (isDemoMode()) {
      console.log("[v0] Analytics - Returning mock top paths data")
      return simulateAsync(mockAnalyticsData.topPaths)
    }

    const { data, error } = await ctx.supabase
      .from("api_paths")
      .select("*")
      .eq("user_id", ctx.user.id)
      .order("requests", { ascending: false })
      .limit(10)

    if (error) throw error
    return data
  }),
})
