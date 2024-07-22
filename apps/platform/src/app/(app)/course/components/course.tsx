import { Suspense } from "react";
import CourseHeader from "./course-header";
import LessonMdx from "./lesson/mdx";
import LessonSteps from "./lesson/steps/list";
import MdxSkeleton from "./lesson/mdx-skeleton";
import StepsSkeleton from "./lesson/steps/skeleton";

export default function Course({ params }: any) {
  return (
      <main className="p-4 md:p-6">
        <div className="flex justify-evenly">
          <Suspense fallback={<MdxSkeleton />}>
            <LessonMdx
              stepSlug={params.stepSlug}
              challengeOrSolutionSlug={params.challengeOrSolutionSlug}
            />
          </Suspense>
          <Suspense fallback={<StepsSkeleton />}>
            <div style={{ position: "sticky" }}>
              <LessonSteps slugs={params} />
            </div>
          </Suspense>
        </div>
      </main>
  );
}
