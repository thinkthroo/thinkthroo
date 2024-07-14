import { db } from "../../"; // FIXME: make it @/
import { Prisma, Step } from "@prisma/client";

// TODO: Fix type
async function getUserStep(userId: string, stepId: number): Promise<any | null> {
  try {
    return await db.userSteps.findFirst({
      where: {
        userId,
        stepId
      },
    });
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export { getUserStep };
