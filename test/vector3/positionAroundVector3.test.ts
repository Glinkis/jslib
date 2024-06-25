import { describe, it, expect } from "bun:test";
import { positionAroundVector3 } from "../../src/vector3/positionAroundVector3";

const vector1 = { x: 0, y: 0, z: 0 };
const vector2 = { x: 1, y: 1, z: 1 };
const vector3 = { x: 1, y: 0, z: 0 };
const vector4 = { x: 2, y: 1, z: 1 };
const vector5 = { x: -1, y: 0, z: 0 };
const vector6 = { x: 0, y: 1, z: 0 };

describe("vector3/positionAroundVector3", () => {
  it("produces the correct vector", () => {
    expect(positionAroundVector3(vector1, 1, 0, 0)).toStrictEqual(vector3);
    expect(positionAroundVector3(vector2, 1, 0, 0)).toStrictEqual(vector4);
    expect(positionAroundVector3(vector1, 1, Math.PI, 0)).toStrictEqual(
      vector5,
    );
    expect(
      positionAroundVector3(vector1, 1, Math.PI / 2, Math.PI),
    ).toStrictEqual(vector6);
  });
});
