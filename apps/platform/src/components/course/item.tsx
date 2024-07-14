import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { BookIcon, PlayIcon, StepBackIcon, TestTubesIcon } from "../icons"

// FIXME: Improve types
export default function CourseItem(props : any) {

    const {
        course
    } = props;

    const courseSlug = course.slug;
    const chapterSlug = course.chapters[0]?.slug;
    const lessonSlug = course.chapters[0]?.lessons[0]?.slug;
    const stepSlug = course.chapters[0]?.lessons[0]?.steps[0]?.slug;
  

    return (
        <div className="bg-background rounded-lg shadow-sm overflow-hidden">
          {/* <Link href={`/course/${courseSlug}/${chapterSlug}/${lessonSlug}/${stepSlug}/challenge`} className="block" prefetch={false}>
            <img
              src="https://v0.dev/placeholder.svg"
              alt="Course Thumbnail"
              width={400}
              height={200}
              className="w-full h-50 object-cover"
              style={{
                "aspectRatio": "400 / 200",
                "objectFit": "cover"
              }}
            />
          </Link> */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">
              <Link href={`/course/${courseSlug}/${chapterSlug}/${lessonSlug}/${stepSlug}/challenge`} className="hover:underline" prefetch={false}>
                {course?.title}
              </Link>
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">Tailwind</Badge>
              <Badge variant="outline">tRPC</Badge>
            </div>
            <div className="flex items-center text-muted-foreground text-sm mb-4">
              <BookIcon className="w-4 h-4 mr-2" />
              <span>{course?.chapterCount} Chapters</span>
              <Separator orientation="vertical" className="mx-2" />
              <PlayIcon className="w-4 h-4 mr-2" />
              <span>{course?.lessonCount} Lessons</span>
              <Separator orientation="vertical" className="mx-2" />
              <StepBackIcon className="w-4 h-4 mr-2" />
              <span>{course?.stepCount} Steps</span>
              <Separator orientation="vertical" className="mx-2" />
              <TestTubesIcon className="w-4 h-4 mr-2" />
              <span>0 Tests</span>
            </div>
            <Button variant="outline" size="sm">
              Enroll Now
            </Button>
          </div>
        </div>
    )
}