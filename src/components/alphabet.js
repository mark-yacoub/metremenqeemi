import * as React from 'react';
import {Text, ScrollView} from 'react-native';

import {getUpperCaseAlphabet} from '../utils/unicode';

const Alphabet = () => {
  const letters = getUpperCaseAlphabet().map(letter => <Text key={letter}>{letter}</Text>);

  return <ScrollView>{letters}</ScrollView>;
};

export default Alphabet;
