import { View, ActivityIndicator, StyleSheet, Text, TouchableOpacity, Pressable, Touchable, Image, Settings } from 'react-native'
import { Modal, Portal, ScrollView, Button, Provider, RadioButton } from 'react-native-paper'
import Person from '../../assets/person.svg'
import Loc from '../../assets/loc.svg'
import Doc from '../../assets/doc.svg'
import ImageC from '../../assets/image.svg'
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { SettingsContext } from '../../context/SettingsContext'
import themeColor from '../../themes'

const modalTheme = ({ visible, handleClose }) => {
  const { handleChangeColor, color, handleChangeTheme, theme } = useContext(SettingsContext)
  const navigation = useNavigation()

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={handleClose}
          contentContainerStyle={{
            backgroundColor: themeColor[theme].background,
            width: 326,
            maxHeight: 439,
            alignSelf: 'center',
            flex: 1,
            borderRadius: 20,
          }}
        >
          <View style={styles.content}>
            <Text style={[styles.text, { color: themeColor[theme].color }]}>Temas</Text>
          </View>
          <View style={{ flexDirection: 'row', alignContent: 'flex-start', justifyContent: 'flex-start', bottom: '20%', left: '2%' }}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => handleChangeColor('#1976D2')}>
              <View style={styles.contentImg} />
              <Text style={[styles.span, { color: themeColor[theme].color }]}>Padrão</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => handleChangeColor('#1976D2')}>
              <View style={styles.contentImg2} />
              <Text style={[styles.span, { color: themeColor[theme].color }]}>Azul</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => handleChangeColor('#AD1457')}>
              <View style={styles.contentImg3} />
              <Text style={[styles.span, { color: themeColor[theme].color }]}>Rosa</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', alignContent: 'flex-start', justifyContent: 'center', bottom: '10%', right: '3%' }}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => handleChangeColor('#2E7D32')}>
              <View style={styles.contentImg4} />
              <Text style={[styles.span, { color: themeColor[theme].color }]}>Verde</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => handleChangeColor('#EF6C00')}>
              <View style={styles.contentImg5} />
              <Text style={[styles.span, { color: themeColor[theme].color }]}>Laranja</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.button2}
              onPress={() => handleChangeTheme('light')}
            >
              <RadioButton
                value="first"
                status={theme === 'light' ? 'checked' : 'unchecked'}
                color='black'
                uncheckedColor='black'
                onPress={() => handleChangeTheme('light')}
              />
              <Text style={styles.buttonText2} >
                TEMA CLARO
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button3}
              onPress={() => handleChangeTheme('dark')}
            >
              <RadioButton
                value="second"
                uncheckedColor='white'
                color='white'
                status={theme === 'dark' ? 'checked' : 'unchecked'}
                onPress={() => handleChangeTheme('dark')}
              />
              <Text style={styles.buttonText3} >
                TEMA ESCURO
              </Text>
            </TouchableOpacity>


          </View>
        </Modal>
      </Portal>
    </Provider>
  )
}

const styles = StyleSheet.create({
  modal: {
    width: 326,
    height: 439,
    backgroundColor: '#FFF',
    borderRadius: 20,
    bottom: '20%'
  },
  content: {
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 44,
    bottom: '31%',
    backgroundColor: '#8EC3F8'
  },
  content1: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    paddingLeft: 20,
  },
  text: {
    flex: 1,
    fontSize: 18,
    // color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.38)',
    textShadowRadius: 2,
    fontWeight: '600',
    paddingLeft: 20,
  },
  img: {
    padding: 20
  },
  contentImg: {
    borderRadius: 80,
    width: 60,
    marginLeft: 30,
    height: 60,
    backgroundColor: '#333333'
  },
  button2: {
    backgroundColor: '#FFF',
    marginLeft: '15%',
    top: '5%',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 238,
    height: 42,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText2: {
    fontSize: 14,
    // color: 'black',
  },
  button3: {
    backgroundColor: '#2D2D2D',
    marginLeft: '15%',
    borderRadius: 4,
    top: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 238,
    height: 42,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText3: {
    fontSize: 14,
    color: '#FFF',
  },
  span: {
    left: '20%',
    // color: '#6C6B6B'
  },
  contentImg2: {
    borderRadius: 80,
    width: 60,
    marginLeft: 30,
    height: 60,
    backgroundColor: '#1976D2'
  },
  contentImg3: {
    borderRadius: 80,
    width: 60,
    marginLeft: 30,
    height: 60,
    backgroundColor: '#AD1457'
  },
  contentImg4: {
    borderRadius: 80,
    width: 60,
    marginLeft: 30,
    height: 60,
    backgroundColor: '#2E7D32'
  },
  contentImg5: {
    borderRadius: 80,
    width: 60,
    marginLeft: 30,
    height: 60,
    backgroundColor: '#EF6C00'
  },
  close: {
    top: 23,
    width: 374,
    height: 56,
    backgroundColor: '#D9D9D9',
    borderRadius: 20
  },
  content2: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text2: {
    fontSize: 20,
    // color: '#1976D2',
    fontWeight: '600',
    paddingTop: 15,
  },
})

export default modalTheme