import React from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {withTheme} from 'react-native-paper';
import PropTypes from 'prop-types';

import PhrasePractice from './components/phrasePractice';

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
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeaderText}>LETTERS</Text>
        {lettersViews}
      </View>
    );
  };

  const renderPracticeWords = practiceWords => {
    const practiceWordsViews = [];
    for (const practiceWord of practiceWords) {
      practiceWordsViews.push(
        <View key={practiceWord.word} style={styles.practiceWordContainer}>
          <Text style={styles.practiceWordText}>{practiceWord.word}</Text>
          <TextInput placeholder='type word here'></TextInput>
          <TextInput placeholder='type pronunciation here'></TextInput>
        </View>,
      );
    }

    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeaderText}>PRACTICE READING</Text>
        {practiceWordsViews}
      </View>
    );
  };

  const renderVocab = vocabWords => {
    const vocabWordsViews = [];
    for (const vocabWord of vocabWords) {
      vocabWordsViews.push(
        <View key={vocabWord.word} style={{flexDirection: 'row'}}>
          <Text style={styles.vocabText}>{vocabWord.word}</Text>
          <Text style={styles.vocabText}>{vocabWord.translation}</Text>
        </View>,
      );
    }

    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeaderText}>WORDS TO LEARN</Text>
        {vocabWordsViews}
      </View>
    );
  };

  const renderPracticePhrases = practicePhrases => {
    const practicePhrasesViews = [];
    for (const practicePhrase of practicePhrases) {
      practicePhrasesViews.push(
        <PhrasePractice
          key={practicePhrase.phrase}
          phrase={practicePhrase.phrase}
          translation={practicePhrase.translation}
        />,
      );
    }

    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeaderText}>PRACTICE PHRASES</Text>
        {practicePhrasesViews}
      </View>
    );
  };

  return (
    <ScrollView style={styles.screenScrollView}>
      {renderLetters(lessonPlan.letters)}
      {renderPracticeWords(lessonPlan.exampleWords)}
      {lessonPlan.vocab && renderVocab(lessonPlan.vocab)}
      {renderPracticeWords(lessonPlan.practiceWords)}
      {lessonPlan.practicePhrases && renderPracticePhrases(lessonPlan.practicePhrases)}
    </ScrollView>
  );
};

const styles = {
  screenScrollView: {
    margin: 15,
  },
  sectionContainer: {
    marginBottom: 20,
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
  practiceWordContainer: {
    marginBottom: 20,
  },
  practiceWordText: {
    fontSize: 20,
  },
  vocabText: {
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

Level1LearningLetters.propTypes = {
  lessonNumber: PropTypes.number.isRequired,
};

export default withTheme(Level1LearningLetters);
