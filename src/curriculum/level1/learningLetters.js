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

const lessonPlan = {
  1: lesson1,
};

export default lessonPlan;
