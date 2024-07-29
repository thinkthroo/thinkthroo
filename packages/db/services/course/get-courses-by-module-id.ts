import { db } from "../../";
import { Prisma } from "@prisma/client";

// Type for Course model
// export type Course = Prisma.CourseGetPayload<{
//   include: {
//     module: true;
//     tags: true;
//     chapters: {
//       select: {
//         slug: true;
//         lessons: {
//           select: {
//             slug: true;
//             steps: {
//               select: {
//                 slug: true;
//               };
//             };
//           };
//         };
//       };
//     };
//   };
// }>;

// interface CourseWithCounts extends Course {
//   chapterCount: number;
//   lessonCount: number;
//   stepCount: number;
// }

async function getCoursesByModuleId(moduleId: number): Promise<any[] | null> {
  try {
    // inspired from: https://github.com/hocus-dev/hocus/blob/f04d83f9592a0cf719701b6a9e990b5e59616c9c/app/project/project.service.ts#L166-L204
    const result: any[] = await db.$queryRaw`
    SELECT
      c.id,
      c.title,
      c.slug,
      c.order,
      COUNT(DISTINCT ch.id)::int AS chaptersCount,
      COUNT(DISTINCT l.id)::int AS lessonsCount,
      COUNT(DISTINCT s.id)::int AS stepsCount
    FROM
      "Course" c
      LEFT JOIN "Chapter" ch ON ch."courseId" = c.id
      LEFT JOIN "Lesson" l ON l."chapterId" = ch.id
      LEFT JOIN "Step" s ON s."lessonId" = l.id
    WHERE
      c."moduleId" = ${moduleId}
    GROUP BY
      c.id
  `;

    const courseIds = result.map((course) => course.id);

    const coursesWithTagsAndModule = await db.course.findMany({
      where: {
        id: { in: courseIds },
      },
      include: {
        tags: true,
      },
    });

    const coursesMap = Object.fromEntries(
      coursesWithTagsAndModule.map((course) => [course.id, course])
    );

    const coursesWithCounts = result.map((course) => {
      return {
        ...coursesMap[course.id],
        chapterCount: course.chapterscount,
        lessonCount: course.lessonscount,
        stepCount: course.stepscount,
      };
    });

    return coursesWithCounts;
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    throw new Error("Failed to fetch courses.");
  }
}

export { getCoursesByModuleId };
