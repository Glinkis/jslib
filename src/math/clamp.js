/**
 * @private
 * @param {number?} max
 * @param {number} value
 * @returns {number}
 */
function clampMax(max, value) {
  if (max != null && value >= max) {
    return max;
  }
  return value;
}

/**
 * @private
 * @param {number?} min
 * @param {number} value
 * @returns {number}
 */
function clampMin(min, value) {
  if (min != null && value <= min) {
    return min;
  }
  return value;
}

/**
 * Returns a value clamped between a maximum and a minimum number.
 *
 * @memberof math
 *
 * @param {number} value - The value to clamp.
 * @param {number} min - The minimum boundary.
 * @param {number} max - The maximum boundary.
 * @returns {number}
 *
 * @example
 * clamp(5, 0, 10); // Returns 5
 * @example
 * clamp(-10, 0, 10); // Returns 0
 * @example
 * clamp(20, 0, 10); // Returns 10
 */
export function clamp(value, min, max) {
  value = clampMax(max, value);
  value = clampMin(min, value);
  return value;
}
