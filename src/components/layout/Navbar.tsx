"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Browse Artists", href: "/artists" },
    { name: "Categories", href: "/artists?category=all" },
    { name: "Dashboard", href: "/dashboard" }
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Artistly
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Button asChild size="sm" className="font-medium">
            <Link href="/onboard">Join as Artist</Link>
          </Button>

          <ModeToggle />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-muted transition"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t bg-background shadow-sm">
          <div className="flex flex-col px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-primary transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/onboard"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              <Button className="w-full">Join as Artist</Button>
            </Link>
            <div className="pt-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
