import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LeessonsList from './screens/LessonsList';
import Lesson from './screens/lessonBase';

const Stack = createStackNavigator();

const Level1Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Overview' component={LeessonsList} />
      <Stack.Screen name='Lesson 0' component={Lesson} options={{headerShown: true}} />
    </Stack.Navigator>
  );
};

const Level2Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Overview' component={LeessonsList} />
    </Stack.Navigator>
  );
};

const Level3Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Overview' component={LeessonsList} />
    </Stack.Navigator>
  );
};

const Level4Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Overview' component={LeessonsList} />
    </Stack.Navigator>
  );
};
export {Level1Navigation, Level2Navigation, Level3Navigation, Level4Navigation};
