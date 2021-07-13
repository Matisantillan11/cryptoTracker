import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

import Colors from '../../resources/colors'
const CoinMarketItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.priceText}>{item.price_usd}</Text>
        </View>
    
        );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0, 0.1)',
        borderColor: Colors.softBlue,
        borderWidth:1,
        padding: 18,
        margin: 10,
        marginLeft: 0,
        alignItems: 'center'
    },
    nameText:{
        color: Colors.softWhite,
        fontSize: 16,
        fontWeight: "bold"
    },
    priceText: {
        color: Colors.softWhite
    }
})

export default CoinMarketItem;