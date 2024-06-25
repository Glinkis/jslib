import { describe, it, expect } from "bun:test";
import { relativeDistance } from "../../src/event/relativeDistance";

const event0 = { pageX: 0, pageY: 0 };
const event1 = { pageX: 1, pageY: 1 };
const event2 = { pageX: 10, pageY: 100 };
const event3 = { pageX: -1, pageY: -1 };

describe("events/relativeDistance", () => {
  it("works with positive values", () => {
    expect(relativeDistance(event0, event0)).toStrictEqual({ x: 0, y: 0 });
    expect(relativeDistance(event0, event1)).toStrictEqual({ x: 1, y: 1 });
    expect(relativeDistance(event0, event2)).toStrictEqual({ x: 10, y: 100 });
  });
  it("works with negative values", () => {
    expect(relativeDistance(event0, event3)).toStrictEqual({ x: -1, y: -1 });
    expect(relativeDistance(event3, event3)).toStrictEqual({ x: 0, y: 0 });
  });
});
