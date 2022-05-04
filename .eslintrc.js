module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true
  },
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript/base', 'plugin:prettier/recommended'],
  // extends: ['airbnb-typescript/base'],
  rules: {
    // prettier/prettier 옵션이 많은 문제를 일으켜서 off 로 해둠
    'prettier/prettier': 'off',
    
    //console.log 같은 구문이 디버깅시 필요함
    'no-console': 'off',
    // 'prefer-destructuring': 'off',
    // 'lines-between-class-members': 'off',
    'no-param-reassign': ['error', { props: false }],
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    "@typescript-eslint/no-unused-vars": "off",
    //Prettier와 동일하게 120으로 맞춤 그외 주석이나 문자열, 정규식 같은 경우는 무시
    'max-len': [
      'error',
      {
        code: 500,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    '@typescript-eslint/semi': ['error', 'never'],
  },
}
