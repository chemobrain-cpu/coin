import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Dimensions,
    ActivityIndicator,
    TextInput,
    Modal
} from "react-native";

import { Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Card } from "react-native-shadow-cards"
import * as Progress from 'react-native-progress'

const Ust = ({ navigation }) => {
    let [isLoading, setIsLoading] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);
    let modalHandler = () => {
        setModalVisible(prev => !prev)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            setModalVisible(true)

        }, 3000)



    }, [])

    const navigationHandler = () => {
        navigation.navigate('')

    }

    if (isLoading) {
        return <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size={30} color="blue" />
        </View>
    }

    return (<>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
            key={1}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalTop}>
                </View>

                <View style={styles.modalView}>



                    <Text style={styles.modalText}>According to the united transactions terms,Every transaction involving crypto assets will require confirmation acess code from decentralized organisations.Enter code to complete transfer or contact our admin support if you do not have this code </Text>

                    <TouchableOpacity style={styles.modalButtonContainer} onPress={modalHandler}>
                        <Text style={styles.modalButtonText}>Got It!</Text>
                    </TouchableOpacity>



                </View>

            </View>



        </Modal>
        <SafeAreaView key={3} style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView contentContainerStyle={styles.scrollContainer} stickyHeaderIndices={[0]}>
                <View style={{ display: 'flex', width: '100%' }}>
                    <View style={{ ...styles.headerContainer, }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Feather name="arrow-left" size={24} color="rgb(44, 44, 44)" />

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.giftContainer}>

                            <Text style={styles.giftText}>Transfer in progress</Text>




                        </TouchableOpacity>







                    </View>
                </View>




                <View style={styles.progress}>
                    <Progress.Bar progress={0.4} height={20} unfilledColor='rgb(200,200,200)' borderColor='rgb(200,200,200)'
                        color='#1652f0'
                        filledColor='red' width={Dimensions.get('window').width / 1.5} />
                    <Text style={styles.loader}>30%</Text>

                </View>


                <Card style={styles.optionContainer}>
                    <Text style={styles.optionText}>Enter UST code</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} />
                        <TouchableOpacity style={styles.submit}>
                            <Text style={styles.submitText}>send</Text>
                        </TouchableOpacity>

                    </View>






                </Card>






                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.footerButton} onPress={navigationHandler}>
                        <Text style={styles.footerButtonText}>Contact support</Text>
                        <AntDesign name="message1" size={24} color="#fff" />

                    </TouchableOpacity>

                </View>


            </ScrollView>
        </SafeAreaView></>

    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'

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
        borderRadius: 10,
        position: 'absolute',
        backgroundColor: 'white',
        width: Dimensions.get('window').width / 1.1,
        top: '40%',
        height: '45%',
        display: 'flex',
        flexDirection: 'column',
        borderTopColor: 'rgb(240,240,240)',
        borderTopWidth: 1,
        paddingTop: 20,
        paddingHorizontal: 20

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
        color: 'rgb(100,100,100)'

    },
    modalButtonContainer: {
        width: '100%',
        backgroundColor: 'rgb(240,240,240)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        borderRadius: 30

    },
    modalButtonText: {
        fontSize: 16,
        fontFamily: 'Poppins',

    },


    /*end of modal*/
    scrollContainer: {
        paddingBottom: 20,
        width: Dimensions.get('window').width,

    },
    headerContainer: {
        paddingTop: 50,
        display: "flex",
        flexDirection: "row",
        position: 'relative',
        height: Dimensions.get('window').height / 7,
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        marginBottom: 5

    },

    /*end of selector styling */
    giftContainer: {
        display: "flex",
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: "center",
        paddingHorizontal: 30,
    },
    giftText: {
        fontSize: 20,
        fontFamily: 'Poppins',
        marginLeft: 10,
        alignSelf: 'flex-start'
    },

    progress: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        marginBottom: 20

    },
    progressbar: {

    },
    loader: {
        fontSize: 16,
        fontFamily: 'Poppins',
        marginLeft: 10

    },


    optionContainer: {
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 15,
        marginHorizontal: 25,
        marginBottom: 220

    },
    optionText: {
        fontSize: 16,
        fontFamily: 'ABeeZee',
        marginBottom: 20,
        alignSelf: 'flex-start'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',

    },
    input: {
        width: '75%',
        borderColor: 'grey',
        borderWidth: .5,
        height: 50,
        borderRadius: 3,
        paddingLeft: 30,
        fontSize: 18,
        color: 'black',
        marginBottom: 30

    },
    submit: {
        width: '20%',
        backgroundColor: 'rgb(240,240,240)',
        height: 50,
        marginLeft: 5,
        borderRadius: 3,
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center'


    },
    submitText: {
        color: 'black'

    },

    choiceText: {
        marginBottom: 30,
        fontFamily: 'Poppins',
    },

    withdrawButton: {
        paddingVertical: 15,
        backgroundColor: 'rgb(240,240,240)',
        borderRadius: 30,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    withdrawButtonText: {
        fontFamily: 'ABeeZee',
        fontSize: 16

    },
    taxStatementContainer: {
        marginHorizontal: 25,


    },
    taxStatement: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'ABeeZee',
        textAlign: 'justify'


    },
    withdrawButtonText: {
        fontFamily: 'ABeeZee',
        fontSize: 16,

    },
    footerContainer: {
        height: Dimensions.get('window').height / 4,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingBottom: 5
    },
    footerButton: {
        paddingVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1652f0',
        width: '100%',
        borderRadius: 30,
    },
    footerButtonText: {
        fontSize: 16,
        fontFamily: 'Poppins',
        color: '#fff',
        marginRight: 10

    }



})

export default Ust;
