import { z } from "zod"
import { router, protectedProcedure } from "../trpc"
import { isDemoMode, simulateAsync } from "@/utils/demo-mode"

const mockTeamMembers = [
  {
    id: "member-1",
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    avatar_url: "/avatar.png",
    status: "active",
    joined_at: "2024-01-10T10:00:00Z",
    last_active: "2024-01-21T14:30:00Z",
  },
  {
    id: "member-2",
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Developer",
    avatar_url: "/avatar.png",
    status: "active",
    joined_at: "2024-01-12T09:00:00Z",
    last_active: "2024-01-21T13:45:00Z",
  },
  {
    id: "member-3",
    name: "Carol Davis",
    email: "carol@example.com",
    role: "Developer",
    avatar_url: "/avatar.png",
    status: "active",
    joined_at: "2024-01-15T11:00:00Z",
    last_active: "2024-01-21T15:20:00Z",
  },
  {
    id: "member-4",
    name: "David Wilson",
    email: "david@example.com",
    role: "Viewer",
    avatar_url: "/avatar.png",
    status: "inactive",
    joined_at: "2024-01-18T08:00:00Z",
    last_active: "2024-01-20T10:15:00Z",
  },
]

const mockInvitations = [
  {
    id: "invite-1",
    email: "newuser@example.com",
    role: "Developer",
    status: "pending",
    invited_at: "2024-01-20T16:00:00Z",
    invited_by: "Alice Johnson",
  },
]

export const teamRouter = router({
  getMembers: protectedProcedure.query(async ({ ctx }) => {
    if (isDemoMode()) {
      console.log("[v0] Team - Returning mock members data")
      return simulateAsync(mockTeamMembers)
    }

    const { data, error } = await ctx.supabase
      .from("team_members")
      .select("*")
      .eq("organization_id", ctx.user.id)
      .order("joined_at", { ascending: false })

    if (error) throw error
    return data
  }),

  getInvitations: protectedProcedure.query(async ({ ctx }) => {
    if (isDemoMode()) {
      console.log("[v0] Team - Returning mock invitations data")
      return simulateAsync(mockInvitations)
    }

    const { data, error } = await ctx.supabase
      .from("team_invitations")
      .select("*")
      .eq("organization_id", ctx.user.id)
      .eq("status", "pending")
      .order("invited_at", { ascending: false })

    if (error) throw error
    return data
  }),

  invite: protectedProcedure
    .input(
      z.object({
        email: z.string().email(),
        role: z.enum(["Admin", "Developer", "Viewer"]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (isDemoMode()) {
        console.log("[v0] Team - Mock invitation sent")
        const newInvite = {
          id: `invite-${Date.now()}`,
          email: input.email,
          role: input.role,
          status: "pending" as const,
          invited_at: new Date().toISOString(),
          invited_by: ctx.user.email || "Demo User",
        }
        return simulateAsync(newInvite)
      }

      const { data, error } = await ctx.supabase
        .from("team_invitations")
        .insert({
          email: input.email,
          role: input.role,
          organization_id: ctx.user.id,
          invited_by: ctx.user.id,
        })
        .select()
        .single()

      if (error) throw error
      return data
    }),

  updateMemberRole: protectedProcedure
    .input(
      z.object({
        memberId: z.string(),
        role: z.enum(["Admin", "Developer", "Viewer"]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (isDemoMode()) {
        console.log("[v0] Team - Mock role update")
        return simulateAsync({ success: true, memberId: input.memberId, role: input.role })
      }

      const { data, error } = await ctx.supabase
        .from("team_members")
        .update({ role: input.role })
        .eq("id", input.memberId)
        .eq("organization_id", ctx.user.id)
        .select()
        .single()

      if (error) throw error
      return data
    }),

  removeMember: protectedProcedure.input(z.object({ memberId: z.string() })).mutation(async ({ ctx, input }) => {
    if (isDemoMode()) {
      console.log("[v0] Team - Mock member removal")
      return simulateAsync({ success: true })
    }

    const { error } = await ctx.supabase
      .from("team_members")
      .delete()
      .eq("id", input.memberId)
      .eq("organization_id", ctx.user.id)

    if (error) throw error
    return { success: true }
  }),
})
