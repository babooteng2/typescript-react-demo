module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "airbnb",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": 0,
    'no-use-before-define': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'import/prefer-default-export': 0,    
    'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    'no-shadow': 0,
    'react/prop-types': 0,
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-console": 0,
  },
};
