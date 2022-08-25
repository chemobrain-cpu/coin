import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal, Dimensions, Alert } from 'react-native'




const ErrorModal = ({ modalVisible,updateVisibility }) => {
    return <Modal

            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modalView}>

                <View style={styles.exclamationContainer}>
                    <View style={styles.exclamation}>
                        <Text style={styles.exclamationText}>!</Text>
                    </View>
                    <Text style={styles.modalQuest}>Check your internet connection</Text>

                </View>

                <Text style={styles.modalState}>you can ause the app while your connection is down but prices may be outdated and some features will be disabled?</Text>


                <TouchableOpacity onPress={() => updateVisibility(false)} style={styles.cancelBtn}>
                    <Text>cancel</Text>

                </TouchableOpacity>


            </View>


        </Modal>
    
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        position: 'absolute',
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        top: '55%',
        height: '48%',
        display: 'flex',
        flexDirection: 'column',
        borderTopColor: 'rgb(240,240,240)',
        borderTopWidth: 1,
        paddingHorizontal: 25,
        paddingRight: 20




    },
    exclamationContainer:{
         display: 'flex',
         flexDirection:'row',
        alignItems: 'center',
        justifyContent:'flex-start',
        alignSelf: 'flex-start',

    },
    exclamation: {
        width: 25,
        height: 25,
        borderRadius: 25,
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:5
    },
    exclamationText:{
        color:'#fff',
        fontWeight:'bold'

    },
    modalQuest: {
        paddingTop: 20,
        fontSize: 20,
        fontFamily: 'Poppins',
        alignSelf: 'flex-start',

    },
    modalState: {
        paddingTop: 5,
        fontSize: 18,
        fontFamily: 'ABeeZee',
        fontWeight: '400',
        alignSelf: 'flex-start',
        lineHeight: 22,
        marginBottom: 22

    },


    cancelBtn: {
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 50,
        backgroundColor: 'rgb(240,240,240)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 16,
        fontFamily: 'ABeeZee',
        marginBottom: 11

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



});




export default ErrorModal