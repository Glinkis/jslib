import { describe, it, expect } from "bun:test";
import { negate } from "../../src/vector2/negate";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 1, y: -1 };
const vector3 = { x: -1, y: 1 };

describe("vector2/negate", () => {
  it("calculates correctly", () => {
    expect(negate(vector1)).toStrictEqual(vector1);
    expect(negate(vector2)).toStrictEqual(vector3);
    expect(negate(vector3)).toStrictEqual(vector2);
  });
});
