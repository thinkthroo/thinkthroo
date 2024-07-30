import { Suspense } from "react";
import CourseHeader from "./course-header";
import LessonMdx from "./lesson/mdx";
import LessonSteps from "./lesson/steps/list";
import MdxSkeleton from "./lesson/mdx-skeleton";
import StepsSkeleton from "./lesson/steps/skeleton";

export default function Course({ params, type, stepSlug }: any) {
  return (
      <main className="p-4 md:p-6">
        <div className="flex justify-between">
          <Suspense fallback={<MdxSkeleton />}>
            <div className="min-w-2/3 max-w-[800px]">
              <LessonMdx
                stepSlug={stepSlug}
                type={type}
              />
            </div>
          </Suspense>
          <Suspense fallback={<StepsSkeleton />}>
            <div className="min-w-1/3 max-w-[300px]" style={{ position: "sticky" }}>
              <LessonSteps slugs={params} stepSlug={stepSlug} />
            </div>
          </Suspense>
        </div>
      </main>
  );
}
