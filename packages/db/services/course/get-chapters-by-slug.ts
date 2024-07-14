import { db } from "../../"; // FIXME: make it @/
import { Prisma } from "@prisma/client";

// Type for Course model
export type Chapter = Prisma.ChapterGetPayload<{}>;

async function getChaptersBySlug(slug: string): Promise<any[] | null> {
  try {
    return await db.chapter.findMany({
      where: {
        course: {
          slug,
        },
      },
      orderBy: {
        order: "asc"
      },
      include: {
        lessons: {
          orderBy: {
            order: "asc"
          },
          select: {
            slug: true,
            title: true,
            steps: {
              orderBy: {
                order: "asc"
              },
              select: {
                slug: true,
                title: true,
              },
              take: 1,
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

export { getChaptersBySlug };
