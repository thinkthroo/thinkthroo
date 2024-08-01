import Course from "@/app/(app)/course/components/course";
import CourseHeader from "@/app/(app)/course/components/course-header";
import { Suspense } from "react";
import CourseSidebar from "../../../components/sidebar";

export default async function Challenge({ params, searchParams }: {
  params: {  
    courseSlug: string
    chapterSlug: string
    lessonSlug: string
  },
  searchParams: { type: string, stepSlug: string };
}) {

  return (
    <>
      <CourseSidebar slugs={params} />
      <div className="h-full flex-1 overflow-scroll">
        <CourseHeader slugs={params} type={searchParams.type} stepSlug={searchParams.stepSlug} />
        <Course params={params} type={searchParams.type} stepSlug={searchParams.stepSlug} />
      </div>
    </>
  );
}