import * as esbuild from "esbuild";

const commonBuildOptions = {
  bundle: true,
  minify: true,
  target: "es2022",
  entryPoints: ["src/index.ts"],
};

await esbuild
  .build({
    ...commonBuildOptions,
    format: "esm",
    outfile: "dist/esm/index.mjs",
  })
  .catch(() => process.exit(1));

await esbuild
  .build({
    ...commonBuildOptions,
    format: "cjs",
    outfile: "dist/cjs/index.js",
  })
  .catch(() => process.exit(1));
