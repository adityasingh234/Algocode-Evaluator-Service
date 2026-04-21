import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort"; // ✅ FIX

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },

  js.configs.recommended,

  // 🔥 strict TS rules
  ...tseslint.configs.strictTypeChecked,

  eslintConfigPrettier,

  {
    files: ["src/**/*.ts"],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
      },
      ecmaVersion: 2022, // ✅ add
      sourceType: "module", // ✅ add
    },

    plugins: {
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
    },

    settings: {
      "import/resolver": {
        typescript: {},
      },
    },

    rules: {
      // ----------------------
      // Base Rules
      // ----------------------
      "no-var": "error",
      "prefer-const": "error",
      "no-console": "warn",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      semi: ["error", "always"],
      "no-duplicate-imports": "error",

      // ----------------------
      // TypeScript Rules
      // ----------------------
      "no-unused-vars": "off",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all", // ✅ FIX (your issue)
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

      // ----------------------
      // Import Rules
      // ----------------------

      // ❌ REMOVE this (conflicts with simple-import-sort)
      // "import/order": ...

      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
      "import/newline-after-import": "error",

      // ✅ better import sorting
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];
