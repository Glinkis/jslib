/** @module vector3 */
import { Vector3 } from "../vector3";
import { dot } from "./dot";

/**
 * Returns length of a vector.
 *
 * @param vector - Vector.
 */
export function length(vector: Vector3): number {
  return Math.sqrt(dot(vector, vector));
}
