import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },

  js.configs.recommended,

  // 🔥 keep strict rules (important)
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
      "@typescript-eslint/no-unused-vars": ["error"],

      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/consistent-type-imports": "error",

      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",

      // ----------------------
      // Import Rules
      // ----------------------
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
      "import/newline-after-import": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];
