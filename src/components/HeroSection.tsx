import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-4 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        Connect with Talented Artists
        <br className="hidden sm:inline" />
        for Your Next Event
      </h1>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        Discover and book amazing performers, musicians, and entertainers.
        From intimate gatherings to grand celebrations, find the perfect artist for any occasion.
      </p>
      <div className="flex w-full items-center justify-center space-x-4 py-4">
        <Button size="lg" asChild>
          <a href="/artists">Browse Artists</a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="/onboard">Become an Artist</a>
        </Button>
      </div>
    </section>
  )
}
