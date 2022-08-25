import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Card } from "react-native-shadow-cards"


let CryptoCard = ({ navigationHandler, coin }) => {
    //destructuring the coin datastructure
    let { image, symbol, current_price, price_change_percentage_24h } = coin


    const truncate = (str, len) => {
        if (str.length > len) {
            if (len <= 3) {
                return str.slice(0, len - 3) + "...";
            }
            else {
                return str.slice(0, len) + "...";
            };
        }
        else {
            return str;
        };
    };

    return <TouchableOpacity>
        <Card key={coin.id}
            style={styles.cardContainer}>

            <View>
                <Image
                    source={{ uri: image }}
                    style={styles.image} />
            </View>

            <View style={styles.priceContainer}>
                <Text style={styles.symbol}>{symbol}</Text>
                <Text style={styles.price}>${current_price}</Text>
            </View>

            <View style={styles.percentageContainer}>
                {price_change_percentage_24h < 0 ? <Feather name="arrow-down-right" size={28} color="red" /> : <Feather name="arrow-up-right" size={28} color="green" />}
                <Text style={{ ...styles.percentage, color: price_change_percentage_24h < 0 ? "red" : "green" }}>${Math.abs(price_change_percentage_24h)}%</Text>
            </View>



        </Card>

    </TouchableOpacity>
}

const styles = StyleSheet.create({

    cardContainer: {
        width: 180,
        height: 160,
        borderWidth: 0.5,
        borderColor: "#ddd",
        borderRadius: 10,
        marginRight: 15,
        paddingHorizontal: 15,
        
    },
    image: {
        width: 40,
        height: 40,
        marginTop: 10
    },
    priceContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    symbol: {
        fontSize: 17,
        fontWeight: "500",
        fontFamily: 'Poppins',
        marginRight:15
    },
    price: {
        fontSize: 17,
        paddingLeft: 5,
        color: "#5D616D",
        fontFamily: 'Poppins',
    },

    percentage: {
        fontSize: 28,
        paddingLeft: 5,
        fontFamily: 'Poppins',
    },
    percentageContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center"
    }


})



export default CryptoCard