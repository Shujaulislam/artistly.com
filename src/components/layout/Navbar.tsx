import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">Artistly</span>
        </Link>
        
        <div className="flex-1 flex items-center justify-center space-x-6 text-sm font-medium">
          <Link href="/artists" className="transition-colors hover:text-foreground/80 text-foreground">Artists</Link>
          <Link href="/categories" className="transition-colors hover:text-foreground/80 text-foreground">Categories</Link>
          <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground">About</Link>
        </div>

        <div className="flex items-center justify-end">
          <Button asChild variant="outline">
            <Link href="/onboard">Join as Artist</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
