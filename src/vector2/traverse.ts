/** @module vector2 */
import { Vector2 } from "../vector2";

/**
 * Loops through the dimensions of a vector.
 * Starts at zero, so keep in mind that the number of callbacks will be the dimension sizes +1;
 *
 * @param vector - Vector to traverse.
 * @param callback - Callback for each step.
 * @param step - Step size (default: 1).
 */
export function traverse(
  vector: Vector2,
  callback: (vector: Vector2) => void,
  step: number = 1
): void {
  for (let x = 0; x <= vector.x; x += step) {
    for (let y = 0; y <= vector.y; y += step) {
      callback({ x, y });
    }
  }
}
