/** @module math */

/**
 * Checks if value is inside a range.
 *
 * @param value - Value to check.
 * @param min - Range minimum boundary.
 * @param max - Range maximum boundary.
 * @param threshold - Optional threshold value.
 *
 * @returns {boolean}
 */
export function inRange(value: number, min: number, max: number, threshold: number = 0): boolean {
  return value + threshold >= min && value - threshold <= max;
}
