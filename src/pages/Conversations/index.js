import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, ActivityIndicator, Dimensions, AsyncStorage } from "react-native";
import Header from "../../components/customHeader/header";
import axios from "axios";
import SearchComp from "../../components/search/search";
import { useNavigation } from "@react-navigation/native";
import NoBtn from '../../assets/notBtn.svg'
import { Wrapper, Title } from "../../routes/styles";
import { TextTitle, Text2 } from "./styles";
import { SettingsContext } from "../../context/SettingsContext";
import themeColor from '../../themes'

import StatusBox from "../../components/statusBox/statusBox.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Conversations = ({ route }) => {
    const { theme } = useContext(SettingsContext)
    const { name } = route.params || 'Atendimento'
    const perPage = 20;
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const baseUrl = 'https://api.github.com';

    useEffect(() => {
        loadApi()
    }, [])

    async function loadApi() {
        if (loading) return;
        setLoading(true)
        const response = await axios.get(`${baseUrl}/search/repositories?q=react&per_page=${perPage}&page=${page}`)
        setData([...data, ...response.data.items])
        setPage(page + 1)
        setLoading(false)
    }

    // console.log(data)
    return (
        <Wrapper style={[styles.container, { backgroundColor: themeColor[theme].background }]}>
            <Header title='Conversas' />
            <SearchComp />
            {name === 'Aguardando' ?
                <View>

                    {String(data).length > 0 ?
                        <FlatList style={{ marginTop: 30 }}
                            data={data}
                            renderItem={({ item }) => <ListItem data={item} />}
                            keyExtractor={item => String(item.id)}
                            onEndReached={loadApi}
                            onEndReachedThreshold={0.1}
                            ListFooterComponent={<FooterList load={loading} />}
                        />
                        :
                        <View style={styles.containerMessage}>
                            <View style={styles.contentMessage}>
                                <Text style={[styles.text, { color: themeColor[theme].color }]} >Ops! Nenhum contato foi encontrado nesse status.</Text>
                            </View>
                        </View>
                    }
                </View>
                :
                <View>
                    {/* apenas testando, quando vier da api isso aqui vai ficar assim String(contact).length > 0  Em atendimento*/}
                    <FlatList style={{ marginTop: 30 }}
                        data={data}
                        renderItem={({ item }) => <ListItem data={item} />}
                        keyExtractor={item => String(item.id)}
                        onEndReached={loadApi}
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={<FooterList load={loading} />}
                    />
                </View>
            }
        </Wrapper>
    )
}

const ListItem = ({ data }) => {
    return (
      <View>
        <TouchableOpacity>
          <StatusBox name={data.full_name} time={1} />
        </TouchableOpacity>
      </View>
    );
  }

const FooterList = ({ load }) => {
    if (!load) return null;
    return (
        <View style={{ padding: 10 }}>
            <ActivityIndicator size={25} color='#ACAEB0' />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerMessage: {
        borderWidth: 0.5,
        borderColor: "#CDCDCD",
        justifyContent: 'center',
        alignItems: 'center',
        height: 195
    },
    containerMessage2: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: 90,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: "#CDCDCD",
    },
    picture: {
        width: windowHeight / 11 - 20,
        height: windowHeight / 11 - 20,
        borderRadius: (windowHeight / 11 - 20) / 2,
        backgroundColor: "#AAAAAA",
    },
    nick: {
        fontSize: 14,
        paddingLeft: 10,
        fontWeight: '600',
    },
    msg: {
        fontSize: 13,
        paddingLeft: 10,
    },
    contentMessage: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    contentMessage2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        fontSize: 14,
        color: 'black',
        paddingLeft: 10,
        fontWeight: '600'
    },
    span: {
        fontSize: 16,
        color: '#B9B9B9',
        fontWeight: '500',
    },
    spanBtn: {
        fontSize: 16,
        color: '#B9B9B9',
        paddingTop: 10,
        fontWeight: '500',
    },
    text: {
        fontSize: 20,
        color: '#666666',
        textAlign: 'center'
    },
    text2: {
        fontSize: 13,
        color: 'black',
        paddingLeft: 10,
    },
    contentImg: {
        borderRadius: 50,
        width: 60,
        height: 60
    },
    perfil: {
        paddingRight: 150,
    },
    message: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})


export default Conversations