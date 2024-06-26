/** @module vector2 */
import { Vector2 } from "../vector2";
import { dot } from "./dot";

/**
 * Returns length of a vector.
 *
 * @param vector - Vector.
 */
export function length(vector: Vector2): number {
  return Math.sqrt(dot(vector, vector));
}
