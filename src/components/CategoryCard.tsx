import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"

interface CategoryCardProps {
  title: string
  description: string
  count?: number
  href: string
}

export function CategoryCard({ title, description, count, href }: CategoryCardProps) {
  return (
    <Card className="hover:bg-muted/50 transition-colors">
      <Link href={href}>
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="mt-2">{description}</CardDescription>
          {count !== undefined && (
            <p className="text-sm text-muted-foreground mt-2">{count} artists available</p>
          )}
        </CardHeader>
      </Link>
    </Card>
  )
}
