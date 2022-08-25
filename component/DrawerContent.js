import React from 'react';
import {
    DrawerContentScrollView,

} from '@react-navigation/drawer';

import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, Entypo, MaterialIcons, FontAwesome5, Ionicons, Feather, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

function CustomDrawerContent({navigation}) {
    return (
        <DrawerContentScrollView >
            <View style={styles.drawerContainer}>

                <TouchableOpacity style={styles.profileContainer}>
                    <Ionicons name="person" size={70} color="white" style={{ paddingTop: 12 }} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.username}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Precious Arierhi</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('ProfileSetting')}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Profile & Settings</Text>
                </TouchableOpacity>




                <TouchableOpacity style={{ alignSelf: 'center', width: '100%', borderRadius: 50, paddingVertical: 12, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }} onPress={()=>navigation.navigate('LearnEarn')}>

                    <MaterialIcons name="add-task" size={20} style={{ paddingTop: 12 }} />

                    <Text style={styles.text}>Learn and Earn
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.content}>

                    <Feather name="percent" size={20} style={{ paddingTop: 12 }} />

                    <Text style={styles.text}>Earn yield</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.content} onPress={()=>navigation.navigate('InviteFriend')}>

                    <MaterialIcons name="person-add-alt" size={20} style={{ paddingTop: 12 }} />

                    <Text style={styles.text}>invite friends</Text>
                </TouchableOpacity>



                <TouchableOpacity style={styles.content}>
                    <Octicons name="gift" size={20} style={{ paddingTop: 12 }} />

                    <Text style={styles.text}>send a gift</Text>
                </TouchableOpacity>



                <TouchableOpacity style={styles.content}>

                    <MaterialCommunityIcons name="wallet-plus-outline" size={20} style={{ paddingTop: 12 }} />

                    <Text style={styles.text}>Get Coinbase Wallet</Text>
                </TouchableOpacity>





                <View style={styles.footer}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 16, color: 'black', paddingLeft: 12, paddingTop: 10 }}>Coinbase .</Text>

                    </TouchableOpacity>


                    <TouchableOpacity>
                        <Text style={{ fontSize: 16, color: 'black', paddingLeft: 12, paddingTop: 10, textDecorationLine: 'underline' }}>Legal & Privacy</Text>

                    </TouchableOpacity>


                </View>








            </View>

        </DrawerContentScrollView>
    );
}


const styles = StyleSheet.create({
    drawerContainer: {
        display: 'flex',
        paddingTop: 10,
        marginHorizontal: 20
    },
    profileContainer: {
        width: 80,
        height: 80,
        borderRadius: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgb(192, 192, 192)',
        alignSelf: 'center',
        marginBottom: 30
    },
    username: {
        alignSelf: 'center',
        marginBottom: 15
    },
    button: {
        alignSelf: 'center',
        marginBottom: 10,
        width: '100%',
        borderRadius: 50,
        paddingVertical: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(240,240,240)'
    },
    content: {
        alignSelf: 'center',
        width: '100%',
        borderRadius: 50,
        paddingVertical: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Poppins',
        color: 'black',
        paddingLeft: 12,
        paddingTop: 10
    },
    footer: {
        alignSelf: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }



})






export default CustomDrawerContent;