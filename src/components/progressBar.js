import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

import ProgressBarAnimated from 'react-native-progress-bar-animated';

export const getHeaderHeight = () => {
  return useHeaderHeight();
};

const ProgressBar = () => {
  const [progress, setProgress] = useState(77);
  const barWidth = Dimensions.get('screen').width;

  return (
    <ProgressBarAnimated width={barWidth} value={progress} backgroundColorOnComplete='#6CC644' />
  );
};

export default ProgressBar;
