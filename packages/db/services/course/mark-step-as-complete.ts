import { db } from "../../"; // FIXME: make it @/

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
  