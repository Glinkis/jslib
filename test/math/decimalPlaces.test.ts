import { describe, it, expect } from "bun:test";
import { decimalPlaces } from "../../src/math/decimalPlaces";

describe("number/decimalPlaces", () => {
  it("gets the correct number of decimals", () => {
    expect(decimalPlaces(0)).toBe(0);
    expect(decimalPlaces(0.1)).toBe(1);
    expect(decimalPlaces(0.01)).toBe(2);
    expect(decimalPlaces(0.001)).toBe(3);
  });

  it("works with omitted zero", () => {
    expect(decimalPlaces(0.1)).toBe(1);
    expect(decimalPlaces(0.01)).toBe(2);
  });

  it("works with scientific notation", () => {
    expect(decimalPlaces(25e-100)).toBe(100);
    expect(decimalPlaces(2.5e-99)).toBe(100);
  });

  it("works with a string number", () => {
    expect(decimalPlaces(".001")).toBe(3);
    expect(decimalPlaces("0.001")).toBe(3);
    expect(decimalPlaces("25e-100")).toBe(100);
    expect(decimalPlaces("2.5e-99")).toBe(100);
  });
});
