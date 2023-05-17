
import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, AsyncStorage } from "react-native";
import { Checkbox } from "react-native-paper";
import { WrapperP } from '../../routes/styles'
import { TextInput2, Title } from './styles'
import themeColor from '../../themes'
import { SettingsContext } from "../../context/SettingsContext";
import axios from "axios";

const Perfil = () => {
  const [isSelected, setSelection] = useState(false);
  const { theme, color } = useContext(SettingsContext)

  const [nome, setNome] = useState('')
  const [login, setlogin] = useState('')
  const [senha, setSenha] = useState('')
  const [cod, setCod] = useState('')

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([{}])
  const [avatar, setAvatar] = useState('')
  const [token, setToken] = useState('')
  async function getToken() {
    const token = await AsyncStorage.getItem('TOKEN')
    setToken(token)
  }


  return (
    <ScrollView>
      <WrapperP style={[styles.container, { backgroundColor: themeColor[theme].background }]}>
        <Title style={{ color: themeColor[theme].color }}>Perfil</Title>
        {/* source={{uri: data?.avatar || ''}} */}
        {/* this.props.url ? {uri: this.props.url } : null */}
        <View style={{ width: 179, height: 179, top: '10%', backgroundColor: 'gray' }} ></View>
        {/* <Image style={{  width: 179, height: 179, top: '10%' }} source={avatar ? {uri: avatar } : null}  /> */}
        <TouchableOpacity style={styles.button}
          onPress={() => { }}
        >
          <Text style={styles.buttonText} >ALTERAR AVATAR </Text>
        </TouchableOpacity>
        <TextInput2 placeholder="Nome"
          style={[styles.input, { color: themeColor[theme].color }]}
          value={nome}
          onChangeText={value => setNome(value)} />
        <TextInput2 placeholder="Login"
          style={[styles.input, { color: themeColor[theme].color }]}
          onChangeText={value => setLogin(value)} />
        <TextInput2
          placeholder="Senha"
          style={[styles.input, { color: themeColor[theme].color }]}
          secureTextEntry={true}
          onChangeText={value => setSenha(value)} />
        <TextInput2 placeholder="Código do Operador"
          style={[styles.input, { color: themeColor[theme].color }]}
          onChangeText={value => setCod(value)} />
        <View style={styles.help}>
          <Text style={{ color: '#6C6B6B', fontSize: 10 }}>Quando o contato digitar #SeuCodigo e não tiver um protocolo aberto, ele será direcionado imediatamente para você! </Text>
          <View style={styles.checkbox}>
            <Checkbox
              status={isSelected ? "checked" : "unchecked"}
              onPress={() =>
                setSelection(!isSelected)
              }
              style={{ borderColor: '#ACAEB0' }}
              type="Android"
              uncheckedColor="#ACAEB0"
              color={"#1976D2"}
            />
            <Text style={{ color: '#6C6B6B', fontSize: 13 }}>Enviar seu nome junto com a mensagem</Text>
          </View>
          <Text style={{ color: '#6C6B6B', fontSize: 13 }}>Você ainda não habilitou login ao app.</Text>
          <TouchableOpacity><Text style={{ color: '#1976D2', textDecorationLine: 'underline', fontSize: 13 }}>Autorizar acesso ao app</Text></TouchableOpacity>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button1}
              onPress={() => {
              }}
            >
              <Text style={styles.buttonText1} >CANCELAR</Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity style={styles.button3}
                onPress={() => {
                }}
              >
                <Text style={styles.buttonText3} >SALVAR DADOS</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </WrapperP>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    paddingBottom: 140,
  },
  message: {
    fontSize: 28,
    top: '8%',
    fontWeight: 'bold',
    color: 'black',

  },
  button: {
    borderColor: '#FFF',
    borderWidth: 2,
    borderRadius: 50,
    paddingVertical: 5,
    width: 163,
    height: 32,
    top: '3%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold'
  },
  button1: {
    borderColor: '#FFF',
    width: 121,
    height: 31
  },
  buttonText1: {
    fontSize: 14,
    color: '#E81B0C',
  },
  button3: {
    backgroundColor: '#1976D2',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 121,
    height: 31

  },
  buttonText3: {
    fontSize: 14,
    color: '#FFF',
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
    width: '90%',
    height: 80,
    top: '10%',
    bottom: '5%',
    borderBottomWidth: 0.5,
    borderColor: '#6C6B6B',
    fontSize: 17,
  },
  help: {
    alignItems: 'flex-start',
    top: '11%',
    paddingStart: '2%',
    width: '95%',
  },
  checkbox: {
    height: 60,
    padding: 0,
    flexDirection: 'row',
    alignItems: 'center',
    // bottom: '5%',
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
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: 40,
  },

})

export default Perfil