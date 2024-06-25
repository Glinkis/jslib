import { describe, it, expect } from "bun:test";
import { divide } from "../../src/vector2/divide";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 1, y: 1 };
const vector3 = { x: -1, y: -1 };

describe("vector2/divide", () => {
  it("calculates correctly", () => {
    expect(divide(vector1, vector1)).toStrictEqual({ x: NaN, y: NaN });
    expect(divide(vector2, vector1)).toStrictEqual({
      x: Infinity,
      y: Infinity,
    });
    expect(divide(vector2, vector2)).toStrictEqual(vector2);
    expect(divide(vector2, vector3)).toStrictEqual(vector3);
  });
});
