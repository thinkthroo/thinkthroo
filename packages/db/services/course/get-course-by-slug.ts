import { db } from "../../"; // FIXME: make it @/
import { Prisma } from "@prisma/client";

// Type for Course model
export type Course = Prisma.CourseGetPayload<{}>;

async function getCourseBySlug(slug: string): Promise<any | null> {
  try {
    return await db.course.findUnique({
      where: {
        slug,
      },
      include: {
        module: true,
        chapters: {
          include: {
            lessons: {
              include: {
                steps: true,
              },
            },
          },
        },
      },
    });
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export { getCourseBySlug };
