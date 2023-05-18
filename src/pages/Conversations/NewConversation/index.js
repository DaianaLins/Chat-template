import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList, ActivityIndicator, AsyncStorage } from 'react-native';
import * as Animatable from 'react-native-animatable'
import Close from 'react-native-vector-icons/Fontisto';
import AddUser from 'react-native-vector-icons/Ionicons';
import SearchComp from '../../../components/search/search';
import React, { useEffect, useState } from "react";
import Footer from '../../../components/footer/footer';
import { Wrapper } from '../../../routes/styles';
import StatusBox from "../../../components/statusBox/statusBox.js";
import { styles } from './styles';

import axios from "axios";

const NewConversation = () => {

  const navigation = useNavigation()
  const [isActive, setIsActive] = useState('one');
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [contacts, setContacts] = useState('0')
  const perPage = 20;
  const [page, setPage] = useState(1)
  const baseUrl = 'https://api.github.com';

  const [token, setToken] = useState('')
  async function getToken() {
    const token = await AsyncStorage.getItem('TOKEN')
    setToken(token)
  }
  useEffect(() => {
    loadApi()
  }, [data])

  const loadApi = async () => {
    if (loading) return;
    setLoading(true)
    const response = await axios.get(`${baseUrl}/search/repositories?q=react&per_page=${perPage}&page=${page}`)
    setData([...data, ...response.data.items])
    setPage(page + 1)
    setLoading(false)
  }

  return (
    <Wrapper >
      <Animatable.View style={styles.containerForm} animation="fadeInUp" resizeMode="contain" delay={0.6}>
        <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <Text style={styles.title} >Nova conversa</Text>
          <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ left: 70, top: 22 }}>
            <Close name='close' size={28} color='#828282' />
          </TouchableOpacity>
        </View>
        <SearchComp />
        <TouchableOpacity style={{marginTop: 20}} onPress={() => { navigation.navigate('NewContact') }}>
          <View style={styles.containerMessage2}>
            <View style={{ flexDirection: 'row' }}>
              <AddUser name='person-add' size={15} color='#828282' style={{ backgroundColor: '#AFA7A7', borderRadius: 22, padding: 10 }} />
              <Text style={styles.span}>Novo Contatos</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top: '5%' }}>
          <TouchableOpacity style={isActive == 'one' ? styles.button1Ac : styles.button1}
            onPress={() => {
              setIsActive('one')
            }}
          >
            <Text style={styles.buttonText3} >TODOS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={isActive == 'two' ? styles.button2Ac : styles.button2}
            onPress={() => {
              setIsActive('two')
            }}
          >
            <Text style={styles.buttonText3} >ATENDIMENTO</Text>
          </TouchableOpacity>

          <TouchableOpacity style={isActive == 'three' ? styles.button3Ac : styles.button3}
            onPress={() => {
              setIsActive('three')
            }}
          >
            <Text style={styles.buttonText3} >AGUARDANDO</Text>
          </TouchableOpacity>

          <TouchableOpacity style={isActive == 'four' ? styles.button4Ac : styles.button4}
            onPress={() => {
              setIsActive('four')
            }}
          >
            <Text style={styles.buttonText3} >ENCERRADOS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={isActive == 'five' ? styles.button5Ac : styles.button5}
            onPress={() => {
              setIsActive('five')
            }}
          >
            <Text style={styles.buttonText3} >PENDENTES</Text>
          </TouchableOpacity>
        </View>

        <FlatList style={{ marginTop: 30 }}
          data={data}
          renderItem={({ item }) => <ListItem data={item} />}
          keyExtractor={item => String(item.id)}
          onEndReached={loadApi}
          onEndReachedThreshold={0.1}
          ListFooterComponent={<FooterList load={loading} />}
        />
        <Footer contacts={`${contacts} contatos encontrados`} />

      </Animatable.View>
    </Wrapper>
  );
};

const ListItem = ({ data }) => {
  return (
    <View>
      <TouchableOpacity>
        <StatusBox name={data.full_name} time={1} />
      </TouchableOpacity>
    </View>
  );
}
function FooterList({ load }) {
  if (!load) return null;
  return (
    <View style={{ padding: 10 }}>
      <ActivityIndicator size={25} color='#ACAEB0' />
    </View>
  );
}

export default NewConversation

