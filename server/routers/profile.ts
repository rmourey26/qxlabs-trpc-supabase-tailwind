import { z } from "zod"
import { router, protectedProcedure } from "../trpc"
import { TRPCError } from "@trpc/server"

const profileSchema = z.object({
  full_name: z.string().min(1, "Full name is required").max(100),
  avatar_url: z.string().url().optional().or(z.literal("")),
})

export const profileRouter = router({
  get: protectedProcedure.query(async ({ ctx }) => {
    try {
      const { data: profile, error } = await ctx.supabase.from("profiles").select("*").eq("id", ctx.user.id).single()

      if (error && error.code !== "PGRST116") {
        console.error("Profile fetch error:", error)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch profile",
        })
      }

      // If no profile exists, create one
      if (!profile) {
        const { data: newProfile, error: createError } = await ctx.supabase
          .from("profiles")
          .insert({
            id: ctx.user.id,
            full_name: ctx.user.email?.split("@")[0] || "User",
            avatar_url: null,
          })
          .select()
          .single()

        if (createError) {
          console.error("Profile creation error:", createError)
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to create profile",
          })
        }

        return newProfile
      }

      return profile
    } catch (error) {
      if (error instanceof TRPCError) {
        throw error
      }
      console.error("Unexpected profile error:", error)
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "An unexpected error occurred",
      })
    }
  }),

  update: protectedProcedure.input(profileSchema).mutation(async ({ ctx, input }) => {
    try {
      const { data: profile, error } = await ctx.supabase
        .from("profiles")
        .update({
          full_name: input.full_name,
          avatar_url: input.avatar_url || null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", ctx.user.id)
        .select()
        .single()

      if (error) {
        console.error("Profile update error:", error)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to update profile",
        })
      }

      return profile
    } catch (error) {
      if (error instanceof TRPCError) {
        throw error
      }
      console.error("Unexpected profile update error:", error)
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "An unexpected error occurred",
      })
    }
  }),
})
