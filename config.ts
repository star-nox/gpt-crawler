import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://extensionpublications.unl.edu/assets/pdf/ec711.pdf",
  match: "",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
