import { describe, it, expect } from "bun:test";
import { bezierDerivative, bezierValue } from "../../src/splines/bezier";

describe("splines/bezierValue", () => {
  it("works as linear (2 points)", () => {
    const points = [0, 1];
    expect(bezierValue(points, 0)).toBe(0);
    expect(bezierValue(points, 0.25)).toBe(0.25);
    expect(bezierValue(points, 0.5)).toBe(0.5);
    expect(bezierValue(points, 0.75)).toBe(0.75);
    expect(bezierValue(points, 1)).toBe(1);
  });

  it("works as quadratic (3 points)", () => {
    const points = [0, 1, 2];
    expect(bezierValue(points, 0)).toBe(0);
    expect(bezierValue(points, 0.25)).toBe(0.5);
    expect(bezierValue(points, 0.5)).toBe(1);
    expect(bezierValue(points, 0.75)).toBe(1.5);
    expect(bezierValue(points, 1)).toBe(2);
  });

  it("works as cubic (4 points)", () => {
    const points = [0, 1, 2, 3];
    expect(bezierValue(points, 0)).toBe(0);
    expect(bezierValue(points, 0.25)).toBe(0.75);
    expect(bezierValue(points, 0.5)).toBe(1.5);
    expect(bezierValue(points, 0.75)).toBe(2.25);
    expect(bezierValue(points, 1)).toBe(3);
  });

  it("works as quartic (5 points)", () => {
    const points = [0, 1, 2, 3, 4];
    expect(bezierValue(points, 0)).toBe(0);
    expect(bezierValue(points, 0.25)).toBe(1);
    expect(bezierValue(points, 0.5)).toBe(2);
    expect(bezierValue(points, 0.75)).toBe(3);
    expect(bezierValue(points, 1)).toBe(4);
  });

  it("calculates the correct bezierDerivative as linear (2 points)", () => {
    const points = [0, 1];
    expect(bezierDerivative(points, 0)).toStrictEqual([0, 1]);
    expect(bezierDerivative(points, 0.25)).toStrictEqual([0, 1]);
    expect(bezierDerivative(points, 0.5)).toStrictEqual([0, 1]);
    expect(bezierDerivative(points, 0.75)).toStrictEqual([0, 1]);
    expect(bezierDerivative(points, 1)).toStrictEqual([0, 1]);
  });

  it("calculates the correct bezierDerivative as quadratic (3 points)", () => {
    const points = [0, 1, 2];
    expect(bezierDerivative(points, 0)).toStrictEqual([0, 1]);
    expect(bezierDerivative(points, 0.25)).toStrictEqual([0.25, 1.25]);
    expect(bezierDerivative(points, 0.5)).toStrictEqual([0.5, 1.5]);
    expect(bezierDerivative(points, 0.75)).toStrictEqual([0.75, 1.75]);
    expect(bezierDerivative(points, 1)).toStrictEqual([1, 2]);
  });

  it("calculates the correct bezierDerivative as cubic (4 points)", () => {
    const points = [0, 1, 2, 3];
    expect(bezierDerivative(points, 0)).toStrictEqual([0, 1]);
    expect(bezierDerivative(points, 0.25)).toStrictEqual([0.5, 1.5]);
    expect(bezierDerivative(points, 0.5)).toStrictEqual([1, 2]);
    expect(bezierDerivative(points, 0.75)).toStrictEqual([1.5, 2.5]);
    expect(bezierDerivative(points, 1)).toStrictEqual([2, 3]);
  });

  it("calculates the correct bezierDerivative as quartic (5 points)", () => {
    const points = [0, 1, 2, 3, 4];
    expect(bezierDerivative(points, 0)).toStrictEqual([0, 1]);
    expect(bezierDerivative(points, 0.25)).toStrictEqual([0.75, 1.75]);
    expect(bezierDerivative(points, 0.5)).toStrictEqual([1.5, 2.5]);
    expect(bezierDerivative(points, 0.75)).toStrictEqual([2.25, 3.25]);
    expect(bezierDerivative(points, 1)).toStrictEqual([3, 4]);
  });
});
