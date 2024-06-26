import { describe, it, expect } from "bun:test";
import { rgbToHsl } from "../../src/color/rgbToHsl";

describe("color/rgbToHsl", () => {
  it("converts the colors correctly", () => {
    expect(rgbToHsl(0, 0, 0)).toStrictEqual({ h: 0, s: 0, l: 0 });
    expect(rgbToHsl(255, 0, 0)).toStrictEqual({ h: 0, s: 1, l: 0.5 });
    expect(rgbToHsl(255, 255, 255)).toStrictEqual({ h: 0, s: 0, l: 1 });
  });
});
