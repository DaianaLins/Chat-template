import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    contaneirHeader: {
      paddingTop: '10%',
      paddingBottom: '10%',
      backgroundColor: '#1976D2',
      paddingStart: '5%'
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
      height: 60
    },
    video: {
      width: '92%',
      aspectRatio: 16 / 9,
      marginTop: 10,
      marginLeft: '4%',
      marginRight: '4%'
    },
    arrow: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFF',
      paddingEnd: '8%',
  
    },
    message2: {
      position: 'absolute',
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
      paddingStart: '30%',
    },
    buttonText: {
      fontSize: 14,
      color: 'black',
      fontWeight: 'bold'
    },
    button: {
      position: 'absolute',
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
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    ChatMessageSytemMessageContaine: {
      width: 246,
      height: 56,
      borderRadius: 10
    }
  })