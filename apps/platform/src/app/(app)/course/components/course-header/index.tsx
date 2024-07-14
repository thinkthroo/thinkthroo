import AuthHeaderButton from "@/components/auth/auth-header-button"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { NavTab } from "./nav-tab"
import { api } from "@/trpc/server";

export default async function CourseHeader(props: {
    courseSlug: string
}) {

    const course = await api.course.getCourseBySlugForBreadCrumbs({
      slug: props.courseSlug,
    })

    return (
        <div className="h-28 lg:h-[120px] sticky top-0 bg-white z-10">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 px-6 justify-between">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/${course?.module?.slug}`}>{course?.module?.title}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{course?.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <AuthHeaderButton />
          </header>
          <NavTab />
    </div>
    )
}