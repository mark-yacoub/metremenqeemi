import * as React from 'react';
import {Text, ScrollView, View, TextInput} from 'react-native';

import {getUpperAndLowerCaseAlphabet} from '../../utils/unicode';

const Level1Intro = () => {
  const letters = getUpperAndLowerCaseAlphabet().map(letterCases => (
    <View key={letterCases.upper} style={{flexDirection: 'row'}}>
      <Text>{letterCases.upper}</Text>
      <Text>{letterCases.lower}</Text>
      <TextInput placeholder='type letter here'></TextInput>
    </View>
  ));

  return (
    <ScrollView>
      <Text>The coptic letters are 32. 25 Greek and 7 Demotic</Text>
      <Text>Practice typing the letters next to each one</Text>
      {letters}
      <Text>{'< Previous'}</Text>
      <Text>{'Next >'}</Text>
    </ScrollView>
  );
};

export default Level1Intro;
