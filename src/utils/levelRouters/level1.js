import React from 'react';

const Level1Intro = React.lazy(() => import('../../screens/level1/intro'));
const Level1LearningLetters = React.lazy(() => import('../../screens/level1/learningLetters'));

const getComponentForLessonLevel1 = lessonNumber => {
  switch (lessonNumber) {
    case 0:
      return <Level1Intro></Level1Intro>;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return <Level1LearningLetters lessonNumber={lessonNumber} />;
    default:
      return null;
  }
};

export default getComponentForLessonLevel1;
