import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Modal, Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons';

const Login = ({ navigation }) => {
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState(null)
    const [isSelected, setSelection] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

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


    return (<>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
               // Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalTop}>
                </View>
                <View style={styles.modalView}>
                    <Text style={styles.modalQuest}>You're not signed in yet?</Text>

                    <Text style={styles.modalState}>Are you sure you want to quit?</Text>

                    <View style={styles.modalButtonContainer}>
                        <TouchableOpacity style={styles.acceptBtn} onPress={() => navigateHandler()} >
                            <Text>yes, i'm sure</Text>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelBtn}>
                            <Text style={{ color: 'white' }}>cancel</Text>

                        </TouchableOpacity>
                    </View>

                </View>

            </View>


        </Modal>
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", opacity: modalVisible ? 0.3 : 1 }}>
            <View style={styles.container}>
                <View style={styles.navigationHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={30} color="rgb(44, 44, 44)" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.headerText}>Sign in to coinbase </Text>

                <View>
                    <Text style={styles.emailText}>Email</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder='you@example.com'
                    />
                    <Text style={styles.passwordText}>Password</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="useless placeholder"
                        keyboardType="visible-password"
                    />

                    <TouchableOpacity style={styles.submitBtn}>
                        <Text style={styles.submitBtnTxt}>Sign In</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.forgetPasswordCon}>
                    <TouchableOpacity style={styles.forgetPasswordText}>
                        <Text style={{ color: '#1652f0' }}>Forget password?</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.privacyText}>

                        <Text style={{ color: '#1652f0' }}>Privacy Policy</Text>

                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView></>

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
        fontSize: 22,
        fontFamily: 'Poppins',
        paddingLeft: 15,
        alignSelf: 'flex-start'

    },
    modalState: {
        paddingTop: 10,
        fontSize: 18,
        fontFamily: 'ABeeZee',
        fontWeight: '500',
        marginBottom: 15,
        paddingLeft: 15,
        alignSelf: 'flex-start',
        color: 'grey',

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
        backgroundColor: 'rgb(240,240,240)',
    },
    cancelBtn: {
        width: '35%',
        paddingTop: 25,
        paddingBottom: 25,
        borderRadius: 50,
        backgroundColor: '#1652f0',
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
    container: {
        width: '90%',
        marginHorizontal: '5%'

    },
    navigationHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingBottom: 30

    },
    headerText: {
        fontSize: 25,
        fontWeight: '600',
        fontFamily: 'ABeeZee',
        marginBottom: 30
    },
    emailText: {
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'ABeeZee',
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgb(240,240,240)',
        borderRadius: 2,
        height: 50,
        paddingHorizontal: 10,
        fontFamily: 'ABeeZee',
        marginBottom: 30,


    },
    passwordText: {
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'ABeeZee',
        marginBottom: 20

    },
    submitBtn: {
        width: '100%',
        height: 70,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1652f0',
        fontFamily: 'ABeeZee',
        color: '#fff',
        fontWeight: 550,
        marginBottom: 30
    },
    submitBtnTxt: {
        color: '#fff'
    },
    forgetPasswordCon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    forgetPasswordText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start'

    },
    privacyText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'

    },



})




export default Login