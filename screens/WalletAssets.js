import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, FlatList, Dimensions } from 'react-native'
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useSelector, } from "react-redux"
import WalletAddressLoader from "../loaders/walletAssetsLoader"
import { useDispatch, } from "react-redux"
import { changeWalletAsset, loadCoins } from "../store/action/appStorage";
import Error from '../component/errorComponent'
import UserAssetCard from "../component/userAssetsCard"

let WalletAddress = ({ navigation }) => {
    //getting crypto data from coinmarcap
    let [text, setText] = useState('')
    let [focus, setFocus] = useState(false)
    let [coins, setCoins] = useState([])
    let [isLoading, setIsLoading] = useState(false)
    let { currentWalletCoin } = useSelector(state => state.userAuth)
    let [error, setError] = useState(false)

    let [isRefreshing, setIsRefreshing] = useState(false)
    let dispatch = useDispatch()
    let selectionHandler = (coin) => {
        let response = dispatch(changeWalletAsset(coin))
    }

    let filterFunction = (e) => {
        if (!e) {
            fetchData()
            return
        }
        let arr = []
        coins.map(data => {
            var regex = new RegExp(e, "g")
            if (data.name.match(regex)) {
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
        }, 3000)

    }




    //method that handle searching functions 
    const changeText = (e) => {
        setText(e)
        debounce(filterFunction, e)
    }



    let fetchData = async (pageNumber) => {
        // You can await here
        if (isRefreshing) {
            return;
        }
        setIsLoading(true)
        let response = await dispatch(loadCoins(pageNumber))
        if (!response.bool) {
            setError(true)
        }
        setCoins((existingCoins) => [...existingCoins, ...response.message]);
        setIsLoading(false)

    }

    useEffect(() => {
        fetchData()
    }, [])


    if (isLoading) {
        return <WalletAddressLoader />
    }
    if (error) {
        return <Error />
    }


    return <SafeAreaView style={styles.screen}>
        <View style={styles.headerContainer}>
            <View style={styles.assetsheaderCon}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerIconCon}>
                    <Feather name="arrow-left" size={25} color={"rgb(44,44,44)"} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.headerTextCon} onPress={() => navigation.goBack()}>
                    <Text style={styles.headerText}>Select asset</Text>
                </TouchableOpacity>


            </View>
            <View style={styles.searchCon}>
                <View style={focus ? { ...styles.inputContainer, borderColor: '#1652f0' } : { ...styles.inputContainer }}>
                    <FontAwesome name="search" size={18} color={focus ? "#1652f0" : "grey"} />

                    <TextInput
                        style={{ ...styles.input, borderColor: 'orange' }}
                        onChangeText={changeText}
                        value={text}
                        placeholder="Password"
                    />
                </View>

            </View>
        </View>



        <FlatList
            showsVerticalScrollIndicator={false}
            data={coins}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <UserAssetCard
                coin={item}
                currentCoin={currentWalletCoin}
                navigationHandler={()=>selectionHandler(item)}
            />}


        />

    </SafeAreaView>

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'column',

        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        zIndex: 10,
        paddingTop: 40,

        height: Dimensions.get('window').height / 5

    },
    headerIconCon: {
        flex: 1

    },
    headerTextCon: {
        flex: 3

    },
    headerText: {
        fontSize: 18,
        fontFamily: 'Poppins'

    },
    assetsheaderCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20
    },
    searchCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',

    },
    inputContainer: {
        width: '100%',
        marginRight: 15,
        borderRadius: 25,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderColor: 'rgb(180,180,180)',
        height: 50

    },
    input: {
        paddingHorizontal: 10,
        fontFamily: 'ABeeZee',
        marginBottom: 5,
        alignSelf: 'stretch',
        width: '80%',
        fontSize: 17,

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



export default WalletAddress