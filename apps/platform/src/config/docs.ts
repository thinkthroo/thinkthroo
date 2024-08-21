import { GithubIcon } from "@/components/icons"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof GithubIcon
  label?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export interface DocsConfig {
  mainNav: MainNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Architecture",
      href: "/architecture",
    },
    {
      title: "Best Practices",
      href: "/best-practices",
    },
    {
      title: "Build From Scratch",
      href: "/build-from-scratch",
    },
    {
      title: "Production-Grade Project",
      href: "/production-grade-projects",
    }
  ],
}