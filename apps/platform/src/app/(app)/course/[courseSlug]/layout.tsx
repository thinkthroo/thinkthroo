import CourseSidebar from "@/app/(app)/course/components/sidebar";
import { Suspense } from "react";
import SidebarSkeleton from "../components/sidebar/skeleton";

export default function CourseLayout({ children, params }) {

  return (
    <div className="flex h-screen w-full">
        <Suspense fallback={<SidebarSkeleton />}>
            <CourseSidebar courseSlug={params.courseSlug} />
        </Suspense>
        {children}
    </div>
  );
}