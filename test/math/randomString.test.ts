import { describe, it, expect } from "bun:test";
import { randomString } from "../../src/math/randomString";

describe("math/randomString", () => {
  it("returns a string.", () => {
    expect(randomString(8)).toBeTypeOf("string");
  });

  it("allows for user specified length.", () => {
    expect(randomString(10).length).toBe(10);
  });

  it("uses a provided dictionary.", () => {
    expect(randomString(4, "ab")).toMatch(/[ab]{4}/);
    expect(randomString(4, "Random")).toMatch(/[Random]{4}/);
  });

  it("generates a random string.", () => {
    expect(randomString(4)).not.toBe(randomString(4));
    expect(randomString(16, "ab")).not.toBe(randomString(16, "ab"));
  });
});
