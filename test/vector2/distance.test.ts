import { describe, it, expect } from "bun:test";
import { distance } from "../../src/vector2/distance";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 1, y: 0 };
const vector3 = { x: -1, y: 0 };
const vector4 = { x: 0, y: 1 };
const vector5 = { x: 0, y: -1 };

describe("vector2/distance", () => {
  it("calculates the correct distance", () => {
    expect(distance(vector1, vector1)).toBe(0);
    expect(distance(vector2, vector1)).toBe(1);
    expect(distance(vector2, vector3)).toBe(2);
    expect(distance(vector4, vector1)).toBe(1);
    expect(distance(vector4, vector5)).toBe(2);
  });
});
