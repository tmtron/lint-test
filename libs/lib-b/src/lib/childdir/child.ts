/**
 * "internal" import
 * import/no-relative-parent-imports will flag this as an error, but shouldn't
 * @see https://github.com/import-js/eslint-plugin-import/issues/2467
 */
import { libA } from '@lint-test/lib-a';
/**
 * "external" import is okay
 */
import { isFunction } from 'lodash';

export function child(): string {
  const external = isFunction(1);
  return libA();
}
