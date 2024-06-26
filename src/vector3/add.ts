/** @module vector3 */
import { Vector3 } from "../vector3";

/**
 * Adds two vectors and returns the result.
 *
 * @param vector1 - First vector.
 * @param vector2 - Second vector.
 */
export function add(vector1: Vector3, vector2: Vector3): Vector3 {
  return {
    x: vector1.x + vector2.x,
    y: vector1.y + vector2.y,
    z: vector1.z + vector2.z
  };
}
