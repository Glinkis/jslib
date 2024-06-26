/** @module vector3 */
import { Vector3 } from "../vector3";

/**
 * Scales a vector by a value.
 *
 * @param vector - Vector to scale.
 * @param value - Value to scale by.
 */
export function scale(vector: Vector3, value: number): Vector3 {
  return {
    x: vector.x * value,
    y: vector.y * value,
    z: vector.z * value
  };
}
