import { ChapterMenu } from "./chapter-menu";
import { api } from "@/trpc/server";
import SiteNameAndLogo from "@/components/site/name-and-logo";

export default async function CourseSidebar({ courseSlug }: {
  courseSlug: string
  // slugs: { 
  //   courseSlug: string
  //   chapterSlug: string
  //   lessonSlug: string
  //   stepSlug: string,
  //   challengeOrSolutionSlug: string
  // }
}) {

  
  const chapters = await api.course.getChaptersBySlug({
    slug: courseSlug,
  })


  return (
    <div className="hidden h-full border-r bg-muted/40 md:block md:w-72">
      <div className="flex h-full flex-col gap-4 p-4">
        <div className="flex h-[60px] items-center">
          <SiteNameAndLogo />
        </div>
        <nav className="flex-1 space-y-2 overflow-scroll">
          <div className="space-y-1">
            <div className="px-3 text-xs font-medium text-muted-foreground">Chapters</div>
            <ChapterMenu courseSlug={courseSlug} chapters={chapters} />
          </div>
        </nav>
      </div>
    </div>
  )
}
