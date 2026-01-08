import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: { version: "detect" },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: pluginReact,
      prettier: prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended[0].rules,
      ...pluginReact.configs.flat.recommended.rules,

      // React
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // Vars não usadas
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { varsIgnorePattern: "^React$" },
      ],

      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: false,
          jsxSingleQuote: false,
          useTabs: false,
          trailingComma: "es5",
        },
      ],
    },
  },

  // Segundo bloco - ignore
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];
