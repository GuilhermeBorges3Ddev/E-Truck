import React, { Component } from 'react'
import { Text, View } from 'react-native'

import BottomNavigator from '../../components/Tabbar';

export default class TrophyScreen extends Component {
    render() {
        return (
            <>
                <Text> Wellcome </Text>
                <BottomNavigator navigation={this.props.navigation}/>
            </>
        )
    }
}
