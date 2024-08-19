// import { MountainIcon } from "lucide-react";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import Image from "next/image";
// import GitHubButton from "../github-button";

// export const Header = () => {
//   return (
//     <header className="absolute top-0 left-0 w-full py-4 px-6 md:px-10 flex items-center justify-between">
//     <Link href="/" className="flex items-center gap-2" prefetch={false}>
      // <Image
      //     src="/logo.svg"
      //     alt="Hero"
      //     className="h-6 w-6 text-primary"
      //     width={120}
      //     height={120}
      // />
//       <span className="text-primary font-semibold text-lg">TThroo</span>
//     </Link>
//     <nav className="hidden md:flex items-center gap-6">
//       <Link
//         href="#"
//         className="text-gray-800 hover:underline"
//         prefetch={false}
//       >
//         Home
//       </Link>
//       <Link
//         href="#modules"
//         className="text-gray-800 hover:underline"
//         prefetch={false}
//       >
//         Modules
//       </Link>
//       <Link
//         href="#features"
//         className="text-gray-800 hover:underline"
//         prefetch={false}
//       >
//         Features
//       </Link>
//       {/* <Link
//         href="#pricing"
//         className="text-gray-800 hover:underline"
//         prefetch={false}
//       >
//         Pricing
//       </Link> */}
//       <Link
//         href="#contact"
//         className="text-gray-800 hover:underline"
//         prefetch={false}
//       >
//         Contact
//       </Link>
//     </nav>
//     <div className="flex items-center gap-2">
//       <GitHubButton />
//       <Link href="https://app.thinkthroo.com/">
//         <Button variant="outline" className="text-gray-800">
//           Sign In
//         </Button>
//       </Link>
//       <Link href="https://app.thinkthroo.com/">
//         <Button className="bg-primary text-white">Try now</Button>
//       </Link>
//     </div>
//   </header>
//   );
// };
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
// import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
// import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div> */}
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
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
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
                <Icons.twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            {/* <ModeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  )
}