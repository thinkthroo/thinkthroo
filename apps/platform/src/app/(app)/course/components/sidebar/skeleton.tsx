import CourseSidebar from "@/app/(app)/course/components/sidebar";
import SiteNameAndLogo from "@/components/site/name-and-logo";
import { Suspense } from "react";
import StepsSkeleton from "../lesson/steps/skeleton";

export default function SidebarSkeleton() {

  return (
    <div className="flex h-screen w-full">
            <div className="hidden h-full border-r bg-muted/40 md:block md:w-72">
                <div className="flex h-full flex-col gap-4 p-4">
                    <div className="flex h-[60px] items-center">
                    <SiteNameAndLogo />
                    </div>
                    <nav className="flex-1 space-y-2">
                    <div className="space-y-1">
                        <div className="px-3 text-xs font-medium text-muted-foreground">Chapters</div>
                        <StepsSkeleton />
                    </div>
                    </nav>
                </div>
            </div>
    </div>
  )
}