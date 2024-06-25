import { describe, it, expect } from "bun:test";
import { closestNumber } from "../../src/array/closestNumber";

const array = [0, 10, 15, 20, 30];

describe("array/closestNumber", () => {
  it("gets the correct numbers", () => {
    expect(closestNumber(array, 2)).toEqual(0);
    expect(closestNumber(array, 8)).toEqual(10);
    expect(closestNumber(array, 14)).toEqual(15);
    expect(closestNumber(array, 16)).toEqual(15);
    expect(closestNumber(array, 18)).toEqual(20);
    expect(closestNumber(array, 26)).toEqual(30);
  });
});
