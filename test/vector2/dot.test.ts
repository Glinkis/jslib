import { describe, it, expect } from "bun:test";
import { dot } from "../../src/vector2/dot";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 1, y: 1 };
const vector3 = { x: -1, y: -1 };

describe("vector2/dot", () => {
  it("calculates correctly", () => {
    expect(dot(vector1, vector1)).toStrictEqual(0);
    expect(dot(vector1, vector2)).toStrictEqual(0);
    expect(dot(vector2, vector3)).toStrictEqual(-2);
    expect(dot(vector3, vector2)).toStrictEqual(-2);
  });
});
