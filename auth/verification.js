import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Linking, ScrollView, Modal, Dimensions, Alert, Image } from 'react-native'

import { AntDesign,MaterialIcons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress'
import { useDispatch, useSelector } from "react-redux";
import { validateEmail, validateText, validatePhoneNumber } from "../utils/util";

import { signup } from "../store/action/appStorage";


const Verification = ({ navigation }) => {
    return (<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.container}>
            <View style={styles.navigationHeader}>
                <TouchableOpacity style={styles.close} onPress={() => navigation.goBack()}>
                    <AntDesign name="close" size={22} fontWeight={100} color="rgb(44, 44, 44)" style={{ fontWeight: '200' }} />
                </TouchableOpacity>
                <View style={styles.progress}>
                    <View style={styles.progressbar}>
                        <Progress.Bar progress={0.3} width={50} height={4} unfilledColor='rgb(240,240,240)' borderColor='#fff' />

                    </View>
                    <View style={styles.progressbar}>
                        <Progress.Bar progress={0} width={50} height={4} unfilledColor='rgb(240,240,240)' borderColor='#fff' />

                    </View>
                    <View style={styles.progressbar}>
                        <Progress.Bar progress={0} width={50} height={4} unfilledColor='rgb(240,240,240)' borderColor='#fff' />

                    </View>


                </View>

            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.body}>
                <View style={styles.imageContainer}>
                <Image
                        source={require('../assets/icons/photo1(7).jpg')}
                        style={{ width: 250, height: 250, }} />
                    
                </View>

                <View style={styles.verificationContainer}>
                    <Text style={styles.headerText}>
                        Verify your email
                    </Text>
                    <Text style={styles.verificationText}>
                        We sent a verification email to
                        <Text style={styles.email}> harunaalhajiali1999@gmail.com </Text> Please tap the link inside that email to

                        continue
                    </Text>

                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.checkBtnContainer} onPress={()=> navigation.navigate('Secure')}>
                        <Text style={styles.check}>
                            check my box
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.resendBtnContainer}>
                        <Text style={styles.resend}>Resend email</Text>

                    </TouchableOpacity>


                </View>






            </ScrollView>




        </View>

    </SafeAreaView>
    )




}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginHorizontal: '5%',
        paddingTop: 60

    },
    navigationHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        zIndex: 10,
        borderColor: 'white',



    },
    progress: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        paddingLeft: 40,
        justifyContent: 'space-around'

    },
    progressbar: {
        paddingLeft: 8

    },
    close: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',


    },
    body: {
        paddingTop: 30,
        display: 'flex',
        alignItems: 'center'
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height / 4,
        marginVertical: 20,
        marginBottom: 40,
    },
    verificationContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 70
    },

    headerText: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'Poppins',
        color: 'rgb(44, 44, 44)',
    },
    verificationText: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: '200',
        color: 'grey',
        fontSize: 16,
        fontFamily: 'ABeeZee'
    },
    email: {
        color: 'rgb(44, 44, 44)',
        fontWeight: '600'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: Dimensions.get('window').width

    },
    checkBtnContainer: {
        width: '85%',
        alignSelf: 'center',
        paddingVertical: 18,
        borderRadius: 30,
        backgroundColor: '#1652f0',
        marginBottom: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    resendBtnContainer: {
        width: '85%',
        alignSelf: 'center',
        paddingVertical: 18,
        borderRadius: 30,
        backgroundColor: 'rgb(240,240,240)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    check: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Poppins',
    },
    resend: {
        fontSize: 15,
        fontFamily: 'Poppins',

    }

});




export default Verification