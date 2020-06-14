import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomNavigator from '../../components/Tabbar';


export default class HomeScreen extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
                <Text>HomeScreen</Text>
                <BottomNavigator navigation={this.props.navigation}/>
            </>
        )
    }
}
