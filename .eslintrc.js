module.exports = {
  extends: 'airbnb',
  rules: {
    "import/no-extraneous-dependencies": ["error", {devDependencies: true}],
    "no-console": ["error", {allow: ["log", "warn", "error"]}],
    "arrow-parens": ["error", "as-needed"],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
  },
  env: {
    browser: true,
    node: true,
  }
};