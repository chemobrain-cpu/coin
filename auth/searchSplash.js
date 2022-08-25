import React, { useState, useEffect, } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, TextInput,FlatList} from 'react-native'
import { Feather, FontAwesome } from '@expo/vector-icons'
import CryptoCard from '../component/currencyContainer'
import WalletAddressLoader from "../loaders/walletAssetsLoader";
import {loadCoins } from "../store/action/appStorage";
import Error from '../component/errorComponent'
import { useDispatch, } from "react-redux"

let SearchSplash = ({ navigation }) => {
    //getting crypto data from coinmarcap
    let [text, setText] = useState('')
    let [focus, setFocus] = useState(false)
    let [coins, setCoins] = useState([])
    let [isLoading, setIsLoading] = useState(true)
    let [error, setError] = useState(false)
    let dispatch = useDispatch()

    let navigationHandler = (coin) => {
        navigation.navigate('PriceChart', { price: coin.current_price, percentage: parseFloat(coin.price_change_percentage_24h).toFixed(2), name: coin.id.toLowerCase(),market_cap:coin.market_cap,total_volume:coin.total_volume,circulating_supply:coin.circulating_supply,market_cap_rank:coin.market_cap_rank })
    }

    let filterFunction = (e) => {
        if (!e) {
            fetchData()
            return
        }
        let arr = []
        coins.map(data => {
            var regex = new RegExp(e.toLowerCase(), "g")
            if (data.name.toLowerCase().match(regex)) {
                arr.push(data)
            }
        })
        setCoins(arr)
    }

    let debounce = (func, e) => {
        let timer;
        clearTimeout(timer)
        timer = setTimeout(() => {
            func(e);
        }, 1000)

    }

    //method that handle searching functions 
    const changeText = (e) => {
        setText(e)
        debounce(filterFunction, e)
    }

    let fetchData = async (pageNumber) => {
        // You can await here
        setError(false)
        
        let response = await dispatch(loadCoins(pageNumber))
        if (!response.bool) {
            setError(true)
            setIsLoading(false)
            return
        }
        setIsLoading(false)
        setCoins((existingCoins) => [...existingCoins, ...response.message]);
    }


    useEffect(() => {
        fetchData()
    }, [])

    if (isLoading) {
        return <WalletAddressLoader />
    }
    if (error) {
        return <Error tryAgain={fetchData} navigation={navigation} />
    }

    return <SafeAreaView style={styles.screen}>
            <View style={styles.headerContainer}>
                <View style={styles.assetsheaderCon}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={25} color={"rgb(44, 44, 44)"} />
                    </TouchableOpacity>
                    <View style={focus ? { ...styles.inputContainer, borderColor: '#1652f0' } : { ...styles.inputContainer }}>
                        <FontAwesome name="search" size={18} color={focus ? "#1652f0" : "rgb(44, 44, 44)"} />
                        <TextInput
                            style={{ ...styles.input, borderColor: 'orange' }}
                            onChangeText={changeText}
                            value={text}
                            placeholder="Password"
                            onFocus={() => {
                                setFocus(true);
                            }}
                            onBlur={() => {
                                setFocus(false);
                            }}

                        />
                    </View>

                </View>
            </View>
            <View style={{ ...styles.trendingContainer, zIndex: 5 }}>
                <Text style={styles.trending}>
                    Trending
                </Text>
            </View>

            <View style={styles.middlesection}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={coins}
                    keyExtractor={(item, index) => index.toString()}
                    initialNumToRender={5}
                    renderItem={({ item, index }) =><CryptoCard navigationHandler={() => navigationHandler(item)}
                        key={item}
                        coin={item}
                     />
                }
            />
            </View>
    </SafeAreaView>

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        zIndex: 10,
        paddingTop: 60,
        paddingHorizontal: 15
    },
    trendingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        zIndex: 10,
        paddingTop: 20,
        paddingHorizontal: 17
    },
    assetsheaderCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 10

    },
    inputContainer: {
        width: '80%',
        marginRight: 15,
        borderRadius: 25,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15

    },
    input: {
        height: 45,
        paddingHorizontal: 10,
        fontFamily: 'ABeeZee',
        marginBottom: 5,
        alignSelf: 'stretch',
        width: '80%'
    },
    /*end of header section style*/
    middlesection: {
        backgroundColor: '#fff',
    },
    trending: {
        fontSize: 25,
        fontFamily: 'Poppins'
    },
    searchIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'rgb(240,240,240)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15


    },

    assetText: {
        fontSize: 16,
        fontFamily: 'Poppins',
        paddingLeft: 15
    },

    cryptoInfoCon: {
        paddingTop: 25,
        flexDirection: "row",
        alignItems: "center",
    },

})




export default SearchSplash