import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavTab(props: { 
  slugs: {
    courseSlug: string
    chapterSlug: string
    lessonSlug: string
    stepSlug: string 
    challengeOrSolutionSlug: string
  }
}) {

  const {
    courseSlug,
    chapterSlug,
    lessonSlug,
    stepSlug,
    challengeOrSolutionSlug
  } = props.slugs;

  let baseUrl = `/course/${courseSlug}/${chapterSlug}/${lessonSlug}/${stepSlug}`;

  return (
    <div className="flex h-14 items-center gap-4 border-b px-6 lg:h-[60px]">
      <Link
        href={`${baseUrl}/challenge`}
        className={
            cn(
                "inline-flex h-[inherit] items-center justify-center px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                {"border-b-2 border-primary" : challengeOrSolutionSlug == "challenge"}            
            )}
        prefetch={false}
      >
        Challenge
      </Link>
      <Link
        href={`${baseUrl}/solution`}
        className={
            cn(
                "inline-flex h-[inherit] items-center justify-center px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                {"border-b-2 border-primary" : challengeOrSolutionSlug == "solution"}            
            )}
        prefetch={false}
      >
        Solution
      </Link>
    </div>
  );
}
