module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  root: true,
  rules: {
    // Uncomment this for ./10-floating-promises.js 👇
    // "@typescript-eslint/no-floating-promises": "error",
    // Uncomment this for ./12-misused-promises.js 👇
    // "@typescript-eslint/no-misused-promises": "error",
  },
};
