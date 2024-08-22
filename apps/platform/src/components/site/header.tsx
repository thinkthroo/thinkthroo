import { Button } from "@/components/ui/button"

import { GithubIcon, LogInIcon, MenuIcon, SettingsIcon, UserIcon, ZapIcon } from "../icons"
// import AuthHeaderButton from "../auth/auth-header-button"
import { MainNav } from "./main-nav"
import { siteConfig } from "@/config/site"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MobileNav } from "./mobile-nav"

export default async function SiteHeader() {


    return (
        <header className="sticky border-b top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 max-w-screen-2xl items-center">
            <MainNav />
            <MobileNav />
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <nav className="flex items-center">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                      }),
                      "h-8 w-8 px-0"
                    )}
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </div>
                </Link>
                {/* <AuthHeaderButton /> */}
              </nav>
            </div>
          </div>
      </header>
    )
}