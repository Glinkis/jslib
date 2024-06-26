/** @module easing */

/**
 * Accelerates exponentially until finish.
 *
 * @param t - [0-1]
 */
export function easeInExpo(t: number): number {
  return t === 0 ? 0 : 2 ** (10 * (t - 1));
}
