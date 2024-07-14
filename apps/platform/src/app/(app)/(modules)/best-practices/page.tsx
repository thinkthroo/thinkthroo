import { CourseList } from "@/components/course/list";
import { EmptyCourse } from "@/components/empty-course";
import { api } from "@/trpc/server";

export default async function BestPractices() {

    const courses = await api.course.getCoursesByModuleId({ id: 1 })

    if (courses?.length == 0) {
        return <EmptyCourse />
    }

    return (
        <>
            <CourseList 
                courses={courses}
            />
        </>
    )
}