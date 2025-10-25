"use client"

import { Button } from "@/components/ui/button"
import { Dumbbell } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold tracking-tight">TreinoPro</span>
          </div>
        <Link href={"/dashboard"}>
          <Button variant="outline" size="sm" className="font-medium bg-transparent">
            Entrar
          </Button>
        </Link>
        </div>
      </div>
    </nav>
  )
}
