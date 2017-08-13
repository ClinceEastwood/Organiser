import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

const winHeight = Dimensions.get('window').height;
const winWidth = Dimensions.get('window').width;

let titles = [ 'Todoooooooooo', 'Selected', 'In Progress', 'Done' ]

export default class Board extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <View style={styles.container}>

                <ScrollView horizontal={true} style={styles.boardRow}>
                    <View style={styles.post}>
                        <Text style={styles.titleTextStyle}>{titles[0]}</Text>
                        <Text>jdbchdjsbcdhsc</Text>
                    </View>
                    <View style={styles.post}>
                        <Text style={styles.titleTextStyle}>{titles[0]}</Text>
                    </View>
                    <View style={styles.post}>
                        <Text style={styles.titleTextStyle}>{titles[0]}</Text>
                    </View>
                    <View style={styles.post}>
                        <Text style={styles.titleTextStyle}>{titles[0]}</Text>
                    </View>
                </ScrollView>

                <ScrollView horizontal={true} style={styles.boardRow}>
                    <View>
                        <Text style={styles.titleTextStyle}>{titles[1]}</Text>
                    </View>
                </ScrollView>

                <ScrollView horizontal={true} style={styles.boardRow}>
                    <View>
                        <Text style={styles.titleTextStyle}>{titles[2]}</Text>
                    </View>
                </ScrollView>

                <ScrollView horizontal={true} style={styles.boardRow}>
                    <View>
                        <Text style={styles.titleTextStyle}> {titles[3]}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: winHeight,
        width: winWidth,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch'

    },

    boardRow: {
        flex: 1,
        margin: 4,
        backgroundColor: 'pink'
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
