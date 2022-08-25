import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal, Dimensions, Alert, Image } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import * as Progress from 'react-native-progress'
import { useDispatch, useSelector } from "react-redux";
import { validateEmail, validateText, validatePhoneNumber } from "../utils/util";
import { signup } from "../store/action/appStorage";


const Secure = ({navigation}) => {

    return (<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.container}>
            <View style={styles.navigationHeader}>
                <TouchableOpacity style={styles.close} onPress={() => navigation.goBack()}>
                    <AntDesign name="close" size={22} fontWeight={100} color="rgb(44, 44, 44)" style={{ fontWeight: '200' }} />
                </TouchableOpacity>

                <View style={styles.progress}>
                    <View style={styles.progressbar}>
                        <Progress.Bar progress={1} width={50} height={4} unfilledColor='rgb(240,240,240)' borderColor='#fff' />

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
                        source={require('../assets/icons/padlock.jpg')}
                        style={{ width: 300, height: 300, }} />
                </View>

                <Text style={styles.headerText}>Let's secure your account</Text>

                <View style={styles.listContainer}>
                    <View style={styles.actionCon}>
                        <View style={{...styles.numberCon}}>
                            <Text style={{...styles.number}}>1</Text>
                        </View>
                        <View style={styles.actionTextCon}>
                            <Text style={styles.actionText}>Let's secure your account</Text>
                            
                        </View>

                    </View>
                    <View style={styles.durationCon}>
                        <Text style={styles.durationText}>Completed</Text>
                        
                    </View>
                  

                </View>

                <View style={styles.listContainer}>
                    <View style={styles.actionCon}>
                        <View style={{...styles.numberCon}}>
                            <Text style={{...styles.number}}>2</Text>
                        </View>
                        <View style={styles.actionTextCon}>
                            <Text style={styles.actionText}>Secure your account</Text>
                            <Text style={{color:'grey',fontFamily:'ABeeZee'}}>2-step verification</Text>
                        </View>

                    </View>
                    <View style={styles.durationCon}>
                        <Text style={styles.durationText}>1 min</Text>
                        
                    </View>
                  

                </View>


                <View style={styles.listContainer}>
                    <View style={styles.actionCon}>
                        <View style={{...styles.numberCon,backgroundColor:"rgb(240,240,240)"}}>
                            <Text style={{...styles.number,color:'grey',fontFamily:'ABeeZee'}}>3</Text>
                        </View>
                        <View style={styles.actionTextCon}>
                            <Text style={styles.actionText}>Verify your Identity</Text>
                            <Text style={{color:'grey',fontFamily:'ABeeZee'}}>Required by financial regulations</Text>
                        </View>

                    </View>
                    <View style={styles.durationCon}>
                        <Text style={styles.durationText}>5 min</Text>
                        
                    </View>
                   

                </View>




                <View>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Number')}>
                    <Text style={styles.buttonText}>
                        Send
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
        paddingTop: 5,
        display: 'flex',
        flexDirection:'column'
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height / 4,
        marginVertical: 10,
        marginBottom: 40,
    },
    

    headerText: {
        fontSize: 18,
        fontFamily: 'Poppins',
    },
    


    numberCon:{
        width:30,
        height:30,
        borderRadius:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1652f0'
    },
    number:{
        color:'#fff',
        fontFamily: 'Poppins',
    },
    listContainer:{
        display:'flex',
        flexDirection:'row',
        paddingVertical:20,
        alignItems:'center',
        width:Dimensions.get('window').width
    },
    actionCon:{
        display:'flex',
        flexDirection:"row",
        alignItems:'center',
        flex:1
        

    },
    durationCon:{
        display:'flex',
        flexDirection:"row",
        alignItems:'center',
         flex:1,
        justifyContent:'center'

    },
    
    durationText:{
        fontSize:18,
        fontFamily: 'Poppins',
        color:'rgb(44, 44, 44)',
    },
    actionTextCon:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        paddingLeft:15,
        justifyContent:'flex-start'

    },
    actionText:{
        fontSize:18,
        fontFamily: 'Poppins',
        color:'rgb(44, 44, 44)',
    },
    durationText:{
        fontSize:16,
        fontFamily: 'Poppins',
        color:'rgb(44, 44, 44)',
    },






    button:{
        width:'100%',
        paddingVertical:15,
        borderRadius:30,
        backgroundColor:'#1652f0',
        marginBottom:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    },
    buttonText:{
        color:'#fff',
        fontFamily: 'Poppins',
        fontSize:16,
    }

});

export default Secure