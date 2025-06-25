"use client"

import * as React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterBlockProps {
  onFilterChange: (filters: FilterValues) => void
}

interface FilterValues {
  category: string
  location: string
  priceRange: string
}

const categories = ["All", "Singer", "DJ", "Dancer", "Speaker"]
const locations = ["All", "New York, NY", "Los Angeles, CA", "Chicago, IL", "Miami, FL", "Austin, TX", "Seattle, WA"]
const priceRanges = ["All", "$0-$500", "$501-$1000", "$1001+"]

export function FilterBlock({ onFilterChange }: FilterBlockProps) {
  const [filters, setFilters] = React.useState<FilterValues>({
    category: "All",
    location: "All",
    priceRange: "All"
  })

  const handleFilterChange = (value: string, type: keyof FilterValues) => {
    const newFilters = { ...filters, [type]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className="space-y-4 md:space-y-0 md:flex md:space-x-4 p-4 bg-muted/50 rounded-lg">
      <Select onValueChange={(value) => handleFilterChange(value, "category")} defaultValue={filters.category}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>{category}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilterChange(value, "location")} defaultValue={filters.location}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          {locations.map((location) => (
            <SelectItem key={location} value={location}>{location}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilterChange(value, "priceRange")} defaultValue={filters.priceRange}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Price Range" />
        </SelectTrigger>
        <SelectContent>
          {priceRanges.map((range) => (
            <SelectItem key={range} value={range}>{range}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
