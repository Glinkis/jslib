import { randomInt } from "./randomInt";

const defaultDictionary =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Returns a random string of the specified length.
 *
 * @memberof math
 *
 * @param {number?} length - Length.
 * @param {string?} dictionary - A string containing all the symbols to choose from.
 * @returns {string}
 */
export function randomString(length = 8, dictionary = defaultDictionary) {
  let result = "";

  while (length--) {
    result += dictionary[randomInt(0, dictionary.length - 1)];
  }

  return result;
}
