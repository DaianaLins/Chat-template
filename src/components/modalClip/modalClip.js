import { View, Modal, ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Person from '../../assets/person.svg'
import Loc from '../../assets/loc.svg'
import Doc from '../../assets/doc.svg'
import ImageC from '../../assets/image.svg'
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const modalClip = ({ visible, handleClose }) => {
  
  const navigation = useNavigation()
    return (
        <Modal transparent visible={visible}  >
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'rgba(10,23,55,0.5)' }}>
              <View style={styles.modal}>
                <TouchableOpacity>
                  <View style={styles.content}>
                    <ImageC style={styles.img} />
                    <Text style={styles.text}>Fotos e Vídeos</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.content}>
                  <Doc style={styles.img} />
                    <Text style={styles.text} >Documentos</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.content}>
                    <Loc style={styles.img} />
                    <Text style={styles.text}>Localização</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.content1}>
                    <Person style={styles.img} />
                    <Text style={styles.text}>Contato</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => { handleClose()}}>
              <View style={styles.close}>
                <View style={styles.content2}>
                  <Text style={styles.text2}>Fechar</Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
  modal:{
    width: 374,
    height: 280,
    backgroundColor: '#D9D9D9',
    borderRadius: 20
  },
  content:{
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    height: 70,
    borderBottomWidth: 0.5,
    borderColor: "black",
  },
  content1:{
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    paddingLeft: 20,
  },
  text:{
    flex: 1,
    fontSize: 18,
    color: '#000000',
    paddingLeft: 20,  
  },
  img:{
    padding: 20
  },
  close:{
    top: 23,
    width: 374,
    height: 56,
    backgroundColor: '#D9D9D9',
    borderRadius: 20
  },
  content2:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  text2:{
    fontSize: 20,
    color: '#1976D2',
    fontWeight: '600',
    paddingTop: 15,
  },
})

export default modalClip