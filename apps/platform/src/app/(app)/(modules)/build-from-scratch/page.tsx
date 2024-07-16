import { CourseList } from "@/components/course/list";
import { CourseListSkeleton } from "@/components/course/list-skeleton";
import { Suspense } from 'react';

export default async function BuildFromScratch() {

    return (
        <Suspense fallback={<CourseListSkeleton />}>
          <CourseList 
            id={process.env.NEXT_PUBLIC_MODULE_BUILD_FROM_SCRATCH}
          />
        </Suspense>
    )
}