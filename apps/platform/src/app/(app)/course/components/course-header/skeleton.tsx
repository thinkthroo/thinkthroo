import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"

export default function CourseHeaderSkeleton() {

    return (
        <div className="h-28 lg:h-[120px] sticky top-0 bg-white z-10 animate-pulse">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 px-6 justify-between">
            <Breadcrumb>
              <BreadcrumbList>
                <span className="h-4 w-24 bg-slate-200 dark:bg-slate-700"></span>
                <BreadcrumbSeparator />
                <span className="h-4 w-28 bg-slate-200 dark:bg-slate-700"></span>
                <BreadcrumbSeparator />
                <span className="h-4 w-32 bg-slate-200 dark:bg-slate-700"></span>
              </BreadcrumbList>
            </Breadcrumb>
            <span className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700"></span>
          </header>
          <div className="flex h-14 items-center gap-4 border-b px-6 lg:h-[60px]">
            
            <div className="h-2 w-8 bg-slate-200 inline-flex h-[inherit] items-center justify-center px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"></div>
            <div className="h-2 w-8 bg-slate-200 inline-flex h-[inherit] items-center justify-center px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"></div>
            
        </div>
    </div>
    )
}