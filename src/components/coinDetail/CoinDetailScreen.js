import React, {Component} from "react";
import { View, Text, Image, SectionList, FlatList ,StyleSheet } from "react-native";
import Colors from '../../resources/colors';
import Http from '../../librarys/Http';
import CoinMarketItem from './CoinMarketItem.js'

class CoinDetailScreen extends Component {

    state = {
        coin: {},
        markets: {},
    }

    getSections = (coin) => {
        const data =[
            {
            title: "Market Cap",
            data:[coin.market_cap_usd]
            },
            {
                title:"Volumen 24h", 
                data:[coin.volume24]
            },
            {
                title:"Change 24h", 
                data:[coin.percent_change_24h]
            }
        ]
        return data;
    }

    getSymbolIcon = (symbolStr) =>{
        if (symbolStr){
            const symbol = symbolStr.toLowerCase().replace(" ", "-");
            return `https://c1.coinlore.com/img/25x25/${symbol}.png`
        }
    }

    getMarket = async (coinId) =>{
        const uri = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`
        const markets = await Http.instance.get(uri);
        this.setState({markets}); 
    
    }

    componentDidMount() {
        const { coin }  = this.props.route.params;

        this.props.navigation.setOptions({title: coin.symbol });
        this.getMarket(coin.id)
        this.setState({ coin });

    }



    render(){

        const { coin, markets } = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.subHeader}>
                    <Image style={styles.iconImage} source={{uri:  this.getSymbolIcon(coin.name)}}></Image>
                    <Text style={styles.coinName}>{ coin.name} </Text>
                </View>
                <SectionList 
                style={styles.section}
                sections={this.getSections(coin)} 
                keyExtractor={(item) => item}
                renderItem={({item}) => 
                    <View style={styles.sectionItem}>
                        <Text style={styles.itemText}>{item}</Text>
                    </View>}
                renderSectionHeader={({section}) => 
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionText}>{section.title}</Text>
                    </View> }/>

                <Text style={styles.marketTitle}>Mercados</Text>

                <FlatList 
                horizontal={true}
                style={styles.list}
                data={markets}
                renderItem={({item}) => <CoinMarketItem item={item}/>}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.darkGray
    },
    subHeader:{
        backgroundColor: "rgba(0,0,0,0.2)",
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
    },
    iconImage: {
        width:50,
        height: 50
    },
    coinName:{
        fontSize: 24,
        color: Colors.softWhite,
        marginLeft: 10
    },
    section:{
        maxHeight:350,
    },
    sectionHeader: {
        backgroundColor: "rgba(0,0,0,0.2)",
        padding: 16
    },
    sectionItem: {
        padding: 16,
    },
    itemText: {
        color: Colors.softWhite,
        fontSize:18,
    },
    sectionText:{
        color: Colors.softWhite,
        fontSize: 18,
        fontWeight: "bold",
    },
    marketTitle:{
        color: Colors.softWhite,
        fontSize: 25,
        fontWeight: "bold",
        paddingLeft: 10,
    }, 
    list:{
        marginLeft: 14,
        maxHeight: 100,
    }

})

export default CoinDetailScreen; 