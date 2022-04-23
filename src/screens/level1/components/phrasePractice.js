import React from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';

const PhrasePractice = ({phrase, translation}) => (
  <>
    <View style={styles.viewContainer}>
      <Text style={styles.practicePhraseText}>{phrase}</Text>
      <Text style={styles.practicePhraseText}>{translation}</Text>
    </View>
    <TextInput placeholder='type pronunciation here'></TextInput>
  </>
);

const styles = {
  viewContainer: {
    flexDirection: 'row',
  },
  practicePhraseText: {
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
};

PhrasePractice.propTypes = {
  phrase: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
};

export default PhrasePractice;
