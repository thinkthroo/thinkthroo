import { CourseList } from "@/components/course/list";
import { CourseListSkeleton } from "@/components/course/list-skeleton";
import { Suspense } from 'react';

export default async function ProductionGradeProjects() {

    return (
        <Suspense fallback={<CourseListSkeleton />}>
          <CourseList 
            id={process.env.NEXT_PUBLIC_MODULE_PRODUCTION_GRADE_PROJECTS}
          />
        </Suspense>
    )
}