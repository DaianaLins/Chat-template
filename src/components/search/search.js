
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Search from '../../assets/searchPlace.svg'

const SearchComp = () => {
    const [searchS, setSearch] = useState('')

    return (
        <View style={styles.containerSearch}>
            <View style={styles.containerSearchForm} >
                <TextInput placeholder="Pesquisar"
                    placeholderTextColor='#B9B9B9'
                    style={styles.input}
                    onChangeText={value => setSearch(value)} /><Search width='30' style={styles.search} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    containerSearch: {
        paddingTop: '10%',
        paddingBottom: '8%',
        paddingStart: '5%',
        // backgroundColor: '#333333'
    },
    containerSearchForm: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '95%',
        height: 44,
        backgroundColor: 'rgba(152, 147, 147, 0.2)',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 25,
        fontSize: 16,
        color: 'black'
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

export default SearchComp