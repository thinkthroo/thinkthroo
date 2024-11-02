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
      title: "November, 2024",
      items: [
        {
          title: "Biome.js, a toolchain to format and lint your web project",
          href: "/blog/biome-tool-chain",
          items: [],
        },
        {
          title: "Bunchee, a bundler for JS/TS package",
          href: "/blog/bunchee-bundler",
          items: [],
        },
        {
          title: "Generate a documentation site using Nextra",
          href: "/blog/generate-doc-with-nextra",
          items: [],
        },
        {
          title: "Manage your versioning and changelogs using Changesets",
          href: "/blog/manage-version-changelog",
          items: [],
        },
        {
          title: "Lobechat applies typesafety to its environment variables",
          href: "/blog/t3-env-in-lobechat",
          items: [],
        }
      ]
    },
    {
      title: "October, 2024",
      items: [
        {
          title: "arrayToDict function in tRPC source code",
          href: "/blog/arrayToDict-function",
          items: [],
        },
        {
          title: "httpBatchLink types in tRPC source code explained",
          href: "/blog/httpBatchLink-types",
          items: [],
        },
        {
          title: "Istanbul usage in tRPC source code",
          href: "/blog/Istanbul-usage",
          items: [],
        },
        {
          title: "IndexedDB explained",
          href: "/blog/IndexedDB-explained",
          items: [],
        },
        {
          title: "Usage of Dexie, an IndexedDB wrapper, in Lobechat",
          href: "/blog/Usage-of-Dexie",
          items: [],
        },
        {
          title: "rollup-plugin-analyzer usage in trpc scripts",
          href: "/blog/rollup-plugin-analyzer-usage",
          items: [],
        },
        {
          title: "analyzeSizeChange script in tRPC source code",
          href: "/blog/analyzeSizeChange-script-in-tRPC",
          items: [],
        },
        {
          title: "kodiak.toml in tRPC source code",
          href: "/blog/kodiak-toml-in-tRPC",
          items: [],
        },
        {
          title: "codecov.yml in Lobechat source code",
          href: "/blog/codecov-yml-in-Lobechat",
          items: [],
        },
        {
          title: "Dosu bot usage in lobechat",
          href: "/blog/dosu-bot-usage-in-lobechat",
          items: [],
        },
        {
          title: "Create a unique array using Set() in JavaScript",
          href: "/blog/Create-a-unique-array",
          items: [],
        },
        {
          title: "Component decorator in TypeDoc",
          href: "/blog/component-decorator-in-typedoc",
          items: [],
        },
        {
          title: "TypeDoc usage in @vercel/edge",
          href: "/blog/TypeDoc-usage-in-vercel-edge",
          items: [],
        },
        {
          title: "create-next-app validates your app name using this package",
          href: "/blog/cna-app-name-validation",
          items: [],
        },
        {
          title: "How Shadcn CLI uses error constants to improve code readability",
          href: "/blog/error-codes-in-shadcn",
          items: [],
        },
        {
          title: "buildDesignSystem fn in Tailwind CSS source code",
          href: "/blog/build-design-system-in-tailwind",
          items: [],
        },
        {
          title: "withAlpha utility in Tailwind CSS source code",
          href: "/blog/withAlpha-utility-in-Tailwind",
          items: [],
        },
        {
          title: "DefaultMap class in TailwindCSS source code",
          href: "/blog/DefaultMap-class-in-TailwindCSS",
          items: [],
        },
        {
          title: "How Tailwind CSS detects circular dependancy",
          href: "/blog/How-Tailwind-CSS-detects",
          items: [],
        },
        {
          title: "String.raw in Tailwind CSS source code",
          href: "/blog/Stringraw-in-Tailwind",
          items: [],
        },
        {
          title: "Bypass bundlers detection of the require statement",
          href: "/blog/Bypass-bundlers-detection",
          items: [],
        },
        {
          title: "MessageChannel usage in React source code",
          href: "/blog/MessageChannel-usage-in-React",
          items: [],
        },
        {
          title: "queueMacroTask in React source code",
          href: "/blog/queueMacroTask-in-React-source",
          items: [],
        },
        {
          title: "queueMicroTask in JavaScript",
          href: "/blog/queueMicroTask-in-JavaScript",
          items: [],
        },
      ],
    },
    {
      title: "September, 2024",
      items: [
        {
          title: "Object.preventExtensions in JavaScript",
          href: "/blog/ObjectpreventExtensions-in-JavaScript",
          items: [],
        },
        {
          title: "BadMapPolyfill in React Source Code",
          href: "/blog/BadMapPolyfill-in-React-Source",
          items: [],
        },
        {
          title: "FlowFixMe in React source code",
          href: "/blog/FlowFixMe-in-React-source",
          items: [],
        },
        {
          title: "text=auto in .gitattributes file",
          href: "/blog/text-auto-in-gitattributes",
          items: [],
        },
        {
          title: ".git-blame-ignore-revs to ignore bulk formatting changes",
          href: "/blog/git-blame-ignore-revs",
          items: [],
        },
        {
          title: "Stop saying - you forgot to - in code review",
          href: "/blog/Stop-saying-you-forgot-to",
          items: [],
        },
        {
          title: "Add a test case when your open-source project issue is fixed",
          href: "/blog/add-a-test-case",
          items: [],
        },
        {
          title: "useLayoutEffect in Zustand test-case explained",
          href: "/blog/useLayoutEffect-in-zustand-test",
          items: [],
        },
        {
          title: "How to override your Zustand state",
          href: "/blog/how-to-override-zustand",
          items: [],
        },
        {
          title: "Here is how test-case in Zustand uses ErrorBoundary",
          href: "/blog/Here-how-zustand-test",
          items: [],
        },
        {
          title: "ReactDOM.unstable_batchedUpdates in Zustand testcase",
          href: "/blog/ReactDOMunstablebatchedUpdates-in-zustand",
          items: [],
        },
        {
          title: "createWithEqualityFn test case in Zustand explained",
          href: "/blog/createWithEqualityFn-test-case",
          items: [],
        },
        {
          title: "createWithEqualityFnImpl in Zustand source code explained",
          href: "/blog/createWithEqualityFnImpl-in-zustand",
          items: [],
        },
        {
          title: "useDebugValue usage in Zustand source code explained",
          href: "/blog/useDebugValue-usage-in-zustand",
          items: [],
        },
        {
          title: "useBoundStoreWithEqualityFn in Zustand source code explained",
          href: "/blog/useBoundStoreWithEqualityFn-in-zustand",
          items: [],
        },
        {
          title: "useSyncExternalStoreExports in Zustand source code explained",
          href: "/blog/useSyncExternalStoreExports-in-Zustand",
          items: [],
        },
        {
          title: "createStore in Zustand source code explained",
          href: "/blog/createstore-in-zustand-source",
          items: [],
        },
        {
          title: "setState in Zustand source code",
          href: "/blog/setState-in-zustand",
          items: [],
        },
        {
          title: "Object.assign() usage in Zustand source code",
          href: "/blog/objectassign-usage-in-Zustand",
          items: [],
        },
        {
          title: "Set() usage in Zustand source code",
          href: "/blog/set-usage-in-zustand",
          items: [],
        },
        {
          title: "Object.is() usage in Zustand source code",
          href: "/blog/object-usage-in-zustand",
          items: [],
        },
      ],
    },
    {
      title: "August, 2024",
      items: [
        {
          title: "Generating a JSDoc comment for your function using OpenAI",
          href: "/blog/generating-a-jsdoc-comment",
          items: [],
        },
        {
          title: "Organize your components and layouts in your pages-based Next.js application this way",
          href: "/blog/organize-your-components",
          items: [],
        },
      ],
    },
    
  ],
}