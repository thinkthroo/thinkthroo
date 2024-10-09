import { Icons } from "@/components/icons"
import { SidebarNavItem } from "@/types/nav"
import { introUrl as shadcnComponentsStructureIntroUrl, shadcnComponentsStructureNav } from "./codebase-architecture/components-structure/shadcn-ui"
import { introUrl as lobechatApiLayerIntroUrl, lobechatApiLayerNav } from "./codebase-architecture/api-layer/lobechat"
import { introUrl as calcomErrorHandlingIntroUrl, calcomErrorHandlingNav } from "./codebase-architecture/error-handling/cal-com"
import { introUrl as supabaseSecurityIntroUrl, supabaseSecurityNav } from "./codebase-architecture/security/supabase"
import { introUrl as shadcnToolingIntroUrl, shadcnToolingNav } from "./codebase-architecture/tooling/shadcn-ui"

export interface NavItem {
    title: string
    href?: string
    disabled?: boolean
    external?: boolean
    icon?: keyof typeof Icons
    label?: string
}

export interface MainNavItem extends NavItem {}

export interface DocsConfig {
  mainNav: MainNavItem[],
  sidebarNav: SidebarNavItem[]
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
      title: "Production Grade Projects",
      href: "/production-grade-projects",
    },
    {
      title: "Build From Scratch",
      href: "/build-from-scratch",
    }
  ],
  sidebarNav: [
    {
      title: "Components Structure In Shadcn-ui/ui",
      href: `/course/codebase-architecture/components-structure/shadcn-ui/introduction`,
      items: [
        {
          title: "Introduction",
          href: `/course/codebase-architecture/components-structure/shadcn-ui/introduction`,
          items: [],
        },
        {
          title: "Home Page",
          href: `/course/codebase-architecture/components-structure/shadcn-ui/home-page`,
          items: [],
        },
        {
          title: "Mail Example Page",
          href: `/course/codebase-architecture/components-structure/shadcn-ui/mail-example-page`,
          items: [],
        },
        {
          title: "Charts Page",
          href: `/course/codebase-architecture/components-structure/shadcn-ui/charts-page`,
          items: [],
        },
      ],
    },
  ]  
}

let sidebarNav = new Map();
sidebarNav.set(shadcnComponentsStructureIntroUrl, shadcnComponentsStructureNav)
sidebarNav.set(lobechatApiLayerIntroUrl, lobechatApiLayerNav)
sidebarNav.set(calcomErrorHandlingIntroUrl, calcomErrorHandlingNav)
sidebarNav.set(supabaseSecurityIntroUrl, supabaseSecurityNav)
sidebarNav.set(shadcnToolingIntroUrl, shadcnToolingNav)

export function getSidenavConfig(pathname: String): SidebarNavItem[] {

  let visitedSidebarNav = sidebarNav.get(pathname);
  if (visitedSidebarNav) {
    docsConfig.sidebarNav = visitedSidebarNav

    return docsConfig.sidebarNav
  } 

  return docsConfig.sidebarNav
}