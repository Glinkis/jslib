/** @module vector3 */ /** */
import { Vector3 } from "../vector3";

/**
 * Returns the negated coordinates of a vector.
 *
 * @param vector - Vector to negate.
 */
export function negate(vector: Vector3): Vector3 {
  return {
    x: -vector.x === -0 ? 0 : -vector.x,
    y: -vector.y === -0 ? 0 : -vector.y,
    z: -vector.z === -0 ? 0 : -vector.z
  };
}
