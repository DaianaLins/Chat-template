import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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