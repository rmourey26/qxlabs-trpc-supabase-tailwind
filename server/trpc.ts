import { initTRPC, TRPCError } from "@trpc/server"
import { ZodError } from "zod"
import { createClient } from "@/utils/supabase/server"
import { isDemoMode, mockUser } from "@/utils/demo-mode"

export type Context = {
  user: {
    id: string
    email?: string
  } | null
  supabase: Awaited<ReturnType<typeof createClient>>
}

export const createContext = async (): Promise<Context> => {
  try {
    const supabase = await createClient()

    if (isDemoMode()) {
      console.log("[v0] TRPC Context - Using demo mode with mock user")
      return {
        user: { id: mockUser.id, email: mockUser.email },
        supabase,
      }
    }

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()

    if (error) {
      console.error("TRPC Context - Auth error:", error)
      return {
        user: null,
        supabase,
      }
    }

    return {
      user: user ? { id: user.id, email: user.email } : null,
      supabase,
    }
  } catch (error) {
    console.error("TRPC Context - Error creating context:", error)
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to create context",
    })
  }
}

const t = initTRPC.context<typeof createContext>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" })
  }
  return next({
    ctx: {
      user: ctx.user,
      supabase: ctx.supabase,
    },
  })
})

export const router = t.router
export const publicProcedure = t.procedure
export const protectedProcedure = t.procedure.use(isAuthed)
export type { TRPCError }
