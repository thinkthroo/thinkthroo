import { db } from "../../"; // FIXME: make it @/
import { Prisma, Step, UserSteps } from "@prisma/client";

async function markStepAsComplete(userId: string, stepId: number): Promise<any | null> {
    try {
        return await db.userSteps.upsert({
            where: {
                userId_stepId: {
                    userId: userId,
                    stepId: stepId,
                },
            },
            update: {
                markAsCompleted: true,
            },
            create: {
                userId: userId,
                stepId: stepId,
                markAsCompleted: true,
            },
        })
    } catch (error) {
      console.error("Failed to set markAsCompleted:", error);
      throw new Error("Failed to fetch user.");
    }
  }
  
  export { markStepAsComplete };
  