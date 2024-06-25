import { describe, it, expect } from "bun:test";
import { inRange } from "../../src/math/inRange";

describe("math/inRange", () => {
  it("returns false if out of range", () => {
    expect(inRange(11, 0, 10, 0)).toBe(false);
    expect(inRange(9, 10, 100, 0)).toBe(false);
  });

  it("returns true of inside range", () => {
    expect(inRange(0, 0, 10, 0)).toBe(true);
    expect(inRange(10, 0, 10, 0)).toBe(true);
  });

  it("returns true when within threshold", () => {
    expect(inRange(8, 0, 10, 2)).toBe(true);
    expect(inRange(12, 0, 10, 2)).toBe(true);
  });
});
