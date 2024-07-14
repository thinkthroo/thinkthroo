"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils";
import { BookIcon } from "../icons";
import { BoxIcon } from "../icons/box";

export default function SiteSidebar() {

  const pathname = usePathname()

  return (
    <div className="hidden h-full border-r bg-muted/40 md:block md:w-72">
      <div className="flex h-full flex-col gap-4 p-4">
        <div className="flex h-[60px] items-center">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <BookIcon className="h-6 w-6" />
            <span className="text-lg">Test</span>
          </Link>
        </div>
        <nav className="flex-1 space-y-2">
          <div className="space-y-1">
            <div className="px-3 text-xs font-medium text-muted-foreground">Modules</div>
            <Link
              href="/best-practices"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                {
                  "bg-accent text-accent-foreground": pathname === "/best-practices"
                }
              )}
              prefetch={false}
            >
              <BoxIcon className="h-5 w-5" />
              Best practices
            </Link>
            <Link
              href="/build-from-scratch"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                {
                  "bg-accent text-accent-foreground": pathname === "/build-from-scratch"
                }
              )}
              prefetch={false}
            >
              <BoxIcon className="h-5 w-5" />
              Build from scratch
            </Link>
            <Link
              href="/production-grade-projects"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                {
                  "bg-accent text-accent-foreground": pathname === "/production-grade-projects"
                }
              )}
              prefetch={false}
            >
              <BoxIcon className="h-5 w-5" />
              Production-grade projects
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
