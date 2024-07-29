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
    const chapterSlug = "introduction";
    const lessonSlug = "index";
    const stepSlug = "index";

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
            <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex">
                <span>{course?.chapterCount} Chapters</span>
              </div>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <div className="flex">
                <span>{course?.lessonCount} Lessons</span>
              </div>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <div className="flex">
                <span>{course?.stepCount} Steps</span>
              </div>
              <Separator orientation="vertical" className="h-4 mx-2" />
              <div className="flex">
                <span>0 Tests</span>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Start
            </Button>
          </div>
        </div>
    )
}