import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const MyTextInput = () => {
  const [text, onChangeText] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Your answer.'
        keyboardType='ascii-capable'
        onFocus={() => console.log('Hello!')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default MyTextInput;