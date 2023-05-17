import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text,  StyleSheet, TouchableOpacity } from "react-native";

const footer = ({contacts}) => {
  const navigation = useNavigation()
    return(
        <View  style={styles.content}>
        <Text style={styles.span}>{contacts}</Text>
        <View style={styles.containerBtn}>
             <TouchableOpacity style={styles.button3}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.buttonText3} >CANCELAR</Text>
          </TouchableOpacity>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    content:{
        justifyContent: 'center',
        height: 90,
        borderWidth: 1,
        borderColor: "#998282",
        padding: 5
    },
    containerBtn:{
        justifyContent: 'center',
        alignItems: 'flex-end',
        bottom: '35%',
    },
    button3: {
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width: 121,
        height: 31
    
      },
      buttonText3: {
        fontSize: 14,
        fontWeight: '500',
        color: '#1976D2',
      },
      span:{
        fontSize: 11,
        paddingStart: 20,
        color: '#777777',
        bottom: '5%',
      }
})
export default footer