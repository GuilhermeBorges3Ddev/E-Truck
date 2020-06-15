import React, { Component } from 'react'
import { View, FlatList, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Card, Text, Input, Block, Button } from 'galio-framework';;

import BottomNavigator from '../../components/Tabbar';

export default class TrophyScreen extends Component {
    constructor(props){
        super(props)
    }
    state = {
        data: [
        { 
            id: "00", 
            title: "Vale Almoço",
            price: 50,
            imgProduct: "https://areademulher.r7.com/wp-content/uploads/2019/05/10-dicas-de-receitas-caseiras-e-especiais-para-o-seu-almoco-de-domingo.jpg",
            imgWho: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Grupo_CCR.svg/1200px-Grupo_CCR.svg.png",
            whoOffer: "CCR",
            where: "Restaurante Pão na Chapa",
            detail1: "",
            detail2: "", 
        },
        { 
            id: "01", 
            title: "Hospedagem Pernoite",
            price: 200,
            imgProduct: "https://res.cloudinary.com/hostelling-internation/image/upload/t_hostel_carousel/f_auto,q_auto/v1565973406/kwunkr44mtjdrqrzz3s7.jpg",
            imgWho: "data:image/png;base64,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",
            whoOffer: "Hotel Mineiro",
            where: "Hotel Mineiro",
            detail1: "",
            detail2: "", 
        },
        { 
            id: "02", 
            title: "Vale Banho",
            price: 50,
            imgProduct: "https://blog.newlentes.com.br/wp-content/uploads/2019/07/posso-tomar-banho-de-lentes-thum-001-blog-newlentes.jpg",
            imgWho: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Grupo_CCR.svg/1200px-Grupo_CCR.svg.png",
            whoOffer: "CCR",
            where: "Posto CCR",
            detail1: "",
            detail2: "", 
        },
        { 
            id: "03", 
            title: "Abastecimento 20l",
            price: 1000,
            imgProduct: "https://www.frotacia.com.br/wp-content/uploads/2019/06/mca_edit_27051807939.jpg",
            imgWho: "https://i.pinimg.com/originals/cb/7c/a6/cb7ca6dff5831e9360414a9cea354843.png",
            whoOffer: "Posto Ipiranga",
            where: "Posto Ipiranga na BR",
            detail1: "",
            detail2: "", 
        }
        ]
      };

    render() {
        return (
            <>
                <Text h3 style={styles.textTitle}>Prêmios</Text>
                <Text h5 style={styles.textSubTitle}>Meus pontos: 1500</Text>
                <Input 
                    style={styles.searchInput}
                    icon="search1"
                    family="antdesign"
                    left
                    placeholder="Pequisar" 
                    rounded 
                />
                <SafeAreaView>
                    <FlatList
                    style={styles.container}
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                        <Card 
                            flex
                            borderless
                            title={item.title}
                            caption={item.price+" Pontos"}
                            location={item.where}
                            image={item.imgProduct}
                            style={styles.item}
                            avatar={item.imgWho}
                        >
                            <Button 
                                style={styles.btn}
                                color="info"
                            >Trocar</Button>
                        </Card>
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
        marginTop: 10,
        marginBottom: 250,
    },
    btn: {
        alignSelf: 'center',
        borderRadius: 20,
        marginBottom: 10,
    },
    item: {
        // alignItems: "center",
        // backgroundColor: "#dcda48",
        margin: 4,
    },
    textTitle: {
        alignSelf: 'center',
        marginTop: 20,
    },
    textSubTitle: {
        marginLeft: 10,
    },  
    searchInput: {
        marginLeft: 10,
        width: 340,
    },
    imgLeft: {
        top: 0,
        left: 0,
        width: 100,
        height: 100
    }
});
