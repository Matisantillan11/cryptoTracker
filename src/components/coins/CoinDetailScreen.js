import React, {Component} from "react";
import { View, Text, Image, SectionList ,StyleSheet } from "react-native";
import Colors from '../../resources/colors';

class CoinDetailScreen extends Component {

    state = {
        coin: {},
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

    componentDidMount() {
        const { coin }  = this.props.route.params;

        this.props.navigation.setOptions({title: coin.symbol });

        this.setState({ coin });

    }

    render(){

        const { coin } = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.subHeader}>
                    <Image style={styles.iconImage} source={{uri:  this.getSymbolIcon(coin.name)}}></Image>
                    <Text style={styles.coinName}>{ coin.name} </Text>
                </View>
                <SectionList 
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
    }

})

export default CoinDetailScreen; 