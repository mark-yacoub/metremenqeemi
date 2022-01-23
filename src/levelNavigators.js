import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LessonsListScreen from './screens/LessonsList';
import LessonScreen from './screens/lessonBase';

const Stack = createStackNavigator();

const Level1Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LessonsListScreen'
        component={LessonsListScreen}
        initialParams={{levelNumber: 1}}
        options={{title: 'Overview'}}
      />
      <Stack.Screen
        name='LessonScreen'
        component={LessonScreen}
        options={({route}) => ({title: `Lesson ${route.params.lessonNumber}`, headerShown: true})}
      />
    </Stack.Navigator>
  );
};

const Level2Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LessonsListScreen'
        component={LessonsListScreen}
        initialParams={{levelNumber: 2}}
      />
    </Stack.Navigator>
  );
};

const Level3Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LessonsListScreen'
        component={LessonsListScreen}
        initialParams={{levelNumber: 3}}
      />
    </Stack.Navigator>
  );
};

const Level4Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LessonsListScreen'
        component={LessonsListScreen}
        initialParams={{levelNumber: 4}}
      />
    </Stack.Navigator>
  );
};
export {Level1Navigation, Level2Navigation, Level3Navigation, Level4Navigation};
