import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList, ActivityIndicator, AsyncStorage } from 'react-native';
import * as Animatable from 'react-native-animatable'
import Close from 'react-native-vector-icons/Fontisto';
import AddUser from 'react-native-vector-icons/Ionicons';
import SearchComp from '../../components/search/search';
import React, { useEffect, useState } from "react";
import Footer from '../../components/footer/footer';
import { Wrapper } from '../../routes/styles';
import { searchProtocol } from "../../utils/apiRequest";
import StatusBox from "../../components/statusBox/statusBox.js";

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
  }, [])

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
        <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
          <Text style={styles.title} >Nova conversa</Text>
          <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ left: 70, top: 22 }}>
            <Close name='close' size={28} color='#828282' />
          </TouchableOpacity>
        </View>
        <SearchComp />
        <TouchableOpacity onPress={() => { navigation.navigate('NewContact') }}>
          <View style={styles.containerMessage2}>
            <View style={{ flexDirection: 'row' }}>
              <AddUser name='person-add' size={15} color='#828282' style={{ backgroundColor: '#AFA7A7', borderRadius: 22, padding: 10 }} />
              <Text style={styles.span}>Novo Contato</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* <View style={{ paddingStart: 12, paddingTop: 10, flexDirection: 'row' }}>
          <Checkbox
            status={isSelected ? "checked" : "unchecked"}
            onPress={() =>
              setSelection(!isSelected)
            }
            style={{ borderColor: '#777777' }}
            type="Android"

            uncheckedColor="#ACAEB0"
            color={"#1976D2"}
          />
          <Text style={styles.span2}>Pesquisar por conversas mais antigas</Text>
        </View>
        <Text style={{ color: '#6C6B6B', fontSize: 11, paddingStart: 20 }}>Use com sabedoria: Isso deixará a pesquisa mais lenta  </Text>
        <Text style={styles.span}>Conversas Arquivadas</Text>
        <View style={{ width: '100%', paddingStart: 10, paddingTop: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
              color='#1976D2'
              uncheckedColor='#777777'
            />
            <Text style={styles.span2}>Não incluir protocolos arquivados</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <RadioButton
              value="second"
              uncheckedColor='#777777'
              color='#1976D2'
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
            <Text style={styles.span2}>Somente protocolos arquivados</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <RadioButton
              value="three"
              uncheckedColor='#777777'
              color='#1976D2'
              status={checked === 'three' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('three')}
            />
            <Text style={styles.span2}>Buscar tanto arquivados, quanto não arquivados</Text>
          </View>
        </View> */}
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerForm: {
    backgroundColor: '#DDD9D9',
    flex: 1,
    top: '5%',
    opacity: 0.9,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 28,
    paddingTop: '10%',
    fontWeight: '500',
    color: '#000000',
    opacity: 0.7,
  },

  containerMessage2: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 50,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#777777",
  },
  contentImg: {
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: 'white'
  },
  message: {
    position: 'absolute',
    paddingRight: 180,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  span: {
    fontSize: 16,
    color: '#777777',
    top: 5,
    paddingLeft: 16,
    fontWeight: '500',
  },
  span2: {
    fontSize: 15,
    color: '#777777',
    top: 5,
    paddingLeft: 2,
    fontWeight: '500',
  },
  button1: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#777777',
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 31

  },
  button1Ac: {
    backgroundColor: '#DDD9D9',
    borderTopStartRadius: 10,
    borderWidth: 1,
    borderColor: '#777777',
    borderBottomStartRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 31
  },
  button2: {
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderEndWidth: 1,
    borderColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
    height: 31

  },
  button2Ac: {
    backgroundColor: '#DDD9D9',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderEndWidth: 1,
    borderColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
    height: 31

  },
  button3: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderEndWidth: 1,
    borderColor: '#777777',
    justifyContent: 'center',
    width: 85,
    height: 31

  },
  button3Ac: {
    backgroundColor: '#DDD9D9',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderEndWidth: 1,
    borderColor: '#777777',
    justifyContent: 'center',
    width: 85,
    height: 31

  },
  button4: {
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
    height: 31

  },
  button4Ac: {
    backgroundColor: '#DDD9D9',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
    height: 31

  },
  button5: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#777777',
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 73,
    height: 31

  },
  button5Ac: {
    backgroundColor: '#DDD9D9',
    borderWidth: 1,
    borderColor: '#777777',
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 73,
    height: 31

  },
  buttonText3: {
    fontSize: 10,
    color: '#555555',
  },
  containerContact2: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 90,
    paddingLeft: 10,
    borderWidth: 0.5,
    borderColor: "#777777",
  },
  containerContact: {
    paddingRight: 150,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contentImg: {
    borderRadius: 50,
    width: 60,
    height: 60
  },
  messageCont: {
    flexDirection: 'column',
  },
  nameCont: {
    fontSize: 14,
    color: '#000000',
    top: 5,
    paddingLeft: 16,
    fontWeight: '500',
  },
  subCont: {
    fontSize: 12,
    color: '#000000',
    top: 5,
    paddingLeft: 16,
    fontWeight: '400',
  }
})
export default NewConversation

