import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import * as Animatable from 'react-native-animatable'
import { doLogin } from "../../utils/apiRequest";
import Loading from "../../components/loading/loading";
import { Checkbox } from "react-native-paper";
import { Wrapper, ContainerForm, TextInput2 } from "../../routes/styles";
import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import themeColor from '../../themes'
import { styles } from "./styles";

const SignIn = () => {
  const [login, setLogin] = useState('Atendente')
  const { color, theme } = useContext(SettingsContext)
  const [password, setPassword] = useState('102030')
  const [loading, setLoading] = useState(false)
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation()
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const handleSubmitLogin = async () => {
    const user = {
      login: login,
      password: password
    }
    setLoading(true)
    await doLogin(user).then(response => {
      setLoading(false)
      AsyncStorage.setItem("TOKEN", response.data.token)
      navigation.reset({
        index: 0,
        routes: [{ name: 'Chat' }]
      })
    }).catch(err => {
      const { error, message } = err.response.data
      setLoading(false)
      if (message) {
        if (message.indexOf('query') != -1) {
          alert('Usuário não existe')
        } else {
          alert(message)
        }
      }
    })
  }

  return (
    <Wrapper style={{ backgroundColor: themeColor[theme].background }}>
      <Animatable.View animation="fadeInUp" resizeMode="contain" style={{ flex: 1 }}>
        <ContainerForm>
          {/* <'BeBot style={{ bottom: '10%', marginLeft: 140 }} /> */}
          <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.separator} /><Text style={{ bottom: '10%', padding: 10, color: '#8A8383' }}>Login</Text><View style={styles.separator} />
          </View>
          <TextInput2 style={{ color: themeColor[theme].color }} placeholder='Digite seu login' onChangeText={value => setLogin(value)} />
          <TextInput2 style={{ color: themeColor[theme].color }} placeholder='Digite sua senha' secureTextEntry={true} onChangeText={value => setPassword(value)} />
          <View style={styles.checkbox}>
            <Checkbox
              status={isSelected ? "checked" : "unchecked"}
              onPress={() =>
                setSelection(!isSelected)
              }
              style={{ borderRadius: 2, borderWidth: 2, borderColor: '#ACAEB0' }}
              type="Android"
              uncheckedColor="#ACAEB0"
              color={color}
            />
            <Text style={{ color: '#595C5F', fontSize: 13 }}>Lembrar-me</Text>
            <TouchableOpacity style={{ marginLeft: '35%', alignItems: 'center' }} >
              <Text style={{ color: '#8A8383', fontSize: 13 }}>Recuperar  Senha</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={() => navigation.navigate('Chat')} >
            <Loading visible={loading} />
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
          <View style={styles.help}>
            <Text style={{ color: '#595C5F', fontSize: 15 }}>Precisa de ajuda? <Text style={{ color: '#33CABB', fontSize: 15, fontWeight: '600' }}>Fale Conosco</Text> </Text>
          </View>
        </ContainerForm>
      </Animatable.View>
    </Wrapper>
  );
}


export default SignIn