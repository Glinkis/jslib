/** @module array */

/**
 * Converts a NodeList to an Array.
 *
 * @param nodeList - A NodeList.
 *
 * @example
 * ```js
 *
 * // => [div, div, …]
 * toArray(document.querySelectorAll('div'));
 * ```
 */
export function nodeListToArray(nodeList: NodeList): Node[] {
  return Array.prototype.slice.call(nodeList);
}
