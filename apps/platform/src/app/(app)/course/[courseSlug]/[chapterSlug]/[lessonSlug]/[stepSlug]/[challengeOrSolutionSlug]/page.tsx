import Course from "@/app/(app)/course/components/course";
import CourseHeader from "@/app/(app)/course/components/course-header";
import { Suspense } from "react";

export default async function Challenge({ params }: {
  params: {  
    courseSlug: string
    chapterSlug: string
    lessonSlug: string
    stepSlug: string,
    challengeOrSolutionSlug: string
  }
}) {

  return (
    <div className="h-full flex-1 overflow-scroll">
      <CourseHeader slugs={params} />
      <Course params={params} />
    </div>
  );
}