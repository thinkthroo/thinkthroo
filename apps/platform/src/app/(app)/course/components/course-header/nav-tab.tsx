"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavTab() {

    const params = useParams<{ id: string }>();
  const pathname = usePathname();
  let pathNames = pathname.split("/");
  let pathNamesLength = pathname.split("/").length;
  // use basePathNames to pop challenge or solution from the end of the url
  let basePathNames = [...pathNames];
  basePathNames.pop();

  return (
    <div className="flex h-14 items-center gap-4 border-b px-6 lg:h-[60px]">
      <Link
        href={`${basePathNames.join("/")}/challenge`}
        className={
            cn(
                "inline-flex h-[inherit] items-center justify-center px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                {"border-b-2 border-primary" :  pathNames[pathNamesLength - 1] == "challenge"}            
            )}
        prefetch={false}
      >
        Challenge
      </Link>
      <Link
        href={`${basePathNames.join("/")}/solution`}
        className={
            cn(
                "inline-flex h-[inherit] items-center justify-center px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                {"border-b-2 border-primary" :  pathNames[pathNamesLength - 1] == "solution"}            
            )}
        prefetch={false}
      >
        Solution
      </Link>
    </div>
  );
}
