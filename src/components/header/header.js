import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const header = props => {
    const navigation = useNavigation()
    return (
        <View >
            <View style={styles.contaneirHeader}>
                <View style={styles.content}>
                    <Text style={styles.message}>{props.title}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contaneirHeader: {
        paddingTop: '10%',
        paddingBottom: '20%',
        backgroundColor: '#212121',
        paddingStart: '5%'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#FFF',
        paddingStart: '5%'

    },
   

})

export default header