import { describe, it, expect } from "bun:test";
import { multiply } from "../../src/vector3/multiply";

const vector1 = { x: 0, y: 0, z: 0 };
const vector2 = { x: 1, y: 1, z: 1 };
const vector3 = { x: -1, y: -1, z: -1 };

describe("vector2/multiply", () => {
  it("calculates correctly", () => {
    expect(multiply(vector1, vector1)).toStrictEqual(vector1);
    expect(multiply(vector2, vector1)).toStrictEqual(vector1);
    expect(multiply(vector2, vector2)).toStrictEqual(vector2);
    expect(multiply(vector2, vector3)).toStrictEqual(vector3);
  });
});
