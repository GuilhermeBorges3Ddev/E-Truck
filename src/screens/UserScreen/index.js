import React, {Component} from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import BottomNavigator from '../../components/Tabbar';

export default class UserScreen extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false}>
        
                        <View style={{ alignSelf: "center", marginTop: 60 }}>
                            <View style={styles.profileImage}>
                                <Image source={require("../../../assets/profile-pic.jpg")} style={styles.image} resizeMode="center"></Image>
                            </View>
                            {/* <View style={styles.dm}>
                                <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
                            </View>
                            <View style={styles.active}></View>
                            <View style={styles.add}>
                                <Ionicons name="ios-add" size={48} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                            </View> */}
                        </View>
        
                        <View style={styles.infoContainer}>
                            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Nivaldo</Text>
                        </View>
        
                        <View style={styles.statsContainer}>
                            <View style={styles.statsBox}>
                                <Text style={[styles.text, { fontSize: 24 }]}>1500</Text>
                                <Text style={[styles.text, styles.subText]}>Pontos</Text>
                            </View>
                            <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                                <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                                <Text style={[styles.text, styles.subText]}>Kms</Text>
                            </View>
                        </View>
                        <Text style={[styles.subText, styles.recent]}>Atividades Recentes</Text>
                        <View style={{ alignItems: "center" }}>
                            <View style={styles.recentItem}>
                                <View style={styles.activityIndicator}></View>
                                <View style={{ width: 250 }}>
                                    <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                        30 mins atrás: Carregou o caminhão e deu partida
                                    </Text>
                                </View>
                            </View>
        
                            <View style={styles.recentItem}>
                                <View style={styles.activityIndicator}></View>
                                <View style={{ width: 250 }}>
                                    <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                        6 horas atrás: Fez Check-in no Posto CCR
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <BottomNavigator navigation={this.props.navigation}/>
            </>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
        borderRadius: 1000,
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "green",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
});