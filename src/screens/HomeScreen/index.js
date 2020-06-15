import React, { Component } from 'react';
import { Image, View, ImageBackground, FlatList, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'galio-framework';

import BottomNavigator from '../../components/Tabbar';

const image = { uri: "https://reactjs.org/logo-og.png" };
const imgMap = { uri: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"};
const imgPrize = { uri: "https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"};
const imgPromotion = { uri: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"};
const imgHealth = { uri: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" };
const imgRank = { uri: "https://images.unsplash.com/photo-1474546652694-a33dd8161d66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1062&q=80" };
const imgSettings = { uri: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"};

export default class HomeScreen extends Component {
    constructor(props){
        super(props)
    }
    state = {
        data: [
            { 
                id: "00", 
                name: "Mapa",
                image:  imgMap,
                nav: "MapScreen"
            },
            { 
                id: "01", 
                name: "Prêmios",
                image:  imgPrize,
                nav: "TrophyScreen"
            },
            { 
                id: "02", 
                name: "Promoções",
                image:  imgPromotion
            },
            { 
                id: "03", 
                name: "Questionários",
                image:  imgHealth
            },            
            { 
                id: "04", 
                name: "Ranking",
                image:  imgRank
            },            
            { 
                id: "05", 
                name: "Configurações",
                image:  imgSettings
            },
            // { 
            //     id: "06", 
            //     name: "Configurações",
            //     image:  imgSettings
            // },                        

        ]
      };

    render() {
        return (
            <>
                <SafeAreaView
                    style={styles.container}
                >
                    <FlatList
                    style={styles.flatList}
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(item.nav)}>
                            <ImageBackground source={item.image} style={styles.image}>
                                <View style={styles.item}>
                                    <Text h4 style={styles.text}>{item.name}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        );
                    }}
                    />
                </SafeAreaView>
                <BottomNavigator navigation={this.props.navigation}/>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,   
    },
    flatList: {
        marginBottom: 80,     
    },
    item: {
        alignItems: "center",      
        flexGrow: 1,
        margin: 4,
        padding: 20,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        margin: 5
      },    
    text: {
        color: "white",
        fontWeight: "700"
    }
});
