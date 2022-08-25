import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal, Dimensions, Alert, Image } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import * as Progress from 'react-native-progress'
import { useDispatch, useSelector } from "react-redux";
import { validateEmail, validateText, validatePhoneNumber } from "../utils/util";

import { signup } from "../store/action/appStorage";


const VerifySuccess = ({ navigation }) => {




    return (<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.container}>


            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.body}>
                <View style={styles.imageContainer}>
                    <View style={styles.fontContainer}>
                        <AntDesign name="check" size={30} color="white" style={{ fontWeight: 'bold' }} />

                    </View>

                </View>

                <Text style={styles.headerText}>You're verified!</Text>

                <Text style={styles.contentText}>Thanks for your help verifying your identity .Now you're all set to start trading crypto.</Text>



                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>
                            Done
                        </Text>

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

    body: {
        paddingTop: 30,
        display: 'flex',
        flexDirection: 'column'
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height / 4,
        marginVertical: 20,
        marginBottom: 40,
    },
    fontContainer: {
        width: 150,
        height: 150,
        borderRadius: 150,
        backgroundColor: '#1652f0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },

    headerText: {
        fontSize: 20,
        fontFamily: 'Poppins',
        color: 'rgb(44, 44, 44)',
        alignSelf: 'center',
        marginBottom: 15
    },
    contentText: {
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: 'ABeeZee',
        marginBottom: Dimensions.get('window').height / 4,
        lineHeight: 22

    },






    button: {
        width: '100%',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: '#1652f0',
        marginBottom: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Poppins',
    }

});

export default VerifySuccess