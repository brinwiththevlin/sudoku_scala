import { defineConfig } from "vite";

function isDev() {
  return process.env.NODE_ENV !== "production";
}
function printSbtTask(task) {
  const args = ["--error", "--batch", `print ${task}`];
  const options = {
    stdio: [
      "pipe", // StdIn.
      "pipe", // StdOut.
      "inherit", // StdErr.
    ],
  };
  const result =
    process.platform === "win32"
      ? spawnSync(
          "sbt.bat",
          args.map((x) => `"${x}"`),
          { shell: true, ...options }
        )
      : spawnSync("sbt", args, options);

  if (result.error) throw result.error;
  if (result.status !== 0)
    throw new Error(`sbt process failed with exit code ${result.status}`);
  return result.stdout.toString("utf8").trim();
}

const linkOutputDir = printSbtTask(
  isDev() ? "fastlinkOutputdir" : "fullLinkOUtputDir"
);

export default defineConfig({
  resolve: {
    alias: [{ find: "@linkOutputDir", replacement: linkOutputDir }],
  },
});
