/* Coptic unicode is split to 2 parts:
 * 1. The Greek letters have their own unicode range.
 * 2. The demotic letters follow the actual Greek unicode.
 * Coptic unicode have the upper case followed by the lower case, so A a B b.
 */

// https://en.wikipedia.org/wiki/Coptic_(Unicode_block)
export const GREEK_LETTERS_START_UNICODE = '\u2C80';
export const GREEK_LETTERS_COUNT = 25;

// https://en.wikipedia.org/wiki/Greek_and_Coptic
export const DEMOTIC_LETTERS_START_UNICODE = '\u03E2';
export const DEMOTIC_LETTERS_COUNT = 7;
