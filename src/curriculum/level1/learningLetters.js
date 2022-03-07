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

const lesson5 = {
  letters: {
    Ϩ: getLetterExplanation('Ϩ'),
    Ϭ: getLetterExplanation('Ϭ'),
    Ϯ: getLetterExplanation('Ϧ'),
  },
  exampleWords: [
    {word: 'Ϩⲱⲥ', pronunciation: 'hos'},
    {word: 'Ⲕⲁϩⲓ', pronunciation: 'kahi'},
    {word: 'Ⲛⲟⲩϯ', pronunciation: 'nouti'},
    {word: 'Ⲁⲣⲓϩ̀ⲙⲟⲧ', pronunciation: 'ariehmot'},
    {word: 'Ϩⲓⲣⲏⲛⲏ', pronunciation: 'hireenee'},
    {word: 'Ϭⲣⲟⲙⲡⲓ', pronunciation: 'chrompi'},
    {word: 'Ϭⲟⲓⲥ', pronunciation: 'chois'},
    {word: 'Ϣⲉⲡϩ̀ⲙⲟⲧ', pronunciation: 'shepehmot'},
  ],
  vocab: [
    {word: 'Ⲫ̀ⲛⲟⲩϯ', translation: 'God'},
    {word: 'Ϭⲣⲟⲙⲡⲓ', translation: 'Dove'},
    {word: 'Ⲡ̀ϭⲟⲓⲥ', translation: 'The Lord'},
    {word: 'Ⲡⲉⲛϭⲟⲓⲥ', translation: 'Our Lord'},
    {word: 'Ϩⲱⲥ', translation: 'Praise'},
    {word: 'Ⲕⲁϩⲓ', translation: 'Earth'},
    {word: 'Ϯϩⲓⲣⲏⲛⲏ', translation: 'The Peace'},
  ],
  practiceWords: [
    {word: 'Ϭⲓ', pronunciation: 'chi'},
    {word: 'Ϩⲟϥ', pronunciation: 'hof'},
    {word: 'Ⲧⲉⲕϩⲓⲣⲏⲛⲏ', pronunciation: 'tekhireenee'},
    {word: 'Ⲫ̀ⲛⲟⲩϯ', pronunciation: 'ephnooti'},
    {word: 'Ϧⲁⲧⲉⲛ', pronunciation: 'khaten'},
    {word: 'Ⲣⲁⲥϯ', pronunciation: 'rasti'},
  ],
  practicePhrases: [
    {
      phrase: 'Ⲁⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ',
      pronunciation: 'ariehmot nan',
      translation: 'Grant us',
    },
    {
      phrase: 'Ⲁⲕⲓ̀ ⲟⲩⲟϩ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ',
      pronunciation: 'ak-i oooh aksoti emmon',
      translation: 'You came and saved us',
    },
    {
      phrase: 'Ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ̀ⲙⲙⲟⲛ',
      pronunciation: 'af-i oooh afsoti emmon',
      translation: 'He came and saved us',
    },
  ],
};

