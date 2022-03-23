import * as React from 'react';
import {Button, View} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import HomeScreen from './screens/home';

import {
  Level1Navigation,
  Level2Navigation,
  Level3Navigation,
  Level4Navigation,
} from './levelNavigators';
import ROUTES from './routes';

const About = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button onPress={() => navigation.goBack()} title='Go back home' />
  </View>
);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // values generated from: https://www.sessions.edu/color-calculator/
    primary: '#2a78ff',
    secondary: '#8e04ff',
    tertiary: '#ff8a04',
  },
  dark: false,
  fontSize: 18,
  height: 44,
  padding: 10,
  seperator: {
    height: 1,
    width: '86%',
    marginLeft: '5%',
  },
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name={ROUTES.HOME} component={HomeScreen} />
          <Drawer.Screen name={ROUTES.LEVEL_1} component={Level1Navigation} />
          <Drawer.Screen name={ROUTES.LEVEL_2} component={Level2Navigation} />
          <Drawer.Screen name={ROUTES.LEVEL_3} component={Level3Navigation} />
          <Drawer.Screen name={ROUTES.LEVEL_4} component={Level4Navigation} />
          <Drawer.Screen name={ROUTES.ABOUT} component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
