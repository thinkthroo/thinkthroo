import { Icons } from "@/components/icons"
import { SidebarNavItem } from "@/types/nav"

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
  sidebarNav: SidebarNavItem[],
  shadcnToolingNav: SidebarNavItem[],
  supabaseSecurityNav: SidebarNavItem[],
  calcomErrorHandlingNav: SidebarNavItem[],
  shadcnComponentsStructureNav: SidebarNavItem[],
  lobechatApiLayerNav: SidebarNavItem[],
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
      title: "Tooling in Shadcn-ui/ui",
      href: "/course/codebase-architecture/tooling/shadcn-ui/introduction",
      items: [
        {
          title: "Introduction",
          href: "/course/codebase-architecture/tooling/shadcn-ui/introduction",
          items: [],
        }
      ],
    },    
  ],
  shadcnToolingNav: [
    {
      title: "Tooling in Shadcn-ui/ui",
      href: "/course/codebase-architecture/tooling/shadcn-ui/introduction",
      items: [
        {
          title: "Introduction",
          href: "/course/codebase-architecture/tooling/shadcn-ui/introduction",
          items: [],
        }
      ],
    },
  ],
  supabaseSecurityNav: [
    {
      title: "Security in Supabase",
      href: "/course/codebase-architecture/security/supabase/introduction",
      items: [
        {
          title: "Introduction",
          href: "/course/codebase-architecture/security/supabase/introduction",
          items: [],
        }
      ],
    },
  ],
  calcomErrorHandlingNav: [
    {
      title: "Error Handling in Cal.com",
      href: "/course/codebase-architecture/error-handling/cal-com/introduction",
      items: [
        {
          title: "Introduction",
          href: "/course/codebase-architecture/error-handling/cal-com/introduction",
          items: [],
        }
      ],
    },
  ],
  shadcnComponentsStructureNav: [
    {
      title: "Components Structure In Shadcn-ui/ui",
      href: "/course/codebase-architecture/components-structure/shadcn-ui/introduction",
      items: [
        {
          title: "Introduction",
          href: "/course/codebase-architecture/components-structure/shadcn-ui/introduction",
          items: [],
        },
        {
          title: "Home Page",
          href: "/course/codebase-architecture/components-structure/shadcn-ui/home-page",
          items: [],
        },
        {
          title: "Mail Example Page",
          href: "/course/codebase-architecture/components-structure/shadcn-ui/mail-example-page",
          items: [],
        },
        {
          title: "Charts Page",
          href: "/course/codebase-architecture/components-structure/shadcn-ui/charts-page",
          items: [],
        },
      ],
    },
  ],
  lobechatApiLayerNav: [
    {
      title: "API Layer in Lobechat",
      href: "/course/codebase-architecture/api-layer/lobechat/introduction",
      items: [
        {
          title: "Introduction",
          href: "/course/codebase-architecture/api-layer/lobechat/introduction",
          items: [],
        }
      ],
    },
  ]
}