import { describe, it, expect } from "bun:test";
import { nodeListToArray } from "../../src/array/nodeListToArray";

describe("array/nodeListToArray", () => {
  it("returns an array", () => {
    const nodeList = document.querySelectorAll("*");
    expect(nodeListToArray(nodeList)).toBeInstanceOf(Array);
  });
});
