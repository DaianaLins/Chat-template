import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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