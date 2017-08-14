import React from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { registerScreens } from './screens';

var homeIcon;
var settingsIcon;
var starIcon;
var thumbTackIcon;



registerScreens();

export default class App {

    constructor() {
        this.startApp();

        //Promise for loading icons and then starting app, not working at the moment.
        //this.populateIcons().then( () => {

        //}).catch( (error) => {
            //console.log(error);
        //});
    }

    populateIcons = function () {
        return new Promise(function (resolve, reject) {
            Promise.all (
                [
                    Icon.getImageSource('home', 30),
                    Icon.getImageSource('gear', 30),
                    Icon.getImageSource('star', 30),
                    Icon.getImageSource('thumb-tack', 30)

                ]
            ).then( (values) => {
                homeIcon = values[0];
                settingsIcon = values[1];
                starIcon = values[2];
                thumbTackIcon = values[3];
                console.log('Icons loaded');
                resolve(true);
            }).catch( (error) => {
                console.log(error);
                reject(error);
            }).done();
        });
    };

    startApp() {
        console.log('Starting App!')
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Home',
                    screen: 'Organiser.homeScreen',
                    icon: require('../assets/Home.png'),
                    title: 'Home'
                },
                {
                    label: 'settings',
                    screen: 'Organiser.settingsScreen',
                    icon: require('../assets/Settings.png'),
                    title: 'Settings',
                }
            ],
            animationType: 'fade',
            tabStyle: {},
            appStyle: {},

        });
    }
}
