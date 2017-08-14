import { Navigation } from 'react-native-navigation';

import HomeScreen from '../components/homeScreen';
import SettingsScreen from '../components/settingsScreen';

export function registerScreens() {

    Navigation.registerComponent('Organiser.homeScreen', () => HomeScreen);
    Navigation.registerComponent('Organiser.settingsScreen', () => SettingsScreen);

    console.log("Screens have been registered!")
}