const lesson7 = {
  letters: {
    Ⲃ: getLetterExplanation('Ⲃ'),
    Ⲇ: getLetterExplanation('Ⲇ'),
    Ⲑ: getLetterExplanation('Ⲑ'),
  },
  exampleWords: [
    {word: 'Ⲃⲁⲗ', pronunciation: 'val'},
    {word: 'Ⲁⲇⲁⲙ', pronunciation: 'adam'},
    {word: 'Ⲛⲓⲃⲉⲛ', pronunciation: 'niven'},
    {word: 'Ⲡⲣⲉⲥⲃⲓⲁ', pronunciation: 'presvya'},
    {word: 'Ⲑⲁⲓ', pronunciation: 'thai'},
    {word: 'Ⲥⲑⲟⲓ', pronunciation: 'stoy'},
    {word: 'Ⲉⲡⲓⲇⲓ', pronunciation: 'epidhi'},
    {word: 'Ϣⲑⲁⲙ', pronunciation: 'shtam'},
  ],
  vocab: [
    {word: 'Ⲑⲁⲓ', translation: 'This (feminine)'},
    {word: 'Ⲥⲑⲟⲓⲛⲟⲩϥⲓ', translation: 'Incense'},
    {word: 'Ⲇⲟⲝⲁ', translation: 'Glory'},
    {word: 'Ⲉⲑⲟⲩⲁⲃ', translation: 'Holy'},
    {word: 'Ϯⲑⲉⲟⲧⲟⲕⲟⲥ', translation: 'The Theotokos'},
    {word: 'Ϯⲡⲁⲣⲑⲉⲛⲟⲥ', translation: 'The virgin'},
  ],
  practiceWords: [
    {word: 'Ⲃⲁⲕⲓ', pronunciation: 'vaki'},
    {word: 'Ⲇⲱⲣⲟⲛ', pronunciation: 'dhoron'},
    {word: 'Ⲑⲁⲙⲓⲟ', pronunciation: 'thamyo'},
    {word: 'Ⲉⲑⲟⲩⲁⲃ', pronunciation: 'ethooab'},
    {word: 'Ⲇⲟⲝⲁ', pronunciation: 'dhoxa'},
    {word: 'Ⲥⲑⲟⲓⲛⲟⲩϥⲓ', pronunciation: 'stoynoofi'},
    {word: 'Ⲃⲉⲛⲓ', pronunciation: 'veni'},
    {word: 'Ⲛⲟⲩⲃ', pronunciation: 'noob'},
  ],
  practicePhrases: [
    {
      phrase: 'Ϯϣⲟⲩⲣⲏ ⲛ̀ⲛⲟⲩⲃ ⲧⲉ ϯⲡⲁⲣⲑⲉⲛⲟⲥ',
      pronunciation: 'tishooree ennoob te tiparthenos',
      translation: 'The golden censer is the virgin',
    },
    {
      phrase: 'Ⲫⲁⲓ ⲡⲉ ⲡⲓⲉϩⲟⲟⲩ ⲉⲧⲁ ⲡ̀ϭⲟⲓⲥ ⲑⲁⲙⲓⲟϥ',
      pronunciation: 'phay pe pieho-oo eta epchois thamyof',
      translation: 'This is the day that the Lord has made',
    },
  ],
};

const lesson8 = {
  letters: {
    ⲥ: getLetterExplanation('ⲥ'),
    ⲧ: getLetterExplanation('ⲧ'),
    Ϫ: getLetterExplanation('Ϫ'),
  },
  exampleWords: [
    {word: 'Ϩⲓϫⲉⲛ', pronunciation: 'hijen'},
    {word: 'Ⲡⲗⲁⲥⲙⲁ', pronunciation: 'plazma'},
    {word: 'Ⲉⲛⲧⲟⲗⲏ', pronunciation: 'endolee'},
    {word: 'Ⲥⲙⲟⲩ', pronunciation: 'smoo'},
    {word: 'Ϫⲱⲣ', pronunciation: 'goor'},
    {word: 'Ⲉⲛⲧⲏⲙⲁ', pronunciation: 'endeema'},
    {word: 'Ⲕⲟⲥⲙⲟⲥ', pronunciation: 'kozmos'},
    {word: 'Ⲥⲙⲏ', pronunciation: 'smee'},
  ],
  vocab: [
    {word: 'Ⲥ̀ⲙⲟⲩ', translation: 'Bless'},
    {word: 'Ⲕⲟⲥⲙⲟⲥ', translation: 'World'},
    {word: 'Ⲕ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ', translation: 'Blessed Are You'},
    {word: 'Ϫⲟⲙ', translation: 'Power'},
    {word: 'Ϫⲱⲙ', translation: 'Book'},
  ],
  practiceWords: [
    {word: 'Ⲕⲟⲩϫⲓ', pronunciation: 'kouji'},
    {word: 'Ϫⲁϫⲓ', pronunciation: 'gaji'},
    {word: 'Ⲡⲓⲣⲁⲥⲙⲟⲥ', pronunciation: 'pirazmos'},
    {word: 'Ⲕ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ', pronunciation: 'ekesmaroo-oot'},
    {word: 'Ⲧⲣⲁⲡⲉⲍⲁ', pronunciation: 'trapeza'},
    {word: 'Ϫⲱⲙ', pronunciation: 'goom'},
    {word: 'Ⲥⲁϫⲓ', pronunciation: 'saji'},
    {word: 'Ϫⲟⲙ', pronunciation: 'gom'},
  ],
  practicePhrases: [
    {
      phrase: 'Ϫⲱⲣ ⲉⲃⲟⲗ ⲛ̀ⲛⲓϫⲁϫⲓ ⲛ̀ⲧⲉ ϯⲉⲕⲕⲗⲏⲥⲓⲁ',
      pronunciation: 'goor evol ennigagi ente tiekkleesya',
      translation: 'Disperse the enemies of the Church',
    },
    {
      phrase: 'Ⲛ̀ⲧⲉϥⲥ̀ⲙⲟⲩ ⲉⲣⲟⲛ ⲧⲏⲣⲉⲛ ⲛ̀ⲧⲉϥⲧⲟⲩⲃⲟ ⲛ̀ⲛⲉⲛϩⲏⲧ',
      pronunciation: 'entefesmoo eron teeren enteftoovo ennenheet',
      translation: 'That He may bless us all and purify our hearts',
    },
  ],
};

