import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// import { Container } from './styles';


const FooterList = ({ load }) => {
    if (!load) return null;
    return (
        <View style={{ padding: 10 }}>
            <ActivityIndicator size={25} color='#ACAEB0' />
        </View>
    );
}

export default FooterList;