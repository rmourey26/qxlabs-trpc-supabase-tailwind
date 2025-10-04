"use client"

import { useState } from "react"
import { trpc } from "@/utils/trpc"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { QuantumButton } from "@/components/ui-extensions/quantum-button"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Search, Edit, Trash2, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"

export default function ProjectsPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [newProject, setNewProject] = useState({ name: "", description: "" })

  const utils = trpc.useContext()
  const { data: projects } = trpc.project.getAll.useQuery()

  const createProject = trpc.project.create.useMutation({
    onSuccess: () => {
      utils.project.getAll.invalidate()
      setIsCreateDialogOpen(false)
      setNewProject({ name: "", description: "" })
      toast({
        title: "Project created",
        description: "Your project has been created successfully.",
      })
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    },
  })

  const deleteProject = trpc.project.delete.useMutation({
    onSuccess: () => {
      utils.project.getAll.invalidate()
      toast({
        title: "Project deleted",
        description: "Your project has been deleted successfully.",
      })
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    },
  })

  const filteredProjects = projects?.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleCreateProject = () => {
    if (!newProject.name) return
    createProject.mutate({
      name: newProject.name,
      description: newProject.description,
    })
  }

  const handleDeleteProject = (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      deleteProject.mutate({ id })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage your projects and their settings</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <QuantumButton>
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </QuantumButton>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
              <DialogDescription>Add a new project to your workspace</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Project Name</Label>
                <Input
                  id="name"
                  placeholder="Enter project name"
                  value={newProject.name}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter project description"
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <QuantumButton variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </QuantumButton>
              <QuantumButton onClick={handleCreateProject} disabled={!newProject.name}>
                Create Project
              </QuantumButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects && filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <QuantumCard key={project.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">
                      <QuantumText>{project.name}</QuantumText>
                    </CardTitle>
                    <CardDescription className="line-clamp-1 mt-1">
                      {project.description || "No description"}
                    </CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="rounded-full p-1 hover:bg-muted">
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-red-500 focus:text-red-500"
                        onClick={() => handleDeleteProject(project.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Created {new Date(project.created_at).toLocaleDateString()}
                  </div>
                  <Badge
                    className={
                      project.status === "active"
                        ? "bg-quantum/20 text-quantum hover:bg-quantum/30"
                        : project.status === "completed"
                          ? "bg-green-500/20 text-green-500 hover:bg-green-500/30"
                          : "bg-orange-500/20 text-orange-500 hover:bg-orange-500/30"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardContent>
            </QuantumCard>
          ))
        ) : (
          <div className="col-span-full flex items-center justify-center p-8">
            <div className="text-center">
              <p className="text-muted-foreground">No projects found</p>
              {searchQuery && (
                <QuantumButton variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
                  Clear search
                </QuantumButton>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
