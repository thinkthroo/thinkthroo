import Link from "next/link"
import { BookIcon,} from "@/components/icons";
import { ChapterMenu } from "./chapter-menu";
import { api } from "@/trpc/server";

export default async function CourseSidebar({ slugs }: {
  slugs: { 
    courseSlug: string
    chapterSlug: string
    lessonSlug: string
    stepSlug: string,
    challengeOrSolutionSlug: string
  }
}) {

  
  const chapters = await api.course.getChaptersBySlug({
    slug: slugs.courseSlug,
  })


  return (
    <div className="hidden h-full border-r bg-muted/40 md:block md:w-72">
      <div className="flex h-full flex-col gap-4 p-4">
        <div className="flex h-[60px] items-center">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <BookIcon className="h-6 w-6" />
            <span className="text-lg">Test</span>
          </Link>
        </div>
        <nav className="flex-1 space-y-2">
          <div className="space-y-1">
            <div className="px-3 text-xs font-medium text-muted-foreground">Chapters</div>
            <ChapterMenu slugs={slugs} chapters={chapters} />
          </div>
        </nav>
      </div>
    </div>
  )
}
