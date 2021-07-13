import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native'
import FavoriteEmpty from './FavoriteEmpty';
import Colors from '../../resources/colors';

class FavoritesScreen extends Component{

    
    handlePress = () => {
        this.props.navigation.navigate("Coins");
    }

    render(){
        return(
            <View style={styles.container} >
               <FavoriteEmpty onPress={this.handlePress}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.darkGray,
        flex:1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default FavoritesScreen;
