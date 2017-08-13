import React, { Component } from 'react';
import { View } from 'react-native';

import Board from './components/board'

export default class App extends Component {
    render() {
        return (
            <View>
                <Board />
            </View>
        );
    }
}
