import { child } from './childdir/child';

export function libB(): string {
  return child();
}
