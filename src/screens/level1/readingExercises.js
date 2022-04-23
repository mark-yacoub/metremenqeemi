import React from 'react';
import {ScrollView, Text} from 'react-native';
import PropTypes from 'prop-types';

import PhrasePractice from './components/phrasePractice';

import Level1Curriculum from '../../curriculum/level1/readingExercise';

const Level1ReadingExercise = ({lessonNumber}) => {
  const readingPhrases = Level1Curriculum[lessonNumber];
  if (!readingPhrases) {
    console.error('No lesson plan for lesson number', lessonNumber);
    return null;
  }

  const renderPhrases = () => {
    const phrasesViews = [];
    for (const readingPhrase of readingPhrases) {
      phrasesViews.push(
        <PhrasePractice
          key={readingPhrase.phrase}
          phrase={readingPhrase.phrase}
          translation={readingPhrase.translation}
        />,
      );
    }
    return phrasesViews;
  };

  return (
    <ScrollView style={styles.screenScrollView}>
      <Text style={styles.headerText}>READING PRACTICE</Text>
      {renderPhrases()}
    </ScrollView>
  );
};

const styles = {
  screenScrollView: {
    margin: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
};

Level1ReadingExercise.propTypes = {
  lessonNumber: PropTypes.number.isRequired,
};

export default Level1ReadingExercise;
