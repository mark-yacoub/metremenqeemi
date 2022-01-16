import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Screen} from 'react-native-screens';
import Level1Intro from '../src/screens/level1/intro';

import LeessonsList from './screens/LessonsList';
import Lesson from './screens/lessonBase';

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
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Drawer Menu'
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen name='Lesson 0' component={Level1Intro} options={{headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Level One' component={LeessonsList} />
      <Drawer.Screen name='Level Two' component={Level1Intro} />
      <Drawer.Screen name='Level Three' component={LevelThree} />
      <Drawer.Screen name='Level Four' component={LevelFour} />
      <Drawer.Screen name='About' component={About} />
    </Drawer.Navigator>
  );
}
