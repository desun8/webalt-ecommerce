module.exports = {
  extends: "airbnb",
  rules: {
    quotes: ["error", "double"],
    "arrow-parens": ["error", "as-needed"],
    "consistent-return": ["off"],
  },
  env: {
    browser: true,
    node: true,
  },
};
