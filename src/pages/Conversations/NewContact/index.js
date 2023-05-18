import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable'
import Close from 'react-native-vector-icons/Fontisto';
import React, { useState } from "react";
import Union from '../../../assets/union.svg'
import { Wrapper } from '../../../routes/styles';
import { phoneMask, dateMask } from '../../../masks/mask';
import { styles } from './styles';

const NewContact = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [telefone, setTelefone] = useState('')
  const [dataNasc, setDataNasc] = useState('')
  const [obs, setObs] = useState('')
  // const [loading, setLoading]= useState(false)
  // const [token, setToken] = useState('')

  

  // useEffect(()=>{
  //   getToken()
  // }, [])
  // async function getToken() {
  //   const token = await AsyncStorage.getItem('TOKEN')
  //   setToken(token)
  // }

  const handleSubmitContact = async () => {
    const user = {
      nick: name,
      numero: telefone,
      data_nascimento: dataNasc,
      observacao: obs
    }
    
  }

  return (
    <Wrapper>
      <Animatable.View style={styles.containerForm}>
        <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
          <Text style={styles.title} >Nova contato</Text>
          <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ left: 70, top: 22 }}>
            <Close name='close' size={28} color='#828282' />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Image style={{ backgroundColor: '#2D7873', width: 179, height: 179, top: '10%' }} />
          <View style={{ position: 'absolute', bottom: 100 }}>
            <Union />
          </View>
          <TextInput placeholder="Nome"
            style={styles.input}
            onChangeText={value => setName(value)} />
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

          <TextInput placeholder="Número"
            style={styles.input}
            value={phoneMask(telefone)}
            onChangeText={value => setTelefone(value)} />
          <TextInput placeholder="Data de Nascimento (somente números) "
            style={styles.input}
            value={dateMask(dataNasc)}
            onChangeText={value => setDataNasc(value)} />

          <TextInput placeholder="Observação "
            style={styles.input}
            onChangeText={value => setObs(value)} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', top: '30%' }}>
          <View style={{ paddingStart: 25, top: '2%' }}>
            <TouchableOpacity style={styles.button1}
              onPress={() => {
                navigation.navigate('Conversas', { name: 'Atendimento' })
              }}
            >
              <Text style={styles.buttonText1} >CANCELAR</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: '32%' }}>
            <TouchableOpacity style={styles.button3}
              onPress={() => {
                handleSubmitContact()
              }}
            >
              <Text style={styles.buttonText3} >CRIAR CONTATO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </Wrapper>
  );
};

export default NewContact

