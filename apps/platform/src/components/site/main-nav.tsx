"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { LogoIcon } from "@/components/icons/logo"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <LogoIcon className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/architecture"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/architecture" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Architecture
        </Link>
        <Link
          href="/best-practices"
          className={cn(
            "transition-colors hover:text-foreground/80",
              pathname == "/best-practices"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Best Practices
        </Link>
        <Link
          href="/build-from-scratch"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname == "/build-from-scratch"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Build From Scratch
        </Link>
        <Link
          href="/production-grade-projects"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname == "/production-grade-projects"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Production Grade Projects
        </Link>
      </nav>
    </div>
  )
}