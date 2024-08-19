'use client'

import CourseItem from "./item"
import { api } from "@/trpc/react";

import { EmptyCourse } from "@/components/empty-course";

type CourseListProps = {
  courses: any[]
}

export async function CourseList({id}: {id: string}) {

  const courses = await api.course.getCoursesByModuleId.useQuery({ id: Number(id) })

  if (courses?.data?.length == 0) {
    return <EmptyCourse />
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-6">
      {
        courses?.data?.map((course, index) => <CourseItem key={index} course={course} />)
      }
    </section>
  )
}