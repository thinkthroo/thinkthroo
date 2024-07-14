import { db } from "../../";
import { Prisma } from "@prisma/client";

// Type for Course model
export type Course = Prisma.CourseGetPayload<{
  include: {
    module: true;
    tags: true;
    chapters: {
      select: {
        slug: true;
        lessons: {
          select: {
            slug: true;
            steps: {
              select: {
                slug: true;
              };
            };
          };
        };
      };
    };
  };
}>;

interface CourseWithCounts extends Course {
  chapterCount: number;
  lessonCount: number;
  stepCount: number;
}

async function getCoursesByModuleId(
  moduleId: number,
): Promise<any[] | null> {
  try {
    // Fetch courses along with nested relations
    const courses = await db.course.findMany({
      where: {
        moduleId,
      },
      include: {
        module: true,
        tags: true,
        chapters: {
          take: 1,
          select: {
            slug: true,
            lessons: {
              take: 1,
              select: {
                slug: true,
                steps: {
                  take: 1,
                  select: {
                    slug: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    // Get counts for each course
    const coursesWithCounts = await Promise.all(
      courses.map(async (course) => {
        const chapterCount = await db.chapter.count({
          where: { courseId: course.id },
        });

        const lessonCount = await db.lesson.count({
          where: {
            chapter: {
              courseId: course.id,
            },
          },
        });

        const stepCount = await db.step.count({
          where: {
            lesson: {
              chapter: {
                courseId: course.id,
              },
            },
          },
        });

        return {
          ...course,
          chapterCount,
          lessonCount,
          stepCount,
        };
      }),
    );

    return coursesWithCounts;
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    throw new Error("Failed to fetch courses.");
  }
}

export { getCoursesByModuleId };
