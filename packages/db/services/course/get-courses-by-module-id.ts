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
      COUNT(DISTINCT ch.id)::int AS "chaptersCount",
      COUNT(DISTINCT l.id)::int AS "lessonsCount",
      COUNT(DISTINCT s.id)::int AS "stepsCount",
      COALESCE(string_agg(DISTINCT t.title, ', '), '') AS tags
    FROM
      "Course" c
      LEFT JOIN "Chapter" ch ON ch."courseId" = c.id
      LEFT JOIN "Lesson" l ON l."chapterId" = ch.id
      LEFT JOIN "Step" s ON s."lessonId" = l.id
      LEFT JOIN "_CourseTags" ct ON ct."B" = c.id
      LEFT JOIN "Tag" t ON t.id = ct."A"
    WHERE
      c."moduleId" = ${moduleId}
    GROUP BY
      c.id
    ORDER BY
      c.id;

  `;

    return result
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    throw new Error("Failed to fetch courses.");
  }
}

export { getCoursesByModuleId };
