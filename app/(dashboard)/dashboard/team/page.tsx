"use client"

import { useState } from "react"
import { trpc } from "@/utils/trpc"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { QuantumButton } from "@/components/ui-extensions/quantum-button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Users, UserPlus, MoreVertical, Mail, Clock, Shield } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function TeamPage() {
  const { toast } = useToast()
  const [inviteEmail, setInviteEmail] = useState("")
  const [inviteRole, setInviteRole] = useState<"Admin" | "Developer" | "Viewer">("Developer")
  const [isInviteOpen, setIsInviteOpen] = useState(false)

  const { data: members, refetch: refetchMembers } = trpc.team.getMembers.useQuery()
  const { data: invitations, refetch: refetchInvitations } = trpc.team.getInvitations.useQuery()

  const inviteMutation = trpc.team.invite.useMutation({
    onSuccess: () => {
      toast({
        title: "Invitation sent",
        description: `An invitation has been sent to ${inviteEmail}`,
      })
      setInviteEmail("")
      setInviteRole("Developer")
      setIsInviteOpen(false)
      refetchInvitations()
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    },
  })

  const updateRoleMutation = trpc.team.updateMemberRole.useMutation({
    onSuccess: () => {
      toast({
        title: "Role updated",
        description: "Member role has been updated successfully",
      })
      refetchMembers()
    },
  })

  const removeMemberMutation = trpc.team.removeMember.useMutation({
    onSuccess: () => {
      toast({
        title: "Member removed",
        description: "Team member has been removed successfully",
      })
      refetchMembers()
    },
  })

  const handleInvite = () => {
    if (!inviteEmail) return
    inviteMutation.mutate({ email: inviteEmail, role: inviteRole })
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case "Admin":
        return "default"
      case "Developer":
        return "secondary"
      case "Viewer":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            <QuantumText>Team</QuantumText> Management
          </h1>
          <p className="text-muted-foreground">Manage your team members and permissions</p>
        </div>

        <Dialog open={isInviteOpen} onOpenChange={setIsInviteOpen}>
          <DialogTrigger asChild>
            <QuantumButton>
              <UserPlus className="mr-2 h-4 w-4" />
              Invite Member
            </QuantumButton>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Invite Team Member</DialogTitle>
              <DialogDescription>Send an invitation to join your team. They'll receive an email with instructions.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="colleague@example.com"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <Select value={inviteRole} onValueChange={(value: any) => setInviteRole(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Admin - Full access</SelectItem>
                    <SelectItem value="Developer">Developer - Create & edit</SelectItem>
                    <SelectItem value="Viewer">Viewer - Read only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsInviteOpen(false)}>
                Cancel
              </Button>
              <QuantumButton onClick={handleInvite} disabled={!inviteEmail || inviteMutation.isPending}>
                {inviteMutation.isPending ? "Sending..." : "Send Invitation"}
              </QuantumButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Team Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <QuantumCard>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-quantum" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{members?.length || 0}</div>
            <p className="text-xs text-muted-foreground">
              {members?.filter((m) => m.status === "active").length} active
            </p>
          </CardContent>
        </QuantumCard>

        <QuantumCard>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Invitations</CardTitle>
            <Mail className="h-4 w-4 text-quantum" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{invitations?.length || 0}</div>
            <p className="text-xs text-muted-foreground">Awaiting response</p>
          </CardContent>
        </QuantumCard>

        <QuantumCard>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Admins</CardTitle>
            <Shield className="h-4 w-4 text-quantum" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{members?.filter((m) => m.role === "Admin").length || 0}</div>
            <p className="text-xs text-muted-foreground">Full access members</p>
          </CardContent>
        </QuantumCard>
      </div>

      {/* Active Members */}
      <QuantumCard>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage roles and permissions for your team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {members?.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 rounded-lg border border-quantum/20 hover:border-quantum/40 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={member.avatar_url || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback className="bg-quantum/20 text-quantum">{getInitials(member.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.email}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        Last active: {new Date(member.last_active).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant={getRoleBadgeVariant(member.role) as any}>{member.role}</Badge>
                  {member.status === "active" && (
                    <div className="w-2 h-2 rounded-full bg-quantum animate-pulse" />
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => updateRoleMutation.mutate({ memberId: member.id, role: "Admin" })}
                      >
                        Make Admin
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => updateRoleMutation.mutate({ memberId: member.id, role: "Developer" })}
                      >
                        Make Developer
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => updateRoleMutation.mutate({ memberId: member.id, role: "Viewer" })}
                      >
                        Make Viewer
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="text-destructive"
                        onClick={() => removeMemberMutation.mutate({ memberId: member.id })}
                      >
                        Remove from team
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </QuantumCard>

      {/* Pending Invitations */}
      {invitations && invitations.length > 0 && (
        <QuantumCard>
          <CardHeader>
            <CardTitle>Pending Invitations</CardTitle>
            <CardDescription>Team members who haven't accepted their invitation yet</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {invitations.map((invite) => (
                <div
                  key={invite.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-quantum/20"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-quantum" />
                    <div>
                      <div className="font-medium">{invite.email}</div>
                      <div className="text-sm text-muted-foreground">
                        Invited by {invite.invited_by} on {new Date(invite.invited_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">{invite.role}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </QuantumCard>
      )}
    </div>
  )
}
