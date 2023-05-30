import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "aksel",
  globalStyle: "./src/global.css",

  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
      customElementsExportBehavior: "auto-define-custom-elements",
    },
    {
      type: "docs-readme",
      footer: "*Made by Aksel!*",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
};
