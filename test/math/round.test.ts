import { describe, it, expect } from "bun:test";
import { round } from "../../src/math/round";

describe("math/round", () => {
  it("works with negative numbers", () => {
    expect(round(-2.3)).toBe(-2);
    expect(round(-2.6)).toBe(-3);
  });

  it("rounds 0.5 up", () => {
    expect(round(0)).toBe(0);
    expect(round(0.2)).toBe(0);
    expect(round(0.49)).toBe(0);
    expect(round(0.5)).toBe(1);
    expect(round(0.51)).toBe(1);
    expect(round(-0.49)).toBe(0);
    expect(round(-0.5)).toBe(0);
    expect(round(-0.51)).toBe(-1);
  });

  it("allows custom radix", () => {
    expect(round(1, 3)).toBe(0);
    expect(round(1.49, 3)).toBe(0);
    expect(round(1.5, 3)).toBe(3);
    expect(round(1.51, 3)).toBe(3);
    expect(round(2, 3)).toBe(3);
    expect(round(4, 3)).toBe(3);
    expect(round(5, 3)).toBe(6);
  });

  it("allows fractional radix", () => {
    expect(round(0, 0.5)).toBe(0);
    expect(round(0.22, 0.5)).toBe(0);
    expect(round(0.49, 0.5)).toBe(0.5);
    expect(round(0.5, 0.5)).toBe(0.5);
    expect(round(0.6, 0.5)).toBe(0.5);
    expect(round(0.74, 0.5)).toBe(0.5);
    expect(round(0.75, 0.5)).toBe(1);
    expect(round(0.76, 0.5)).toBe(1);
    expect(round(1.2, 0.5)).toBe(1);
    expect(round(1.3, 0.5)).toBe(1.5);
  });

  it("allows negative value and radix", () => {
    expect(round(-0.5, -0.5)).toBe(-0.5);
    expect(round(-0.6, -0.5)).toBe(-0.5);
    expect(round(-0.74, -0.5)).toBe(-0.5);
    expect(round(-0.75, -0.5)).toBe(-1);
    expect(round(-0.76, -0.5)).toBe(-1);
    expect(round(-1.2, -0.5)).toBe(-1);
    expect(round(-1.3, -0.5)).toBe(-1.5);
  });
});
