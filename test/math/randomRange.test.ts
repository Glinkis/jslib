import { describe, it, expect } from "bun:test";
import { randomRange } from "../../src/math/randomRange";

describe("math/randomRange", () => {
  it("calculates the correct values", () => {
    for (let i = 0; i < 100; i += 1) {
      expect(randomRange(0, 0)).toBe(0);

      expect(randomRange(0, 1)).toBeGreaterThan(0);
      expect(randomRange(0, 1)).toBeLessThan(1);

      expect(randomRange(0, 10)).toBeGreaterThan(0);
      expect(randomRange(0, 10)).toBeLessThan(10);

      expect(randomRange(0, 1000)).toBeGreaterThan(0);
      expect(randomRange(0, 1000)).toBeLessThan(1000);

      expect(randomRange(1, 10)).toBeGreaterThan(1);
      expect(randomRange(1, 10)).toBeLessThan(10);

      expect(randomRange(10, 0)).toBeGreaterThan(0);
      expect(randomRange(10, 0)).toBeLessThan(10);
    }
  });
});
