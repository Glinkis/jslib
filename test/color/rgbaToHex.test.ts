import { describe, it, expect } from "bun:test";
import { rgbaToHex } from "../../src/color/rgbaToHex";

describe("color/rgbaToHex", () => {
  it("converts the colors correctly", () => {
    expect(rgbaToHex(0, 0, 0)).toBe("#000000");
    expect(rgbaToHex(0, 0, 255)).toBe("#0000ff");
    expect(rgbaToHex(0, 255, 0)).toBe("#00ff00");
    expect(rgbaToHex(255, 0, 0)).toBe("#ff0000");
    expect(rgbaToHex(255, 255, 255)).toBe("#ffffff");
    expect(rgbaToHex(0, 0, 0, 0)).toBe("#00000000");
    expect(rgbaToHex(255, 255, 255, 255)).toBe("#ffffffff");
    expect(rgbaToHex(255, 0, 255, 255)).toBe("#ff00ffff");
  });
});
