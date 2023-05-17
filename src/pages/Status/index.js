import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  FlatList, ActivityIndicator
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import StatusBox from "../../components/statusBox/statusBox.js";
import Plus from "../../assets/camera-solid.svg";
import SearchComp from "../../components/search/search.js";
import axios from "axios";
import { Wrapper } from "../../routes/styles";
import { Title } from '../Conversations/styles'
import { SettingsContext } from "../../context/SettingsContext.js";
import themeColor from '../../themes'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


export default function Status() {
  const searchTerm = 'react';
  const navigation = useNavigation()
  const perPage = 20;
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const baseUrl = 'https://api.github.com';
  const { theme, color } = useContext(SettingsContext)

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
  return (
    <Wrapper style={{ backgroundColor: themeColor[theme].background }}>
      <View style={css.header}>
        <Title style={{ fontSize: 28, paddingTop: 20, color: themeColor[theme].color }}>Status</Title>
      </View>
      <SearchComp />
      <View>
        <TouchableOpacity>
          <StatusBox name={"Meu Status"} time={1} />
        </TouchableOpacity>
      </View>
      <View style={css.barrier}>
        <Text style={[css.textSecond, { color: themeColor[theme].color }]}>ATUALIZAÇÕES RECENTES</Text>
      </View>
      <FlatList style={{ marginTop: 30 }}
        data={data}
        renderItem={({ item }) => <ListItem data={item} />}
        keyExtractor={item => String(item.id)}
        onEndReached={loadApi}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FooterList load={loading} />}
      />
      <TouchableHighlight style={[css.addStatusButton, { backgroundColor: color }]}>
        <Plus style={css.svg} />
      </TouchableHighlight>
    </Wrapper>
  );
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
const FooterList= ({ load }) => {
  if (!load) return null;
  return (
    <View style={{ padding: 10 }}>
      <ActivityIndicator size={25} color='#ACAEB0' />
    </View>
  );
}
const css = StyleSheet.create({
  screen: {
    height: windowHeight,
    width: windowWidth,
  },
  header: {
    width: windowWidth,
    flexDirection: "column",
    alignContent: "center",
    marginTop: "3%",
  },
  text: {
    fontSize: 30,
    fontWeight: "600",
    color: "black",
    width: (windowWidth * 8) / 10,
    textAlign: "left",
    paddingTop: 42,
    paddingLeft: "7%",
    // marginBottom: "3%",
  },
  textInput: {
    width: "80%",
    marginLeft: "7%",
    border: "none",
    borderRadius: 25,
    backgroundColor: "#D2D2D2aa",
    height: 50,
    color: "white",
    paddingLeft: 15,
  },
  textSecond: {
    color: "#7B7B7B",
    paddingLeft: "7%",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17,
  },
  barrier: {
    height: "5%",
    width: windowWidth,
    backgroundColor: "#white",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  addStatusButton: {
    width: windowHeight / 11 - 35,
    height: windowHeight / 11 - 35,
    borderRadius: (windowHeight / 11 - 30) / 2,
    position: "absolute",
    bottom: windowHeight / 8,
    right: windowWidth / 20,
    justifyContent: "center",
    alignItems: "center",
  },
  svg: {
    width: "50%",
    height: "50%",
  }
});