import { describe, it, expect } from "bun:test";
import { subtract } from "../../src/vector2/subtract";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 1, y: 1 };
const vector3 = { x: -1, y: -1 };
const vector4 = { x: 2, y: 2 };

describe("vector2/subtract", () => {
  it("calculates correctly", () => {
    expect(subtract(vector1, vector1)).toStrictEqual(vector1);
    expect(subtract(vector2, vector1)).toStrictEqual(vector2);
    expect(subtract(vector2, vector2)).toStrictEqual(vector1);
    expect(subtract(vector2, vector3)).toStrictEqual(vector4);
  });
});
