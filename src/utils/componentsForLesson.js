import * as React from 'react';

import Alphabet from '../components/alphabet';

const getComponentForLessonLevel1 = lessonNumber => {
  switch (lessonNumber) {
    case 0:
      return <Alphabet />;
    default:
      return null;
  }
};

const getComponentForLessonLevel2 = lessonNumber => {};
const getComponentForLessonLevel3 = lessonNumber => {};
const getComponentForLessonLevel4 = lessonNumber => {};

const getComponentForLesson = (levelNumber, lessonNumber) => {
  switch (levelNumber) {
    case 1:
      return getComponentForLessonLevel1(lessonNumber);
    case 2:
      return getComponentForLessonLevel2(lessonNumber);
    case 3:
      return getComponentForLessonLevel3(lessonNumber);
    case 4:
      return getComponentForLessonLevel4(lessonNumber);
    default:
      console.error('Level Not Supported');
  }
};

export default getComponentForLesson;
