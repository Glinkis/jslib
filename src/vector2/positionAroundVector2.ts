/** @module vector2 */
import { Vector2 } from "../vector2";

/** @private */
const PRECISION = 10e8;

/** @private */
const roundToPrecision = (value: number) => Math.round(value * PRECISION) / PRECISION;

/**
 * Returns a vector positioned around another vector.
 *
 * @param vector - Center point position.
 * @param distance - Distance from the center point.
 * @param radian - Radian value.
 */
export function positionAroundVector2(vector: Vector2, distance: number, radian: number): Vector2 {
  const xAxis = roundToPrecision(Math.cos(radian));
  const yAxis = roundToPrecision(Math.sin(radian));

  return {
    x: vector.x + distance * xAxis,
    y: vector.y + distance * yAxis
  };
}
