import { describe, it, expect } from "bun:test";
import { randomInt } from "../../src/math/randomInt";

describe("math/randomInt", () => {
  it("returns the same number if mix and max are the same", () => {
    const a = randomInt(1, 1);
    const b = randomInt(1, 1);

    expect(a).not.toBeUndefined();
    expect(a).not.toBe(Infinity);
    expect(a).not.toBeNaN();
    expect(a).toBe(b);
  });

  it("returns a random number inside range", () => {
    const a = randomInt(0, 999);
    const b = randomInt(0, 999);

    expect(a).toBeLessThan(999.01);
    expect(a).toBeGreaterThan(-0.01);
    expect(b).toBeLessThan(999.01);
    expect(b).toBeGreaterThan(-0.01);
    expect(a).not.toBe(b);
  });
});
