import { db } from "../../"; // FIXME: make it @/
import { Prisma } from "@prisma/client";

// Type for Course model
// export type Course = Prisma.CourseGetPayload<{
//   select: {
//     title: true,
//   }
//   include: {
//     module: true
//   }
// }>;

async function getCourseBySlugForBreadCrumbs(
  slug: string,
): Promise<any | null> { // FIXME: fix types
  try {
    return await db.course.findUnique({
      where: {
        slug,
      },
      select: {
        title: true,
        module: true,
      },
    });
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export { getCourseBySlugForBreadCrumbs };
