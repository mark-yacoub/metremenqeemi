import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import LEVEL_1_LESSONS_LIST from '../curriculum/level1/lessonsList';
import ProgressBar from '../components/progressBar';

const lessonsList = {
  1: LEVEL_1_LESSONS_LIST,
};

const LessonsList = ({route, navigation}) => {
  const {levelNumber} = route.params;

  const renderLessonName = (lessonName, lessonNumber) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('LessonScreen', {levelNumber, lessonNumber})}
      >
        <Text style={styles.lessonName}>{lessonName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ProgressBar />
      <FlatList
        data={lessonsList[levelNumber]}
        renderItem={({item, index}) => renderLessonName(item, index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lessonName: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

LessonsList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.exact({
      levelNumber: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default LessonsList;
