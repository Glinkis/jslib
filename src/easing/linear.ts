/** @module easing */

/**
 * No easing, no acceleration.
 *
 * @param t - [0-1]
 */
export function linear(t: number): number {
  return t;
}
