import CourseHeader from "@/app/(app)/course/components/course-header";
import LessonMdx from "@/app/(app)/course/components/lesson/mdx";
import LessonSteps from "@/app/(app)/course/components/lesson/steps/list";
import CourseSidebar from "@/app/(app)/course/components/sidebar";

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
    <>
      <CourseSidebar slugs={params} />
      <div className="flex-1 h-full overflow-scroll">
        <CourseHeader courseSlug={params?.courseSlug} />
        <main className="p-4 md:p-6">
          <div className="flex justify-evenly">
            <LessonMdx stepSlug={params.stepSlug} challengeOrSolutionSlug={params.challengeOrSolutionSlug}/>
            <div style={{ position: "sticky" }}>
              <LessonSteps slugs={params} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}