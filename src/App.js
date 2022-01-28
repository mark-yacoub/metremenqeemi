import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  Level1Navigation,
  Level2Navigation,
  Level3Navigation,
  Level4Navigation,
} from './levelNavigators';

import ProgressBar from './components/progressBar';

const HomeScreen = ({navigation}) => (
  <View style={{flexDirection: 'column', alignItems: 'center'}}>
    <ProgressBar />
    <Button
      onPress={() => navigation.navigate('Level One', {screen: 'Overview'})}
      title='Go to Level One'
    />
  </View>
);

const About = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button onPress={() => navigation.goBack()} title='Go back home' />
  </View>
);

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Level One' component={Level1Navigation} />
        <Drawer.Screen name='Level Two' component={Level2Navigation} />
        <Drawer.Screen name='Level Three' component={Level3Navigation} />
        <Drawer.Screen name='Level Four' component={Level4Navigation} />
        <Drawer.Screen name='About' component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
