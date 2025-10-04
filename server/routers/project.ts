import { z } from "zod"
import { router, protectedProcedure } from "../trpc"
import { isDemoMode, mockProjects, simulateAsync } from "@/utils/demo-mode"

export const projectRouter = router({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    if (isDemoMode()) {
      console.log("[v0] Projects - Returning mock data in demo mode")
      return simulateAsync(mockProjects)
    }

    const { data, error } = await ctx.supabase
      .from("projects")
      .select("*")
      .eq("user_id", ctx.user.id)
      .order("created_at", { ascending: false })

    if (error) throw error

    return data
  }),

  getById: protectedProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
    if (isDemoMode()) {
      const project = mockProjects.find((p) => p.id === input.id)
      if (!project) throw new Error("Project not found")
      return simulateAsync(project)
    }

    const { data, error } = await ctx.supabase
      .from("projects")
      .select("*")
      .eq("id", input.id)
      .eq("user_id", ctx.user.id)
      .single()

    if (error) throw error

    return data
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1).max(100),
        description: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (isDemoMode()) {
        const newProject = {
          id: `demo-${Date.now()}`,
          name: input.name,
          description: input.description || null,
          user_id: ctx.user.id,
          status: "active" as const,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }
        return simulateAsync(newProject)
      }

      const { data, error } = await ctx.supabase
        .from("projects")
        .insert({
          name: input.name,
          description: input.description || null,
          user_id: ctx.user.id,
          status: "active",
        })
        .select()
        .single()

      if (error) throw error

      return data
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).max(100).optional(),
        description: z.string().optional(),
        status: z.enum(["active", "archived", "completed"]).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (isDemoMode()) {
        const project = mockProjects.find((p) => p.id === input.id)
        if (!project) throw new Error("Project not found")
        const updated = { ...project, ...input, updated_at: new Date().toISOString() }
        return simulateAsync(updated)
      }

      const { id, ...updateData } = input

      const { data, error } = await ctx.supabase
        .from("projects")
        .update(updateData)
        .eq("id", id)
        .eq("user_id", ctx.user.id)
        .select()
        .single()

      if (error) throw error

      return data
    }),

  delete: protectedProcedure.input(z.object({ id: z.string() })).mutation(async ({ ctx, input }) => {
    if (isDemoMode()) {
      return simulateAsync({ success: true })
    }

    const { error } = await ctx.supabase.from("projects").delete().eq("id", input.id).eq("user_id", ctx.user.id)

    if (error) throw error

    return { success: true }
  }),
})
