import react, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SettingsContext } from "../../context/SettingsContext";


const ButtonComponents = (props) => {
  const navigation = useNavigation()
  const { color } = useContext(SettingsContext)
  const [teste, setTeste] = useState(false)

  const isActive = useRoute()
  if (!teste) {
    styles.button = {
      backgroundColor: color,
      position: 'absolute',
      borderRadius: 22,
      paddingVertical: 10,
      width: '39%',
      height: 38,
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginStart: '5%'
    },
      styles.buttonText = {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
      }
  } else {
    styles.button = {
      backgroundColor: '#DDD9D9',
      position: 'absolute',
      borderRadius: 22,
      paddingVertical: 10,
      width: '39%',
      height: 38,
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginStart: '5%'
    },
      styles.buttonText = {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'
      }
  }
  if (teste) {
    styles.button2 = {
      backgroundColor: color,
      borderRadius: 22,
      paddingVertical: 10,
      width: '39%',
      height: 38,
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginEnd: '5%'
    },
      styles.buttonText2 = {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
      }
  }
  else {
    styles.button2 = {
      backgroundColor: '#DDD9D9',
      borderRadius: 22,
      paddingVertical: 10,
      width: '39%',
      height: 38,
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginEnd: '5%'
    },
      styles.buttonText2 = {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'
      }
  }

  return (
    <View >
      <TouchableOpacity style={styles.button}
        onPress={() => {
          setTeste(false)
          navigation.navigate('Conversas', { name: 'Atendimento' });
        }}
      >
        <Text style={styles.buttonText} >Em atendimento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2}
        onPress={() => {
          setTeste(true)
          navigation.navigate('Conversas', { name: 'Aguardando' });
        }}
      >
        <Text style={styles.buttonText2}>Aguardando</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({

  content2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    top: '10%',
  },
  buttonText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#333333',
    borderRadius: 50,
    paddingVertical: 5,
    width: 145,
    height: 30,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginStart: '5%'
  },
  button2: {
    // backgroundColor: '#70A673',
    backgroundColor: '#333333',
    borderRadius: 50,
    paddingVertical: 5,
    width: 145,
    height: 30,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginEnd: '10%'
  },
})
export default ButtonComponents