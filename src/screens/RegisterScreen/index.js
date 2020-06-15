import React, { Component } from 'react';
import { Text, Viewm, StyleSheet } from 'react-native';
import { Input } from 'galio-framework';

export default class RegisterScreen extends Component {
    render() {
        return (
            <View>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchInput: {
        marginLeft: 10,
        marginTop: 10,
        width: 340,
    },
})
