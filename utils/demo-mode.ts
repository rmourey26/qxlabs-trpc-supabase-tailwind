/**
 * Checks if the app is running in demo mode (missing environment variables)
 */
export function isDemoMode(): boolean {
  return (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_URL === "your_supabase_project_url" ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY === "your_supabase_anon_key"
  )
}

/**
 * Mock user data for demo mode
 */
export const mockUser = {
  id: "demo-user-123",
  email: "demo@example.com",
  user_metadata: {
    full_name: "Demo User",
  },
  created_at: new Date().toISOString(),
}

/**
 * Mock projects data for demo mode
 */
export const mockProjects = [
  {
    id: "1",
    name: "QxLabs Network",
    description: "Topology-aware consensus optimization for Sui blockchain",
    status: "active" as const,
    user_id: mockUser.id,
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    name: "Quantum Dashboard",
    description: "Real-time network monitoring and analytics platform",
    status: "active" as const,
    user_id: mockUser.id,
    created_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    name: "SCION Integration",
    description: "Next-generation internet architecture implementation",
    status: "completed" as const,
    user_id: mockUser.id,
    created_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
]

/**
 * Simulates an async operation for demo mode
 */
export async function simulateAsync<T>(data: T, delay = 300): Promise<T> {
  await new Promise((resolve) => setTimeout(resolve, delay))
  return data
}
