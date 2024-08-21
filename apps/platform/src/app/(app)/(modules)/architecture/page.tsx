import { CourseList } from "@/components/course/list";
import { CourseListSkeleton } from "@/components/course/list-skeleton";
import { Suspense } from 'react';

export default async function BestPractices() {

    return (
      <Suspense fallback={<CourseListSkeleton />}>
        <CourseList 
          id={process.env.MODULE_BEST_PRACTICES}
        />
      </Suspense>
    )
}