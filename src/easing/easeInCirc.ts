/** @module easing */

/**
 * Increases velocity until stop.
 *
 * @param t - [0-1]
 */
export function easeInCirc(t: number): number {
  return -1 * (Math.sqrt(1 - t ** 2) - 1);
}
