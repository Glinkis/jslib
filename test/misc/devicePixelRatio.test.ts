import { describe, it, expect } from "bun:test";
import { devicePixelRatio } from "../../src/misc/devicePixelRatio";

describe("devicePixelRatio", () => {
  it("returns a number", () => {
    expect(devicePixelRatio()).toBeTypeOf("number");
  });
});
