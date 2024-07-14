import { db } from "../../"; // FIXME: make it @/

// TODO: Fix type
async function getStepBySlug(slug: string): Promise<any | null> {
  try {
    return await db.step.findFirst({
      where: {
        slug,
      },
      select: {
        challenge: true,
        solution: true,
        lesson: {
          select: {
            order: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export { getStepBySlug };
