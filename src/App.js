import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Lesson from './screens/lesson';

const HomeScreen = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button onPress={() => navigation.navigate('Level One')} title='Go to Level One' />
  </View>
);

const LevelTwo = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button onPress={() => navigation.navigate('Level Three')} title='Go to Level Three' />
  </View>
);

const LevelThree = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button onPress={() => navigation.navigate('Level Four')} title='Go to Level Four' />
  </View>
);

const LevelFour = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button onPress={() => navigation.goBack()} title='Go back home' />
  </View>
);

const About = ({navigation}) => (
  <View style={{flex: 1, alignItems: ' center', justifyContent: ' center'}}>
    <Button onPress={() => navigation.goBack()} title='Go back home' />
  </View>
);

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Level One' component={Lesson} />
        <Drawer.Screen name='Level Two' component={LevelTwo} />
        <Drawer.Screen name='Level Three' component={LevelThree} />
        <Drawer.Screen name='Level Four' component={LevelFour} />
        <Drawer.Screen name='About' component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
