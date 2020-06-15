import React, { Component } from 'react';
// Navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Firebase Auth
import * as firebase from 'firebase';
import { firebaseConfig } from './utils/firebaseConfig';
firebase.initializeApp(firebaseConfig);

// Core Components

// Screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import UserScreen from './screens/UserScreen';
import RegisterScreen from './screens/RegisterScreen';
import TrophyScreen from './screens/TrophyScreen';
import ChatBot from './components/Chatbot';

const Stack = createStackNavigator();

class AppProvider extends Component{

  render(){
      return(
        <NavigationContainer>
            <Stack.Navigator 
              initialRouteName="Login"
              screenOptions={{
                headerShown: false
              }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="MapScreen" component={MapScreen} />
                <Stack.Screen name="UserScreen" component={UserScreen} />
                <Stack.Screen name="TrophyScreen" component={TrophyScreen} />
                <Stack.Screen name="ChatBot" component={ChatBot} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
  }

};


export default AppProvider;