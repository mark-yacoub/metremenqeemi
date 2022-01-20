import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Button, Text} from 'react-native';

import ProgressBarAnimated from 'react-native-progress-bar-animated';

const ProgressBar = () => {
  const [progress, setProgress] = useState(70);

  const barWidth = Dimensions.get('screen').width - 30;

  return (
    <View style={styles.container}>
      <View>
        <ProgressBarAnimated
          width={barWidth}
          value={progress}
          backgroundColorOnComplete='#6CC644'
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonInner}>
            <Button
              title='+ 7%'
              onPress={() => {
                progress !== 100 ? setProgress(progress + 5) : {};
              }}
            />
            <Button
              title='- 7%'
              onPress={() => {
                progress !== 0 ? setProgress(progress - 5) : {};
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: 250,
  },
  buttonInner: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    marginTop: 0,
    marginButtom: 0,
    marginLeft: 280,
    backgroundColor: '#FFF',
  },
  label: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },
});

export default ProgressBar;
