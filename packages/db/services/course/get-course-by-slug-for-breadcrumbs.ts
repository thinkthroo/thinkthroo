import { db } from "../../"; // FIXME: make it @/
import { Prisma } from "@prisma/client";

// Type for Course model
export type Course = Prisma.CourseGetPayload<{}>;

async function getCourseBySlugForBreadCrumbs(
  slug: string,
): Promise<Course | null> {
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
