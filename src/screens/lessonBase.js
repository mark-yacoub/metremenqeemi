import React, {Suspense} from 'react';
import {Text} from 'react-native';

import leve1Router from '../utils/levelRouters/level1';
import level2Router from '../utils/levelRouters/level2';
import level3Router from '../utils/levelRouters/level3';
import level4Router from '../utils/levelRouters/level4';

const Lesson = props => {
  const loadingScreen = () => <Text>Loading...</Text>;
  console.log(props);
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

  return <Suspense fallback={loadingScreen()}>{getComponentForLesson(1, 5)}</Suspense>;
};

export default Lesson;
