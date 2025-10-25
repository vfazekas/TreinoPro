import { Navbar } from "@/components/(landingPage)/navbar"
import { HeroSection } from "@/components/(landingPage)/hero-section"
import { Footer } from "@/components/(landingPage)/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  )
}
