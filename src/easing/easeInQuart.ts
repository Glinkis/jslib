/** @module easing */

/**
 * Accelerates from zero velocity.
 *
 * @param t - [0-1]
 */
export function easeInQuart(t: number): number {
  return t ** 4;
}
