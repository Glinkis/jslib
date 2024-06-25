import { describe, it, expect } from "bun:test";
import { hslToRgb } from "../../src/color/hslToRgb";

describe("color/hslToRgb", () => {
  it("converts the colors correctly", () => {
    expect(hslToRgb(0, 0, 0)).toStrictEqual({ r: 0, g: 0, b: 0 });
    expect(hslToRgb(1, 0, 0)).toStrictEqual({ r: 0, g: 0, b: 0 });
    expect(hslToRgb(0, 1, 0)).toStrictEqual({ r: 0, g: 0, b: 0 });
    expect(hslToRgb(0, 0, 1)).toStrictEqual({ r: 255, g: 255, b: 255 });
    expect(hslToRgb(1, 1, 0)).toStrictEqual({ r: 0, g: 0, b: 0 });
    expect(hslToRgb(1, 1, 1)).toStrictEqual({ r: 255, g: 255, b: 255 });
    expect(hslToRgb(0, 1, 1)).toStrictEqual({ r: 255, g: 255, b: 255 });
    expect(hslToRgb(0, 1, 0.5)).toStrictEqual({ r: 255, g: 0, b: 0 });
    expect(hslToRgb(1, 1, 0.5)).toStrictEqual({ r: 255, g: 0, b: 0 });
  });
});
