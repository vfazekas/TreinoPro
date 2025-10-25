import type React from "react"
import { Sidebar } from "@/components/(dashboard)/sidebar"
import { DashboardHeader } from "@/components/(dashboard)/header"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-4 md:p-6 bg-background">{children}</main>
      </div>
    </div>
  )
}
