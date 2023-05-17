module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "@remotion"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
  overrides: [
    {
      files: ["remotion/*.{ts,tsx}"],
      extends: ["plugin:@remotion/recommended"],
    },
  ],
};
