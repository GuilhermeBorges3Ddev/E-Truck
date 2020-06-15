import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Input, Button } from 'galio-framework';

export default class RegisterScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

<Image source={require("../../../assets/logo.png")} style={styles.image} resizeMode="center"></Image>

                <Input 
                    style={styles.searchInput}
                    left
                    placeholder="Nome" 
                    rounded 
                />
                <Input 
                    style={styles.searchInput}
                    left
                    placeholder="CPF" 
                    rounded 
                />      
                <Input 
                    style={styles.searchInput}
                    left
                    placeholder="Telefone" 
                    rounded 
                />     
                <Button
                    color="info"
                    style={styles.btn}
                >
                    Criar Nova Conta
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
    },
    searchInput: {
        marginLeft: 10,
        marginTop: 10,
        width: 340,
    },
    btn: {
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    image: {
        alignSelf: 'center',
        height: 200,
        width: 200
    },
})
