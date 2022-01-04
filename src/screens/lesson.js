import * as React from 'react';

import getComponentForLesson from '../utils/componentsForLesson';

const Lesson = () => {
  return <>{getComponentForLesson(1, 0)}</>;
};

export default Lesson;
