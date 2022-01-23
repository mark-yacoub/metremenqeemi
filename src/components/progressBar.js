import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Button, Text} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

import ProgressBarAnimated from 'react-native-progress-bar-animated';

export const getHeaderHeight = () => {
  return useHeaderHeight();
};

const ProgressBar = () => {
  const [progress, setProgress] = useState(77);

  const barWidth = Dimensions.get('screen').width;
  return (
    <View>
      <ProgressBarAnimated width={barWidth} value={progress} backgroundColorOnComplete='#6CC644' />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },
});

export default ProgressBar;
