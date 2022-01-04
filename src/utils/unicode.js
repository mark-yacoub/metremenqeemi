import * as Unicode from '../consts/copticUnicode';

const incrementToUnicodeChar = (startUnicode, offset) =>
  String.fromCharCode(startUnicode.charCodeAt(0) + offset);

// TODO: convert to a const, this wouldn't change over time. here and down.
export const getUpperAndLowerCaseAlphabet = () => {
  const letters = [];
  for (let i = 0; i < Unicode.GREEK_LETTERS_COUNT * 2; ++i)
    letters.push(incrementToUnicodeChar(Unicode.GREEK_LETTERS_START_UNICODE, i));

  for (let i = 0; i < Unicode.DEMOTIC_LETTERS_COUNT * 2; ++i)
    letters.push(incrementToUnicodeChar(Unicode.DEMOTIC_LETTERS_START_UNICODE, i));

  return letters;
};

export const getUpperCaseAlphabet = () => {
  const letters = [];
  let i = 0;
  while (i < Unicode.GREEK_LETTERS_COUNT * 2) {
    letters.push(incrementToUnicodeChar(Unicode.GREEK_LETTERS_START_UNICODE, i));
    // Skip the lower case of the same letter.
    i += 2;
  }

  i = 0;
  while (i < Unicode.DEMOTIC_LETTERS_COUNT * 2) {
    letters.push(incrementToUnicodeChar(Unicode.DEMOTIC_LETTERS_START_UNICODE, i));
    // Skip the lower case of the same letter.
    i += 2;
  }

  return letters;
};

export const getLowerCaseAlphabet = () => {
  const letters = [];
  let i = 1;
  while (i < Unicode.GREEK_LETTERS_COUNT * 2) {
    letters.push(incrementToUnicodeChar(Unicode.GREEK_LETTERS_START_UNICODE, i));
    // Skip the upper case of the same letter.
    i += 2;
  }

  i = 1;
  while (i < Unicode.DEMOTIC_LETTERS_COUNT * 2) {
    letters.push(incrementToUnicodeChar(Unicode.DEMOTIC_LETTERS_START_UNICODE, i));
    // Skip the upper case of the same letter.
    i += 2;
  }

  return letters;
};
