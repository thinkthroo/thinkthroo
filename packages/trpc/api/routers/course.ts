import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { getCoursesByModuleId } from "@repo/db/services/course/get-courses-by-module-id";
import { getCourseBySlug } from "@repo/db/services/course/get-course-by-slug";
import { getChaptersBySlug } from "@repo/db/services/course/get-chapters-by-slug";
import { getStepsByLessonSlug } from "@repo/db/services/course/get-steps-by-lesson-slug";
import { getStepBySlug } from "@repo/db/services/course/get-step-by-slug";
import { getCourseBySlugForBreadCrumbs } from "@repo/db/services/course/get-course-by-slug-for-breadcrumbs";
import { markStepAsComplete } from "@repo/db/services/course/mark-step-as-complete";
import stringHash from "string-hash"
import { saveTestHash } from "@repo/db/services/course/save-test-hash";
import { getUserStep } from "@repo/db/services/course/get-user-step";
import { getTestInfo } from "@repo/db/services/course/get-test-info";

export const courseRouter = createTRPCRouter({
  // FIXME: Break this down into separate files
  getCoursesByModuleId: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ input }) => {
      try {
        // console.log("input inside query", input);
        let courses = await getCoursesByModuleId(input.id);
        return courses;
      } catch (error) {
        console.log(error);
      }
    }),
  getCourseBySlug: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .query(async (opts) => {
      try {
        let courses = await getCourseBySlug(opts.input.slug);
        return courses;
      } catch (error) {
        console.log(error);
      }
    }),
  getChaptersBySlug: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .query(async (opts) => {
      try {
        let chapters = await getChaptersBySlug(opts.input.slug);
        // console.log(
        //   "input slug",
        //   opts.input.slug,
        //   "chapters fetched in trpc",
        //   chapters,
        // );
        return chapters;
      } catch (error) {
        console.log(error);
      }
    }),
  getStepsByLessonSlug: publicProcedure
    .input(
      z.object({
        slug: z.string(),
        userId: z.string().optional(),
      }),
    )
    .query(async (opts) => {
      try {
        let steps = await getStepsByLessonSlug(
          opts.input.slug,
          opts.input.userId,
        );

        return steps;
      } catch (error) {
        console.log(error);
      }
    }),
  getStepContent: publicProcedure
    .input(
      z.object({
        slug: z.string(),
        type: z.string()
      }),
    )
    .query(async (opts) => {
      try {
        let step = await getStepBySlug(opts.input.slug);

        let stepContentMd = null;

        // FIXME: remove the magical api url string
        if (opts.input.type == "challenge") {
          let stepContentMdRes = await fetch(
            `${process.env.STRAPI_ENDPOINT}/${step.challenge.strapi_id}`,
          );
          stepContentMd = await stepContentMdRes.json();
        } else if (opts.input.type == "solution") {
          let stepContentMdRes = await fetch(
            `${process.env.STRAPI_ENDPOINT}/${step.solution.strapi_id}`,
          );
          stepContentMd = await stepContentMdRes.json();
        }

        return {
          stepContentMd: stepContentMd?.data?.attributes?.description,
          lessonOrder: step.lesson.order,
        };
      } catch (error) {
        console.log(error);
      }
    }),
  getCourseBySlugForBreadCrumbs: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .query(async (opts) => {
      try {
        let courses = await getCourseBySlugForBreadCrumbs(opts.input.slug);
        return courses;
      } catch (error) {
        console.log(error);
      }
    }),
  markStepAsComplete: publicProcedure
    .input(
      z.object({
        stepId: z.number(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        let stepStatus = await markStepAsComplete(input.userId, input.stepId);
        return stepStatus;
      } catch (error) {
        console.log(error);
      }
    }),
    generateOrGetTestHash: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        stepId: z.number(),
      }),
    )
    .query(async (opts) => {
      try {

        let userStep = await getUserStep(opts.input.userId, opts.input.stepId);

        console.log(userStep);

        if (userStep && userStep.testHash) {
          return userStep.testHash
        }

        console.log("returned existing testHash")
        // string hash is used in error.digest from next.js source code
        let testHash = stringHash(opts.input.stepId + opts.input.userId)

        await saveTestHash(opts.input.userId, opts.input.stepId, testHash, userStep.markAsCompleted);

        return testHash;
      } catch (error) {
        console.log(error);
      }
    }),
  getTestCodeByHash: publicProcedure
    .input(
      z.object({
        testHash: z.string(),
      }),
    )
    .query(async (opts) => {
      try {
        // TODO: Uncomment this and make it work after merging
        // let testInfo = await getTestInfo(opts.input.testHash);

        const testCodeRes = await fetch(
          `https://strapi-8c8i.onrender.com/api/readmes/7`,
        );
        const testCode = await testCodeRes.json();

        return {
          testCode: testCode?.data?.attributes?.description,
        };
      } catch (error) {
        console.log(error);
      }
    }),
});
