import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <View style={ styles.postStyle} >
                <TouchableOpacity onPress={() => console.log('Post Pressed!')}>
                    <Text style={ styles.titleText }>Test Post!</Text>
                    <Text style={ styles.bodyText }>Assigned to: David</Text>
                    <Icon name="call" size={30} color="black" />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    postStyle: {
        backgroundColor: 'white',
        //flex: 1,
        padding: 4,
        margin: 4,
        borderRadius: 8
    },

    titleText: {
        fontSize: 22,
        textAlign: 'center',
    },

    bodyText: {
        fontSize: 15,
        textAlign: 'center'
    }
})
