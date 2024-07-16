import CourseHeader from "./course-header";
import LessonMdx from "./lesson/mdx";
import LessonSteps from "./lesson/steps/list";

export default function Course({params}: any) {
    return (
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
    )
}