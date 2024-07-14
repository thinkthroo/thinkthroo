import { Command } from "commander";
import { logger } from "@/src/utils/logger";
import chalk from "chalk";
import { handleError } from "@/src/utils/handle-error";
import { fetchTest } from "@/src/utils/fetch-test";
import { writeToFs } from "@/src/utils/write-to-fs";

export const setupTest = new Command()
  .name("setup-test")
  .description("Setup tests.")
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd(),
  )
  .argument("<testHash>", "the test hash copied from tthroo.com")
  .action(async (testHash, opts) => {
    try {
      console.log("opts", opts, "testHash", testHash);

      const res = await fetchTest(testHash);

      console.log("testCode after fetchTest", res);

      writeToFs(res.testCode);

      logger.info("");
      logger.info(
        `${chalk.green(
          "Success!",
        )} Project initialization completed. You may now add components.`,
      );
      logger.info("");
    } catch (error) {
      handleError(error);
    }
  });
