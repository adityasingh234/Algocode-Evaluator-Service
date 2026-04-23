import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";

import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },

  js.configs.recommended,

  // ✅ APPLY TS RULES ONLY TO TS FILES
  {
    files: ["src/**/*.ts"],
    ...tseslint.configs.strictTypeChecked[0],
  },

  eslintConfigPrettier,

  {
    files: ["src/**/*.ts"],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
      ecmaVersion: 2022,
      sourceType: "module",
      // ✅ ADD THIS
      globals: {
        process: "readonly",
      },
    },

    plugins: {
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
    },

    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },

    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "no-console": "warn",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      semi: ["error", "always"],
      "no-duplicate-imports": "error",

      "no-unused-vars": "off",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/consistent-type-imports": "error",

      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",

      "import/no-unresolved": "off",
      "import/no-duplicates": "error",
      "import/newline-after-import": "error",

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];
