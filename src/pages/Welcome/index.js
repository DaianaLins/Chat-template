import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { styles } from "./styles";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          style={{ width: '60%' }}
          source={require('../../assets/logo.png')}
          resizeMode="contain" />
      </View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>CallOn</Text>
        <Text style={styles.text}>Faça o login para começar</Text>
        <TouchableOpacity style={styles.button}
        onPress={ () => navigation.navigate('SignIn') }
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}



export default Welcome

