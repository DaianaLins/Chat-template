import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Arrow from '../../assets/arrow.svg'
import Exclude from '../../assets/Exclude.svg'
import { useContext, useState } from "react";
import { SettingsContext } from "../../context/SettingsContext";


const headerChat = props => {
  const navigation = useNavigation()
  const [messages, setMessages] = useState([])
  const { color } = useContext(SettingsContext)



  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <View >
      <View style={[styles.contaneirHeader, { backgroundColor: color }]}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.arrow} onPress={() => { navigation.goBack() }}>
            <Arrow />
          </TouchableOpacity>
          <Image style={styles.contentImg} resizeMode="contain" source={{uri: `${props.image}`}} />
          <View styles={styles.message2}>
            <Text style={styles.textTitle}>{props.name}</Text>
            {props.online == 1 ? <Text style={styles.text2}>Online agora</Text> : <Text style={styles.text2}>Offline</Text> } 
            
            {/* <Text style={styles.text2}>{props?.protocolo.canal_nome}</Text> */}
          </View>
          {/* <TouchableOpacity style={styles.exclude} onPress={() => { }}>
            <Exclude />
          </TouchableOpacity> */}
        </View>
      </View>
      {/* <View style={styles.container}>
        <View style={styles.button}>
        
        <Text style={styles.buttonText} >{props.protocolo.protocolo}</Text>
        </View>
      </View> */}

    </View>
  )
}
const styles = StyleSheet.create({
  contaneirHeader: {
    paddingTop: '10%',
    paddingBottom: '10%',
    paddingStart: '5%',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  contentImg: {
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  arrow: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    paddingEnd: '8%',

  },
  message2: {
    position: 'absolute',
    width: '10%',
    paddingRight: 180,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 16,
    color: 'white',
    lineHeight: 20,
    width: '100%',
    paddingLeft: 10,
    fontWeight: '500'
  },
  text2: {
    fontSize: 12,
    color: '#D1D1D1',
    paddingLeft: 10,
  },
  exclude: {
    fontWeight: 'bold',
    color: '#FFF',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-end',
    left: '80%',
  },
  buttonText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold'
  },
  button: {
    // position: 'absolute',
    top: '50%',
    backgroundColor: '#BDBDBD',
    borderRadius: 15,
    paddingVertical: 5,
    width: 291,
    height: 32,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentM: {
    // backgroundColor: '#212121',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    width: 200,
    // paddingLeft: 80,
    height: 30,
    // borderWidth: 0.5,
    marginTop: 860,
    // borderColor: "#998282",
  }
})
export default headerChat