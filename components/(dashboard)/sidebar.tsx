"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Home, Dumbbell, BarChart, Users, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useUser } from "@clerk/nextjs"

interface SidebarItemProps {
  icon: React.ElementType
  label: string
  href: string
  active?: boolean
}

function SidebarItem({ icon: Icon, label, href, active }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
        active
          ? "bg-primary text-primary-foreground font-medium"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  )
}

export function Sidebar() {
  const pathname = usePathname()
  const { user } = useUser()

  const role = user?.publicMetadata?.role as string | undefined

  return (
    <aside className="hidden md:flex w-64 border-r border-border bg-card h-screen sticky top-0 flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold tracking-tight">TreinoPro</span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <SidebarItem icon={Home} label="Início" href="/dashboard" active={pathname === "/dashboard"} />

        <SidebarItem
          icon={Dumbbell}
          label="Treinos"
          href="/dashboard/treinos"
          active={pathname === "/dashboard/treinos"}
        />

        {role === "aluno" && (
          <SidebarItem
            icon={BarChart}
            label="Meu progresso"
            href="/dashboard/progresso"
            active={pathname === "/dashboard/progresso"}
          />
        )}

        {role === "admin" && (
          <SidebarItem
            icon={Users}
            label="Gestão de usuários"
            href="/dashboard/users"
            active={pathname === "/dashboard/users"}
          />
        )}

        <SidebarItem
          icon={Settings}
          label="Configurações"
          href="/dashboard/configuracoes"
          active={pathname === "/dashboard/configuracoes"}
        />
      </nav>
    </aside>
  )
}
