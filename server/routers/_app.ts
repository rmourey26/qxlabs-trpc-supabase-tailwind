import { router } from "../trpc"
import { projectRouter } from "./project"
import { profileRouter } from "./profile"
import { analyticsRouter } from "./analytics"
import { teamRouter } from "./team"

export const appRouter = router({
  project: projectRouter,
  profile: profileRouter,
  analytics: analyticsRouter,
  team: teamRouter,
})

export type AppRouter = typeof appRouter
