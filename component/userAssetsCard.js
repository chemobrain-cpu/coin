import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'


let UserAssetCard = ({ navigationHandler, coin, currentCoin }) => {
    //destructuring the coin datastructure
    let { image, name, id, symbol } = coin
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
    }

    return <TouchableOpacity key={id} style={{ ...styles.cryptoContainer, backgroundColor: currentCoin.symbol == symbol ? 'rgb(240,240,240)' : '#fff' }} onPress={navigationHandler}  >
        <View style={styles.containerLeft} >
            <Image
                source={{ uri: image }}
                style={styles.imageLogo}
            />
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{truncate(name, 7)}</Text>
                <Text style={styles.symbolText}>{symbol.toUpperCase()}</Text>

            </View>
        </View>

        <View style={styles.containerRight}>
            <View style={styles.innerContainerRight}>
                <Text style={styles.priceText}>${currentCoin? currentCoin.amount : 0.00}</Text>
                <Text style={{ ...styles.iconText, color: 'grey' }}>0 {symbol.toUpperCase()}</Text>

            </View>

            {currentCoin.symbol == symbol && <AntDesign name="check" size={24} color="#1652f0" />}
        </View>

    </TouchableOpacity>
}

const styles = StyleSheet.create({

    cryptoContainer: {
        paddingVertical: 10,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: "100%",

    },
    containerLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '50%',

    },
    containerRight: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '50%',
    },
    innerContainerRight: {
        width: '60%',
        display: 'flex',
        alignContent: 'flex-start',
        marginRight: 5



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
        fontSize: 16,
        fontFamily: 'Poppins'
    },
    symbolText: {
        fontSize: 16,
        fontFamily: 'Poppins',
        color: "#5d616d"
    },
    priceText: {
        fontSize: 18,
        fontFamily: 'Poppins',
        alignSelf: 'flex-end'
    },
    iconText: {
        fontSize: 16,
        fontFamily: 'Poppins',
        color: "#5d616d",
        alignSelf: 'flex-end'
    }

})



export default UserAssetCard