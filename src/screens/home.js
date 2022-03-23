import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {withTheme} from 'react-native-paper';

import ProgressBar from '../components/progressBar';

import APP_ROUTES from '../routes';

const HomeScreen = ({navigation, theme}) => {
  const levelButton = (levelNumber, levelDescription, routeName, active) => (
    <TouchableOpacity
      disabled={!active}
      onPress={() => {
        active ? navigation.navigate(routeName) : {};
      }}
      style={styles(theme).levelButtonContainer}
    >
      <Text style={styles(theme).levelButtonTitleText}>Level {levelNumber}</Text>
      <Text style={styles(theme).levelButtonDescText}>{levelDescription}</Text>
      {!active && <Text style={styles(theme).levelButtonDescText}>(coming soon)</Text>}
    </TouchableOpacity>
  );
  return (
    <>
      <ProgressBar />
      <View style={styles(theme).viewContainer}>
        <Text style={styles(theme).screenTitleText}>Ⲙⲉⲧⲣⲉⲙⲛ̀Ⲭⲏⲙⲓ</Text>
        <Text style={styles(theme).screenSubtitleText}>
          Learn how to read, write and understand Coptic in simple interactive lessons.
        </Text>
        {levelButton(1, 'Read like a Pharaoh', APP_ROUTES.LEVEL_1, true)}
        {levelButton(2, 'Sound like a Pharaoh', APP_ROUTES.LEVEL_2, false)}
        {levelButton(3, 'Speak like a Pharaoh', APP_ROUTES.LEVEL_3, false)}
        {levelButton(4, 'Converse like a Pharaoh', APP_ROUTES.LEVEL_4, false)}
      </View>
    </>
  );
};

const styles = theme => ({
  viewContainer: {
    alignItems: 'center',
    margin: 20,
  },
  screenTitleText: {
    color: theme.colors.primary,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  screenSubtitleText: {
    alignSelf: 'flex-start',
    fontStyle: 'italic',
    color: theme.colors.secondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  levelButtonTitleText: {
    color: theme.colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  levelButtonDescText: {
    color: theme.colors.secondary,
    fontSize: 15,
    fontStyle: 'italic',
  },
  levelButtonContainer: {
    alignItems: 'center',
    backgroundColor: theme.colors.tertiary,
    borderRadius: 10,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
});

// const dynamicStyles = theme => ({
//   levelButtonContainer: {
//     alignItems: 'center',
//     backgroundColor: theme.colors.accent,
//     borderRadius: 10,
//     padding: 10,
//     width: '80%',
//     marginBottom: 10,
//   },
// });

export default withTheme(HomeScreen);
