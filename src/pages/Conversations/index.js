import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, FlatList, Dimensions} from "react-native";
import Header from "../../components/customHeader/header";
import axios from "axios";
import SearchComp from "../../components/search/search";
import { useNavigation } from "@react-navigation/native";
import { Wrapper } from "../../routes/styles";
import { SettingsContext } from "../../context/SettingsContext";
import themeColor from '../../themes'

import FooterList from "../../components/FooterList";
import ListItem from "../../components/ListItem";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Conversations = ({ route }) => {
    const { theme } = useContext(SettingsContext)
    const perPage = 20;
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const baseUrl = 'https://api.github.com';
    const navigation = useNavigation()

    useEffect(() => {
        loadApi()
    }, [data])

    async function loadApi() {
        if (loading) return;
        setLoading(true)
        const response = await axios.get(`${baseUrl}/search/repositories?q=react&per_page=${perPage}&page=${page}`)
        setData([...data, ...response.data.items])
        setPage(page + 1)
        setLoading(false)
    }

    return (
        <Wrapper style={[styles.container, { backgroundColor: themeColor[theme].background }]}>
            <Header title='Conversas' />
            <SearchComp />
                <FlatList style={{ marginTop: 30 }}
                    data={data}
                    renderItem={({ item }) => <ListItem data={item} />}
                    keyExtractor={item => String(item.id)}
                    onEndReached={loadApi}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={<FooterList load={loading} />}
                />
        </Wrapper>
    )
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