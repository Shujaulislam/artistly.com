
import { ArtistCard } from './ArtistCard'
import artistsData from '@/data/artists.json'

interface Artist {
  id: string
  name: string
  category: string
  location: string
  priceRange: string
}

interface FilterValues {
  category: string
  location: string
  priceRange: string
}

interface ArtistGridProps {
  filters?: FilterValues
}

export function ArtistGrid({ filters }: ArtistGridProps) {
  const artists = artistsData.artists.filter((artist: Artist) => {
    if (!filters) return true

    const categoryMatch = filters.category === 'All' || artist.category === filters.category
    const locationMatch = filters.location === 'All' || artist.location === filters.location
    
    const priceMatch = filters.priceRange === 'All' || (() => {
      const artistPrice = parseInt(artist.priceRange.split('-')[1].replace(/[^0-9]/g, ''))
      switch (filters.priceRange) {
        case '$0-$500':
          return artistPrice <= 500
        case '$501-$1000':
          return artistPrice > 500 && artistPrice <= 1000
        case '$1001+':
          return artistPrice > 1000
        default:
          return true
      }
    })()

    return categoryMatch && locationMatch && priceMatch
  })

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {artists.map((artist: Artist) => (
          <ArtistCard
            key={artist.id}
            name={artist.name}
            category={artist.category}
            location={artist.location}
            priceRange={artist.priceRange}
          />
        ))}
      </div>
    </div>
  )
}
