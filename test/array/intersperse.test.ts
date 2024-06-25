import { describe, it, expect } from "bun:test";
import { intersperse } from "../../src/array/intersperse";

const array = ["item-1", "item-2", "item-3"];

describe("array/intersperse", () => {
  it("returns an array", () => {
    expect(intersperse(array, ".")).toBeInstanceOf(Array);
  });

  it("works with null", () => {
    expect(intersperse(array, null)).toContain(null);
  });

  it("works with a string", () => {
    expect(intersperse(array, ".")).toContain(".");
    expect(intersperse(array, "#")).toContain("#");
  });

  it("works with a number", () => {
    expect(intersperse(array, 0)).toContain(0);
    expect(intersperse(array, 1)).toContain(1);
  });

  it("works with an object", () => {
    const obj = { key1: "value1", key2: "value2" };
    expect(intersperse(array, obj)).toContain(obj);
  });

  it("works with an empty array", () => {
    expect(intersperse([], ".")).toHaveLength(0);
  });
});
