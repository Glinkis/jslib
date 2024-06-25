import { describe, it, expect } from "bun:test";
import { lerp } from "../../src/math/lerp";

describe("math/lerp", () => {
  it("lerps", () => {
    expect(lerp(0, 1, 0)).toBe(0);
    expect(lerp(0, 1, 0.25)).toBe(0.25);
    expect(lerp(0, 1, 0.5)).toBe(0.5);
    expect(lerp(0, 1, 0.75)).toBe(0.75);
    expect(lerp(0, 1, 1)).toBe(1);

    expect(lerp(10, 50, 0)).toBe(10);
    expect(lerp(10, 50, 0.25)).toBe(20);
    expect(lerp(10, 50, 0.5)).toBe(30);
    expect(lerp(10, 50, 0.75)).toBe(40);
    expect(lerp(10, 50, 1)).toBe(50);
  });
});
