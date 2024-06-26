import { describe, it, expect } from "bun:test";
import { length } from "../../src/vector2/length";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 1, y: 1 };
const vector3 = { x: -1, y: -1 };

describe("vector2/length", () => {
  it("calculates correctly", () => {
    expect(length(vector1)).toBe(0);
    expect(length(vector2)).toBeCloseTo(1.4, 0.1);
    expect(length(vector3)).toBeCloseTo(1.4, 0.1);
  });
});
