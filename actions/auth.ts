"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"
import { z } from "zod"
import { isDemoMode } from "@/utils/demo-mode"

const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  full_name: z.string().min(1, "Full name is required"),
})

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (isDemoMode()) {
    console.log("[v0] Auth - Demo mode sign in")
    // Allow any email/password in demo mode
    revalidatePath("/", "layout")
    redirect("/dashboard")
    return
  }

  // Validate input first
  try {
    signInSchema.parse({ email, password })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: error.errors[0].message }
    }
    return { error: "Invalid input" }
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error("Supabase auth error:", error)
    return { error: error.message }
  }

  revalidatePath("/", "layout")
  redirect("/dashboard")
}

export async function signUp(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const full_name = formData.get("full_name") as string

  if (isDemoMode()) {
    console.log("[v0] Auth - Demo mode sign up")
    return { success: "Demo mode: Account created! You can now sign in." }
  }

  try {
    const validatedData = signUpSchema.parse({ email, password, full_name })

    const supabase = await createClient()

    const { data, error } = await supabase.auth.signUp({
      email: validatedData.email,
      password: validatedData.password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      },
    })

    if (error) {
      return { error: error.message }
    }

    // Create profile
    if (data.user) {
      const { error: profileError } = await supabase.from("profiles").insert({
        id: data.user.id,
        full_name: validatedData.full_name,
      })

      if (profileError) {
        return { error: profileError.message }
      }
    }

    return { success: "Check your email to confirm your account" }
  } catch (error) {
    console.error("Sign up error:", error)
    if (error instanceof z.ZodError) {
      return { error: error.errors[0].message }
    }
    return { error: "An unexpected error occurred during sign up" }
  }
}

export async function signOut() {
  if (isDemoMode()) {
    console.log("[v0] Auth - Demo mode sign out")
    revalidatePath("/", "layout")
    redirect("/auth/login")
    return
  }

  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath("/", "layout")
  redirect("/auth/login")
}

export async function resetPassword(formData: FormData) {
  const email = formData.get("email") as string

  if (isDemoMode()) {
    console.log("[v0] Auth - Demo mode password reset")
    return { success: "Demo mode: Check your email for the password reset link" }
  }

  try {
    const emailSchema = z.string().email("Invalid email address")
    const validatedEmail = emailSchema.parse(email)

    const supabase = await createClient()

    const { error } = await supabase.auth.resetPasswordForEmail(validatedEmail, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback?next=/auth/reset-password`,
    })

    if (error) {
      return { error: error.message }
    }

    return { success: "Check your email for the password reset link" }
  } catch (error) {
    console.error("Reset password error:", error)
    if (error instanceof z.ZodError) {
      return { error: error.errors[0].message }
    }
    return { error: "An unexpected error occurred" }
  }
}

export async function updatePassword(formData: FormData) {
  const password = formData.get("password") as string

  if (isDemoMode()) {
    console.log("[v0] Auth - Demo mode password update")
    return { success: "Demo mode: Password updated successfully" }
  }

  try {
    const passwordSchema = z.string().min(8, "Password must be at least 8 characters")
    const validatedPassword = passwordSchema.parse(password)

    const supabase = await createClient()

    const { error } = await supabase.auth.updateUser({
      password: validatedPassword,
    })

    if (error) {
      return { error: error.message }
    }

    return { success: "Password updated successfully" }
  } catch (error) {
    console.error("Update password error:", error)
    if (error instanceof z.ZodError) {
      return { error: error.errors[0].message }
    }
    return { error: "An unexpected error occurred" }
  }
}
