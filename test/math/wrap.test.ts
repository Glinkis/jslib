import { describe, it, expect } from "bun:test";
import { wrap } from "../../src/math/wrap";

describe("math/wrap", () => {
  it("calculates the correct values", () => {
    expect(wrap(0, 0, 0)).toBe(0);
    expect(wrap(0, 0, 10)).toBe(0);
    expect(wrap(5, 0, 10)).toBe(5);
    expect(wrap(10, 0, 10)).toBe(0);
    expect(wrap(15, 0, 10)).toBe(5);
    expect(wrap(5, 10, 0)).toBe(5); // <-- inverted test
  });
});
