
import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, AsyncStorage } from "react-native";
import { Checkbox } from "react-native-paper";
import { WrapperP } from '../../routes/styles'
import { TextInput2, Title } from './styles'
import themeColor from '../../themes'
import { SettingsContext } from "../../context/SettingsContext";

import { useNavigation } from "@react-navigation/native";

const Perfil = () => {
  const [isSelected, setSelection] = useState(false);
  const { theme, color } = useContext(SettingsContext)
  
  const navigation = useNavigation()

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
              onPress={() => navigation.goBack()}
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

export default Perfil