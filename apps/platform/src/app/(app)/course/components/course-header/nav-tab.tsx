import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavTab(props: { 
  slugs: {
    courseSlug: string
    chapterSlug: string
    lessonSlug: string
  },
  type: string,
  stepSlug: string
}) {

  const {
    courseSlug,
    chapterSlug,
    lessonSlug,
  } = props.slugs;

  let baseUrl = `/course/${courseSlug}/${chapterSlug}/${lessonSlug}?stepSlug=${props.stepSlug}`;

  if (props.type == "index") {
    return (
      <div className="flex h-14 items-center gap-4 border-b px-6 lg:h-[60px]">
        <Link
          href={`${baseUrl}&type=index`}
          className={
              cn(
                  "inline-flex h-[inherit] items-center justify-center px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  {"border-b-2 border-primary" : props.type == "index"}            
              )}
          prefetch={false}
        >
          Index
        </Link>
      </div>
    )
  }

  return (
    <div className="flex h-14 items-center gap-4 border-b px-6 lg:h-[60px]">
      <Link
        href={`${baseUrl}&type=challenge`}
        className={
            cn(
                "inline-flex h-[inherit] items-center justify-center px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                {"border-b-2 border-primary" : props.type == "challenge"}            
            )}
        prefetch={false}
      >
        Challenge
      </Link>
      <Link
        href={`${baseUrl}&type=solution`}
        className={
            cn(
                "inline-flex h-[inherit] items-center justify-center px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                {"border-b-2 border-primary" : props.type == "solution"}            
            )}
        prefetch={false}
      >
        Solution
      </Link>
    </div>
  );
}
