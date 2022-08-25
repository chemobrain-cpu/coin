import React, { memo } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'


let CryptoCard = ({ navigationHandler,coin }) => {
    //destructuring the coin datastructure
    let {image,name,id,symbol,current_price,price_change_percentage_24h} = coin
    

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

    
    return <TouchableOpacity key={id} style={styles.cryptoContainer} onPress={navigationHandler}  >


        <View style={styles.containerLeft} >
            <Image
                source={{ uri:image }}
                style={styles.imageLogo}
            />
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{truncate(name,7)}</Text>
                <Text style={styles.symbolText}>{symbol}</Text>

            </View>
        </View>

        <View style={styles.containerRight}>
            <Text style={styles.priceText}>${parseFloat(current_price).toFixed(2)}</Text>
            <Text style={{...styles.iconText,color:price_change_percentage_24h < 0 ?'red':'green'}}>{price_change_percentage_24h < 0 ?  <Feather name="arrow-down-right" size={20} color="red" /> : <Feather name="arrow-up-right" size={20} color="green" />}{Math.abs(price_change_percentage_24h)?.toFixed(2)}%</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
   
    cryptoContainer: {
        paddingVertical: 18,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: Dimensions.get('window').width,
        paddingHorizontal:20,
    },
    containerLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width:'48%', 
    },
    containerRight: {
        display: 'flex',
        flexDirection: 'column',
        width:'48%',
    },
    imageLogo: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 0.5,
        borderColor: "#ddd",
    },
    nameContainer: {
        flex: 1,
        paddingLeft: 10
    },
    nameText: {
        fontSize: 17,
        fontFamily:'Poppins'
    },
    symbolText: {
        fontSize: 17,
        fontFamily:'Poppins',
        color:"#5d616d"
    },
    priceText: {
        fontSize: 18,
        fontFamily:'Poppins',
        alignSelf: 'flex-end'
    },
    iconText: {
        fontSize: 16,
        fontFamily:'Poppins',
        color: "#5d616d",
        alignSelf: 'flex-end'
    }

})



export default memo(CryptoCard)