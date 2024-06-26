import { describe, it, expect } from "bun:test";
import { pointIntersection } from "../../src/vector2/pointIntersection";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 2, y: 0 };
const vector3 = { x: -1, y: 0 };
const vector4 = { x: 1, y: 0 };
const vector5 = { x: -2, y: 0 };
const vector6 = { x: -1, y: -1 };
const vector7 = { x: 1, y: 1 };

describe("vector2/pointIntersection", () => {
  it("calculates collisions correctly", () => {
    expect(pointIntersection(vector1, 1, vector1, 1)).toBeTrue();
    expect(pointIntersection(vector1, 1, vector2, 1)).toBeTrue();
    expect(pointIntersection(vector3, 1, vector4, 1)).toBeTrue();
    expect(pointIntersection(vector5, 1, vector4, 1)).toBeFalse();
    expect(pointIntersection(vector6, 1, vector7, 1)).toBeFalse();
    expect(pointIntersection(vector6, 1, vector7, 2)).toBeTrue();
  });
});
