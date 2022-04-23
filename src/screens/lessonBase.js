import React, {Suspense} from 'react';
import {Text, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';

import leve1Router from '../utils/levelRouters/level1';
import level2Router from '../utils/levelRouters/level2';
import level3Router from '../utils/levelRouters/level3';
import level4Router from '../utils/levelRouters/level4';
import ProgressBar from '../components/progressBar';

const Lesson = ({route}) => {
  const {levelNumber, lessonNumber} = route.params;

  const loadingScreen = () => <Text>Loading...</Text>;
  const getComponentForLesson = (levelNumber, lessonNumber) => {
    switch (levelNumber) {
      case 1:
        return leve1Router(lessonNumber);
      case 2:
        return level2Router(lessonNumber);
      case 3:
        return level3Router(lessonNumber);
      case 4:
        return level4Router(lessonNumber);
      default:
        console.error('Level Not Supported', levelNumber);
        return null;
    }
  };

  return (
    <Suspense fallback={loadingScreen()}>
      <SafeAreaView>
        <ProgressBar />
        {getComponentForLesson(levelNumber, lessonNumber)}
      </SafeAreaView>
    </Suspense>
  );
};

Lesson.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.exact({
      levelNumber: PropTypes.number.isRequired,
      lessonNumber: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Lesson;
