import React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {withTheme} from 'react-native-paper';
import PropTypes from 'prop-types';

import LEVEL_1_LESSONS_LIST from '../curriculum/level1/lessonsList';
import ProgressBar from '../components/progressBar';

const lessonsList = {
  1: LEVEL_1_LESSONS_LIST,
};

const LessonsList = ({route, navigation, theme}) => {
  const {levelNumber} = route.params;

  const renderLessonName = (lessonName, lessonNumber) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('LessonScreen', {levelNumber, lessonNumber})}
      >
        <Text
          style={{
            color: theme.colors.primary,
            fontSize: theme.fontSize,
            height: theme.height,
            padding: theme.padding,
          }}
        >
          {lessonName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ProgressBar />
      <FlatList
        data={lessonsList[levelNumber]}
        renderItem={({item, index}) => renderLessonName(item, index)}
      />
    </View>
  );
};

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

export default withTheme(LessonsList);
