"use client";

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { BookIcon, ChevronRightIcon, FileIcon } from "@/components/icons";
import Link from "next/link"
import { useState } from "react";
import { cn } from "@/lib/utils";
export default function ChapterMenuItem(props: any) {

    const {
        chapter,
        index
    } = props;

    const [openChapters, setOpenChapters] = useState({ [props?.slugs?.chapterSlug]: true });

    const handleOpenChange = (chapterSlug: string) => {
        setOpenChapters(prev => ({
        ...prev,
        [chapterSlug]: !prev[chapterSlug]
        }));
    };

    return (
        <Collapsible className="grid gap-1" key={index} 
          open={openChapters[chapter.slug] || false} 
          
            onOpenChange={() => handleOpenChange(chapter.slug)}
          >
                <CollapsibleTrigger className={
                  cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground [&[data-state=open]>svg]:rotate-90",
                      {
                        "bg-accent text-accent-foreground": props?.slugs?.chapterSlug === chapter.slug
                      })}>
                  <BookIcon className="h-5 w-5" />
                  {chapter.title}
                  <ChevronRightIcon className="ml-auto h-4 w-4 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent className="grid gap-1">
                  {
                    chapter?.lessons?.map((lesson, index: number) => <Link
                      href={`/course/${props.courseSlug}/${chapter.slug}/${lesson.slug}?stepSlug=${lesson?.steps[0]?.slug}&type=${lesson?.slug == "index" ? "index": 'challenge'}`}
                      className={cn(
                        "pl-5 flex items-center gap-3 rounded-md pr-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                        {
                          "bg-accent text-accent-foreground": props?.slugs?.lessonSlug === lesson.slug
                        })}
                      prefetch={false}
                      key={index}
                    >
                      <FileIcon className="h-5 w-5" />
                      {lesson.title}
                    </Link>
                    )
                  }
                </CollapsibleContent>
        </Collapsible>
    )
}