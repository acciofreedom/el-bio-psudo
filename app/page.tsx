import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { BrandIntro } from "@/components/brand-intro"
import { Collections } from "@/components/collections"
import { Atelier } from "@/components/atelier"
import { Sustainability } from "@/components/sustainability"
import { Careers } from "@/components/careers"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <BrandIntro />
        <Collections />
        <Atelier />
        <Sustainability />
        <Careers />
      </main>
      <SiteFooter />
    </div>
  )
}
