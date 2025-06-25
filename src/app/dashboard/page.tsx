"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ActionDropdown, Column, DataTable, StatusBadge } from "@/components/ui/data-table"
import artistsData from "@/data/artists.json"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Clock, CheckCircle, XCircle } from "lucide-react"
import { toast } from "sonner"



interface Artist {
  id: string
  name: string
  category: string
  location: string
  priceRange: string
  status: "pending" | "approved" | "rejected"
}

export default function ManagerDashboard() {
  const [artists, setArtists] = React.useState<Artist[]>(
    artistsData.artists.map((artist) => ({
      ...artist,
      status: artist.status as "pending" | "approved" | "rejected",
    }))
  )

  // Extract city from location (e.g., "New York, NY" -> "New York")
  const extractCity = (location: string) => {
    return location.split(",")[0].trim()
  }

  // Handle actions from the table
const handleAction = (action: string, artist: Artist) => {
  switch (action) {
    case "view":
      toast.success(`Viewing ${artist.name}`)
      break

    case "edit":
      toast.success(`Editing ${artist.name}`)
      break

    case "approve":
      setArtists((prev) =>
        prev.map((a) => (a.id === artist.id ? { ...a, status: "approved" } : a))
      )
      toast.success(`${artist.name} has been approved`)
      break

    case "reject":
      setArtists((prev) =>
        prev.map((a) => (a.id === artist.id ? { ...a, status: "rejected" } : a))
      )
      toast.success(`${artist.name} has been rejected`)
      break

    case "delete":
      setArtists((prev) => prev.filter((a) => a.id !== artist.id))
      toast.error(`${artist.name} has been deleted`)
      break

    default:
      toast.error("Unknown action")
  }
}


  // Table can be configured here
  // Define the columns for the DataTable
  // Each column can have a key, header, and cell renderer
  const columns: Column<Artist>[] = [
    {
      key: "name",
      header: "Name",
      sortable: true,
      cell: (artist) => <div className="font-medium">{artist.name}</div>,
    },
    {
      key: "category",
      header: "Category",
      sortable: true,
      cell: (artist) => <Badge variant="outline">{artist.category}</Badge>,
    },
    {
      key: "location",
      header: "City",
      sortable: true,
      cell: (artist: { location: string }) => <div className="text-sm text-muted-foreground">{extractCity(artist.location)}</div>,
    },
    {
      key: "priceRange",
      header: "Fee",
      sortable: true,
      cell: (artist) => <div className="font-mono text-sm">{artist.priceRange}</div>,
    },
    {
      key: "status",
      header: "Status",
      sortable: true,
      cell: (artist: { status: string }) => <StatusBadge status={artist.status} />,
    },
    {
      key: "actions",
      header: "Actions",
      cell: (artist: Artist) => <ActionDropdown item={artist} onAction={handleAction} />,
    },
  ]

  // Calculate statistics
  const stats = React.useMemo(() => {
    const total = artists.length
    const pending = artists.filter((a) => a.status === "pending").length
    const approved = artists.filter((a) => a.status === "approved").length
    const rejected = artists.filter((a) => a.status === "rejected").length

    return { total, pending, approved, rejected }
  }, [artists])

  // desscrptive comments to later add accessibility features
  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Manager Dashboard</h1>
        <p className="text-muted-foreground">Manage artist submissions and track their status</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Artists</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">All registered artists</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pending}</div>
            <p className="text-xs text-muted-foreground">Awaiting review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.approved}</div>
            <p className="text-xs text-muted-foreground">Ready to perform</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rejected</CardTitle>
            <XCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.rejected}</div>
            <p className="text-xs text-muted-foreground">Not approved</p>
          </CardContent>
        </Card>
      </div>

      {/* Artists Table */}
      <Card>
        <CardHeader>
          <CardTitle>Artist Submissions</CardTitle>
          <CardDescription>Manage and review all artist submissions in one place</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            data={artists}
            columns={columns}
            searchPlaceholder="Search artists by name, category, or city..."
            emptyMessage="No artists found. Add some artists to get started."
            onAction={handleAction}
          />
        </CardContent>
      </Card>

      {/* Conditional Rendering Examples */}
      {stats.pending > 0 && (
        <Card className="border-yellow-200 bg-yellow-50 dark:border-fuchsia-800 dark:bg-fuchsia-950">
          <CardHeader>
            <CardTitle className="text-yellow-800 dark:text-yellow-200">Pending Reviews</CardTitle>
            <CardDescription className="text-yellow-700 dark:text-yellow-300">
              You have {stats.pending} artist{stats.pending !== 1 ? "s" : ""} waiting for review
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className="text-yellow-800 border-yellow-300 dark:text-yellow-200 dark:border-yellow-700"
            >
              Review Pending Artists
            </Button>
          </CardContent>
        </Card>
      )}

      {artists.length === 0 && (
        <Card className="border-dashed dark:border-muted-700">
          <CardContent className="flex flex-col items-center justify-center h-32 space-y-2">
            <Users className="h-8 w-8 text-muted-foreground dark:text-muted-400" />
            <p className="text-muted-foreground dark:text-muted-400">No artists registered yet</p>
            <Button className="dark:bg-muted-800 dark:text-white">Add First Artist</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
