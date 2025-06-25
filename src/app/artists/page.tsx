"use client"

import { useState } from "react"
import { ArtistGrid } from "@/components/ArtistGrid"
import { FilterBlock } from "@/components/FilterBlock"

interface FilterValues {
  category: string
  location: string
  priceRange: string
}

export default function ArtistsPage() {
  const [filters, setFilters] = useState<FilterValues>({
    category: "All",
    location: "All",
    priceRange: "All"
  })

  const handleFilterChange = (newFilters: FilterValues) => {
    setFilters(newFilters)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <div className="container mx-auto py-8 md:py-12 space-y-8">
          <div className="flex flex-col space-y-3 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Browse Artists</h1>
            <p className="text-xl text-muted-foreground max-w-[85%] mx-auto">
              Discover talented artists for your next event
            </p>
          </div>
          <div className="max-w-[85rem] mx-auto space-y-8">
            <FilterBlock onFilterChange={handleFilterChange} />
            <ArtistGrid filters={filters} />
          </div>
        </div>
      </main>
    </div>
  )
}