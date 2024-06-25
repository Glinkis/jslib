/** @module easing */

/**
 * Decelerates to zero velocity.
 *
 * @param t - [0-1]
 */
export function easeOutQuint(t: number): number {
  return 1 + (t - 1) ** 5;
}
