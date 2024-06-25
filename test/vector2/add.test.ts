import { describe, it, expect } from "bun:test";
import { add } from "../../src/vector2/add";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 1, y: 1 };
const vector3 = { x: -1, y: -1 };
const vector4 = { x: 2, y: 2 };

describe("vector2/add", () => {
  it("calculates correctly", () => {
    expect(add(vector1, vector1)).toStrictEqual(vector1);
    expect(add(vector2, vector1)).toStrictEqual(vector2);
    expect(add(vector2, vector2)).toStrictEqual(vector4);
    expect(add(vector2, vector3)).toStrictEqual(vector1);
  });
});
