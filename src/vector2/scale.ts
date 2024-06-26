/** @module vector2 */ /** */
import { Vector2 } from "../vector2";

/**
 * Scales a vector by a value.
 *
 * @param vector - Vector to scale.
 * @param value - Value to scale by.
 */
export function scale(vector: Vector2, value: number): Vector2 {
  return {
    x: vector.x * value,
    y: vector.y * value
  };
}
