import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ArtistCardProps {
  name: string
  category: string
  location: string
  priceRange: string
}

export function ArtistCard({ name, category, location, priceRange }: ArtistCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">{name}</h3>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Location:</span>
            <span className="text-sm text-muted-foreground">{location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Price Range:</span>
            <span className="text-sm text-muted-foreground">{priceRange}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Ask for Quote</Button>
      </CardFooter>
    </Card>
  )
}
