import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    contaneirHeader: {
      marginTop: '14%',
      marginBottom: '8%',
      paddingStart: '5%'
    },
    message: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#FFF'
    },
    checkbox: {
      width: '80%',
      height: 80,
      flexDirection: 'row',
      alignItems: 'center',
      marginStart: 40,
      bottom: '5%',
    },
    separator: {
      height: 1,
      bottom: '10%',
      backgroundColor: '#D4DAD9',
      width: '34%'
    },
    containerForm: {
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignContent: 'center',
      flex: 1,
    },
    title: {
      fontSize: 17,
      marginTop: 28,
      bottom: 10
    },
    input: {
      width: '80%',
      height: 80,
      bottom: '5%',
      borderBottomWidth: 0.5,
      marginStart: 40,
      borderColor: '#ACAEB0',
      fontSize: 17,
    },
    button: {
      marginStart: 40,
      height: 55,
      paddingVertical: 8,
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
    },
    buttonText: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold'
    },
    buttonRegister: {
      marginTop: 14,
      alignSelf: 'center'
    },
    registerText: {
      color: '#a1a1a1'
    },
    help: {
      justifyContent: 'center',
      alignItems: 'center',
      top: '5%',
    }
  })