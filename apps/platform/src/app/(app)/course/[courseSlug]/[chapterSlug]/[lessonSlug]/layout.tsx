import CourseSidebar from "@/app/(app)/course/components/sidebar";

export default function CourseLayout({ children, params }) {

  return (
    <div className="flex h-screen w-full">
        <CourseSidebar slugs={params} />
        {children}
    </div>
  );
}