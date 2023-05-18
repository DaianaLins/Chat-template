import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Paint from '../../assets/paint'
import Person from '../../assets/person'
import Exit from '../../assets/exit'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";
import ModalTheme from "../../components/modalTheme/modalTheme";
import { Wrapper } from "../../routes/styles";
import { SettingsContext } from "../../context/SettingsContext";
import themeColor from '../../themes'
import { styles } from "./styles";

const Settings = () => {
    const navigation = useNavigation()
    const [modal, setModal] = useState(false)
    const { theme, color } = useContext(SettingsContext)

    const handleClose = () => {
        setModal(false)
    }

    const logout = () => {
        // AsyncStorage.removeItem("TOKEN")
        navigation.reset({
            index: 0,
            routes: [{ name: 'SignIn' }]
        })
    }
    return (
        <Wrapper style={[styles.container, { backgroundColor: themeColor[theme].background }]}>

            <Animatable.View style={[styles.containerForm, { backgroundColor: color }]} animation="fadeInUp" resizeMode="contain"  >
                <Text style={styles.title}>Configurações</Text>
                <View style={{ paddingTop: '20%' }}>
                    <TouchableOpacity style={styles.containerMessage} onPress={() => setModal(true)}>
                        <View style={styles.contentMessage}>
                            <Paint styles={styles.perfil} />
                            <View styles={styles.message}>
                                <Text style={styles.textTitle}>Alterar tema </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerMessage} onPress={() => navigation.navigate('Perfil')}>
                        <View style={styles.contentMessage}>
                            <Person styles={styles.perfil} />
                            <View styles={styles.message}>
                                <Text style={styles.textTitle}>Editar Perfil</Text>
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
    )
}

export default Settings