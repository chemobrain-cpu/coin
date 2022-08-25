import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Image,
    Dimensions,
    ActivityIndicator,
    Modal,
    Alert
} from "react-native";
import { Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux"
import { Card } from "react-native-shadow-cards"
import { getDetailedCoinData } from "../store/action/appStorage";
import Error from "../component/errorComponent"

const Calculator = ({ navigation }) => {
    let [value, setValue] = useState([])
    let [isLoading, setIsLoading] = useState(true)
    let [isError, setIsError] = useState(false)
    let [inputPrice, setInputPrice] = useState(0)
    let [conversionRate, setConversionRate] = useState(0)
    let { currentWalletCoin,user } = useSelector(state => state.userAuth)
    const [modalVisible, setModalVisible] = useState(true);
    const dispatch = useDispatch()

    let modalHandler = () => {
        setModalVisible(prev => !prev)
    }
    let navigateToCard = ()=>{
        navigation.navigate('CardForm')
    }

    let getCoinDetail = async () => {
        let response = await dispatch(getDetailedCoinData(currentWalletCoin.name))
        if (!response.bool) {
            //set error loader to true
            console.log(response.message)
            setIsError(true)
            setIsLoading(false)
            return
        }
        setConversionRate(response.message.market_data.current_price.usd)
        setIsLoading(false)

    }

    let button = (num) => {
        let arr = []
        if (value.length >= 7) {
            return
        }
        setValue(prev => {
            let newArr = [...prev, num]
            arr = newArr
            return newArr
        })

        //join arr into a single number
        let newNumber = Number(arr.join(""))
        setInputPrice(newNumber)




    }

    let deleteHandler = () => {
        if (value.length == 0) {
            return
        }
        let arr = []

        setValue(prev => {
            if (prev.length > 0) {
                let newArr = prev.pop()
                arr = prev
                return arr

            }

        })
        if (arr.length == 0) {
            setInputPrice(0)
            return

        }
        let newNumber = Number(arr.join(""))
        setInputPrice(newNumber)


    }
    let fullStop = () => {
        return

    }
    let navigateHandler = () => {
        if (inputPrice == 0) {
            Alert.alert('please enter a valuable amount')
            return
        }
        if(!user.cardStatus){
            return navigation.navigate('CardForm')

        }
        //else navigate to transfer options
        return navigation.navigate('TransferOptions')
    }

    useEffect(() => {
        getCoinDetail()
    }, [getCoinDetail])

    if (isLoading) {
        return <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size={30} color="blue" />
        </View>
    }

    if (isError) {
        return <Error />
    }


    return (<>
           <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalTop}>
                </View>

                <View style={styles.modalView}>

                    <Text style={styles.modalHeader}>You'll need to top up</Text>

                    <Text style={styles.modalText}>You need to activate your account by adding a payment method to use available funds and top up funds later</Text>

                    <TouchableOpacity style={styles.modalButtonContainer} onPress={navigateToCard}>
                        <Text style={styles.modalButtonText}>Add a payment method</Text>
                    </TouchableOpacity>



                </View>

            </View>



        </Modal>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView contentContainerStyle={styles.scrollContainer} stickyHeaderIndices={[0]}>
                <View style={{ display: 'flex', width: '100%' }}>
                    <View style={{ ...styles.headerContainer, }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerContainerIcon} >
                            <AntDesign name="close" size={23} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.headerContainerTitle} >
                            <Text style={styles.title}>Enter amount</Text>
                            <Text style={styles.balance}>$ {currentWalletCoin.amount} of BTC available </Text>
                        </TouchableOpacity>



                    </View>
                </View>


                <View style={styles.priceContainer}>
                    <TouchableOpacity style={styles.maxButtonCon}>
                        <Text style={styles.maxText}>Max</Text>

                    </TouchableOpacity>

                    <View style={styles.valueCon}>
                        {inputPrice == 0 ? <View style={styles.moneyCon}>
                            <Text style={styles.money}>$ {inputPrice}</Text>

                        </View> : <View style={styles.twoPriceColumn}>
                            <Text style={styles.dollarPrice}>${inputPrice}</Text>
                            <Text style={styles.cryptoPrice}>{(inputPrice / conversionRate).toFixed(4)} BTC</Text>
                        </View>}

                    </View>


                    <TouchableOpacity style={styles.invertButtonCon}>
                        <MaterialCommunityIcons name="swap-vertical" size={24} color="black" />
                    </TouchableOpacity>


                </View>

                <Card style={styles.card}>
                    <View style={styles.cryptoCon}>
                        <View style={styles.cryptoLogo}>
                            <Image source={{ uri: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/btc.png" }}
                                style={styles.image} />

                        </View>
                        <View style={styles.cryptoNameCon}>
                            <Text style={styles.cryptoName}>Bitcoin</Text>

                        </View>

                    </View>
                    <View style={styles.cryptoWorth}>
                        <Text style={styles.cryptoWorthCash}>$ {currentWalletCoin.amount}.0</Text>
                        <Text style={styles.cryptoWorthText}>{(currentWalletCoin.amount / conversionRate).toFixed(2)} BTC</Text>

                    </View>
                </Card>

                <View style={styles.calculatorCon}>
                    <View style={styles.numberContainer}>
                        <TouchableOpacity style={styles.numberButton} onPress={() => button(1)}>
                            <Text style={styles.number}>1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.numberButton} onPress={() => button(2)}>
                            <Text style={styles.number}>2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.numberButton} onPress={() => button(3)}>
                            <Text style={styles.number}>3</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.numberContainer}>
                        <TouchableOpacity style={styles.numberButton} onPress={() => button(4)}>
                            <Text style={styles.number}>4</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.numberButton} onPress={() => button(5)}>
                            <Text style={styles.number}>5</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.numberButton} onPress={() => button(6)}>
                            <Text style={styles.number}>6</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.numberContainer}>
                        <TouchableOpacity style={styles.numberButton} onPress={() => button(7)}>
                            <Text style={styles.number}>7</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.numberButton} onPress={() => button(8)}>
                            <Text style={styles.number}>8</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.numberButton} onPress={() => button(9)}>
                            <Text style={styles.number}>9</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.numberContainer}>
                        <TouchableOpacity style={styles.numberButton} onPress={() => fullStop(".")}>
                            <Text style={styles.number}>.</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.numberButton} onPress={() => button(0)}>
                            <Text style={styles.number}>0</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.numberButton} onPress={() => deleteHandler()}>
                            <Feather name="arrow-left" size={22} color="rgb(44, 44, 44)" />
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={styles.buttonCon}>
                    <TouchableOpacity style={{ ...styles.button }} onPress={navigateHandler}>
                        <Text style={styles.buttonText}>Continue</Text>

                    </TouchableOpacity>

                </View>



            </ScrollView>

        </SafeAreaView>
    </>);
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'

    },
    modalTop: {
        height: 4,
        width: '20%',
        backgroundColor: 'rgb(225,225,225)',
        position: 'absolute',
        top: '62%',
        alignSelf: 'center',
        borderRadius: 5

    },
    modalView: {
        borderRadius: 20,
        position: 'absolute',
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        top: '65%',
        height: '35%',
        display: 'flex',
        flexDirection: 'column',
        borderTopColor: 'rgb(240,240,240)',
        borderTopWidth: 1,
        paddingTop: 20,
        paddingHorizontal:20

    },
    modalHeader: {
        fontSize: 20,
        fontFamily: 'Poppins',
        alignSelf: 'flex-start',
        marginBottom: 10

    },
    modalText: {
        fontSize: 16,
        fontFamily: 'ABeeZee',
        alignSelf: 'flex-start',
        marginBottom: 10,
        color:'rgb(100,100,100)'

    },
    modalButtonContainer:{
        width:'100%',
        backgroundColor:'rgb(240,240,240)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:14,
        borderRadius:30

    },
    modalButtonText:{
        fontSize: 16,
        fontFamily: 'Poppins',

    },


    /*end of modal*/
    scrollContainer: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 15,
    },
    headerContainer: {
        paddingTop: 40,
        display: "flex",
        flexDirection: "row",
        marginBottom: 45,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    headerContainerIcon: {
        flex: 1

    },
    headerContainerTitle: {
        flex: 5,
    },

    title: {
        fontSize: 16,
        fontFamily: 'Poppins',
        paddingLeft: 50
    },
    balance: {
        fontSize: 17,
        fontFamily: 'ABeeZee',
        paddingLeft: 8,
        color: 'rgb(100,100,100)'
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 65
    },
    valueCon: {
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    twoPriceColumn: {
        justifyContent: 'center',
        alignItems: 'center'

    },
    dollarPrice: {
        fontSize: 25,
        fontFamily: 'ABeeZee',
        color: '#1652f0'

    },
    cryptoPrice: {
        fontSize: 15,
        fontFamily: 'ABeeZee'

    },
    moneyCon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


    },
    money: {
        fontSize: 40,
        color: '#1652f0',
        fontFamily: 'Poppins'

    },
    maxButtonCon: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: 'rgb(240,240,240)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    maxText: {
        fontSize: 16,
        fontFamily: 'Poppins',

    },
    invertButtonCon: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'rgb(240,240,240)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    card: {
        height: 80,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 35
    },
    cryptoCon: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cryptoWorth: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingRight: 15,
        justifyContent: 'center'
    },
    cryptoWorthCash: {
        fontSize: 17,
        fontFamily: 'ABeeZee'

    },
    cryptoWorthText: {
        fontSize: 17,
        fontFamily: 'ABeeZee'

    },
    image: {
        width: 30,
        height: 30

    },
    cryptoNameCon: {
        marginLeft: 10

    },
    cryptoName: {
        fontSize: 17,
        fontFamily: 'Poppins'
    },
    calculatorCon: {
        width: '100%',
        height: 250
    },
    numberContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    numberButton: {
        width: 30,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    number: {
        fontSize: 28,
        fontFamily: 'Poppins'
    },


    buttonCon: {
        width: '100%',
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '95%',
        backgroundColor: '#1652f0',
        paddingVertical: 16,
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontFamily: "ABeeZee",
        color: '#fff',

    }
})

export default Calculator;