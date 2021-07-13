import React, {Component} from "react";
import { View, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import CoinsSearch from './CoinsSearch'

import Http from "../../librarys/Http"

import CoinsItem from "./CoinsItem";
class CoinsScreen extends  Component {
    
    state={
        coins:[],
        allCoins: [],
        loading: false,
    }

    componentDidMount = async () =>{
        this.getCoins();
    }

    getCoins =  async () => {
        this.setState({ loading: true })
        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
        this.setState({ coins: res.data, allCoins: res.data, loading: false });
    }

    handlePress = (coin) =>{
        this.props.navigation.navigate("CoinDetail", { coin })
    }
    
    handleSearch = (query) => {
        const { allCoins } = this.state;

        const coinsFiltered = allCoins.filter(( coin ) =>{
            return coin.name.toLowerCase().includes(query.toLowerCase()) || coin.symbol.toLowerCase().includes(query.toLowerCase());
        })

        this.setState({ coins: coinsFiltered})
    }
    render(){

        const { loading, coins } = this.state;

        return(
            <View style={styles.container}>
                <CoinsSearch onChange={this.handleSearch} />
                {loading 
                ? 
                <ActivityIndicator 
                style={styles.loader}
                color="#fff"
                size="large"
                /> 
                : null}
                <FlatList data={coins} 
                renderItem={({ item }) => 
                    <CoinsItem 
                    item={item} 
                    onPress={() => this.handlePress(item)} 
                    />
                    }
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#333",
    },
    text:{
        color:"#f1f1f1",
        fontSize: 22,
        textAlign:"center",
        margin: 15,
    },
    loader:{
        marginTop: 300,
    },
    btn:{
        padding: 8,
        backgroundColor: "#3866a3",
        borderRadius: 8,
        margin: 16,
    },
    btnText:{
        color:"#f1f1f1",
        textAlign: "center",
        fontSize: 18,
    }
})
export default CoinsScreen;