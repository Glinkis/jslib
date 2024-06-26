import { describe, it, expect } from "bun:test";
import { scale } from "../../src/vector3/scale";

const vector1 = { x: 0, y: 0, z: 0 };
const vector2 = { x: 1, y: 1, z: 1 };
const vector3 = { x: -1, y: -1, z: -1 };

describe("vector2/scale", () => {
  it("calculates correctly", () => {
    expect(scale(vector1, 0)).toStrictEqual(vector1);
    expect(scale(vector1, 10)).toStrictEqual(vector1);
    expect(scale(vector2, 0)).toStrictEqual(vector1);
    expect(scale(vector2, 1)).toStrictEqual(vector2);
    expect(scale(vector2, -1)).toStrictEqual(vector3);
  });
});
