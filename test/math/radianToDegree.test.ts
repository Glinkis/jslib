import { describe, it, expect } from "bun:test";
import { radianToDegree } from "../../src/math/radianToDegree";

describe("math/radianToDegree", () => {
  it("calculates the correct values", () => {
    expect(radianToDegree(0)).toBe(0);
    expect(radianToDegree(Math.PI)).toBe(180);
    expect(radianToDegree(Math.PI * 2)).toBe(360);
  });
});
