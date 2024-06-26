/** @module vector3 */
import { Vector3 } from "../vector3";

/**
 * Checks for intersection between two vectors.
 *
 * @param vector1 - First vector.
 * @param size1 - First size.
 * @param vector2 - Second vector.
 * @param size2 - Second size.
 */
export function pointIntersection(
  vector1: Vector3,
  size1: number,
  vector2: Vector3,
  size2: number
): boolean {
  return (
    (vector1.x - vector2.x) ** 2 + (vector1.y - vector2.y) ** 2 + (vector1.z - vector2.z) ** 2 <=
    (size1 + size2) ** 2
  );
}
