module.exports = {
  // $schema: 'http://json.schemastore.org/prettierrc',
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'lf',
  bracketSpacing: true,
  arrowParens: 'always',
  overrides: [
    {
      files: '{*.y?(a)ml,.*.js?(on),.*.y?(a)ml,*.md,.prettierrc,.stylelintrc,.babelrc}',
      options: {
        tabWidth: 2,
      },
    },
    {
      files: '{**/.vscode/*.json,**/tsconfig.json,**/tsconfig.*.json}',
      options: {
        parser: 'json5',
        quoteProps: 'preserve',
        singleQuote: false,
        trailingComma: 'all',
      },
    },
  ],
};
