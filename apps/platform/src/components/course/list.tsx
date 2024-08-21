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
    <div className="flex gap-4">
      {
        courses?.data?.map((course, index) => <CourseItem key={index} course={course} />)
      }
    </div>
  )
}