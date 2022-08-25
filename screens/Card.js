import React, { useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    TextInput,
    Modal
} from 'react-native'

import { Feather, MaterialIcons } from '@expo/vector-icons';
import Clipboard from '@react-native-community/clipboard';

const Card = ({ navigation }) => {
    const [header, setHeader] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);


    let modalHandler = () => {
        setModalVisible(prev => !prev)
    }

    const scrollHandler = (e) => {
        if (e.nativeEvent.contentOffset.y > 5) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }



    const writeToClipboard = async () => {
        //To copy the text to clipboard
        await Clipboard.setString(link);
        alert('copied link')

    };

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

                   



                </View>

            </View>



        </Modal>

        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollviewContainer} onScroll={scrollHandler} stickyHeaderIndices={[0]}>
                <View style={{ ...styles.navigationHeader }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ ...styles.goback }} >
                        <Feather name="arrow-left" size={24} color="rgb(44, 44, 44)" />
                    </TouchableOpacity>
                </View>


                <View style={styles.title}>
                    <Text style={styles.titleText}>Card Information</Text>


                </View>

                <View style={styles.formCon}>
                    <Text style={styles.label}>Name on Card</Text>
                    <TextInput style={styles.input} placeholder='Harry John' placeholderTextColor="black" />

                </View>

                <View style={styles.formCon}>
                    <Text style={styles.label}> Card number</Text>
                    <View style={styles.NumberinputContainer}>
                        <TextInput style={styles.numberinput} placeholder='XXXX XXXX XXXX XXXX' placeholderTextColor="black" />

                    </View>


                </View>

                <View style={{ ...styles.formCon, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={styles.innerInputContainer}>
                        <Text style={styles.label}> Expiration</Text>
                        <TextInput style={styles.input} placeholder="MM/YY" placeholderTextColor="black" />

                    </View>
                    <View style={styles.innerInputContainer}>
                        <Text style={styles.label}> CVC</Text>
                        <TextInput style={styles.input} placeholder="123" placeholderTextColor="black" />

                    </View>


                </View>

                <View style={styles.formCon}>
                    <Text style={styles.label}>Postal code</Text>
                    <TextInput style={styles.input} placeholderTextColor="black" />

                </View>

                <View style={styles.title}>
                    <Text style={styles.titleText}>Account Information</Text>


                </View>


                <View style={styles.formCon}>
                    <Text style={styles.label}>Name of bank</Text>
                    <TextInput style={styles.input} placeholderTextColor="black" />

                </View>


                <View style={styles.formCon}>
                    <Text style={styles.label}>Account Number</Text>
                    <TextInput style={styles.input} placeholderTextColor="black" />

                </View>

                <View style={styles.formCon}>
                    <Text style={styles.label}>Address 1</Text>
                    <TextInput style={styles.input} placeholderTextColor="black" />

                </View>










                <View style={styles.footer}>
                    <View style={styles.footerTopSection}>
                        <Text style={styles.statement}>By adding a new card,you agree to the <Text style={styles.statementCard}>credit/debit card terms.</Text></Text>

                        <TouchableOpacity style={styles.buttonCon}>
                            <Text style={styles.button}>Add Card</Text>
                        </TouchableOpacity>
                    </View>
                    

                    <View style={styles.footerBottomSection}>
                        <View>

                        </View>
                        <View style={styles.footerTextCon}>
                            <MaterialIcons name="lock" size={24} color="black" />
                            <Text style={styles.footerText}>
                                Processed by <Text style={styles.coinbaseText}>coinbase</Text>
                            </Text>

                        </View>


                    </View>


                </View>
            </ScrollView>

        </SafeAreaView>
    </>

    )
}

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


    
    /* end of modal */
    scrollviewContainer: {
        flex: 1,
        width: Dimensions.get('window').width,


    },
    navigationHeader: {
        paddingBottom: 10,
        backgroundColor: '#fff',
        zIndex: 10,
        width: '100%',
        borderBottomColor: 'rgb(197, 197, 197)',
        paddingTop: 55,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 21,


    },
    headerName: {
        fontFamily: 'ABeeZee',
        fontSize: 20,
        marginLeft: '20%',
        fontFamily: 'Poppins'

    },
    goback: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    title: {
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 21,
    },
    titleText: {
        fontSize: 21,
        fontFamily: 'Poppins',


    },
    formCon: {
        marginBottom: 38,
        paddingHorizontal: 21,

    },
    label: {
        marginBottom: 10,
        fontWeight: '100',
        color: 'rgb(100,100,100)'

    },
    input: {
        width: '100%',
        borderColor: 'grey',
        borderWidth: .5,
        height: 60,
        borderRadius: 3,
        paddingLeft: 30,
        fontSize: 18,
        color: 'black'

    },
    NumberinputContainer: {
        width: '100%',
        borderColor: 'grey',
        borderWidth: .5,
        height: 70,
        borderRadius: 3,
        paddingLeft: 30,
        fontSize: 18,
        color: 'black',
        display: 'flex',
        flexDirection: 'row'


    },
    numberinput: {
        alignSelf: 'stretch',
        width: '70%',
        fontSize: 15,

    },
    innerInputContainer: {
        width: '45%'
    },
    footer: {
        height: 220
    },
    footerTopSection: {
        paddingHorizontal: 21,

    },
    statement: {
        fontSize: 15,
        fontFamily: 'ABeeZee',
        marginBottom: 30

    },
    statementCard: {
        fontSize: 15,
        fontFamily: 'ABeeZee',
        color: '#1652f0'

    },
    buttonCon: {
        width: '100%',
        paddingVertical: 12,
        borderRadius: 30,
        backgroundColor: '#1652f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    button: {
        fontSize: 16,
        fontFamily: 'Poppins',
        color: '#fff'
    },
    footerBottomSection: {
        height: 85,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: 'grey',
        borderTopWidth: .5,
        backgroundColor: 'rgb(245,245,245)'
    },
    footerTextCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    footerText: {
        marginLeft: 5
    },
    coinbaseText: {
        color: '#1652f0'
    }




})

export default Card