import dotenv from "dotenv";
import type { CodegenConfig } from "@graphql-codegen/cli";
dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`${process.env.REACT_APP_API}/graphql`]: {
        headers: {
          Authorization: process.env.REACT_APP_API_KEY || "",
        },
      },
    },
  ],
  documents: ["**/*.tsx"],
  config: {},
  generates: {
    "types/graphql.ts": {
      plugins: ["typescript"],
    },
    "./": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.tsx",
        baseTypesPath: "types/graphql.ts",
      },
      plugins: ["typescript-operations"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
