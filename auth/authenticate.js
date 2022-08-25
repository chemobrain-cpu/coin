import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, ScrollView, Dimensions } from 'react-native'

import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress'
import { useDispatch, useSelector } from "react-redux";
import { validatePhoneNumber } from "../utils/util";
import { signup } from "../store/action/appStorage";



const Authenticate = ({navigation}) => {
    let [phone, setPhone] = useState('')
    let changePhone = (e) => {
        setPhone(e)

    }

    return (<SafeAreaView style={styles.screen}>
        <View style={styles.container}>
            <View style={styles.navigationHeader}>
                <TouchableOpacity style={styles.close} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={22} fontWeight={100} color="rgb(44, 44, 44)" style={{ fontWeight: '200' }} />
                </TouchableOpacity>

                <View style={styles.progress}>
                    <View style={styles.progressbar}>
                        <Progress.Bar progress={1} width={50} height={4} unfilledColor='rgb(240,240,240)' borderColor='#fff' />

                    </View>
                    <View style={styles.progressbar}>
                        <Progress.Bar progress={0.6} width={50} height={4} unfilledColor='rgb(240,240,240)' borderColor='#fff' />

                    </View>
                    <View style={styles.progressbar}>
                        <Progress.Bar progress={0} width={50} height={4} unfilledColor='rgb(240,240,240)' borderColor='#fff' />

                    </View>


                </View>

            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.body}>
                <Text style={styles.headerText}>
                    Enter authentication code
                </Text >
                <Text style={styles.text}>Enter the 7-digit code we just texted to your phone number, +234 09071991647.</Text>





                <View style={styles.formContainer}>

                    <View style={styles.CodeCon}>
                        <Text style={styles.CodeText}>Code</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={changePhone}
                            value={phone}
                            placeholder='7-digit code from SMS'
                            keyboardType='phone-pad'
                        />

                    </View>

                </View>


                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonContinue} onPress={()=>navigation.navigate('VerifySuccess')}>
                        <Text style={styles.buttonContinueText}>
                            Continue
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonResend}>
                        <Text style={styles.buttonResendText}>
                            Resend
                        </Text>

                    </TouchableOpacity>
                </View>


            </ScrollView>

        </View>
    </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    screen:{ 
        flex: 1, 
        backgroundColor: "white" 
    },
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
        flexDirection: 'column'
    },
    headerText: {
        marginBottom: 15,
        fontSize: 20,
        color: 'rgb(44, 44, 44)',
        fontFamily: 'Poppins',

    },
    text: {
        marginBottom: 25,
        fontSize: 16,
        color: 'grey',
        fontFamily: 'ABeeZee'

    },
    input: {
        borderWidth: 1,
        height: 55,
        borderRadius: 5,
        paddingLeft: 10,
        borderColor: '#1652f0'
    },
    selectorContainer: {
        borderWidth: 1,
        borderColor: 'grey',
        height: 55,
        borderRadius: 2,

    },
    select: {
        borderColor: 'grey',
        borderWidth: 1


    },

    formContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        marginBottom: Dimensions.get('window').height / 3

    },
    CodeCon: {
        width: '90%'

    },


    CodeText: {
        fontFamily: 'Poppins',
        color: '#1652f0',
        
        fontSize: 16

    },
    buttonContainer:{
        paddingBottom:20

    },


    buttonContinue: {
        width: '100%',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: '#1652f0',
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonResend: {
        width: '100%',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: 'rgb(240,240,240)',
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonContinueText: {
        color: '#fff',
        fontFamily: 'Poppins',
        fontSize: 16,
    },
    buttonResendText: {
        color: '#fff',
        fontFamily: 'Poppins',
        fontSize: 16,
        color: 'rgb(44, 44, 44)'
    },

});



export default Authenticate