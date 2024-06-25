import { describe, it, expect } from "bun:test";
import { degreeToRadian } from "../../src/math/degreeToRadian";

describe("math/degreeToRadian", () => {
  it("calculates the correct values", () => {
    expect(degreeToRadian(0)).toBe(0);
    expect(degreeToRadian(180)).toBe(Math.PI);
    expect(degreeToRadian(360)).toBe(Math.PI * 2);
  });
});
