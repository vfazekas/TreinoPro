"use client";

import type React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Home, Dumbbell, BarChart, Users, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

function SidebarItem({
  icon: Icon,
  label,
  href,
  active,
  onClick,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
        active
          ? "bg-primary text-primary-foreground font-medium"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
}

export function MobileSidebar() {
  const pathname = usePathname();
  const { user } = useUser();
  const [open, setOpen] = useState(false);

  const role = user?.publicMetadata?.role as string | undefined;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-7 w-7 text-primary" />
              <SheetTitle className="text-xl font-bold tracking-tight">
                TreinoPro
              </SheetTitle>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            <SidebarItem
              icon={Home}
              label="Início"
              href="/dashboard"
              active={pathname === "/dashboard"}
              onClick={() => setOpen(false)}
            />

            <SidebarItem
              icon={Dumbbell}
              label="Treinos"
              href="/dashboard/treinos"
              active={pathname === "/dashboard/treinos"}
              onClick={() => setOpen(false)}
            />

            {role === "aluno" && (
              <SidebarItem
                icon={BarChart}
                label="Meu progresso"
                href="/dashboard/progresso"
                active={pathname === "/dashboard/progresso"}
                onClick={() => setOpen(false)}
              />
            )}

            {role === "admin" && (
              <SidebarItem
                icon={Users}
                label="Gestão de usuários"
                href="/dashboard/users"
                active={pathname === "/dashboard/users"}
                onClick={() => setOpen(false)}
              />
            )}

            <SidebarItem
              icon={Settings}
              label="Configurações"
              href="/dashboard/configuracoes"
              active={pathname === "/dashboard/configuracoes"}
              onClick={() => setOpen(false)}
            />
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
