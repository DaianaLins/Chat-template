import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import StatusBox from '../statusBox/statusBox';

import { useNavigation } from "@react-navigation/native";

// import { Container } from './styles';

const ListItem = ({ data, onPress }) => {
  
  const navigation = useNavigation()
    return (
      <View>
        <TouchableOpacity onPress={()=> navigation.navigate('DetailsConversation', {username: data.full_name})}>
          <StatusBox name={data.full_name} time={1} />
        </TouchableOpacity>
      </View>
    );
}

export default ListItem;