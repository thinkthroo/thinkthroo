import CourseItem from "./item"

type CourseListProps = {
  courses: any[]
}

export function CourseList(props: CourseListProps) {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-6">
      {
        props?.courses?.map((course, index) => <CourseItem key={index} course={course} />)
      }
    </section>
  )
}
