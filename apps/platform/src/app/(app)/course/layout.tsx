import CourseSidebar from "./components/sidebar/index";
import CourseHeader from "./components/course-header";

export default function CourseLayout({ children }) {
  return (
    <div className="flex h-screen w-full">
        {children}
    </div>
  );
}