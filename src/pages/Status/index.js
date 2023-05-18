import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList
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
import ListItem from "../../components/ListItem/index.js";
import FooterList from "../../components/FooterList/index.js";
import { css } from "./styles.js";


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
      <View style={css.content}>
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
      <TouchableOpacity style={[css.addStatusButton, { backgroundColor: color }]}>
        <Plus style={css.svg} />
      </TouchableOpacity>
    </Wrapper>
  );
}

