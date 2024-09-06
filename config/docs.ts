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
      items: [
        {
          title: "Introduction",
          href: "/course/components-structure-in-shadcn-ui/introduction",
          items: [],
        },
        {
          title: "Home Page",
          href: "/course/components-structure-in-shadcn-ui/home-page",
          items: [],
        },
      ],
    },
    // {
    //   title: "Installation",
    //   items: [
    //     {
    //       title: "Next.js",
    //       href: "/docs/installation/next",
    //       items: [],
    //     },
    //     {
    //       title: "Vite",
    //       href: "/docs/installation/vite",
    //       items: [],
    //     },
    //     {
    //       title: "Remix",
    //       href: "/docs/installation/remix",
    //       items: [],
    //     },
    //     {
    //       title: "Astro",
    //       href: "/docs/installation/astro",
    //       items: [],
    //     },
    //     {
    //       title: "Laravel",
    //       href: "/docs/installation/laravel",
    //       items: [],
    //     },
    //     {
    //       title: "Gatsby",
    //       href: "/docs/installation/gatsby",
    //       items: [],
    //     },
    //     {
    //       title: "Manual",
    //       href: "/docs/installation/manual",
    //       items: [],
    //     },
    //   ],
    // },
    // {
    //   title: "Components",
    //   items: [
    //     {
    //       title: "Accordion",
    //       href: "/docs/components/accordion",
    //       items: [],
    //     },
    //     {
    //       title: "Alert",
    //       href: "/docs/components/alert",
    //       items: [],
    //     },
    //     {
    //       title: "Alert Dialog",
    //       href: "/docs/components/alert-dialog",
    //       items: [],
    //     },
    //     {
    //       title: "Aspect Ratio",
    //       href: "/docs/components/aspect-ratio",
    //       items: [],
    //     },
    //     {
    //       title: "Avatar",
    //       href: "/docs/components/avatar",
    //       items: [],
    //     },
    //     {
    //       title: "Badge",
    //       href: "/docs/components/badge",
    //       items: [],
    //     },
    //     {
    //       title: "Breadcrumb",
    //       href: "/docs/components/breadcrumb",
    //       items: [],
    //     },
    //     {
    //       title: "Button",
    //       href: "/docs/components/button",
    //       items: [],
    //     },
    //     {
    //       title: "Calendar",
    //       href: "/docs/components/calendar",
    //       items: [],
    //     },
    //     {
    //       title: "Card",
    //       href: "/docs/components/card",
    //       items: [],
    //     },
    //     {
    //       title: "Carousel",
    //       href: "/docs/components/carousel",
    //       items: [],
    //     },
    //     {
    //       title: "Chart",
    //       href: "/docs/components/chart",
    //       items: [],
    //     },
    //     {
    //       title: "Checkbox",
    //       href: "/docs/components/checkbox",
    //       items: [],
    //     },
    //     {
    //       title: "Collapsible",
    //       href: "/docs/components/collapsible",
    //       items: [],
    //     },
    //     {
    //       title: "Combobox",
    //       href: "/docs/components/combobox",
    //       items: [],
    //     },
    //     {
    //       title: "Command",
    //       href: "/docs/components/command",
    //       items: [],
    //     },
    //     {
    //       title: "Context Menu",
    //       href: "/docs/components/context-menu",
    //       items: [],
    //     },
    //     {
    //       title: "Data Table",
    //       href: "/docs/components/data-table",
    //       items: [],
    //     },
    //     {
    //       title: "Date Picker",
    //       href: "/docs/components/date-picker",
    //       items: [],
    //     },
    //     {
    //       title: "Dialog",
    //       href: "/docs/components/dialog",
    //       items: [],
    //     },
    //     {
    //       title: "Drawer",
    //       href: "/docs/components/drawer",
    //       items: [],
    //     },
    //     {
    //       title: "Dropdown Menu",
    //       href: "/docs/components/dropdown-menu",
    //       items: [],
    //     },
    //     {
    //       title: "Form",
    //       href: "/docs/components/form",
    //       items: [],
    //     },
    //     {
    //       title: "Hover Card",
    //       href: "/docs/components/hover-card",
    //       items: [],
    //     },
    //     {
    //       title: "Input",
    //       href: "/docs/components/input",
    //       items: [],
    //     },
    //     {
    //       title: "Input OTP",
    //       href: "/docs/components/input-otp",
    //       items: [],
    //     },
    //     {
    //       title: "Label",
    //       href: "/docs/components/label",
    //       items: [],
    //     },
    //     {
    //       title: "Menubar",
    //       href: "/docs/components/menubar",
    //       items: [],
    //     },
    //     {
    //       title: "Navigation Menu",
    //       href: "/docs/components/navigation-menu",
    //       items: [],
    //     },
    //     {
    //       title: "Pagination",
    //       href: "/docs/components/pagination",
    //       items: [],
    //     },
    //     {
    //       title: "Popover",
    //       href: "/docs/components/popover",
    //       items: [],
    //     },
    //     {
    //       title: "Progress",
    //       href: "/docs/components/progress",
    //       items: [],
    //     },
    //     {
    //       title: "Radio Group",
    //       href: "/docs/components/radio-group",
    //       items: [],
    //     },
    //     {
    //       title: "Resizable",
    //       href: "/docs/components/resizable",
    //       items: [],
    //     },
    //     {
    //       title: "Scroll Area",
    //       href: "/docs/components/scroll-area",
    //       items: [],
    //     },
    //     {
    //       title: "Select",
    //       href: "/docs/components/select",
    //       items: [],
    //     },
    //     {
    //       title: "Separator",
    //       href: "/docs/components/separator",
    //       items: [],
    //     },
    //     {
    //       title: "Sheet",
    //       href: "/docs/components/sheet",
    //       items: [],
    //     },
    //     {
    //       title: "Skeleton",
    //       href: "/docs/components/skeleton",
    //       items: [],
    //     },
    //     {
    //       title: "Slider",
    //       href: "/docs/components/slider",
    //       items: [],
    //     },
    //     {
    //       title: "Sonner",
    //       href: "/docs/components/sonner",
    //       items: [],
    //     },
    //     {
    //       title: "Switch",
    //       href: "/docs/components/switch",
    //       items: [],
    //     },
    //     {
    //       title: "Table",
    //       href: "/docs/components/table",
    //       items: [],
    //     },
    //     {
    //       title: "Tabs",
    //       href: "/docs/components/tabs",
    //       items: [],
    //     },
    //     {
    //       title: "Textarea",
    //       href: "/docs/components/textarea",
    //       items: [],
    //     },
    //     {
    //       title: "Toast",
    //       href: "/docs/components/toast",
    //       items: [],
    //     },
    //     {
    //       title: "Toggle",
    //       href: "/docs/components/toggle",
    //       items: [],
    //     },
    //     {
    //       title: "Toggle Group",
    //       href: "/docs/components/toggle-group",
    //       items: [],
    //     },
    //     {
    //       title: "Tooltip",
    //       href: "/docs/components/tooltip",
    //       items: [],
    //     },
    //   ],
    // },
  ],
}