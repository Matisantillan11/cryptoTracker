import React, {Component} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'
import FavoriteEmpty from './FavoriteEmpty';
import Colors from '../../resources/colors';
import Storage from '../../librarys/Storage';
import CoinsItem from '../coins/CoinsItem';

class FavoritesScreen extends Component{
    state={favorites:[]}

    getFavorites = async () => {
        try{
            let allKeys = await Storage.instance.getAllKeys();
            const keys = allKeys.filter(key => key.includes("favorite-"))
            console.log("all", keys);
            const favs = await Storage.instance.getAll(keys);
            console.log(favs)
            const favorites = favs.map(favorite => JSON.parse(favorite[1]))
            this.setState({ favorites })
        }catch(err){
            console.error("[error]", err)
        }
    }
    handlePress = () => {
        this.props.navigation.navigate("Coins");
    }

    handleDetails = (coin) =>{
        this.props.navigation.navigate("CoinDetail", { coin })
    }

    componentDidMount(){
        this.props.navigation.addListener("focus", this.getFavorites);
    }

    componentWillUnmount(){
        this.props.navigation.removeListener("focus", this.getFavorites);
    }

    render(){
        const { favorites } = this.state;
        return(
            <View style={styles.container} >

                {favorites.length == 0 
                ? <FavoriteEmpty onPress={this.handlePress}/>
                : null
                }

                {favorites.length != 0 ? 
                <FlatList
                    data={favorites}
                    renderItem={({item}) => <CoinsItem item={item}
                    onPress = { () => this.handleDetails(item)} />} /> : null}
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
