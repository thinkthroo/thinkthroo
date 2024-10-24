"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/architecture")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>
        <Link
          href="/codebase-architecture"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/architecture")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Codebase Architecture
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "transition-colors hover:text-foreground/80 text-foreground/60 font-normal bg-transparent"
                )}
              >
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="px-4 py-2 ">
                <Link href="/web-development" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Next.js Development
                  </NavigationMenuLink>
                </Link>
                <Link href="/technical-writing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    React Development
                  </NavigationMenuLink>
                </Link>
                <Link href="/technical-writing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Node.js Development
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "transition-colors hover:text-foreground/80 text-foreground/60 font-normal bg-transparent"
                )}
              >
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent className="px-4 py-2 ">
                <Link href="/web-development" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                  >
                    CRM Application
                  </NavigationMenuLink>
                </Link>
                <Link href="/web-development" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                  >
                    Invoice Application
                  </NavigationMenuLink>
                </Link>
                <Link href="/web-development" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                  >
                    Digital Signature
                  </NavigationMenuLink>
                </Link>
                <Link href="/web-development" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                  >
                    Email Marketing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "transition-colors hover:text-foreground/80 text-foreground/60 font-normal bg-transparent"
                )}
              >
                Courses
              </NavigationMenuTrigger>
              <NavigationMenuContent className="px-4 py-2 ">
                <Link
                  href="https://app.thinkthroo.com/best-practices"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Best Practices
                  </NavigationMenuLink>
                </Link>
                <Link
                  href="https://app.thinkthroo.com/production-grade-projects"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Production-Grade Projects
                  </NavigationMenuLink>
                </Link>
                <Link
                  href="https://app.thinkthroo.com/build-from-scratch"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Build From Scratch
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link
          href="/blog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/production-grade-projects")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/build-from-scratch")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
