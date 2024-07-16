import Course from "@/app/(app)/course/components/course";
import CourseHeader from "@/app/(app)/course/components/course-header";
import LessonMdx from "@/app/(app)/course/components/lesson/mdx";
import LessonSteps from "@/app/(app)/course/components/lesson/steps/list";
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
  <Suspense fallback={<div>loading skeleton</div>}>
    <Course params={params} />
  </Suspense>
  );
}