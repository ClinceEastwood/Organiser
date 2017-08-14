import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

import Post from './Post';

const winHeight = Dimensions.get('window').height;
const winWidth = Dimensions.get('window').width;

let bgColors = [ '#cc0099', '#00cc99', '#ff9933', '#3366ff']
let titles = [ 'Todoooooooooo', 'Selected', 'In Progress', 'Done' ]

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <View style={styles.container}>

                <ScrollView horizontal={true} style={[{backgroundColor: bgColors[0]}, styles.boardRow, ]}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </ScrollView>

                <ScrollView horizontal={true} style={[{backgroundColor: bgColors[1]}, styles.boardRow]}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </ScrollView>

                <ScrollView horizontal={true} style={[{backgroundColor: bgColors[2]}, styles.boardRow]}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </ScrollView>

                <ScrollView horizontal={true} style={[{backgroundColor: bgColors[3]}, styles.boardRow]}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: winHeight * 0.82,
        width: winWidth,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch'

    },

    boardRow: {
        flex: 1/4,
        margin: 4,
    },

    titleTextStyle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },

    post: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        margin: 2,
        padding: 4
    }
})
