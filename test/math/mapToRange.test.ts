import { describe, it, expect } from "bun:test";
import { mapToRange } from "../../src/math/mapToRange";

describe("math/mapToRange", () => {
  it("calculates the correct values", () => {
    expect(mapToRange(1, 0, 0, 0, 0)).toBe(0);
    expect(mapToRange(1, 0, 1, 0, 0)).toBe(0);
    expect(mapToRange(1, 0, 0, 0, 1)).toBe(0);
    expect(mapToRange(1, 0, 1, 0, 1)).toBe(1);
    expect(mapToRange(1, 0, 1, 0, 10)).toBe(10);
    expect(mapToRange(10, 0, 1, 0, 10)).toBe(100);
    expect(mapToRange(10, 0, 10, 0, 1)).toBe(1);
  });
});
