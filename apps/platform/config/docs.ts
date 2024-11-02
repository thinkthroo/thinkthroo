import { Icons } from "@/components/icons"
import { SidebarNavItem } from "@/types/nav"

// Codebase architecture
// [CA]: Shadcn
import { shadcnCaBaseUrl, shadcnCaNav } from "./codebase-architecture/shadcn-ui";

// Best practices
// [BP]:[CRM]:[Contacts Page]:[Components Structure]
import { baseUrl as crmContactsPageCsShadcnBaseUrl, crmContactsPageComponentsStructureByShadcnNav } from "./best-practices/crm-contacts-page/components-structure/shadcn"
import { baseUrl as crmContactsPageCsSupabaseBaseUrl, crmContactsPageComponentsStructureBySupabaseNav } from "./best-practices/crm-contacts-page/components-structure/supabase"

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
  // TODO: do we still need this sidebarNav?
  sidebarNav: [
    {
      title: "Components Structure In Shadcn-ui/ui",
      href: `/course/codebase-architecture/components-structure/shadcn-ui`,
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

// Codebase architecture

// CA: Shadcn/ui codebase architecture
sidebarNav.set(shadcnCaBaseUrl, shadcnCaNav);

// Best practices

// [BP]:[CRM]:[Contacts Page]:[Components Structure]
sidebarNav.set(crmContactsPageCsShadcnBaseUrl, crmContactsPageComponentsStructureByShadcnNav);
sidebarNav.set(crmContactsPageCsSupabaseBaseUrl, crmContactsPageComponentsStructureBySupabaseNav);


export function getSidenavConfig(pathname: String): SidebarNavItem[] {
  // example pathname: "/course/codebase-architecture/shadcn-ui/components-structure/introduction";
  // after split, join and slice, output: /course/codebase-architecture/shadcn-ui
  // output is the key in sidebarNav map.
  return sidebarNav.get(pathname.split('/').slice(0, 4).join('/'));

}