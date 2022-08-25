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
} from "react-native";

import {Feather} from '@expo/vector-icons';
import { Card } from "react-native-shadow-cards"

const TransferFunds = ({ navigation }) => {
    let [isLoading, setIsLoading] = useState(true)


    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },3000)

    },[])

    const navigationHandler = ()=>{
        navigation.navigate('')

    }
  
    if (isLoading) {
        return <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size={30} color="blue" />
        </View>
    }

    return (<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView contentContainerStyle={styles.scrollContainer} stickyHeaderIndices={[0]}>
            <View style={{ display: 'flex', width: '100%' }}>
                <View style={{ ...styles.headerContainer,  }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={24} color="rgb(44, 44, 44)" />

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.giftContainer}>

                        <Text style={styles.giftText}>Fund Transfer</Text>




                    </TouchableOpacity>







                </View>
            </View>




            <Card style={styles.optionContainer}>
                <Text style={styles.optionText}>Enter recipient wallet address</Text>

                <TextInput style={styles.input} />

                <Text style={styles.choiceText}>OR</Text>

                <TouchableOpacity style={styles.withdrawButton}>
                    <Text style={styles.withdrawButtonText}>withdraw funds to account</Text>
                </TouchableOpacity>


            </Card>



            <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.footerButton} onPress={navigationHandler}>
                    <Text style={styles.footerButtonText}>Continue with transfer</Text>

                </TouchableOpacity>

            </View>


        </ScrollView>
    </SafeAreaView>);
};

const styles = StyleSheet.create({
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
        height: Dimensions.get('window').height/7,
        backgroundColor:'#fff',
        paddingHorizontal: 25,
        marginBottom:5

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

    optionContainer: {
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 15,
        height: Dimensions.get('window').height/2.9,
        marginHorizontal: 25,
        marginBottom:5

    },
    optionText: {
        fontSize: 16,
        fontFamily: 'ABeeZee',
        marginBottom:20
    },
    input: {
        width: '80%',
        borderColor: 'grey',
        borderWidth: .5,
        height: 50,
        borderRadius: 3,
        paddingLeft: 30,
        fontSize: 18,
        color: 'black',
        marginBottom:20

    },
    choiceText:{
        marginBottom:20,
        fontFamily: 'Poppins',
    },
    
    withdrawButton:{
        paddingVertical:15,
        backgroundColor:'rgb(240,240,240)',
        borderRadius:30,
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'

    },
    withdrawButtonText:{
        fontFamily:'ABeeZee',
        fontSize:16

    },
    footerContainer:{
         height: Dimensions.get('window').height/2.2,
         display:'flex',
         justifyContent:'flex-end',
         alignItems:'center',
         paddingHorizontal:15,
         paddingBottom:15
    },
    footerButton:{
        paddingVertical:15,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#1652f0',
        width:'100%',
        borderRadius:30
    },
    footerButtonText:{
        fontSize:16,
        fontFamily:'Poppins',
        color:'#fff'

    }



})

export default TransferFunds;