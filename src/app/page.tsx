import { CallToAction } from "@/components/CallToAction"
import { CategoryCard } from "@/components/CategoryCard"
import { HeroSection } from "@/components/HeroSection"


const categories = [
  {
    title: "Singers",
    description: "Professional vocalists for weddings, events, and performances",
    count: 150,
    href: "/artists?category=singers"
  },
  {
    title: "Dancers",
    description: "Skilled dancers specializing in various styles and performances",
    count: 120,
    href: "/artists?category=dancers"
  },
  {
    title: "Speakers",
    description: "Engaging speakers for conferences, workshops, and events",
    count: 80,
    href: "/artists?category=speakers"
  },
  {
    title: "DJs",
    description: "Experienced DJs for parties, clubs, and special occasions",
    count: 100,
    href: "/artists?category=djs"
  }
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full">
          <HeroSection />
        </div>
        <section className="container py-8 md:py-12 lg:py-24 w-full">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Browse by Category</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Explore our diverse range of talented artists across different categories
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:grid-cols-4 mt-12">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </section>
        <div className="w-full">
          <CallToAction />
        </div>
      </main>
    </div>
  )
}
