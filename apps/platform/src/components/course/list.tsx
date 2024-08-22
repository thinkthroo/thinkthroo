'use client'

import CourseItem from "./item"
import { api } from "@/trpc/react";

import { EmptyCourse } from "@/components/empty-course";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from 'next/navigation';

type CourseListProps = {
  courses: any[]
}

export async function CourseList({id}: {id: string}) {

  const { push } = useRouter();

  const courses = await api.course.getCoursesByModuleId.useQuery({ id: Number(id) })

  const handleClick = (courseSlug: string) => {
    debugger
    push(`/course/${courseSlug}/introduction/index?stepSlug=index&type=index`);
  }

  if (courses?.data?.length == 0) {
    return <EmptyCourse />
  }

  return (
    <div className="flex flex-col p-4">
      <p className="text-sm text-muted-foreground pb-4">Showing 5 of 25</p>
      {/* <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        {
          courses?.data?.map((course, index) => <CourseItem key={index} course={course} />)
        }
      </div> */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          courses?.data?.map(course => 
            <div className="bg-background rounded-lg cursor-pointer shadow hover:shadow-lg overflow-hidden" onClick={() => handleClick(course.slug)}>
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Tag 1</div>
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Tag 2</div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    This is a sample description for the card. It can be of varying length to showcase the layout.
                  </p>
                </div>
                <div className="mt-4">
                  <Button className="w-full">Start</Button>
                </div>
              </div>
            </div>
          // <Link href={} className="hover:underline" prefetch={false}></Link>
          )
        }
    </section>
    </div>
  )
}