import { logger } from "./logger";
import ora from "ora";
import path from "path";
import { existsSync, promises as fs } from "fs";

export async function writeToFs(testCode: string) {
  // create tests folder
  if (!existsSync("tests")) {
    await fs.mkdir("tests", { recursive: true });
  }

  // Write to file.
  logger.info("");
  const spinner = ora(`Writing components.json...`).start();
  const targetPath = path.resolve(process.cwd() + "/tests", "step-1.ts");
  await fs.writeFile(targetPath, testCode, "utf8");
  spinner.succeed();
}
