import React, {Component} from "react";
import { View, ActivityIndicator, FlatList, StyleSheet } from "react-native";

import Http from "../../librarys/Http"

import CoinsItem from "./CoinsItem";
class CoinsScreen extends  Component {
    
    state={
        coins:[],
        loading: false,
    }

    componentDidMount = async () =>{
        this.setState({ loading: true })
        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
        this.setState({ coins: res.data, loading: false })
    }

    handlePress = () =>{
        this.props.navigation.navigate("CoinDetail")
    }
    
    render(){

        const { loading, coins } = this.state;

        return(
            <View style={styles.container}>
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
                    <CoinsItem item={item} />
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