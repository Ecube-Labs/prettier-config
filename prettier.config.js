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
