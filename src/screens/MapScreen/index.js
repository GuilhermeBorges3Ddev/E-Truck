import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Map from '../../components/Map';

import BottomNavigator from '../../components/Tabbar';

export default class MapScreen extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
                <Map />
                <BottomNavigator navigation={this.props.navigation}/>
            </>
        )
    }
}
