import React from 'react';
import {View, Text, TextInput, SafeAreaView, ScrollView} from 'react-native';
import {withTheme} from 'react-native-paper';
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

    // Render Letters
    for (const [letter, letterExplanation] of Object.entries(letters)) {
      const letterView = (
        <View key={letter}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.letterContainer}>
              <Text style={styles.letterText}>{letter}</Text>
              <Text style={styles.letterNameText}>{letterExplanation.name}</Text>
            </View>
            <Text style={styles.letterPronunciationText}>{letterExplanation.pronunciation}</Text>
          </View>
          <TextInput placeholder='Practice typing the letter here'></TextInput>
        </View>
      );

      lettersViews.push(letterView);
    }
    return (
      <View>
        <Text style={styles.sectionHeaderText}>LETTERS</Text>
        {lettersViews}
      </View>
    );
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

  const renderVocab = vocabWords => {
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
    <SafeAreaView>
      <ScrollView style={styles.screenScrollView}>
        {renderLetters(lessonPlan.letters)}
        {renderPracticeWords(lessonPlan.exampleWords)}
        {lessonPlan.vocab && renderVocab(lessonPlan.vocab)}
        {renderPracticeWords(lessonPlan.practiceWords)}
        {lessonPlan.practicePhrases && renderPracticePhrases(lessonPlan.practicePhrases)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  screenScrollView: {
    margin: 15,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  letterContainer: {
    width: 100,
  },
  letterText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  letterNameText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
  },
  letterPronunciationText: {
    fontSize: 17,
    padding: 10,
  },
};

Level1LearningLetters.propTypes = {
  lessonNumber: PropTypes.number.isRequired,
};

export default withTheme(Level1LearningLetters);
