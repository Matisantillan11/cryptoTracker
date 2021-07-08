import React from 'react';
import {View, Pressable,Text, StyleSheet, Image} from 'react-native';
import  Colors  from '../../resources/colors';

import ArrowUp from '../../assets/arrow_up.png';
import ArrowDown from '../../assets/arrow_down.png';

const CoinsItem = ({ item, onPress }) => {

    return(
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.symbolText}>{item.symbol}</Text>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.priceText}>${item.price_usd}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.percentText}>{item.percent_change_1h}</Text>
                {(item.percent_change_1h > 0) ? 
                <Image style={styles.arrowStyle}
                source={ArrowUp} /> : 
                <Image style={styles.arrowStyle}
                source={ArrowDown} />
            }
            
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomColor: Colors.softWhite,
        borderBottomWidth: 1, 
        paddingVertical: 24,
        paddingHorizontal: 20,
    },
    row:{
        flexDirection:"row",
    },
    symbolText: {
        fontSize: 18,
        color: Colors.softWhite,
        marginRight: 20,
    },
    nameText: {
        fontSize: 16,
        marginRight: 25,
        color: Colors.softWhite,
    },
    priceText:{
        color: Colors.softWhite,
        fontSize:16
    },
    percentText: {
        color: Colors.softWhite,
        fontSize: 16
    },
    arrowStyle:{
        width: 22,
        height:22,
        marginLeft: 8,
    }
})

export default CoinsItem;