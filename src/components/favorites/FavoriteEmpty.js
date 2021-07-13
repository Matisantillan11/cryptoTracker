import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from'../../resources/colors';

const FavoriteEmpty = ({ onPress }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>You don't have any favorite yet</Text>
            <Pressable 
            onPress = {onPress}
            style={styles.button}>
                <Text style={styles.buttonText}>Go to Coins</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
 container:{
     flex:1,
     alignItems:"center",
     justifyContent: 'center'
 },
 text: {
     color: "#f1f1f1",
     fontWeight: "bold",
     fontSize: 22,
     alignSelf: "center",
 },
 button: {
     backgroundColor: Colors.softBlue, 
     paddingVertical: 16,
     paddingHorizontal: 30,
     marginTop: 10,
     borderRadius: 12
 },
 buttonText:{
    color: Colors.softWhite,
    fontSize:18,
 }
});

export default FavoriteEmpty;