import React from 'react';
import {View, Text, TextInput} from 'react-native';

import PropTypes from 'prop-types';

import Level1Curriculum from '../../curriculum/level1/learningLetters';

const Level1LearningLetters = ({lessonNumber}) => {
  const lessonPlan = Level1Curriculum[lessonNumber];
  if (!lessonPlan) {
    console.error('No lesson plan for lesson number', lessonNumber);
    return null;
  }

  const renderLetters = letters => {
    const lettersViews = [];
    // Render Header
    lettersViews.push(
      <View key={'header'} style={{flexDirection: 'row'}}>
        <Text>Letter</Text>
        <Text>Letter Name</Text>
        <Text>Letter pronunciation</Text>
        <Text>Practice typing</Text>
      </View>,
    );
    // Render Letters
    for (const [letter, letterExplanation] of Object.entries(letters)) {
      lettersViews.push(
        <View key={letter} style={{flexDirection: 'row'}}>
          <Text>{letter}</Text>
          <Text>{letterExplanation.name}</Text>
          <Text>{letterExplanation.pronunciation}</Text>
          <TextInput placeholder='type letter here'></TextInput>
        </View>,
      );
    }
    return lettersViews;
  };

  const renderPracticeWords = practiceWords => {
    const practiceWordsViews = [];
    // Render Header
    practiceWordsViews.push(
      <View key={'header'} style={{flexDirection: 'row'}}>
        <Text>Word</Text>
        <Text>Practice typing</Text>
        <Text>Practice pronunciation</Text>
      </View>,
    );
    // Render Practice Words
    for (const practiceWord of practiceWords) {
      practiceWordsViews.push(
        <View key={practiceWord.word} style={{flexDirection: 'row'}}>
          <Text>{practiceWord.word}</Text>
          <TextInput placeholder='type word here'></TextInput>
          <TextInput placeholder='type pronunciation here'></TextInput>
        </View>,
      );
    }
    return practiceWordsViews;
  };

  renderVocab = vocabWords => {
    const vocabWordsViews = [];
    // Render Header
    vocabWordsViews.push(
      <View key={'header'} style={{flexDirection: 'row'}}>
        <Text>Word</Text>
        <Text>Word translation</Text>
      </View>,
    );
    // Render Vocab Words
    for (const vocabWord of vocabWords) {
      vocabWordsViews.push(
        <View key={vocabWord.word} style={{flexDirection: 'row'}}>
          <Text>{vocabWord.word}</Text>
          <Text>{vocabWord.translation}</Text>
        </View>,
      );
    }
    return vocabWordsViews;
  };

  const renderPracticePhrases = practicePhrases => {
    const practicePhrasesViews = [];
    // Render Header
    practicePhrasesViews.push(
      <View key={'header'} style={{flexDirection: 'row'}}>
        <Text>Phrase</Text>
        <Text>Translation</Text>
        <Text>Practice pronunciation</Text>
      </View>,
    );
    for (const practicePhrase of practicePhrases) {
      practicePhrasesViews.push(
        <View key={practicePhrase.phrase} style={{flexDirection: 'row'}}>
          <Text>{practicePhrase.phrase}</Text>
          <Text>{practicePhrase.translation}</Text>
          <TextInput placeholder='type pronunciation here'></TextInput>
        </View>,
      );
    }
    return practicePhrasesViews;
  };

  return (
    <>
      {renderLetters(lessonPlan.letters)}
      {renderPracticeWords(lessonPlan.practiceWords)}
      {lessonPlan.vocab && renderVocab(lessonPlan.vocab)}
      {renderPracticePhrases(lessonPlan.practicePhrases)}
    </>
  );
};

Level1LearningLetters.propTypes = {
  lessonNumber: PropTypes.number.isRequired,
};

export default Level1LearningLetters;
