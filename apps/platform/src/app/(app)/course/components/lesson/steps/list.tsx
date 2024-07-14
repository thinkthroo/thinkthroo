
import Step from "./step";
import { useCourse } from "../../../use-course";
import { getLessonSlug } from "@/lib/get-lesson-slug";
import { usePathname } from "next/navigation";
import { getChapterSlug } from "@/lib/get-chapter-slug";
import { getCourseSlug } from "@/lib/get-course-slug";
import { useSteps } from "./use-steps";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckIcon } from "@/components/icons/check";
import { api } from "@/trpc/server";
import { createClient } from "@/supabase/server";

export default async function LessonSteps(props: { 
  slugs: {
    courseSlug: string
    chapterSlug: string
    lessonSlug: string
    stepSlug: string 
  }
}) {

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const steps: any[] = await api.course.getStepsByLessonSlug({
    slug: props.slugs.lessonSlug,
    userId: user?.id
  })

  return (
    <Card className="w-full max-w-md sticky top-[144px]">
      <CardHeader>
        <CardTitle>Steps</CardTitle>
        <CardDescription>Complete the following steps to finish this lesson.</CardDescription>
        <Progress value={(steps?.filter(step => step?.markAsCompleted == true).length/steps?.length)*100} className="w-full" />
      </CardHeader>
      {/* <div className="space-y-4 flex w-full">
          <Progress value={75} className="w-full" />
      </div> */}
      <CardContent>
        <div className="space-y-4">

          {steps?.map((courseStep, index) => (
            <Step
              key={courseStep.id}
              link={`/course/${props.slugs.courseSlug}/${props.slugs.chapterSlug}/${props.slugs.lessonSlug}/${courseStep.slug}/challenge`}
              courseStep={courseStep}
              stepSlug={courseStep.slug}
              index={index}
              user={user}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}