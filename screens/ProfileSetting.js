import React,{useState} from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image,Switch } from 'react-native'
import { Feather,AntDesign } from '@expo/vector-icons';

const ProfileSetting = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [header, setHeader] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const scrollHandler = (e)=>{
        if(e.nativeEvent.contentOffset.y > 5){
            setHeader(true)
        }else {
            setHeader(false)

        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{...styles.navigationHeader,position:header?"absolute":'static',top:header?0:0,borderBottomWidth:header?1:0,borderBottomColor:'rgb(197, 197, 197)'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Feather name="arrow-left" size={20} color="rgb(44, 44, 44)" />
                    </TouchableOpacity>

                    <Text style={{...styles.headerName,display:header?'flex':'none'}}>Precious Arierhi</Text>
                </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollviewContainer}
            onScroll={scrollHandler}>
                
                <Text style={{...styles.email,marginTop:header?100:0}}>harunaalhajiali1999@gmail.com</Text>

                <Text style={styles.username}>Precious Arierhi</Text>


                <TouchableOpacity style=
                    {styles.card}>
                    <Text style={styles.cardText}>
                        share your love of crypto and get $100.000 of free bitcoin

                    </Text>
                    <Image
                        source={require('../assets/icons/box.jpeg')}
                        style={{ width: 70, height: 70 }} />
                </TouchableOpacity>

                <Text style={styles.paymentText}>Payments methods</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Add a payment method</Text>
                </TouchableOpacity>

                <Text style={styles.paymentText}>Account</Text>

                <TouchableOpacity style={styles.settingContainer}>
                    <View>
                        <Text style={styles.settingText}>Limits and features</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </TouchableOpacity>

                <TouchableOpacity style={styles.settingContainer}>
                    <View>
                        <Text style={styles.settingText}>Native Currency</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </TouchableOpacity>


                <TouchableOpacity style={styles.settingContainer}>
                    <View>
                        <Text style={styles.settingText}>Country</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </TouchableOpacity>



                <TouchableOpacity style={styles.settingContainer}>
                    <View>
                        <Text style={styles.settingText}>Privacy</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </TouchableOpacity>

                <TouchableOpacity style={styles.settingContainer}>
                    <View>
                        <Text style={styles.settingText}>Phone Numbers</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </TouchableOpacity>
                <TouchableOpacity style={styles.settingContainer}>
                    <View>
                        <Text style={styles.settingText}>Notification settings</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </TouchableOpacity>

                <TouchableOpacity style={styles.settingContainer}>
                    <View>
                        <Text style={styles.settingText}>Close account</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </TouchableOpacity>


                <Text style={styles.paymentText}>Display</Text>

                <TouchableOpacity style={styles.settingContainer}>
                    <View>
                        <Text style={styles.settingText}>Appearance</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </TouchableOpacity>


                <TouchableOpacity style={styles.switchContainer}>
                    <View>
                        <Text style={{...styles.settingText,}}>Hide balance</Text>
                    </View>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? 'grey' : 'rgb(240,240,240)'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style= { { transform: [ { scaleX:1.6 }, { scaleY:1.6 }],marginRight:10}}
                    />


                </TouchableOpacity>

                <Text style={styles.paymentText}>Security</Text>

                
                <TouchableOpacity style={styles.switchContainer}>
                    <View>
                        <Text style={{...styles.settingText,}}>Require pin</Text>
                    </View>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? 'grey' : 'rgb(240,240,240)'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style= { { transform: [ { scaleX:1.6 }, { scaleY:1.6 }],marginRight:10}}
                    />


                </TouchableOpacity>
                <TouchableOpacity style={styles.settingContainer}>
                    <View>
                        <Text style={styles.settingText}>PIN settings</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </TouchableOpacity>

                <TouchableOpacity style={styles.settingContainer}>
                    <View>
                        <Text style={styles.settingText}>lock my account</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </TouchableOpacity>

                <TouchableOpacity style={styles.settingContainer}>
                    <View>
                        <Text style={styles.settingText}>Change security settings</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </TouchableOpacity>

                <TouchableOpacity style={styles.settingContainer}>
                    <View>
                        <Text style={styles.settingText}>Support</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </TouchableOpacity>

                <TouchableOpacity style={styles.signoutbutton}>
                    <Text style={styles.signoutbuttonText}>Sign out</Text>
                </TouchableOpacity>
                <Text style={styles.footerText}>App Version:10.26.4(10260004),</Text>
                <Text style={styles.footerText}>production</Text>




            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    navigationHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor:'#fff',
        zIndex:10,
        width: '90%',
        marginHorizontal: '5%',

    },
    headerName:{
        marginLeft:'25%',
        fontFamily: 'Poppins',
        fontSize:16

    },
    scrollviewContainer:{
        flex: 1,
        width: '90%',
        marginHorizontal: '5%',
        marginBottom:20
    },
    email: {
        color: 'rgb(105, 105, 105)',
        fontFamily: 'Poppins',
        fontSize: 15,
    },
    username: {
        color: "black",
        fontSize: 25,
        fontFamily: 'Poppins',
        marginBottom: 30
    },
    card: {
        width: '100%',
        borderRadius: 8,
        padding: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth:1,
        borderBottomWidth:2,
        borderColor:'rgb(223, 223, 223)',
        marginBottom:40
    },
    cardText: {
        fontSize: 20,
        width: '60%',
        fontFamily: 'ABeeZee',
        fontWeight:'100',
        color:'rgb(27, 27, 27)'
    },
    paymentText:{
        color: "black",
        fontSize: 20,
        fontFamily: 'Poppins',
        marginBottom: 30

    },

    button:{
        width:'100%',
        paddingVertical:18,
        backgroundColor:'rgb(240,240,240)',
        borderRadius:35,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:30
    },
    buttonText:{
        color:'black',
        fontSize:15,
        fontFamily:'Poppins'

    },
    settingContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:50

    },
    switchContainer:{
        display:'flex',
        flexDirection:'row',
        marginBottom:50,
        alignItems:'center',
        justifyContent:'space-between'

    },
    settingText:{
        fontSize:17,
        fontFamily:'ABeeZee'
    },

    signoutbutton:{
        width:'100%',
        paddingVertical:18,
        borderColor:'rgb(240,240,240)',
        borderRadius:35,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:30,
        borderWidth:1
    },
    signoutbuttonText:{
        color:'red',
        fontSize:15,
        fontFamily:'Poppins'

    },
    footerText:{
        fontSize:15,
        fontFamily:'ABeeZee',
        width:'100%',
        color:'grey'

    }

})


export default ProfileSetting