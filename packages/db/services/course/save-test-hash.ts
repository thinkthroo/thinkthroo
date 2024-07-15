import { db } from "../../"; // FIXME: make it @/

async function saveTestHash(userId: string, stepId: number, testHash: number, markAsCompleted: boolean): Promise<any | null> {
    try {
        return await db.userSteps.upsert({
            where: {
                userId_stepId: {
                    userId: userId,
                    stepId: stepId,
                },
            },
            update: {
                testHash
            },
            create: {
                userId: userId,
                stepId: stepId,
                testHash,
                markAsCompleted
            },
        })
    } catch (error) {
      console.error("Failed to set markAsCompleted:", error);
      throw new Error("Failed to fetch user.");
    }
  }
  
  export { saveTestHash };
  