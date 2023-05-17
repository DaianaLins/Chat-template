import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, AsyncStorage } from 'react-native';
import * as Animatable from 'react-native-animatable'
import Close from 'react-native-vector-icons/Fontisto';
import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from "react";
import Union from '../../assets/union.svg'
import { Wrapper } from '../../routes/styles';
import { createContact } from '../../utils/apiRequest';
import { phoneMask, dateMask } from '../../masks/mask';

const NewContact = () => {
  const navigation = useNavigation()
  const [isSelected, setSelection] = useState(false);
  const [selectedValue, setSelectedValue] = useState("java");
  const [name, setName] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [dataNasc, setDataNasc] = useState('')
  const [obs, setObs] = useState('')
  const [loading, setLoading]= useState(false)
  const [token, setToken] = useState('')

  

  useEffect(()=>{
    getToken()
  }, [])
  async function getToken() {
    const token = await AsyncStorage.getItem('TOKEN')
    setToken(token)
  }

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
          {/* <TouchableOpacity style={styles.button}
            onPress={() => { }}
          >
            <Text style={styles.buttonText} >ENVIAR IMAGEM </Text>
          </TouchableOpacity> */}
          <TextInput placeholder="Nome"
            style={styles.input}
            onChangeText={value => setName(value)} />
        </View>
        {/* <Picker
            selectedValue={selectedValue}
            style={{ height: 80, width: 172, top: '5%', borderBottomWidth: 0.5, color: '#6C6B6B' }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Código do País" style={{ color: '#6C6B6B' }} value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker> */}
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

          <TextInput placeholder="Número"
            style={styles.input}
            value={phoneMask(telefone)}
            onChangeText={value => setTelefone(value)} />
          {/* <TextInput placeholder="CPF"
            style={styles.input}
            onChangeText={value => setCpf(value)} /> */}
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
  button: {
    borderColor: '#FFF',
    borderWidth: 2,
    borderRadius: 50,
    paddingVertical: 5,
    width: 163,
    height: 32,
    bottom: '5%',
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
    top: '5%',
    borderBottomWidth: 1,
    borderColor: '#6C6B6B',
    fontSize: 17,
  },
  input1: {
    width: 172,
    height: 80,
    borderBottomWidth: 1,
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
})
export default NewContact