const lesson9 = {
  letters: {
    Ⲅ: getLetterExplanation('Ⲅ'),
    ⲩ: getLetterExplanation('ⲩ'),
    Ⲭ: getLetterExplanation('Ⲭ'),
  },
  exampleWords: [
    {word: 'Ⲁⲅⲁⲡⲏ', pronunciation: 'aghapee'},
    {word: 'Ⲯⲩⲭⲏ', pronunciation: 'psyshee'},
    {word: 'Ⲭⲏⲙⲓ', pronunciation: 'qeemi'},
    {word: 'Ⲕⲩⲣⲓⲟⲥ', pronunciation: 'kyryos'},
    {word: 'Ⲭⲉⲣⲟⲩⲃⲓⲙ', pronunciation: 'sheroobim'},
  ],
  vocab: [
    {word: 'Ⲁⲅⲁⲡⲏ', translation: 'Love'},
    {word: 'Ⲯⲩⲭⲏ', translation: 'Soul'},
    {word: 'Ⲁⲅⲅⲉⲗⲟⲥ', translation: 'Angel'},
    {word: 'Ⲭⲏⲙⲓ', translation: 'Egypt'},
    {word: 'Ⲉⲩⲁⲅⲅⲉⲗⲟⲥ', translation: 'Gospel'},
    {word: 'ⲠⲓⲬⲣⲓⲥⲧⲟⲥ', translation: 'The Christ'},
    {word: 'Ⲭⲉⲣⲉ', translation: 'Hail'},
    {word: 'Ⲕⲩⲣⲓⲉ Ⲉⲗⲉⲏⲥⲟⲛ', translation: 'Lord Have Mercy'},
    {word: 'Ⲕⲩⲣⲓⲟⲥ', translation: 'Lord'},
  ],
  practiceWords: [
    {word: 'Ⲅⲛⲟⲫⲟⲥ', pronunciation: 'ghnophos'},
    {word: 'Ⲭⲣⲱⲙ', pronunciation: 'qroom'},
    {word: 'Ⲭⲉⲣⲉ', pronunciation: 'shere'},
    {word: 'Ⲡⲣⲟⲥⲉⲩⲭⲏ', pronunciation: 'prosevshee'},
    {word: 'Ⲅⲣⲁⲫⲏ', pronunciation: 'ghraphee'},
    {word: 'Ⲅⲉⲛⲟⲥ', pronunciation: 'genos'},
    {word: 'Ⲭⲱⲣⲁ', pronunciation: 'qoora'},
    {word: 'Ⲭⲣⲓⲥⲧⲟⲥ', pronunciation: 'khristos'},
  ],
  practicePhrases: [
    {
      phrase: 'Ϯⲃⲁⲕⲓ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ',
      pronunciation: 'tivaki ente ephnooti Alleelooya',
      translation: 'The City of God Alleluia',
    },
    {
      phrase: 'Ⲥⲓⲱⲛ ϯⲙⲁⲩ ⲛⲁϫⲟⲥ',
      pronunciation: 'syoon timav nagos',
      translation: 'Zion the mother will say',
    },
  ],
};

const lessonPlan = {
  1: lesson1,
  2: lesson2,
  3: lesson3,
  4: lesson4,
  5: lesson5,
  7: lesson7,
  8: lesson8,
  9: lesson9,
};

export default lessonPlan;
