#!/usr/bin/env node
import { Command } from "commander";
import { getPackageInfo } from "./utils/get-package-info";
import { setupTest } from "./commands/setup-test";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const packageInfo = getPackageInfo();

  const program = new Command()
    .name("tthroo")
    .description(packageInfo.description || "Add tests to your app.")
    .version(
      packageInfo.version || "0.0.1",
      "-v, --version",
      "display the version number",
    );

  program.addCommand(setupTest);

  program.parse();
}

main();
