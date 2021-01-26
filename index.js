/**
 * @format
 */

import { AppRegistry, StatusBar } from 'react-native';
import App from 'src/containers/app';
import { name as appName } from './app.json';
import { Colors } from 'src/configs/styles';

console.log('aaaaaa');

if (__DEV__) {
    XMLHttpRequest = GLOBAL.originalXMLHttpRequest
        ? GLOBAL.originalXMLHttpRequest
        : GLOBAL.XMLHttpRequest;
    console.disableYellowBox = true; // eslint-disable-line no-console
}

StatusBar.setBackgroundColor(Colors.secondary);
AppRegistry.registerComponent(appName, () => App);
