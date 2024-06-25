import { describe, it, expect } from "bun:test";
import { hexToRgba } from "../../src/color/hexToRgba";

describe("color/hexToRgba", () => {
  it("converts the colors correctly", () => {
    expect(hexToRgba("#000000")).toStrictEqual({ r: 0, g: 0, b: 0 });
    expect(hexToRgba("#909090")).toStrictEqual({ r: 144, g: 144, b: 144 });
    expect(hexToRgba("#FFFFFF")).toStrictEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgba("#0000FF")).toStrictEqual({ r: 0, g: 0, b: 255 });
    expect(hexToRgba("00FF00")).toStrictEqual({ r: 0, g: 255, b: 0 });
    expect(hexToRgba("FF0000")).toStrictEqual({ r: 255, g: 0, b: 0 });
    expect(hexToRgba("#00000000")).toStrictEqual({ r: 0, g: 0, b: 0, a: 0 });
    expect(hexToRgba("#90909090")).toStrictEqual({
      r: 144,
      g: 144,
      b: 144,
      a: 144,
    });
    expect(hexToRgba("#000000FF")).toStrictEqual({ r: 0, g: 0, b: 0, a: 255 });
    expect(hexToRgba("#0000FF00")).toStrictEqual({ r: 0, g: 0, b: 255, a: 0 });
    expect(hexToRgba("00FF0000")).toStrictEqual({ r: 0, g: 255, b: 0, a: 0 });
    expect(hexToRgba("FF000000")).toStrictEqual({ r: 255, g: 0, b: 0, a: 0 });
  });
});
