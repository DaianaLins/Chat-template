
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Search from '../../assets/searchPlace.svg'
import {styles} from './styles'

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


export default SearchComp