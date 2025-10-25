"use client"

import { UserButton } from "@clerk/nextjs"
import { MobileSidebar } from "./mobile-sidebar"

export function DashboardHeader() {
  return (
    <header className="h-16 border-b border-border bg-card sticky top-0 z-40">
      <div className="h-full px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MobileSidebar />
          <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
        </div>

        <div className="flex items-center gap-4">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
            }}
          />
        </div>
      </div>
    </header>
  )
}
