/**
 * @format
 */

// Required to be here for the prod build to work:
// https://reactnavigation.org/docs/drawer-navigator#installation
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
