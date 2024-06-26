/** @module misc */

/**
 * Returns the pixel ratio of the current device, as a value from 0 to 1.
 */
export function devicePixelRatio(): number {
  const ratio = 1;

  // Something like node may not have the global window object.
  if (typeof window === "undefined") {
    return ratio;
  }

  if (typeof window.devicePixelRatio === "undefined") {
    return window.devicePixelRatio;
  }

  return ratio;
}
