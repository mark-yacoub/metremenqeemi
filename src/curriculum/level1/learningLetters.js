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
  exampleWords: [
    {word: 'Ⲛⲟⲩⲣ', pronunciation: 'noor'},
    {word: 'Ⲟⲩⲛ', pronunciation: 'oon'},
    {word: 'Ⲛⲁⲛ', pronunciation: 'nan'},
    {word: 'Ⲛⲏⲓ', pronunciation: ['neey', 'neei']},
    {word: 'Ⲣⲁⲛ', pronunciation: 'ran'},
    {word: 'Ⲛⲁⲓ', pronunciation: ['nay', 'nai']},
  ],
  practiceWords: [
    {word: 'Ⲣⲁ', pronunciation: 'ra'},
    {word: 'Ⲛⲏ', pronunciation: 'nee'},
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
  exampleWords: [
    {word: 'Ⲛⲉⲙ', pronunciation: 'nem'},
    {word: 'Ⲛⲓⲙ', pronunciation: 'nim'},
    {word: 'Ⲕⲉ', pronunciation: 'ke'},
    {word: 'Ⲙⲟⲓ', pronunciation: 'moy'},
  ],
  vocab: [
    {word: 'Ⲛⲉⲙ', translation: 'And'},
    {word: 'Ⲣⲁⲛ', translation: 'Name'},
    {word: 'Ⲁⲛⲟⲛ', translation: 'We'},
    {word: 'Ⲁⲛⲟⲕ', translation: 'I'},
  ],
  practiceWords: [
    {word: 'Ⲛⲁⲕ', pronunciation: 'nak'},
    {word: 'Ⲕⲁⲛ', pronunciation: 'kan'},
    {word: 'Ⲙⲉⲛ', pronunciation: 'men'},
    {word: 'Ⲛⲉⲙⲁⲛ', pronunciation: 'neman'},
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

const lesson4 = {
  letters: {
    Ϣ: getLetterExplanation('Ϣ'),
    Ϥ: getLetterExplanation('Ϥ'),
    Ϧ: getLetterExplanation('Ϧ'),
    Ⲫ: getLetterExplanation('Ⲫ'),
    Ⲯ: getLetterExplanation('Ⲯ'),
  },
  exampleWords: [
    {word: 'Ϣⲟⲩⲣⲏ', pronunciation: 'shouri'},
    {word: 'Ⲧⲁⲝⲓⲥ', pronunciation: 'taxis'},
    {word: 'Ⲛⲟϥⲣⲓ', pronunciation: 'nofri'},
    {word: 'Ⲯⲁⲗⲙⲟⲥ', pronunciation: 'psalmos'},
    {word: 'Ϣⲁⲓ', pronunciation: 'shay'},
    {word: 'Ⲫⲁⲓ', pronunciation: 'phay'},
    {word: 'Ϧⲉⲛ', pronunciation: 'khen'},
    {word: 'Ⲯⲁⲣⲓⲁ', pronunciation: 'psarya'},
  ],
  vocab: [
    {word: 'Ⲥ̀ⲙⲟⲩ', translation: 'Bless'},
    {word: 'Ⲫ̀ⲣⲁⲛ', translation: 'The Name'},
    {word: 'Ⲫ̀ⲓⲱⲧ', translation: 'The Father'},
    {word: 'Ⲡ̀ϣⲏⲣⲓ', translation: 'The Son'},
    {word: 'Ⲥⲱⲧⲏⲣ', translation: 'Savior'},
    {word: 'Ⲡⲉⲛⲥⲱⲧⲏⲣ', translation: 'Our Savior'},
  ],
  practiceWords: [
    {word: 'Ⲫⲓⲛ', pronunciation: 'phin'},
    {word: 'Ⲡⲁⲓϣⲁⲓ', pronunciation: 'payShay'},
    {word: 'Ϣⲏⲣⲓ', pronunciation: 'sheeri'},
    {word: 'Ⲧⲁⲓϣⲟⲩⲣⲏ', pronunciation: 'tayshouree'},
    {word: 'Ⲧⲉⲛⲟⲩⲱϣⲧ', pronunciation: 'tenoo-osht'},
    {word: 'Ⲥ̀ⲛⲟϥ', pronunciation: 'esnof'},
  ],
  practicePhrases: [
    {
      phrase: 'Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ ⲡ̀ϣⲏⲣⲓ',
      pronunciation: 'ephyot nem epsheeri',
      translation: 'The Father and the Son',
    },
    {
      phrase: 'Ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀ⲫ̀ⲓⲱⲧ ⲛⲉⲙ ⲡ̀ϣⲏⲓ',
      pronunciation: 'khen ephran emephyot nem epsheeri',
      translation: 'In the Name of the Father and the Son',
    },
    {
      phrase: 'Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ ⲡ̀ϣⲏⲣⲓ',
      pronunciation: 'tenou-osht emephyot nem epsheeri',
      translation: 'We worship the Father and the Son',
    },
  ],
};

const lessonPlan = {
  1: lesson1,
  2: lesson2,
  3: lesson3,
  4: lesson4,
};

export default lessonPlan;
