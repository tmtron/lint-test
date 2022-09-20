# nx lint test

nx monorepo to test some es-lint import rules

getting started:
* clone the repo
* `npm install`
* `npm run lint`


We have 2 libs `lib-a` and `lib-b`.  
* the file [child.ts](libs/lib-b/src/lib/childdir/child.ts) in `lib-b` imports `import { libA } from '@lint-test/lib-a';`
* this import is **erronously** flagged by the [no-relative-parent-imports](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md)
  rule as invalid: see [issue#2467](https://github.com/import-js/eslint-plugin-import/issues/2467)
