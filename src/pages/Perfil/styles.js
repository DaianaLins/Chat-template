import styled from "styled-components"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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

export const TextInput2 = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colorSecundary
}))`
  width: 80%;
  height: 20px;
  /* bottom: 5%; */
  border-bottom-width: 0.5px;
  border-color: #ACAEB0;
  color: ${props => props.theme.color};
  font-size: 17px;
`

export const Title = styled.Text`
  font-size: 28px;
  top: 8%;
  font-weight: bold;
  color: ${props => props.theme.color};
`
