import CommonCourseLayout, { CommonCourseLayoutProps } from "@/components/layouts/course";

export default function Courselayout({ children }: CommonCourseLayoutProps) {
    return (
        <CommonCourseLayout>
            {children}
        </CommonCourseLayout>
    )
}