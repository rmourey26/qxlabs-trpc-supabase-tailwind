"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { trpc } from "@/utils/trpc"
import { CheckCircle, XCircle, Loader2, User, Calendar, Clock, RefreshCw, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ProfilePage() {
  const { toast } = useToast()
  const [fullName, setFullName] = useState("")
  const [avatarUrl, setAvatarUrl] = useState("")
  const [isValidatingUrl, setIsValidatingUrl] = useState(false)
  const [urlValidationStatus, setUrlValidationStatus] = useState<"valid" | "invalid" | "loading" | null>(null)

  const { data: profile, isLoading, error, refetch } = trpc.profile.get.useQuery()
  const updateProfile = trpc.profile.update.useMutation({
    onSuccess: () => {
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
      refetch()
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update profile",
        variant: "destructive",
      })
    },
  })

  // Sync form data with fetched profile
  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name || "")
      setAvatarUrl(profile.avatar_url || "")
    }
  }, [profile])

  // Debounced URL validation
  useEffect(() => {
    if (!avatarUrl || avatarUrl === profile?.avatar_url) {
      setUrlValidationStatus(null)
      return
    }

    const timeoutId = setTimeout(() => {
      validateAvatarUrl(avatarUrl)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [avatarUrl, profile?.avatar_url])

  const validateAvatarUrl = async (url: string) => {
    if (!url) {
      setUrlValidationStatus(null)
      return
    }

    setIsValidatingUrl(true)
    setUrlValidationStatus("loading")

    try {
      // First, check if it's a valid URL format
      const urlObj = new URL(url)

      // Check if it's a reasonable protocol
      if (!["http:", "https:"].includes(urlObj.protocol)) {
        setUrlValidationStatus("invalid")
        setIsValidatingUrl(false)
        return
      }

      // Try multiple validation approaches
      let isValid = false

      // Method 1: Try to load the image with a timeout
      try {
        const img = new Image()

        const loadPromise = new Promise<boolean>((resolve) => {
          const timeout = setTimeout(() => {
            resolve(false)
          }, 5000) // 5 second timeout

          img.onload = () => {
            clearTimeout(timeout)
            resolve(true)
          }

          img.onerror = () => {
            clearTimeout(timeout)
            resolve(false)
          }

          // Set crossOrigin to anonymous to handle CORS
          img.crossOrigin = "anonymous"
          img.src = url
        })

        isValid = await loadPromise
      } catch (imageError) {
        console.log("Image loading failed, trying fetch method:", imageError)

        // Method 2: Try fetch with HEAD request (faster, less data)
        try {
          const response = await fetch(url, {
            method: "HEAD",
            mode: "no-cors", // This will help with CORS issues
          })

          // With no-cors mode, we can't check the actual response
          // but if fetch doesn't throw, the URL is likely accessible
          isValid = true
        } catch (fetchError) {
          console.log("Fetch HEAD failed, trying GET:", fetchError)

          // Method 3: Try a regular fetch (as fallback)
          try {
            const response = await fetch(url, {
              mode: "no-cors",
            })
            isValid = true
          } catch (finalError) {
            console.log("All validation methods failed:", finalError)
            isValid = false
          }
        }
      }

      setUrlValidationStatus(isValid ? "valid" : "invalid")
    } catch (urlError) {
      console.log("URL validation error:", urlError)
      setUrlValidationStatus("invalid")
    } finally {
      setIsValidatingUrl(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!fullName.trim()) {
      toast({
        title: "Error",
        description: "Full name is required",
        variant: "destructive",
      })
      return
    }

    // Allow submission even if URL validation failed (user might know it works)
    // Just warn them if the URL seems invalid
    if (avatarUrl && urlValidationStatus === "invalid") {
      toast({
        title: "Warning",
        description:
          "The avatar URL couldn't be validated, but we'll try to save it anyway. If it doesn't work, you can update it later.",
        variant: "default",
      })
    }

    updateProfile.mutate({
      full_name: fullName.trim(),
      avatar_url: avatarUrl.trim() || "",
    })
  }

  const handleReset = () => {
    if (profile) {
      setFullName(profile.full_name || "")
      setAvatarUrl(profile.avatar_url || "")
      setUrlValidationStatus(null)
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const getAvatarUrlStatus = () => {
    if (isValidatingUrl || urlValidationStatus === "loading") {
      return <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
    }
    if (urlValidationStatus === "valid") {
      return <CheckCircle className="h-4 w-4 text-green-500" />
    }
    if (urlValidationStatus === "invalid") {
      return <XCircle className="h-4 w-4 text-orange-500" />
    }
    return null
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-muted-foreground">Manage your profile information</p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-48" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-20 w-20 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-24" />
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-muted-foreground">Manage your profile information</p>
        </div>

        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Failed to load profile data. {error.message}
            <Button variant="outline" size="sm" className="ml-2 bg-transparent" onClick={() => refetch()}>
              <RefreshCw className="h-4 w-4 mr-1" />
              Retry
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your profile information</p>
      </div>

      <div className="grid gap-6">
        {/* Profile Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Overview
            </CardTitle>
            <CardDescription>Your current profile information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={profile?.avatar_url || undefined} alt={profile?.full_name || "User"} />
                <AvatarFallback className="text-lg">
                  {profile?.full_name ? getInitials(profile.full_name) : "U"}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{profile?.full_name || "No name set"}</h3>
                <Badge variant="secondary">Active Account</Badge>
                <p className="text-sm text-muted-foreground">User ID: {profile?.id}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Edit Profile Form */}
        <Card>
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
            <CardDescription>Update your profile information below</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="avatarUrl">Avatar URL</Label>
                <div className="relative">
                  <Input
                    id="avatarUrl"
                    type="url"
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                    placeholder="https://example.com/avatar.jpg (optional)"
                    className="pr-10"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">{getAvatarUrlStatus()}</div>
                </div>
                {urlValidationStatus === "invalid" && (
                  <p className="text-sm text-orange-600">
                    URL validation failed (possibly due to CORS restrictions). You can still save it - it might work
                    anyway.
                  </p>
                )}
                {urlValidationStatus === "valid" && <p className="text-sm text-green-600">Avatar URL is valid</p>}
                <p className="text-xs text-muted-foreground">
                  Leave empty to use default avatar with your initials. Some URLs may not validate due to CORS
                  restrictions but will still work.
                </p>
              </div>

              <div className="flex gap-2 pt-4">
                <Button type="submit" disabled={updateProfile.isPending}>
                  {updateProfile.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
                <Button type="button" variant="outline" onClick={handleReset} disabled={updateProfile.isPending}>
                  Reset
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Account Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Account Information
            </CardTitle>
            <CardDescription>Read-only account details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-muted-foreground">Account Created</Label>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{profile?.created_at ? formatDate(profile.created_at) : "Unknown"}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-muted-foreground">Last Updated</Label>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{profile?.updated_at ? formatDate(profile.updated_at) : "Never"}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <Label className="text-sm font-medium text-muted-foreground">User ID</Label>
              <div className="mt-1 p-2 bg-muted rounded-md">
                <code className="text-sm font-mono">{profile?.id}</code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
