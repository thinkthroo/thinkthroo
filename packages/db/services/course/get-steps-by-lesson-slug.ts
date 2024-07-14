import { db } from "../../"; // FIXME: make it @/
import { Prisma, Step } from "@prisma/client";

async function getStepsByLessonSlug(
  slug: string,
  userId: string,
): Promise<any[] | null> {
  try {
    const steps = await db.step.findMany({
      where: {
        lesson: {
          slug,
        },
      },
      include: {
        challenge: true,
        solution: true,
        ...(userId && {
          userSteps: {
            where: {
              userId: userId,
            },
            select: {
              markAsCompleted: true,
            },
          },
        }),
      },
    });

    const stepsWithCompletionStatus = steps.map((step) => {
      const userStep =
        step?.userSteps?.length > 0
          ? step.userSteps[0]
          : { markAsCompleted: false };

      console.log(step);

      return {
        ...step,
        markAsCompleted: userStep?.markAsCompleted,
      };
    });

    return stepsWithCompletionStatus;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export { getStepsByLessonSlug };
