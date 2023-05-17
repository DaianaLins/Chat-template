import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Edit from '../../assets/edit.svg'
import { SettingsContext } from "../../context/SettingsContext";
import { Title } from "../../pages/Conversations/styles";
import themeColor from '../../themes'

import ButtonComponents from "../buttonsComponent/buttonsComponent";
const customHeader = props => {
    const { theme } = useContext(SettingsContext)
    const navigation = useNavigation()
    return (
        <View >
            <View style={styles.contaneirHeader}>
                <View style={styles.content}>
                    <Title style={{ fontSize: 28, color: themeColor[theme].color }}>{props.title}</Title>
                    <TouchableOpacity onPress={() => { navigation.navigate('NewConversation') }}>
                        <Edit width='30' style={styles.edit} />
                    </TouchableOpacity>
                </View>
                <ButtonComponents />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contaneirHeader: {
        paddingTop: '10%',
        width: '100%',
    },
    content: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    content2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        top: '10%',
    },
    containerLogo: {
        flex: 1,
        flexDirection: 'column',
        color: '#fff'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        paddingStart: '5%'

    },
    edit: {
        flex: 1
    },
    button: {
        position: 'absolute',
        backgroundColor: '#333333',
        borderRadius: 50,
        paddingVertical: 5,
        width: 145,
        height: 30,
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginStart: '5%'
    },
    buttonText: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold'
    },
    button2: {
        backgroundColor: '#70A673',
        borderRadius: 50,
        paddingVertical: 5,
        width: 145,
        height: 30,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginEnd: '10%'
    },
    containerSearch: {
        paddingTop: '10%',
        paddingBottom: '8%',
        paddingStart: '5%'
    },
    containerSearchForm: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '95%',
        height: 50,
        backgroundColor: '#4A4A4A',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 25,
        fontSize: 16,
        color: 'white'
    },
    search: {
        right: '93%',
        color: 'white'
    },
    containerMessage: {
        backgroundColor: '#161616',
        justifyContent: 'center',
        alignItems: 'center',
        height: 195
    },
    contentMessage: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        color: 'white',
    },

})

export default customHeader