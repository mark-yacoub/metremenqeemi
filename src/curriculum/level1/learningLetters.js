import LETTER_NAME from '../../consts/letterName';
import LETTER_PRONUNCIATION from '../../consts/letterPronunciation';

const getLetterExplanation = letter => ({
  name: LETTER_NAME[letter],
  pronunciation: LETTER_PRONUNCIATION[letter],
});

const lesson1 = {
  letters: {
    Ⲁ: getLetterExplanation('Ⲁ'),
    Ⲓ: getLetterExplanation('Ⲓ'),
    Ⲏ: getLetterExplanation('Ⲏ'),
    ⲞⲨ: getLetterExplanation('ⲞⲨ'),
    Ⲛ: getLetterExplanation('Ⲛ'),
    Ⲣ: getLetterExplanation('Ⲣ'),
  },
  practiceWords: [
    {word: 'Ⲛⲟⲩⲣ', pronunciation: 'noor'},
    {word: 'Ⲟⲩⲛ', pronunciation: 'oon'},
    {word: 'Ⲛⲏⲓ', pronunciation: ['neey', 'neei']},
    {word: 'Ⲣⲁⲛ', pronunciation: 'ran'},
    {word: 'Ⲛⲁⲓ', pronunciation: ['nay', 'nai']},
    {word: 'Ⲣⲁ', pronunciation: 'ra'},
  ],
  practicePhrases: [
    {phrase: 'Ⲛⲁⲓ Ⲛⲁⲛ', pronunciation: 'nay nan', translation: 'Have mercy on us'},
    {phrase: 'Ⲛⲁⲓ Ⲛⲏⲓ', pronunciation: ['nay neey', 'nay neei'], translation: 'Have mercy on me'},
  ],
};

const lesson2 = {
  letters: {
    Ⲉ: getLetterExplanation('Ⲉ'),
    Ⲩ: getLetterExplanation('Ⲩ'),
    Ⲟ: getLetterExplanation('Ⲟ'),
    Ⲱ: getLetterExplanation('Ⲱ'),
    Ⲕ: getLetterExplanation('Ⲕ'),
    Ⲙ: getLetterExplanation('Ⲙ'),
  },
  practiceWords: [
    {word: 'Ⲛⲉⲙ', pronunciation: 'nem'},
    {word: 'Ⲛⲓⲙ', pronunciation: 'nim'},
    {word: 'Ⲕⲉ', pronunciation: 'ke'},
    {word: 'Ⲙⲟⲓ', pronunciation: 'moy'},
    {word: 'Ⲛⲁⲕ', pronunciation: 'nak'},
    {word: 'Ⲕⲁⲛ', pronunciation: 'kan'},
    {word: 'Ⲙⲉⲛ', pronunciation: 'men'},
    {word: 'Ⲛⲉⲙⲁⲛ', pronunciation: 'neman'},
  ],
  vocab: [
    {word: 'Ⲛⲉⲙ', translation: 'And'},
    {word: 'Ⲣⲁⲛ', translation: 'Name'},
    {word: 'Ⲁⲛⲟⲛ', translation: 'We'},
    {word: 'Ⲁⲛⲟⲕ', translation: 'I'},
  ],
  practicePhrases: [
    {
      phrase: 'Ⲁⲣⲓ ⲟⲩⲛⲁⲓ ⲛⲉⲙⲁⲛ',
      pronunciation: 'ari ounay neman',
      translation: 'Have mercy upon us',
    },
    {phrase: 'Ⲙⲟⲓ ⲛⲁⲛ', pronunciation: 'moy nan', translation: 'Give us'},
  ],
};

const lesson3 = {
  letters: {
    Ⲍ: getLetterExplanation('Ⲍ'),
    Ⲗ: getLetterExplanation('Ⲗ'),
    Ⲝ: getLetterExplanation('Ⲝ'),
    Ⲥ: getLetterExplanation('Ⲥ'),
    Ⲧ: getLetterExplanation('Ⲧ'),
    Ⲡ: getLetterExplanation('Ⲡ'),
    '⳿': getLetterExplanation('⳿'),
  },
  exampleWords: [
    {word: 'Ⲥⲱⲙⲁ', pronunciation: 'soma'},
    {word: 'Ⲗⲁⲥ', pronunciation: 'las'},
    {word: 'Ⲗⲟⲙ', pronunciation: 'lom'},
    {word: 'Ⲥ̀ⲙⲏ', pronunciation: 'esmee'},
    {word: 'Ⲥⲁⲣⲝ', pronunciation: 'sarx'},
    {word: 'Ⲡⲉⲧⲣⲁ', pronunciation: 'petra'},
    {word: 'Ⲡⲓⲣⲏ', pronunciation: 'piree'},
    {word: 'Ⲧⲟⲧⲥ', pronunciation: 'tots'},
  ],
  vocab: [
    {word: 'Ⲡⲓⲱⲓⲕ', translation: 'The Bread'},
    {word: 'Ⲓⲱⲧ', translation: 'Father'},
    {word: 'Ⲡⲉⲛⲓⲱⲧ', translation: 'Our Father'},
    {word: 'Ⲡ̀ⲟⲩⲣⲟ', translation: 'The King'},
    {word: 'Ⲕⲉⲗⲓ', translation: 'Knee'},
    {word: 'Ⲥⲱⲙⲁ', translation: 'Body'},
    {word: 'Ⲡⲉⲧⲣⲁ', translation: 'Rock'},
  ],
  practiceWords: [
    {word: 'Ⲕⲁⲥ', pronunciation: 'kas'},
    {word: 'Ⲕⲉⲗⲓ', pronunciation: 'keli'},
    {word: 'Ⲣⲟⲙⲡⲓ', pronunciation: 'rompi'},
    {word: 'Ⲡ̀ⲟⲩⲣⲟ', pronunciation: 'epooro'},
    {word: 'Ⲓⲱⲧ', pronunciation: 'yot'},
    {word: 'Ⲡⲉⲕⲓⲱⲧ', pronunciation: 'pekyot'},
    {word: 'Ⲁⲕⲓ̀', pronunciation: 'ak-i'},
    {word: 'Ⲡⲓⲱⲓⲕ', pronunciation: 'pioyk'},
  ],
};

const lessonPlan = {
  1: lesson1,
  2: lesson2,
  3: lesson3,
};

export default lessonPlan;
