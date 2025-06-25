import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section className="container mx-auto py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Ready to Showcase Your Talent?
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Join our community of artists and reach thousands of potential clients.
          Create your profile today and start getting bookings for your performances.
        </p>
        <Button size="lg" className="mt-4" asChild>
          <a href="/onboard">Start Your Artist Journey</a>
        </Button>
      </div>
    </section>
  )
}
