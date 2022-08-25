import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal, Dimensions, Alert } from 'react-native'

import CheckBox from 'expo-checkbox'
import { AntDesign } from '@expo/vector-icons';
import * as Progress from 'react-native-progress'
import { useDispatch, useSelector } from "react-redux";
import { validateEmail, validateText } from "../utils/util";


import { signup } from "../store/action/appStorage";


const Signup = ({ navigation }) => {
    const dispatch = useDispatch()
    const [isSelected, setSelection] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('')
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('')
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState(' ');
    const [passwordError, setPasswordError] = useState(' ')
    const [modalVisible, setModalVisible] = useState(false);

    const formValid = firstName && lastName && email && password

    const changeFirstName = (e) => {
        setFirstName(e)
        let error = validateText(e)
        if (error) {
            return setFirstNameError(error)
        }
        return setFirstNameError('')

    }

    const changeEmail = (e) => {
        setEmail(e)
        let error = validateEmail(e)
        if (error) {
            return setEmailError(error)
        }
        return setEmailError('')


    }
    const changeLastName = (e) => {
        setLastName(e)
        let error = validateText(e)
        if (error) {
            return setLastNameError(error)
        }
        return setLastNameError('')
    }

    const changePassword = (e) => {
        setPassword(e)
        let error = validateText(e)
        if (error) {
            return setPasswordError(error)
        }

        return setPasswordError('')

    }
    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            setModalVisible(true)
        });

    }, [navigation]);


    let navigateHandler = () => {
        navigation.removeListener('beforeRemove')
        setModalVisible(false)
        setTimeout(() => { navigation.goBack() }, 1000)


    }

    let submitHandler = async () => {
        //check if error exist and none of the forms are empty
        if (!firstName || !lastName || !password || !email) {
            alert('please no form should be empty')
            return;

        } else if (firstNameError || lastNameError || passwordError || emailError) {
            alert('please fix error')
            return;
        } else {
            alert('submitting')
            dispatch(signup({
                firstName,
                lastName,
                password,
                email
            }))
            navigation.navigate('Verification')

        }



    }

    return (<>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalTop}>
                </View>

                <View style={styles.modalView}>
                    <Text style={styles.modalQuest}>Are you sure you don't want to create a new account?</Text>

                    <Text style={styles.modalState}>you can always try again?</Text>

                    <View style={styles.modalButtonContainer}>
                        <TouchableOpacity style={styles.acceptBtn} onPress={() => navigateHandler()} >
                            <Text>yes, i'm sure</Text>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelBtn}>
                            <Text>cancel</Text>

                        </TouchableOpacity>
                    </View>

                </View>


            </View>

        </Modal>

        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.container}>
                <View style={styles.navigationHeader}>
                    <TouchableOpacity style={styles.close} onPress={() => navigation.goBack()}>
                        <AntDesign name="close" size={22} fontWeight='Poppins' color="rgb(44, 44, 44)" />
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
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 30, zIndex: 5, paddingBottom: 100 }}>
                    <Text style={styles.headerText}>Create your account</Text>

                    <View>
                        <Text style={styles.emailText}>First Name</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={changeFirstName}
                            value={firstName}
                            placeholder='First Name'
                        />
                        <Text style={styles.errorText}>{firstNameError ? firstNameError : ""}</Text>
                        <Text style={styles.passwordText}>Last Name</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={changeLastName}
                            value={lastName}
                            placeholder="Last Name"
                        />
                        <Text style={styles.errorText}>{lastNameError ? lastNameError : ""}</Text>

                        <Text style={styles.passwordText}>Email</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={changeEmail}
                            value={email}
                            placeholder="Email Address"
                        />
                        <Text style={styles.errorText}>{emailError ? emailError : ""}</Text>

                        <Text style={styles.passwordText}>Password</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={changePassword}
                            value={password}
                            placeholder="Password"
                        />



                    </View>

                    <View style={styles.forgetPasswordCon}>
                        <TouchableOpacity style={styles.checkboxCon}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={() => setSelection(val => !val)}
                                style={styles.checkbox}
                            />


                        </TouchableOpacity>
                        <Text style={styles.privacyText}>
                            I certify that i am 18 years of age or older,and i agree to the <Text style={styles.agreement}>User agreement</Text> and <Text style={styles.policy}>Privacy Policy</Text>
                        </Text>


                    </View>
                    <TouchableOpacity style={{ ...styles.submitBtn, opacity: firstName && lastName && email && password ? 1 : 0.5 }} onPress={submitHandler}>
                        <Text style={{ ...styles.submitBtnText }}>Create account</Text>
                    </TouchableOpacity>


                    <Text style={styles.protection}>
                        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply

                    </Text>

                </ScrollView>
            </View>

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
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        position: 'absolute',
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        top: '65%',
        height: '35%',
        display: 'flex',
        flexDirection: 'column',
        borderTopColor: 'rgb(240,240,240)',
        borderTopWidth: 1




    },
    modalQuest: {
        paddingTop: 20,
        fontSize: 18,
        alignSelf: 'center',
        paddingHorizontal: 15,
        fontFamily: 'Poppins',

    },
    modalState: {
        paddingTop: 10,
        fontSize: 15,
        fontFamily: 'ABeeZee',
        fontWeight: '400',
        marginBottom: 15,
        alignSelf: 'flex-start',
        paddingHorizontal: 15,

    },
    modalButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 2,

    },

    acceptBtn: {
        width: '50%',
        borderRadius: 50,
        paddingTop: 25,
        paddingBottom: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontFamily: 'ABeeZee',
        borderWidth: 1,
        borderColor: 'rgb(240,240,240)',
    },
    cancelBtn: {
        width: '35%',
        paddingTop: 25,
        paddingBottom: 25,
        borderRadius: 50,
        backgroundColor: 'rgb(240,240,240)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 16,
        fontFamily: 'ABeeZee'

    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontFamily: 'Poppins',
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    /*end of modal*/

    container: {
        width: '90%',
        marginHorizontal: '5%',
        paddingTop: 60,
        marginBottom: 20

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
    headerText: {
        fontSize: 18,
        fontFamily: 'Poppins',
        marginBottom: 10
    },
    emailText: {
        fontSize: 15,
        fontFamily: 'Poppins',
        marginBottom: 5
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgb(240,240,240)',
        borderRadius: 2,
        height: 50,
        paddingHorizontal: 10,
        fontFamily: 'ABeeZee',
        marginBottom: 5,


    },
    errorText: {
        color: 'red',
        marginVertical: 5

    },
    passwordText: {
        fontSize: 15,
        fontFamily: 'Poppins',
        marginBottom: 10

    },
    submitBtn: {
        width: '100%',
        height: 60,
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1652f0',
        fontFamily: 'ABeeZee',
        color: '#fff',
        fontFamily: 'Poppins',
        marginBottom: 30


    },
    submitBtnText: {
        color: '#fff'
    },


    forgetPasswordCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    checkboxCon: {
        width: '5%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        marginRight: 10,
        paddingTop: 5

    },
    privacyText: {
        fontFamily: 'ABeeZee',
        width: '95%',
        fontWeight: '600',
        fontSize: 17,
        marginBottom: 20,
        alignSelf: 'flex-start',
    },
    agreement: {
        fontFamily: 'ABeeZee',
        fontWeight: '300',
        fontSize: 14,
        height: 20,

    },
    policy: {
        fontFamily: 'ABeeZee',
        fontWeight: '300',
        fontSize: 14,
        height: 20,
    },
    protection: {
        fontFamily: 'ABeeZee',
        fontWeight: '600',
        marginBottom: 20
    }


});




export default Signup