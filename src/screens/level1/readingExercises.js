import React from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';

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
        <View key={readingPhrase.phrase} style={{flexDirection: 'row'}}>
          <Text>{readingPhrase.phrase}</Text>
          <Text>{readingPhrase.translation}</Text>
          <TextInput placeholder='type pronunciation here'></TextInput>
        </View>,
      );
    }
    return phrasesViews;
  };

  return (
    <>
      <View key={'header'} style={{flexDirection: 'row'}}>
        <Text>Phrase</Text>
        <Text>Meaning</Text>
        <Text>Practice pronunciation</Text>
      </View>
      {renderPhrases()}
    </>
  );
};

Level1ReadingExercise.propTypes = {
  lessonNumber: PropTypes.number.isRequired,
};

export default Level1ReadingExercise;
