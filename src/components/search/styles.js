import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    containerSearch: {
        paddingStart: '5%',
    },
    containerSearchForm: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '95%',
        height: 44,
        backgroundColor: 'rgba(152, 147, 147, 0.2)',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 25,
        fontSize: 16,
        color: 'black'
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