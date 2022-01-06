import React from 'react';

const Level1Intro = React.lazy(() => import('../../screens/level1/intro'));

const getComponentForLessonLevel1 = lessonNumber => {
  switch (lessonNumber) {
    case 0:
      console.log('Level1Intro');
      return <Level1Intro></Level1Intro>;
    default:
      return null;
  }
};

export default getComponentForLessonLevel1;
