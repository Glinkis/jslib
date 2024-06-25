import { describe, it, expect } from "bun:test";
import { clamp } from "../../src/math/clamp";

describe("math/clamp", () => {
  it("calculates the correct values", () => {
    expect(clamp(0, 0, 0)).toBe(0);
    expect(clamp(0, 1, 2)).toBe(1);
    expect(clamp(1, 1, 2)).toBe(1);
    expect(clamp(2, 1, 2)).toBe(2);
    expect(clamp(3, 1, 2)).toBe(2);
  });
});
