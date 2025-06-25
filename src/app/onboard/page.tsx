import { ArtistForm } from "@/components/ArtistForm"
import { Toaster } from "sonner"

export default function OnboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Toaster />
      <main className="flex-1">
        <div className="container mx-auto py-8 md:py-12 lg:py-16">
          <div className="mx-auto max-w-[800px] space-y-8">
            <div className="flex flex-col space-y-3 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Join Our Artist Community
              </h1>
              <p className="text-xl text-muted-foreground">
                Share your talent with the world and start receiving bookings
              </p>
            </div>
            <ArtistForm />
          </div>
        </div>
      </main>
    </div>
  )
}