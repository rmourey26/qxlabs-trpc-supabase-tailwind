import { createBrowserClient } from "@supabase/ssr"
import type { Database } from "@/types/supabase"
import { isDemoMode } from "@/utils/demo-mode"

export function createClient() {
  if (isDemoMode()) {
    console.log("[v0] Running in demo mode - Supabase client will use mock data")
    // Return a mock client that won't throw errors
    return createBrowserClient<Database>("https://demo.supabase.co", "demo-anon-key-for-template-preview")
  }

  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}
