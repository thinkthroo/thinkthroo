-- CreateTable
CREATE TABLE "UserSteps" (
    "userId" TEXT NOT NULL,
    "stepId" INTEGER NOT NULL,
    "markAsCompleted" BOOLEAN NOT NULL,

    CONSTRAINT "UserSteps_pkey" PRIMARY KEY ("userId","stepId")
);

-- AddForeignKey
ALTER TABLE "UserSteps" ADD CONSTRAINT "UserSteps_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSteps" ADD CONSTRAINT "UserSteps_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "Step"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
