import React, { useContext, useState } from "react";
import Header from "../../components/header/header"
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage } from "react-native";
import Notif from '../../assets/notification'
import Paint from '../../assets/paint'
import Question from '../../assets/question'
import Exit from '../../assets/exit'
import Volume from '../../assets/volume'
import NoVolume from '../../assets/volume off'
import NoNotifi from '../../assets/notification off'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";
import ModalTheme from "../../components/modalTheme/modalTheme";
import { Wrapper, Title } from "../../routes/styles";
import { SettingsContext } from "../../context/SettingsContext";
import themeColor from '../../themes'

const Settings = () => {
    const [volume, setVolume] = useState(false)
    const [notif, setNotif] = useState(false)
    const navigation = useNavigation()
    const [modal, setModal] = useState(false)
    const { theme, color } = useContext(SettingsContext)

    const handleClose = () => {
        setModal(false)
    }

    const logout = () => {
        AsyncStorage.removeItem("TOKEN")
        navigation.reset({
            index: 0,
            routes: [{ name: 'SignIn' }]
        })
    }
    return (
        <>
            <Wrapper style={[styles.container, { backgroundColor: themeColor[theme].background }]}>

                <Animatable.View style={[styles.containerForm, { backgroundColor: color }]} animation="fadeInUp" resizeMode="contain"  >
                    <Text style={styles.title}>Configurações</Text>
                    <View style={{ paddingTop: '20%' }}>
                        {/* {!volume ?  <TouchableOpacity style={styles.containerMessage} onPress={()=>setVolume(true)}>
                <View style={styles.contentMessage}>
                <NoVolume styles={styles.perfil} />
                <View styles={styles.message}>
                <Text style={styles.textTitle}>Desativar Silencioso</Text>
                </View>
                </View>
                </TouchableOpacity> : <TouchableOpacity style={styles.containerMessage}  onPress={()=>setVolume(false)}>
                <View style={styles.contentMessage}>
                <Volume styles={styles.perfil} />
                <View styles={styles.message}>
                <Text style={styles.textTitle}>Modo Silencioso</Text>
                </View>
                </View>
            </TouchableOpacity>} */}
                        {!notif ? <TouchableOpacity style={styles.containerMessage} onPress={() => setNotif(true)}>
                            <View style={styles.contentMessage}>
                                <NoNotifi styles={styles.perfil} />
                                <View styles={styles.message}>
                                    <Text style={styles.textTitle}>Ativar notificação</Text>
                                </View>
                            </View>
                        </TouchableOpacity> : <TouchableOpacity style={styles.containerMessage} onPress={() => setNotif(false)}>
                            <View style={styles.contentMessage}>
                                <Notif styles={styles.perfil} />
                                <View styles={styles.message}>
                                    <Text style={styles.textTitle}>Desativar notificação</Text>
                                </View>
                            </View>
                        </TouchableOpacity>}
                        <TouchableOpacity style={styles.containerMessage} onPress={() => setModal(true)}>
                            <View style={styles.contentMessage}>
                                <Paint styles={styles.perfil} />
                                <View styles={styles.message}>
                                    <Text style={styles.textTitle}>Alterar tema </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerMessage}>
                            <View style={styles.contentMessage}>
                                <Question styles={styles.perfil} />
                                <View styles={styles.message}>
                                    <Text style={styles.textTitle}>Manual</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerMessage} onPress={() => logout()}>
                            <View style={styles.contentMessage}>
                                <Exit styles={styles.perfil} />
                                <View styles={styles.message}>
                                    <Text style={styles.textTitle}>Sair</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <ModalTheme visible={modal} handleClose={handleClose} />
                </Animatable.View>
            </Wrapper>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerForm: {
        flex: 1,
        top: '5%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    title: {
        fontSize: 28,
        top: '5%',
        fontWeight: 'bold',
        color: '#FFF',
        paddingStart: '28%'
    },
    containerMessage: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 90,
        paddingLeft: 60,
    },
    contentMessage: {
        paddingRight: 150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 20,
        color: 'white',
        paddingLeft: 20,
        fontWeight: '500'
    },
    perfil: {
        padding: 20,
    },
    message: {
        justifyContent: 'center',
    }
})
export default Settings