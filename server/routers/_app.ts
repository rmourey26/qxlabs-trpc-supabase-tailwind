import { router } from "../trpc"
import { projectRouter } from "./project"
import { profileRouter } from "./profile"

export const appRouter = router({
  project: projectRouter,
  profile: profileRouter,
})

export type AppRouter = typeof appRouter
